import { useEffect, useLayoutEffect, useRef, useState } from "react";

const projects = [
  { title:"ATM Workload Analytics", category:"Performance Analysis", year:"2026", image:null, imageFile:"project-atm-workload.jpg", description:"Analyzed 300,000 synthetic ATM transactions and modeled normal and suspicious workloads through an interactive Streamlit dashboard.", tags:["Python","Streamlit","KMeans","PCA"] },
  { title:"AI Fraud Detection & Adversarial Robustness", category:"AI Security", year:"2026", image:null, imageFile:"project-ai-fraud-detection.jpg", description:"Built an XGBoost-based digital banking fraud detection system with explainability, adversarial testing, and interactive monitoring.", tags:["XGBoost","Adversarial AI","Explainability","Streamlit"] },
  { title:"Intelligent Endpoint DLP System", category:"Endpoint Security", year:"2026", image:null, imageFile:"project-usb-dlp.jpg", description:"Developed a Python endpoint security prototype that monitors USB activity, scans sensitive files, scores risk, and applies Allow, Alert, or Block policies.", tags:["Python","DLP","USB Monitoring","Incident Response"] },
  { title:"CodeVerse", category:"Web Development", year:"2023", image:"/assets/codeverse.jpg", description:"An interactive coding-learning website designed for children aged 6 to 17.", tags:["HTML","CSS","JavaScript"] },
  { title:"Life on Land", category:"Data", year:"2024", image:"/assets/life-on-land.jpg", description:"A database project analyzing Myanmar biodiversity, forest cover, carbon sequestration, and land use.", tags:["MySQL","Data analysis","Sustainability"] },
  { title:"Solar Shine Pathways", category:"Engineering", year:"2024", image:null, imageFile:"project-solar-shine.jpg", description:"A solar-powered streetlight system designed for energy efficiency and safer public spaces.", tags:["Circuits","Solar","Hardware"] },
  { title:"CyberAttack Log Analysis", category:"Distributed Security", year:"2026", image:"/assets/cyberattack.jpg", description:"A distributed system that analyzes network and system logs to identify suspicious activity and cyber threats.", tags:["Python","Hadoop","Log analysis"] },
  { title:"UIT CTF Platform", category:"Cybersecurity", year:"2026", image:"/assets/ctf.jpg", description:"A CTF-based learning platform with challenges in web security, cryptography, and vulnerability analysis.", tags:["Web security","Cryptography","Testing"] },
  { title:"SignLan Bridge", category:"AI · Accessibility", year:"2025", image:"/assets/signlan.jpg", description:"A Python-based system that recognizes ASL hand gestures and translates them into text in real time.", tags:["Python","Prolog","Flask"] },
];

const featuredProjects = [
  projects.find(project => project.title === "Life on Land"),
  projects.find(project => project.title === "AI Fraud Detection & Adversarial Robustness"),
  projects.find(project => project.title === "CodeVerse"),
];

const exchanges = [
  { slug:"jenesys", title:"JENESYS ASEAN–Japan Students Conference", place:"Japan", role:"One of 7 Myanmar representatives", type:"Student Conference", year:"2026", image:"/images-to-add/jenesys-home.jpg", gallery:[{file:"jenesys-home.jpg"},{file:"experience-jenesys-02.jpg"},{file:"experience-jenesys-03.jpg"},{file:"experience-jenesys-04.jpg"}], summary:"Joined discussions, workshops, and collaborative activities with students from ASEAN countries and Japan, exploring culture, innovation, and regional cooperation." },
  { slug:"rok-mekong", title:"ROK–Mekong Youth Group Workshop", place:"South Korea", role:"One of 5 Myanmar delegates", type:"Youth Workshop", year:"2025", image:"/images-to-add/rok-mekong.jpg?v=2", gallery:[{src:"/images-to-add/rok-mekong.jpg?v=2"},{file:"experience-rok-mekong-02.jpg"},{file:"experience-rok-mekong-03.jpg"},{file:"experience-rok-mekong-04.jpg"},{file:"experience-rok-mekong-05.jpg"},{file:"experience-rok-mekong-06.jpg"}], summary:"Explored advanced science and technology through lectures and visits to KISTI, KAIST, and ETRI while building cross-cultural connections." },
  { slug:"aaylf", title:"ASEAN–Australia Young Leaders Forum", place:"Vietnam", role:"One of 3 Myanmar delegates", type:"Leadership Forum", year:"2024", image:"/assets/aaylf.jpg", gallery:[{src:"/assets/aaylf.jpg"},{file:"experience-aaylf-02.jpg"},{file:"experience-aaylf-03.jpg"},{file:"experience-aaylf-04.jpg"}], summary:"Contributed to leadership development and discussions on regional technology challenges and ASEAN–Australia relations." },
  { title:"ASEAN Youth for Digital Action", place:"Online · ASEAN", role:"Alumnus", year:"2024", image:null, imageFile:"exchange-ayda.jpg", summary:"Built digital skills through workshops, mentorship, and an online workplace internship supporting a sustainability-focused MSME." },
];

const leadership = [
  { slug:"sansans-yellow-notebook", title:"Sansan’s Yellow Notebook", role:"Content Creator", description:"A youth-focused platform where I share opportunities, practical insights, and personal experiences to help young people learn, explore, and grow.", image:null, imageFile:"leadership-yellow-notebook.PNG", posts:[{file:"yellow-notebook-post-08.jpg",label:"Opening"},{file:"yellow-notebook-post-06.jpg",label:"Cover"},{file:"yellow-notebook-post-07.jpg",label:"Journey to Seoul"},{file:"yellow-notebook-post-04.jpg",label:"Arrival in Korea"},{file:"yellow-notebook-post-11.jpg",label:"Day 0"},{file:"yellow-notebook-post-10.jpg",label:"Day 1"},{file:"yellow-notebook-post-02.jpg",label:"Daejeon Food"},{file:"yellow-notebook-post-03.jpg",label:"Day 2"},{file:"yellow-notebook-post-05.jpg",label:"Day 2"},{file:"yellow-notebook-post-16.jpg",label:"Day 3"},{file:"yellow-notebook-post-01.jpg",label:"Day 3"},{file:"yellow-notebook-post-09.jpg",label:"Day 3"},{file:"yellow-notebook-post-14.jpg",label:"Day 4"},{file:"yellow-notebook-post-15.jpg",label:"Day 4"},{file:"yellow-notebook-post-13.jpg",label:"Day 5"}], why:"Helping young people discover meaningful opportunities, useful resources, and lessons they can apply to their own journey.", work:["Research opportunities and youth programs","Create youth-focused digital content","Share clear, accessible information","Turn personal experiences into practical insights"], links:[{label:"Facebook",url:"https://www.facebook.com/share/18aYq9Q5K5/"},{label:"YouTube",url:"https://www.youtube.com/@SanYamin"},{label:"Instagram",url:"https://www.instagram.com/sansan_yellow.notebook/"}] },
  { slug:"aspire-now", title:"Aspire Now", role:"Co-Founder · Head of Graphic Design", description:"A youth-led platform creating accessible, engaging content and initiatives that help young people discover opportunities, build skills, and take action.", image:null, imageFile:"leadership-aspire-now.jpg", posts:[{file:"aspire-now-post-01.jpg",label:"Singapore Transport Guide"},{file:"aspire-now-post-02.jpg",label:"AUS Scholarship Webinar"},{file:"aspire-now-post-03.jpg",label:"Singapore Opportunities"},{file:"aspire-now-post-04.jpg",label:"HIIA Future Leaders"},{file:"aspire-now-post-05.jpg",label:"Study in Seoul"},{file:"aspire-now-post-06.jpg",label:"Burnout Signs"},{file:"aspire-now-post-07.jpg",label:"Study in Australia"},{file:"aspire-now-post-08.jpg",label:"New Year 2026"},{file:"aspire-now-post-09.jpg",label:"Study Method Highlight"},{file:"aspire-now-post-10.jpg",label:"LSE Online Courses"},{file:"aspire-now-post-11.jpg",label:"Passive Reading"},{file:"aspire-now-post-12.jpg",label:"Connect Better"},{file:"aspire-now-post-13.jpg",label:"Study in Canada"},{file:"aspire-now-post-14.jpg",label:"Schwarzman Scholars"},{file:"aspire-now-post-15.jpg",label:"Financial Portfolio"}], why:"Helping students discover scholarships, university pathways, and personal development opportunities through accessible and engaging information.", work:["Co-founded and helped develop the youth initiative","Create visual content and manage the graphic design team","Support webinars, opportunity sharing, and youth-focused campaigns"], links:[{label:"Facebook",url:"https://www.facebook.com/profile.php?id=61552851140427"},{label:"Telegram",url:"https://t.me/aspirenow_org"},{label:"Instagram",url:"https://www.instagram.com/aspirenoworg/"}] },
];

function navigateTo(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  window.scrollTo({ top:0, behavior:"auto" });
}

function scrollToSection(target, offset = 70) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  const top = Math.max(0, el.getBoundingClientRect().top + window.scrollY - offset);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { window.scrollTo({ top, behavior:"instant" }); return; }
  const root = document.documentElement;
  const prevBehavior = root.style.scrollBehavior;
  root.style.scrollBehavior = "auto";
  const startY = window.scrollY;
  const distance = top - startY;
  if (Math.abs(distance) < 2) { root.style.scrollBehavior = prevBehavior; return; }
  const duration = 400;
  const ease = (t) => 1 - Math.pow(1 - t, 3);
  let start;
  const step = (now) => {
    if (start === undefined) start = now;
    const progress = Math.min((now - start) / duration, 1);
    window.scrollTo(0, startY + distance * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
    else root.style.scrollBehavior = prevBehavior;
  };
  requestAnimationFrame(step);
}

function ImageSlot({ src, file, alt, className="" }) {
  const imageSrc = src || (file ? `/images-to-add/${file}` : null);
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setFailed(false); setLoaded(false); }, [imageSrc]);
  useEffect(() => {
    if (!imageSrc || failed) return;
    const timer = setTimeout(() => setLoaded(true), 1500);
    return () => clearTimeout(timer);
  }, [imageSrc, failed]);
  if (imageSrc && !failed) return <img className={`${className} fade-img${loaded?" is-loaded":""}`} src={imageSrc} alt={alt} loading="lazy" onLoad={()=>setLoaded(true)} onError={()=>setFailed(true)} />;
  return <div className={`image-slot ${className}`} role="img" aria-label={`Image placeholder for ${alt}`}><span>ADD PHOTO</span><strong>{file}</strong><small>public/images-to-add/</small></div>;
}

function SectionHeader({ eyebrow, title, intro }) {
  return <div className="section-header reveal"><span className="script">{eyebrow}</span><div><h2>{title}</h2>{intro && <p>{intro}</p>}</div></div>;
}

function ArrowLink({ children, onClick, href }) {
  if (href) return <a className="arrow-link" href={href}>{children}<span>↗</span></a>;
  return <button className="arrow-link" onClick={onClick}>{children}<span>→</span></button>;
}

function BackToHome() {
  return <button className="page-back" onClick={()=>navigateTo("/")} aria-label="Back to homepage"><span aria-hidden="true">←</span> Back to home</button>;
}

function ProjectCard({ project, index=0, featured=false, onPreview }) {
  const openProject = (event) => {
    if (onPreview) { const img = event.currentTarget.querySelector("img"); onPreview(project, img ? img.getBoundingClientRect() : null); }
    else navigateTo("/projects");
  };
  return <article className={`project-card${featured?" featured":""} reveal-fade`} style={{"--rd":`${Math.min(index,8)*70}ms`}} role="link" tabIndex="0" aria-label={`View project: ${project.title}`} onClick={openProject} onKeyDown={event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openProject(event);}}}><div className="project-image"><ImageSlot src={project.image} file={project.imageFile} alt={project.title} /><span className="project-number" aria-hidden="true">0{index + 1}</span></div><div className="card-body"><div className="meta"><span>{project.category}</span><span>{project.year}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><span className="project-action" aria-hidden="true"><span className="project-action-icon">→</span></span></div></article>;
}

function ProjectLightbox({ project, rect, onClose }) {
  const src = project.image || `/images-to-add/${project.imageFile}`;
  const imgRef = useRef(null);
  const closeRef = useRef(null);
  const [closing, setClosing] = useState(false);

  const close = () => { if (closing) return; setClosing(true); setTimeout(onClose, 180); };

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") close(); };
    addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; removeEventListener("keydown", onKey); };
  });

  useLayoutEffect(() => {
    const el = imgRef.current;
    if (!el || !rect || !rect.width) return;
    const flip = () => {
      const last = el.getBoundingClientRect();
      if (!last.width) return;
      const sx = rect.width / last.width;
      const sy = rect.height / last.height;
      el.style.transition = "none";
      el.style.transformOrigin = "top left";
      el.style.transform = `translate(${rect.left - last.left}px, ${rect.top - last.top}px) scale(${sx}, ${sy})`;
      el.style.opacity = "0.55";
      requestAnimationFrame(() => {
        el.style.transition = "transform .45s cubic-bezier(.2,.75,.25,1), opacity .3s ease";
        el.style.transform = "none";
        el.style.opacity = "1";
      });
    };
    if (el.complete && el.naturalWidth) flip();
    else el.addEventListener("load", flip, { once: true });
  }, []);

  return <div className={`lightbox${closing ? " closing" : ""}`} role="dialog" aria-modal="true" aria-label={`${project.title} preview`} onClick={close}>
    <button className="lightbox-close" ref={closeRef} onClick={close} aria-label="Close preview">×</button>
    <figure className="lightbox-figure" onClick={event => event.stopPropagation()}>
      <img ref={imgRef} src={src} alt={project.title} />
      <figcaption className="lightbox-caption"><strong>{project.title}</strong><span>{project.category} · {project.year}</span></figcaption>
    </figure>
  </div>;
}

function ExchangeCard({ item, index }) {
  const openExperience = () => {navigateTo("/international-experiences");setTimeout(()=>scrollToSection(`#${item.slug}`),60);};
  return <article className="exchange-card featured reveal-fade" style={{"--rd":`${Math.min(index,8)*70}ms`}} role="link" tabIndex="0" aria-label={`View ${item.title}`} onClick={openExperience} onKeyDown={event=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();openExperience();}}}><div className="exchange-image"><ImageSlot src={item.image} file={item.imageFile} alt={item.title} /><span className="exchange-number">0{index + 1}</span></div><div className="card-body"><div className="meta"><span>{item.place}</span><span>{item.year}</span></div><h3>{item.title}</h3><p className="role">{item.role}</p><span className="exchange-mark">{item.type}</span></div></article>;
}

function Header({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  const go = (target) => {
    if (location.pathname !== "/") { navigateTo("/"); setTimeout(()=>scrollToSection(target),60); }
    else scrollToSection(target);
    setMenuOpen(false);
  };
  return <header className={`nav-wrap${scrolled?" scrolled":""}`}><button className="monogram" onClick={()=>navigateTo("/")} aria-label="San Yamin home">SY<span>®</span></button><nav className={menuOpen?"nav-links open":"nav-links"} aria-label="Main navigation"><button onClick={()=>navigateTo("/")}>Home</button><button onClick={()=>go("#leadership")}>Leadership</button><button onClick={()=>navigateTo("/international-experiences")}>Exchanges</button><button onClick={()=>navigateTo("/projects")}>Projects</button><button onClick={()=>go("#experience")}>Experience</button><button onClick={()=>go("#contact")}>Contact</button></nav><button className="menu" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}><span/><span/></button></header>;
}

function Home() {
  const [preview, setPreview] = useState(null);
  return <>
    <section id="top" className="hero"><div className="hero-copy"><div className="hero-focus hero-focus-top" aria-label="Focus areas">{["Cybersecurity","AI & ML","Digital Trust","Social Impact","Global Collaboration"].map(item=><span key={item}>{item}</span>)}</div><h1>San<br/>Yamin<span>.</span></h1><p className="intro">I’m San Yamin from Myanmar, working at the intersection of cybersecurity, AI, digital trust, and youth empowerment. As a cybersecurity student, researcher, content creator, and tech builder, I combine technical problem-solving with visual storytelling to make technology safer, more responsible, and more accessible. Through research, technical projects, Aspire Now, and SanSan’s Yellow Notebook, I share opportunities and experiences while building digital solutions that can create meaningful impact for young people and communities.</p><div className="hero-links"><a className="text-link" href="https://www.linkedin.com/in/san-yamin-18b781307" target="_blank" rel="noreferrer">LinkedIn ↗</a><a className="text-link" href="https://github.com/San-Yamin" target="_blank" rel="noreferrer">GitHub ↗</a><a className="text-link" href="/images-to-add/san-yamin-cv.pdf" download>Download CV ↗</a></div></div><div className="hero-visual-wrap"><span className="hero-word" aria-hidden="true">Portfolio</span><figure className="hero-visual"><div className="hero-image-frame"><img src="/assets/portrait-hero.jpg" alt="San Yamin"/></div><figcaption className="portrait-label">Yangon, Myanmar</figcaption></figure></div></section>

    <section className="section cream education education-editorial"><div className="section-inner education-editorial-layout"><div className="education-accent" aria-hidden="true"><span className="script">Education</span><strong>UIT</strong><small>Technology · Security · Purpose</small></div><div className="education-details"><span className="label">Current education</span><h2>University of Information Technology <a className="education-site-link" href="https://uit.edu.mm/" target="_blank" rel="noreferrer" aria-label="Visit the University of Information Technology website">↗</a></h2><p className="education-location">Yangon, Myanmar</p><div className="education-meta"><p><strong>B.C.Tech in Computer Technology</strong></p><p>Specialization: <strong>Cybersecurity</strong></p><time>2022 — Present</time></div><div className="academic-focus"><span className="label">Academic Focus</span><p>Cybersecurity · Artificial Intelligence · Information Systems · Software Development</p></div></div></div></section>

    <section id="leadership" className="section red"><div className="section-inner"><SectionHeader eyebrow="People & impact" title="Leadership & Community" intro="Platforms and initiatives shaped around opportunity, learning, and youth participation."/><div className="leadership-grid">{leadership.map((item,i)=><article className="leadership-card reveal" style={{"--rd":`${i*80}ms`}} key={item.slug}><ImageSlot file={item.imageFile} alt={item.title}/><div className="card-body"><span className="label">{item.role}</span><h3>{item.title}</h3><p>{item.description}</p><ArrowLink onClick={()=>navigateTo(`/leadership/${item.slug}`)}>Discover More</ArrowLink></div></article>)}</div></div></section>

    <section className="section cream international-section"><div className="section-inner"><SectionHeader eyebrow="Across borders" title="International experiences" intro="Learning, contributing, and representing Myanmar in regional and international spaces."/><div className="card-grid">{exchanges.slice(0,3).map((x,i)=><ExchangeCard item={x} index={i} key={x.title}/>)}</div><ArrowLink onClick={()=>navigateTo("/international-experiences")}>View experiences</ArrowLink></div></section>

    <section className="section red achievement"><div className="section-inner"><SectionHeader eyebrow="Selected highlights" title="Achievements"/><div className="achievement-list"><article className="reveal"><div><span>01</span><time>March 2026</time></div><div><h3>KBZPay AppCube Hackathon</h3><p className="role">Best Mini App Award · 2nd Place (1st Runner-Up)</p></div><p>Led the team behind “EverAfter,” built on the AppCube platform.</p></article><article className="reveal"><div><span>02</span><time>Oct 2025</time></div><div><h3>UNESCO Youth Hackathon</h3><p className="role">Media & Information Literacy</p></div><p>Contributed “CyberBuddy,” a youth-focused MIL project.</p></article><article className="reveal"><div><span>03</span><time>Jul 2024</time></div><div><h3>Green Talent Generation Hackathon</h3><p className="role">Thailand · Sustainability</p></div><p>Contributed to a technology project supporting sustainable practices.</p></article><article className="reveal"><div><span>04</span><time>May 2024</time></div><div><h3>Youth Entrepreneurship Program</h3><p className="role">Pitch Deck Competition</p></div><p>Won second prize with a team business idea focused on sustainability.</p></article></div></div></section>

    <section id="projects" className="section cream"><div className="section-inner"><SectionHeader eyebrow="Selected work" title="Technical projects" intro="Selected projects across cybersecurity, distributed systems, AI, and web development."/><div className="card-grid">{featuredProjects.map((p,i)=><ProjectCard project={p} index={i} key={p.title} onPreview={(project,rect)=>setPreview({project,rect})}/>)}</div><ArrowLink onClick={()=>navigateTo("/projects")}>View projects</ArrowLink></div></section>

    <section id="experience" className="section dark"><div className="section-inner"><SectionHeader eyebrow="Where I’ve worked" title="Experience"/><div className="experience-list"><article className="reveal"><div><span>01</span><time>Oct — Nov 2025</time></div><div><h3>KBZPay Mini Apps</h3><p className="role">Intern</p></div><p>Supported UAT and whitelist testing, go-live health checks, AppCube workflows, and BRD/FRD, T&amp;C, and FAQ preparation.</p></article><article className="reveal"><div><span>02</span><time>May — Jun 2024</time></div><div><h3>Balini Organic</h3><p className="role">AYDA Workplace Intern</p></div><p>Applied cloud, networking, digital security, databases, and marketing knowledge to support an MSME’s digital growth.</p></article><article className="reveal"><div><span>03</span><time>Three events</time></div><div><h3>JLPT</h3><p className="role">Part-Time Officer · Volunteer</p></div><p>Verified question papers and examinee seat numbers while supporting accurate event logistics.</p></article></div></div></section>

    <footer id="contact" className="section contact dark"><div className="section-inner"><span className="script">Let’s connect</span><div className="contact-row"><div><h2>Let’s build something meaningful.</h2></div><div className="contact-links"><a href="mailto:sanyamin@uit.edu.mm">Email <span>↗</span></a><a href="https://www.linkedin.com/in/san-yamin-18b781307" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div><div className="footer-line"><span>© 2026 San Yamin</span><button onClick={()=>scrollToSection(document.body, 0)}>Back to top ↑</button></div></div></footer>
    {preview && <ProjectLightbox project={preview.project} rect={preview.rect} onClose={()=>setPreview(null)}/>}
  </>;
}
function ProjectsPage() {
  const [preview, setPreview] = useState(null);
  return <main className="subpage cream projects-page"><section className="page-hero red"><div className="section-inner"><BackToHome/><span className="script">Selected work</span><p className="kicker">Technical portfolio · 2023—2026</p><h1>Projects.</h1><p>A selected collection of projects across cybersecurity, AI, databases, web development, and engineering.</p></div></section><section id="projects" className="section"><div className="section-inner"><div className="card-grid">{projects.map((p,i)=><ProjectCard project={p} index={i} key={p.title} onPreview={(project,rect)=>setPreview({project,rect})}/>)}</div></div></section>{preview && <ProjectLightbox project={preview.project} rect={preview.rect} onClose={()=>setPreview(null)}/>}</main>;
}

function ExchangesPage() {
  const featuredExperiences = exchanges.filter((x) => x.gallery);

  return <main className="subpage cream experiences-page">
    <section className="page-hero red">
      <div className="section-inner">
        <BackToHome />
        <span className="script">Across borders</span>
        <p className="kicker">Cross-cultural exchange · Regional engagement</p>
        <h1>International experiences.</h1>
        <p>A collection of international experiences in cross-cultural exchange, technology, leadership, and representing Myanmar.</p>
      </div>
    </section>
    <div className="experience-showcase">
      {featuredExperiences.map((x, i) => <section id={x.slug} className={`experience-feature${i % 2 ? " reverse" : ""}`} key={x.slug}>
        <div className="section-inner">
          <div className="experience-feature-copy reveal">
            <div className="experience-feature-meta">
              <span>0{i + 1} · {x.type}</span>
              <span>{x.place} · {x.year}</span>
            </div>
            <h2>{x.title}</h2>
            <p className="experience-role">
              {x.slug === "jenesys"
                ? "Fully Funded | One of 7 Myanmar Representatives"
                : x.slug === "rok-mekong"
                  ? "Fully Funded | One of 5 Myanmar Delegates"
                  : x.slug === "aaylf"
                    ? "Fully Funded | One of 3 Myanmar Delegates"
                    : x.role}
            </p>
            {x.slug === "jenesys" ? <>
              <p>A fully funded Japan–ASEAN youth exchange program under Japan’s Ministry of Foreign Affairs, bringing university students together to deepen mutual understanding, discuss regional challenges, and strengthen future friendship and cooperation.</p>
              <p>Represented Myanmar through discussions, workshops, university visits, collaborative activities, and cultural exchange with students from ASEAN countries and Japan.</p>
            </> : x.slug === "rok-mekong" ? <>
              <p>A fully funded Korea–Mekong youth exchange program connecting university students from Korea and the five Mekong countries through regional cooperation, discussions, and cross-cultural exchange.</p>
              <p>Represented Myanmar through expert lectures, institutional visits, group discussions, presentations, and cultural exchange in Korea.</p>
            </> : x.slug === "aaylf" ? <>
              <p>A regional leadership forum connecting young leaders from ASEAN and Australia to strengthen collaboration, cultural exchange, and future networks.</p>
              <p>Represented Myanmar in AAYLF 2024: “InnovASEAN: Shaping Tomorrow’s Tech Leaders,” engaging in discussions, networking, and cross-cultural activities focused on technology and regional cooperation.</p>
            </> : <p>{x.summary}</p>}
          </div>
          <div className="experience-gallery reveal">
            {x.gallery.map((photo, j) => <figure className={j === 0 ? "lead-photo" : ""} key={photo.src || photo.file}>
              <ImageSlot src={photo.src} file={photo.file} alt={`${x.title} photo ${j + 1}`} />
            </figure>)}
          </div>
        </div>
      </section>)}
    </div>
  </main>;
}

function LeadershipPage({ slug }) { const item=leadership.find(x=>x.slug===slug); if(!item) return <NotFound/>; const isNotebook=item.slug==="sansans-yellow-notebook"; return <main className="subpage cream leadership-detail"><section className="page-hero red"><div className="section-inner"><BackToHome/><span className="script">Leadership story</span><p className="kicker">{item.role}</p><h1>{item.title}.</h1><p className="leadership-hero-desc">{item.description}</p></div></section><section className="section leadership-overview"><div className="section-inner story-grid"><div className="reveal"><ImageSlot file={item.imageFile} alt={item.title}/>{!item.posts&&<div className="gallery-slots"><ImageSlot file={`${item.slug}-gallery-01.jpg`} alt={`${item.title} gallery 1`}/><ImageSlot file={`${item.slug}-gallery-02.jpg`} alt={`${item.title} gallery 2`}/></div>}</div><div className="reveal" style={{"--rd":"100ms"}}><span className="label">Overview</span><h2>Why it matters</h2><p>{item.why}</p><span className="label top-gap">What I do</span><ul>{item.work.map(x=><li key={x}>{x}</li>)}</ul><div className="leadership-socials"><span className="label">Official pages</span>{item.links.map(link=><a href={link.url} target="_blank" rel="noreferrer" key={link.label}>{link.label}<span aria-hidden="true">↗</span></a>)}</div></div></div></section>{item.posts&&<section className="section notebook-preview"><div className="section-inner"><div className="notebook-preview-heading reveal"><div><span className="script">{isNotebook?"From the notebook":"From Aspire Now"}</span><h2>Preview posts</h2></div><p>{isNotebook?"Original content and graphics created and drawn by me for Sansan’s Yellow Notebook.":"As Co-Founder and Head of Graphic Design, I manage the creative team. These highlighted Aspire Now posts were designed and created by me."}</p></div><div className="notebook-post-grid">{item.posts.map((post,i)=><a href={`/images-to-add/${post.file}`} target="_blank" rel="noreferrer" className="notebook-post reveal-fade" style={{"--rd":`${Math.min(i,8)*50}ms`}} key={post.file} aria-label={`Open ${post.label} from ${item.title}`}><ImageSlot file={post.file} alt={`${post.label} — ${item.title}`}/><span>{post.label} <b aria-hidden="true">↗</b></span></a>)}</div></div></section>}</main>; }

function NotFound(){ return <main className="subpage cream"><section className="page-hero"><div className="section-inner"><p className="kicker">404</p><h1>Page not found.</h1><ArrowLink onClick={()=>navigateTo("/")}>Return home</ArrowLink></div></section></main>; }

export function App() {
  const [menuOpen,setMenuOpen]=useState(false); const [path,setPath]=useState(location.pathname);
  useEffect(()=>{ const onPop=()=>{setPath(location.pathname);setMenuOpen(false)}; const onKey=e=>e.key==="Escape"&&setMenuOpen(false); addEventListener("popstate",onPop);addEventListener("keydown",onKey);return()=>{removeEventListener("popstate",onPop);removeEventListener("keydown",onKey)}},[]);
  useEffect(()=>{
    const base="San Yamin";
    if(path==="/") document.title="San Yamin";
    else if(path==="/projects") document.title=`Projects — ${base}`;
    else if(path==="/international-experiences") document.title=`International Experiences — ${base}`;
    else if(path.startsWith("/leadership/")){ const item=leadership.find(x=>x.slug===path.split("/").pop()); document.title=item?`${item.title} — ${base}`:`Page not found — ${base}`; }
    else document.title=`Page not found — ${base}`;
  },[path]);
  useEffect(()=>{
    const els=Array.from(document.querySelectorAll(".reveal,.reveal-fade"));
    if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){els.forEach(el=>el.classList.add("is-visible"));return;}
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{ if(entry.isIntersecting){ entry.target.classList.add("is-visible"); io.unobserve(entry.target); } });
    },{threshold:0,rootMargin:"0px 0px -40px 0px"});
    els.forEach(el=>{ if(!el.classList.contains("is-visible")) io.observe(el); });
    return ()=>io.disconnect();
  },[path]);
  let page=path==="/"?<Home/>:path==="/projects"?<ProjectsPage/>:path==="/international-experiences"?<ExchangesPage/>:path.startsWith("/leadership/")?<LeadershipPage slug={path.split("/").pop()}/>:<NotFound/>;
  return <><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/><div className="route" key={path}>{page}</div></>;
}
