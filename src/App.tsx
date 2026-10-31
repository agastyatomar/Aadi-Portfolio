import { useEffect, useState, type CSSProperties } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Instagram, Menu, X, ChevronLeft, ChevronRight, Sparkles, Clock3 } from 'lucide-react'

const portrait = 'https://github.com/agastyatomar.png'

const services = [
  { id:'01', title:'Web Development', short:'From the first idea to the live site', color:'#d9c8f4', icon:'⌘', intro:'Thoughtful websites that turn ideas into useful digital experiences.', points:['Discovery & planning','UX and visual design','Front-end development','Responsive layouts','Performance & polish'], projects:['NexLearn','CodeForge'] },
  { id:'02', title:'AI & Automation', short:'Making everyday work more capable', color:'#c9d9c4', icon:'✳', intro:'Experiments with AI, APIs and automations that make technology feel more helpful.', points:['AI assistant experiments','API integrations','Voice interfaces','Workflow automation','Local-first tools'], projects:['AETHER AI'] },
  { id:'03', title:'App Development', short:'Ideas made for everyday use', color:'#f0c5ae', icon:'▣', intro:'Exploring practical apps with clean interfaces and a focus on the experience.', points:['Product thinking','Interface design','App architecture','Testing & iteration','Launch-ready polish'], projects:['NovaTune','ANIMATRIX'] },
  { id:'04', title:'UI/UX Design', short:'Clarity in every interaction', color:'#e8c6cb', icon:'◉', intro:'Interfaces shaped around real people, clear structure and small details.', points:['Research & structure','Wireframes','Visual systems','Motion & interaction','Responsive design'], projects:['NexLearn','CodeForge'] },
  { id:'05', title:'Creative Experiments', short:'Learning by making something new', color:'#f1dfaa', icon:'✧', intro:'Small experiments across the web, motion, graphics and emerging technology.', points:['Creative coding','Motion studies','Visual experiments','Prototyping','Continuous learning'], projects:['Personal experiments'] },
]
const projects = [
  { name:'NexLearn', category:'Learning platform', desc:'A learning platform built to make study resources feel simple, focused and accessible.', tags:['Full-stack','Education'], initials:'NL', tone:'lavender', url:'https://github.com/agastyatomar/NexLearn' },
  { name:'AETHER AI', category:'Personal AI assistant', desc:'A voice-first assistant experiment bringing useful tools and automation into one interface.', tags:['AI','Voice','Automation'], initials:'A', tone:'sage', url:'https://github.com/agastyatomar/AETHER' },
  { name:'CodeForge', category:'Developer workspace', desc:'An experimental browser workspace for creating, organizing and exploring code projects.', tags:['Developer tools','Web app'], initials:'CF', tone:'peach', url:'https://github.com/agastyatomar/CodeForge' },
  { name:'NovaTune', category:'Music app', desc:'A music player project focused on a clean listening experience and thoughtful product design.', tags:['Android','Music'], initials:'NT', tone:'rose', url:'https://github.com/agastyatomar/NovaTune' },
]
const roles = ['Web Developer','App Developer','AI Explorer','Creative Builder']

function App() {
  const [active, setActive] = useState(0)
  const [role, setRole] = useState(0)
  const [menu, setMenu] = useState(false)
  const [time, setTime] = useState('')
  const [dark, setDark] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const update = () => setTime(new Intl.DateTimeFormat('en-IN', { hour:'numeric', minute:'2-digit', hour12:true }).format(new Date()))
    update()
    const timer = window.setInterval(update, 30000)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => setRole(v => (v + 1) % roles.length), 2600)
    return () => window.clearInterval(timer)
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(max > 0 ? window.scrollY / max : 0)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => { window.removeEventListener('scroll', updateProgress); window.removeEventListener('resize', updateProgress) }
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-scale')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12, rootMargin: '0px 0px -45px 0px' })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const selected = services[active]
  return <main className={dark ? 'site dark' : 'site'} id="top">
    <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress})` }} />
    <div className="ambient-grain" />
    <div className="ambient-orb orb-one" /><div className="ambient-orb orb-two" />
    <header className="topbar shell">
      <a className="wordmark" href="#top"><span className="mark">a.</span><span>AADI<span className="reg">®</span></span></a>
      <nav className={menu ? 'navigation show' : 'navigation'}>
        <a href="#doors" onClick={() => setMenu(false)}>What I do</a>
        <a href="#work" onClick={() => setMenu(false)}>Selected work</a>
        <a href="#about" onClick={() => setMenu(false)}>About</a>
        <a href="#contact" onClick={() => setMenu(false)}>Contact</a>
      </nav>
      <div className="top-actions"><span className="local-time"><Clock3 size={13}/>{time || '—'}</span><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle colour theme">{dark ? '☼' : '◐'}</button></div>
      <button className="menu-toggle" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero shell">
      <div className="hero-meta"><span><i className="status-dot"/> INDEPENDENT CREATIVE / STUDENT</span><span>BASED IN INDIA · 2026</span></div>
      <div className="hero-copy">
        <motion.p className="hello" initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:.6}}>A LITTLE BIT OF CURIOSITY GOES A LONG WAY.</motion.p>
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.75,delay:.1}}>Hi, I'm Agastya.<br/><span className="subline">I am a</span></motion.h1>
        <div className="notepad" aria-live="polite"><span className="spiral">⌁　⌁　⌁　⌁　⌁　⌁　⌁</span><AnimatePresence mode="wait"><motion.strong key={role} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.25}}>{roles[role]}</motion.strong></AnimatePresence><span className="paper-number">AADI / 0{role+1}</span></div>
        <div className="hero-ctas"><a href="#contact" className="pill-button">Start a project <span>↗</span></a><a href="#work" className="quiet-link">See my work <ArrowDown size={14}/></a></div>
      </div>
      <div className="portrait-wrap reveal-scale"><div className="portrait-halo"/><img className="portrait" src={portrait} alt="Portrait of Agastya Tomar" onError={e => { (e.currentTarget as HTMLImageElement).style.opacity='0' }}/><span className="portrait-caption">AGASTYA TOMAR<br/>AKA AADI · 2026</span></div>
      <div className="hero-foot"><span>BUILDING DIGITAL THINGS WITH PURPOSE.</span><a href="#doors">SCROLL TO EXPLORE ↓</a></div>
    </section>

    <section className="doors-section section shell reveal-up" id="doors">
      <div className="section-label"><span>01 — WHAT I DO</span><span>THE WORK BEHIND THE IDEAS</span></div>
      <div className="doors-intro reveal-left"><h2>Magic happens<br/><em>behind the doors.</em></h2><p>Different interests, one curious mind.<br/>Pick a door and explore what I love building.</p></div>
      <div className="doors-layout">
        <div className="door-stack" role="tablist" aria-label="Areas of work">
          {services.map((s,i)=><button role="tab" aria-selected={active===i} className={'door-pill '+(active===i?'selected':'')} style={{'--door-color':s.color} as CSSProperties} key={s.id} onClick={() => setActive(i)}><span className="door-symbol">{s.icon}</span><span>{s.title}</span><ArrowUpRight size={17}/></button>)}
        </div>
        <AnimatePresence mode="wait">
          <motion.article className="door-detail-panel" key={selected.id} initial={{opacity:0,x:24}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-16}} transition={{duration:.35}}>
            <div className="detail-top"><span>DOOR {selected.id} / 05</span><span>EXPLORE AN AREA</span></div>
            <div className="door-scene"><div className="wall-light"/><div className="arch"><div className="door-leaf"><span className="door-plaque">{selected.title}</span><span className="door-handle"/></div></div><span className="scene-caption">OPEN A NEW POSSIBILITY</span></div>
            <div className="detail-copy"><span className="detail-kicker">{selected.short}</span><h3>{selected.title}</h3><p>{selected.intro}</p><ul>{selected.points.map(p=><li key={p}><span>✓</span>{p}</li>)}</ul><div className="related"><span>RELATED PROJECTS</span><b>{selected.projects.join('　·　')}</b></div></div>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>

    <section className="work-section section shell reveal-up" id="work">
      <div className="section-label"><span>02 — SELECTED WORK</span><span>A FEW THINGS I'VE BEEN MAKING</span></div>
      <div className="work-intro reveal-left"><h2>Ideas into<br/><em>experiences.</em></h2><p>A small collection of projects, experiments<br/>and things I'm proud to keep improving.</p></div>
      <div className="project-grid reveal-up">
        {projects.map((p,i)=><motion.a className="project-card" href={p.url} target="_blank" rel="noreferrer" key={p.name} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.5,delay:i*.08}}>
          <div className={'project-visual '+p.tone}><div className="browser-bar"><span/><span/><span/><small>{p.name.toLowerCase()}.app</small></div><div className="mockup-content"><span className="mockup-mark">{p.initials}</span><strong>{p.name}</strong><i>{p.category}</i><div className="mock-lines"><b/><b/><b/></div></div><span className="project-count">0{i+1} / 04</span></div>
          <div className="project-meta"><div><span>{p.category}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="tag-row">{p.tags.map(t=><small key={t}>{t}</small>)}</div></div><span className="project-open"><ArrowUpRight size={19}/></span></div>
        </motion.a>)}
      </div>
      <a className="github-more" href="https://github.com/agastyatomar?tab=repositories" target="_blank" rel="noreferrer">MORE PROJECTS ON GITHUB <ArrowUpRight size={15}/></a>
    </section>

    <section className="about-section section shell reveal-up" id="about">
      <div className="section-label"><span>03 — A LITTLE ABOUT ME</span><span>THE PERSON BEHIND THE PIXELS</span></div>
      <div className="about-grid reveal-up"><div><span className="about-star">✳</span><h2>Curious by<br/>nature. <em>Builder</em><br/>by choice.</h2></div><div className="about-text"><p className="about-lead">I'm Aadi — a student from India who loves exploring how technology works.</p><p>I learn by building, experimenting and solving problems. My interests move between web development, apps, AI, automation and interface design. Every project teaches me something new, and that's the fun part.</p><p>I'm still at the beginning of the journey — focused on learning deeply, making useful things and turning ideas into reality.</p><div className="about-facts"><span>BASED IN <b>INDIA</b></span><span>FOCUS <b>BUILD & LEARN</b></span><span>STATUS <b>OPEN TO IDEAS</b></span></div></div></div>
    </section>

    <section className="contact-section section reveal-up" id="contact"><div className="shell"><div className="section-label"><span>04 — LET'S CONNECT</span><span>HAVE AN IDEA IN MIND?</span></div><div className="contact-content reveal-up"><span className="contact-kicker"><i className="status-dot"/> OPEN TO GOOD IDEAS & COLLABORATIONS</span><h2>Got a project?<br/><em>Let's talk.</em></h2><p>Have an interesting idea, want to collaborate, or just want to say hello? Find me here.</p><div className="contact-links"><a href="https://github.com/agastyatomar" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a><a href="https://instagram.com/pvttt.aadi_315" target="_blank" rel="noreferrer"><Instagram size={17}/> Instagram <ArrowUpRight size={15}/></a></div></div></div></section>
    <footer className="footer shell"><a className="wordmark" href="#top"><span className="mark">a.</span><span>AADI<span className="reg">®</span></span></a><span>DESIGNED WITH CURIOSITY · BUILT WITH CARE</span><a href="#top">BACK TO TOP ↑</a><span>© 2026 AGASTYA TOMAR</span></footer>
  </main>
}
export default App
