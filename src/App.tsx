import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Instagram, Linkedin, Mail, Sparkles, Code2, Bot, Smartphone, Palette, Menu, X, MoveUpRight } from 'lucide-react'

const projects = [
  { n: '01', name: 'AETHER AI', type: 'Personal AI assistant', desc: 'A voice-first assistant experiment bringing useful tools, automation and a personal AI interface together.', tags: ['AI', 'Voice', 'Automation'], color: 'mint', url: 'https://github.com/agastyatomar/AETHER' },
  { n: '02', name: 'NexLearn', type: 'Learning platform', desc: 'A learning space built to make quality study resources feel simple, focused and accessible.', tags: ['Web app', 'Education', 'Full-stack'], color: 'blue', url: 'https://github.com/agastyatomar/NexLearn' },
  { n: '03', name: 'CodeForge', type: 'Developer workspace', desc: 'An experimental browser workspace for building, organizing and exploring code projects.', tags: ['Developer tools', 'Workspace'], color: 'orange', url: 'https://github.com/agastyatomar/CodeForge' },
  { n: '04', name: 'NovaTune', type: 'Music app', desc: 'A music player project focused on a clean listening experience and thoughtful product design.', tags: ['Android', 'Music', 'Open source'], color: 'pink', url: 'https://github.com/agastyatomar/NovaTune' },
]
const doors = [
  { icon: Code2, title: 'WEB DEVELOPMENT', sub: 'Interfaces that feel alive', detail: 'React · TypeScript · Next.js · CSS' },
  { icon: Bot, title: 'AI & AUTOMATION', sub: 'Making ideas more capable', detail: 'LLMs · APIs · Workflow experiments' },
  { icon: Smartphone, title: 'APP BUILDING', sub: 'Useful things for everyday life', detail: 'Android · Web apps · Product thinking' },
  { icon: Palette, title: 'UI / UX DESIGN', sub: 'Details make the difference', detail: 'Visual systems · Motion · Interaction' },
]
function App() {
  const [active, setActive] = useState<number | null>(null)
  const [menu, setMenu] = useState(false)
  const [flipped, setFlipped] = useState(false)
  const nav = [['Work', '#work'], ['About', '#about'], ['Skills', '#skills'], ['Contact', '#contact']]
  return <main>
    <div className="grain" />
    <header className="nav wrap">
      <a className="brand" href="#top"><span className="brand-mark">a.</span><span>AADI<span className="brand-dot">®</span></span></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'}>{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav>
      <a className="availability" href="mailto:hello@agastyatomar.dev"><i /> OPEN TO IDEAS <ArrowUpRight size={14}/></a>
      <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="Toggle menu">{menu ? <X/> : <Menu/>}</button>
    </header>

    <section className="hero wrap" id="top">
      <div className="hero-top"><span className="eyebrow"><span className="cross">✳</span> INDEPENDENT DEVELOPER & CREATIVE MIND</span><span className="hero-index">PORTFOLIO — 2026</span></div>
      <div className="hero-title"><motion.h1 initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>I BUILD<br/><span className="outline">DIGITAL</span><br/>THINGS<span className="lime">.</span></motion.h1>
        <motion.div className="hero-aside" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:.3}}><div className="orbit"><span>✳</span><b>✳</b></div><p>Curious by nature.<br/>Builder by choice.</p><a href="#about" className="round-link"><ArrowDown size={18}/></a></motion.div>
      </div>
      <div className="hero-bottom"><p>HEY, I'M <strong>AGASTYA TOMAR</strong> — ALSO KNOWN AS AADI.<br/>A STUDENT EXPLORING CODE, DESIGN & THE FUTURE.</p><span className="scroll-note">SCROLL TO EXPLORE <span>↓</span></span></div>
      <div className="hero-line"><span>✳</span><span>DESIGN-LED DEVELOPMENT</span><span>✳</span><span>ALWAYS EXPERIMENTING</span><span>✳</span></div>
    </section>

    <section className="intro section-pad wrap" id="about">
      <div className="section-kicker"><span>01 / A LITTLE INTRO</span><span>THE PERSON BEHIND THE PIXELS</span></div>
      <div className="intro-grid"><h2>NOT JUST<br/>WRITING CODE.<br/><em>MAKING</em><br/>THINGS MATTER.</h2><div className="intro-copy"><span className="small-star">✳</span><p className="lead">I'm Aadi — a student, aspiring developer and curious problem solver from India.</p><p>I love exploring how technology works and turning interesting ideas into useful digital experiences. From web apps to AI experiments, I'm learning by building, breaking and building again.</p><p className="muted">Currently focused on growing my skills, shipping personal projects and staying curious about what's next.</p><a href="#work" className="text-link">EXPLORE MY WORK <MoveUpRight size={16}/></a></div></div>
    </section>

    <section className="skills section-pad" id="skills"><div className="wrap"><div className="section-kicker"><span>02 / WHAT I'M INTO</span><span>OPEN A DOOR</span></div><div className="skills-head"><h2>AREAS OF<br/><em>CURIOSITY.</em></h2><p>Four directions I keep exploring.<br/>Tap a door to take a closer look.</p></div><div className="doors">{doors.map((d,i)=>{const Icon=d.icon;return <button className={active===i?'door active':'door'} key={d.title} onClick={()=>setActive(active===i?null:i)}><span className="door-no">0{i+1}</span><Icon className="door-icon" size={27}/><span className="door-title">{d.title}</span><span className="door-sub">{d.sub}</span><span className="door-detail">{active===i?d.detail:'EXPLORE ↗'}</span></button>})}</div></div></section>

    <section className="work section-pad wrap" id="work"><div className="section-kicker"><span>03 / SELECTED EXPERIMENTS</span><span>A FEW THINGS I'VE BUILT</span></div><div className="work-heading"><h2>MADE WITH<br/><em>INTENTION.</em></h2><p>A collection of ideas, experiments<br/>and projects in progress.</p></div><div className="project-list">{projects.map(p=><a className="project" href={p.url} target="_blank" rel="noreferrer" key={p.name}><span className="project-n">{p.n}</span><div className={'project-art '+p.color}><span>{p.name.split(' ').map(s=>s[0]).join('')}</span><i>✳</i></div><div className="project-info"><span>{p.type}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="tags">{p.tags.map(t=><small key={t}>{t}</small>)}</div></div><span className="project-arrow"><ArrowUpRight/></span></a>)}</div><a className="all-work" href="https://github.com/agastyatomar?tab=repositories" target="_blank" rel="noreferrer">MORE ON GITHUB <ArrowUpRight size={16}/></a></section>

    <section className="card-section section-pad"><div className="wrap"><div className="section-kicker"><span>04 / A LITTLE MORE PERSONAL</span><span>YOUR FRIENDLY INTERNET BUILDER</span></div><div className="card-layout"><div><h2>THE HUMAN<br/>BEHIND THE<br/><em>SCREEN.</em></h2><p className="card-hint">A small digital ID. Tap to flip it.</p></div><button className={'id-card '+(flipped?'flipped':'')} onClick={()=>setFlipped(!flipped)} aria-label="Flip digital ID card"><div className="card-face card-front"><div className="card-top"><span>AADI® / DIGITAL ID</span><Sparkles size={18}/></div><div className="card-avatar">a<span>.</span></div><div className="card-name">AGASTYA<br/>TOMAR<span>®</span></div><div className="card-bottom"><span>STUDENT / BUILDER</span><span>INDIA · 2026</span></div></div><div className="card-face card-back"><Sparkles size={24}/><h3>STAY CURIOUS.</h3><p>Keep making<br/>interesting things.</p><span>FLIP TO RETURN ↻</span></div></button></div></div></section>

    <section className="contact section-pad wrap" id="contact"><div className="section-kicker"><span>05 / YOUR TURN</span><span>HAVE A GOOD IDEA?</span></div><h2>LET'S MAKE<br/>IT <em>REAL.</em><span className="lime">✳</span></h2><div className="contact-bottom"><p>Have a project, an interesting thought<br/>or just want to say hello? My inbox is open.</p><a href="mailto:hello@agastyatomar.dev" className="contact-btn">SAY HELLO <ArrowUpRight/></a></div></section>
    <footer className="footer wrap" id="contact"><a className="brand" href="#top"><span className="brand-mark">a.</span><span>AADI<span className="brand-dot">®</span></span></a><span>DESIGNED & BUILT WITH CURIOSITY.</span><div className="socials"><a href="https://github.com/agastyatomar" aria-label="GitHub"><Github/></a><a href="https://instagram.com/pvttt.aadi_315" aria-label="Instagram"><Instagram/></a><a href="mailto:hello@agastyatomar.dev" aria-label="Email"><Mail/></a></div><span>© 2026 AADI</span></footer>
  </main>
}
export default App