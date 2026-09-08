"use client";

import { useEffect, useState } from "react";

const milestones = [
  "Development and implementation of BB84 Quantum Key Distribution Protocol",
  "Tabletop setup for Spontaneous Parametric Down-Conversion (SPDC)",
  "Low-cost micron-scale photolithography setup by students",
  "Setup and deployment of Michelson and Mach-Zehnder Interferometers",
  "Crystal growth using SR method",
  "Crystal growth using Bridgman method",
  "DFT simulations for nanoporous graphene-based gas sensors"
];

const projects = [
  { n: "01", title: "Quantum Communication", text: "BB84 Quantum Key Distribution and SPDC tabletop systems for photodetector characterisation." },
  { n: "02", title: "Nanofabrication", text: "High-resolution lithography, sputtering and low-temperature analysis of micro and nano circuits." },
  { n: "03", title: "Quantum Sensors", text: "Josephson junction magnetic-field sensing and interferometric systems for real-world sensor development." },
  { n: "04", title: "Precision Engineering", text: "MEMS-based gyroscope development and automated crystal growth systems." },
  { n: "05", title: "Photonics", text: "Design of photonic test equipment for SNSPD devices and advanced optical experimentation." },
  { n: "06", title: "Materials Research", text: "Growth of KDP crystals using the SR method and supporting experimental automation." }
];

const visits = ["Raman Research Institute (RRI), Bengaluru", "QpiAI, Bengaluru", "SSN College of Engineering, Chennai", "Visvesvaraya Technological University (VTU), Bengaluru", "IGCAR, Kalpakkam"];

function AtomLogo() {
  return (
    <div className="logoMark" aria-label="Anoraniya logo">
      <span className="orbit o1"></span><span className="orbit o2"></span><span className="orbit o3"></span>
      <span className="nucleus"></span>
    </div>
  );
}

function Icon({ type }) {
  const paths = {
    arrow: <><path d="M5 12h14M13 5l7 7-7 7"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M7 3h3l1.5 4-2 1.5c1.1 2.2 2.8 3.9 5 5l1.5-2L20 13v3c0 1.1-.9 2-2 2C10.3 18 6 13.7 6 6c0-1.1.9-2 2-1.5V3Z"/></>
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[type]}</svg>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <main>
      <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <a href="#home" className="brand" onClick={() => setMenu(false)}>
          <AtomLogo />
          <span><b>ANORANIYA</b><small>QUANTUM TECHNOLOGY CLUB · RVCE</small></span>
        </a>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
        <div className={`navLinks ${menu ? "open" : ""}`}>
          <a href="#about" onClick={() => setMenu(false)}>About</a>
          <a href="#work" onClick={() => setMenu(false)}>Research</a>
          <a href="#milestones" onClick={() => setMenu(false)}>Milestones</a>
          <a href="#leadership" onClick={() => setMenu(false)}>Leadership</a>
          <a href="#contact" className="navCta" onClick={() => setMenu(false)}>Join the Journey <Icon type="arrow"/></a>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="grid"></div>
        <div className="quantumGlow g1"></div><div className="quantumGlow g2"></div>
        <div className="heroInner">
          <div className="eyebrow"><span></span> RV COLLEGE OF ENGINEERING · BENGALURU</div>
          <h1>Engineering the<br/><em>quantum future.</em></h1>
          <p className="heroCopy">A student-driven ecosystem exploring quantum mechanics, quantum computing, photonics, nanotechnology and the technologies shaping what comes next.</p>
          <div className="heroActions">
            <a href="#about" className="primaryBtn">Explore Anoraniya <Icon type="arrow"/></a>
            <a href="#contact" className="textBtn">Become a member <span>↓</span></a>
          </div>
        </div>
        <div className="heroOrb">
          <div className="orbital"><i></i><i></i><i></i><b></b></div>
          <p>ANORANIYA<br/><span>QUANTUM TECHNOLOGY CLUB</span></p>
        </div>
        <div className="scrollHint"><span></span> SCROLL TO EXPLORE</div>
      </section>

      <section id="about" className="section about">
        <div className="sectionLabel">01 / WHO WE ARE</div>
        <div className="twoCol">
          <div><h2>Beyond the<br/><em>classroom.</em></h2></div>
          <div className="bodyLarge">
            <p>Anoraniya is the official Quantum Technology Club at RV College of Engineering — a dynamic platform for students to explore the frontiers of quantum mechanics, quantum computing and advanced quantum technologies.</p>
            <p>We promote critical thinking, innovation and a research-centric approach, creating an intellectually stimulating environment built on academic curiosity, collaborative learning and interdisciplinary engagement.</p>
            <a href="#work" className="lineLink">Discover our work <Icon type="arrow"/></a>
          </div>
        </div>
        <div className="stats">
          <div><strong>10+</strong><span>Research & engineering projects</span></div>
          <div><strong>5</strong><span>Institutional visits & collaborations</span></div>
          <div><strong>∞</strong><span>Questions worth exploring</span></div>
        </div>
      </section>

      <section id="work" className="section darkSection">
        <div className="sectionLabel">02 / WHAT WE BUILD</div>
        <div className="sectionIntro"><h2>Ideas into<br/><em>experiments.</em></h2><p>From quantum communication to nanofabrication, our projects turn scientific curiosity into hands-on engineering.</p></div>
        <div className="projectGrid">
          {projects.map((p) => <article className="projectCard" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p><div className="cardArrow">↗</div></article>)}
        </div>
      </section>

      <section id="milestones" className="section milestones">
        <div className="sectionLabel">03 / THE JOURNEY SO FAR</div>
        <div className="twoCol">
          <h2>Milestones in<br/><em>the making.</em></h2>
          <div><p className="bodyLarge">A growing body of student-led work across quantum communication, optics, materials science and computational research.</p></div>
        </div>
        <div className="milestoneList">
          {milestones.map((m, i) => <div className="milestone" key={m}><span>0{i+1}</span><p>{m}</p><Icon type="arrow"/></div>)}
        </div>
      </section>

      <section className="visitSection">
        <div className="visitHeader"><div className="sectionLabel">04 / LEARNING BEYOND CAMPUS</div><h2>Connected to the<br/><em>ecosystem.</em></h2></div>
        <div className="visitList">
          {visits.map((v, i) => <div key={v}><span>{String(i+1).padStart(2,"0")}</span>{v}</div>)}
        </div>
      </section>

      <section id="leadership" className="section leadership">
        <div className="sectionLabel">05 / THE PEOPLE</div>
        <h2>Guided by science.<br/><em>Driven by students.</em></h2>
        <div className="peopleGrid">
          <div className="advisor"><span>FACULTY ADVISORS</span><h3>Dr. Tribikram Gupta<br/>Dr. Sateesh Babu</h3><p>Mentoring the club's academic direction and scientific initiatives.</p></div>
          <div className="leader"><span>CLUB HEAD</span><h3>Suchir Dornala</h3><div className="portrait placeholderPortrait">S</div></div>
          <div className="leader"><span>CLUB CO-HEAD</span><h3>Nireeksha A</h3><div className="portrait placeholderPortrait">N</div></div>
        </div>
        <div className="founders"><span>FOUNDING MEMBERS</span><p>Raghava Mukunda &nbsp;·&nbsp; Prajwal J</p></div>
      </section>

      <section id="join" className="joinSection">
        <div className="joinNoise"></div>
        <div className="sectionLabel">06 / YOUR TURN</div>
        <h2>Curious enough to<br/><em>change the world?</em></h2>
        <p>Membership is open to RVCE students through a formal application and interview process at the beginning of each academic year. Selection is based on enthusiasm, initiative and alignment with Anoraniya's mission.</p>
        <a href="mailto:anoraniya@rvce.edu.in?subject=Interest%20in%20joining%20Anoraniya" className="primaryBtn lightBtn">Express your interest <Icon type="arrow"/></a>
      </section>

      <footer id="contact">
        <div className="footerTop">
          <div className="footerBrand"><AtomLogo/><h2>ANORANIYA</h2><p>Quantum Technology Club<br/>RV College of Engineering</p></div>
          <div className="footerInfo">
            <div><span>WORKSPACE</span><p><Icon type="pin"/> ANORANIYA · PH306<br/>Department of Physics, RVCE</p></div>
            <div><span>CONTACT</span><p><Icon type="mail"/> <a href="mailto:anoraniya@rvce.edu.in">anoraniya@rvce.edu.in</a><br/><Icon type="phone"/> 8762463439</p></div>
          </div>
        </div>
        <div className="footerBottom"><span>© {new Date().getFullYear()} ANORANIYA · RVCE</span><span>EXPLORING THE QUANTUM FRONTIER</span></div>
      </footer>
    </main>
  );
}
