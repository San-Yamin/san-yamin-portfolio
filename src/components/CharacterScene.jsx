import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

function BaseModel({ modelPath = "/models/base.glb" }) {
  const group = useRef();
  try {
    const { scene } = useGLTF(modelPath);
    useFrame(() => {
      if (!group.current) return;
      group.current.rotation.y += 0.0015;
    });
    return <primitive ref={group} object={scene} scale={2.4} position={[0, -2.4, -1.6]} />;
  } catch (e) {
    return null;
  }
}

function CharacterModel({ modelPath, onLoaded }) {
  const group = useRef();
  const headRef = useRef(null);
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, group);
  const [wavePlayed, setWavePlayed] = useState(false);

  useEffect(() => {
    if (onLoaded) onLoaded({ scene, actions, animations });
  }, [onLoaded, scene, actions, animations]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isBone && child.name === "Head") {
        headRef.current = child;
      }
    });
  }, [scene]);

  useEffect(() => {
    if (!actions) return;
    const actionNames = Object.keys(actions);
    if (actionNames.length === 0) return;
    const idleName = actionNames.find((name) => /idle/i.test(name)) || actionNames[0];
    const idle = actions[idleName];
    if (idle) {
      idle.reset().fadeIn(0.6).play();
    }
    const waveName = actionNames.find((name) => /wave/i.test(name));
    if (waveName && !wavePlayed) {
      const wave = actions[waveName];
      if (wave) {
        wave.reset().setLoop(THREE.LoopOnce, 1).clampWhenFinished = true;
        wave.fadeIn(0.4).play();
        if (idle) {
          setTimeout(() => {
            idle.reset().fadeIn(0.6).play();
          }, wave.getClip().duration * 1000 - 200);
        }
        setWavePlayed(true);
      }
    }
  }, [actions, wavePlayed]);

  useFrame((state) => {
    if (!headRef.current) return;
    const mouse = state.mouse;
    const targetY = mouse.x * 0.4;
    const targetX = -mouse.y * 0.25;
    headRef.current.rotation.y = THREE.MathUtils.lerp(headRef.current.rotation.y, targetY, 0.12);
    headRef.current.rotation.x = THREE.MathUtils.lerp(headRef.current.rotation.x, targetX, 0.12);
  });

  return <primitive ref={group} object={scene} scale={1.8} position={[0, -1.8, 0]} />;
}

export function CharacterScene({ modelPath = "/models/san-yamin-character.glb", className = "" }) {
  return (
    <div className={`character-scene ${className}`}>
      <Canvas camera={{ position: [0, 1.0, 3.8], fov: 32 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }} onCreated={({ gl }) => { gl.setClearColor(0x000000, 0); }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1.4} />
          <directionalLight position={[5, 8, 6]} intensity={2.4} />
          <directionalLight position={[-3, 6, 4]} intensity={1.6} />
          <pointLight position={[0, 2, 4]} intensity={1.8} />
          <BaseModel />
          <CharacterModel modelPath={modelPath} />
        </Suspense>
      </Canvas>
    </div>
  );
}

try { useGLTF.preload("/models/san-yamin-character.glb"); } catch(e) {}
try { useGLTF.preload("/models/base.glb"); } catch(e) {}
