"use client";

import { useEffect, useState } from "react";

const milestones = [
  "Development and implementation of BB84 Quantum Key Distribution Protocol",
  "Tabletop setup for Spontaneous Parametric Down-Conversion (SPDC)",
  "Low-cost micron-scale photolithography setup by students",
  "Setup and deployment of Michelson and Mach-Zehnder Interferometers",
  "Crystal growth using SR and Bridgman methods",
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
const gallery = [
  ["/images/lab-1.jpg", "Students collaborating in the Anoraniya workspace"],
  ["/images/lab-2.jpg", "Hands-on experimental work"],
  ["/images/lab-3.jpg", "Research and laboratory setup"],
  ["/images/lab-4.jpg", "Club members working together"],
  ["/images/lab-5.jpg", "Experimental development"],
  ["/images/lab-6.jpg", "Optics and instrumentation"],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const fn = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", fn); return () => window.removeEventListener("scroll", fn); }, []);

  return <main>
    <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
      <a href="#home" className="brand"><img src="/images/anoraniya-logo.jpg" alt="Anoraniya logo" className="brandLogo"/><span><b>ANORANIYA</b><small>QUANTUM TECHNOLOGY CLUB · RVCE</small></span></a>
      <button className="menuButton" onClick={() => setMenu(!menu)}>☰</button>
      <div className={`navLinks ${menu ? "open" : ""}`}>
        <a href="#about">About</a><a href="#work">Research</a><a href="#gallery">Gallery</a><a href="#milestones">Milestones</a><a href="#leadership">Leadership</a><a href="#founders">Founders</a><a href="#contact" className="navCta">Join the Journey ↗</a>
      </div>
    </nav>

    <section id="home" className="hero">
      <div className="grid"></div><div className="heroPhoto"><img src="/images/hero-lab.jpg" alt="Anoraniya laboratory experiment"/></div><div className="heroShade"></div>
      <div className="heroInner"><div className="eyebrow"><span></span> RV COLLEGE OF ENGINEERING · BENGALURU</div><h1>Engineering the<br/><em>quantum future.</em></h1><p className="heroCopy">A student-driven ecosystem exploring quantum mechanics, quantum computing, photonics, nanotechnology and the technologies shaping what comes next.</p><div className="heroActions"><a href="#about" className="primaryBtn">Explore Anoraniya ↗</a><a href="#gallery" className="textBtn">See our work ↓</a></div></div>
      <div className="heroBadge"><img src="/images/anoraniya-logo.jpg" alt="Official Anoraniya emblem"/><span>OFFICIAL QUANTUM<br/>TECHNOLOGY CLUB · RVCE</span></div><div className="scrollHint">↓ &nbsp; SCROLL TO EXPLORE</div>
    </section>

    <section id="about" className="section about"><div className="sectionLabel">01 / WHO WE ARE</div><div className="twoCol"><div><h2>Beyond the<br/><em>classroom.</em></h2></div><div className="bodyLarge"><p>Anoraniya is the official Quantum Technology Club at RV College of Engineering — a dynamic platform for students to explore the frontiers of quantum mechanics, quantum computing and advanced quantum technologies.</p><p>We promote critical thinking, innovation and a research-centric approach, creating an intellectually stimulating environment built on academic curiosity, collaborative learning and interdisciplinary engagement.</p></div></div><div className="stats"><div><strong>10+</strong><span>Research & engineering projects</span></div><div><strong>5</strong><span>Institutional visits & collaborations</span></div><div><strong>∞</strong><span>Questions worth exploring</span></div></div></section>

    <section id="work" className="section darkSection"><div className="sectionLabel">02 / WHAT WE BUILD</div><div className="sectionIntro"><h2>Ideas into<br/><em>experiments.</em></h2><p>From quantum communication to nanofabrication, our projects turn scientific curiosity into hands-on engineering.</p></div><div className="projectGrid">{projects.map(p => <article className="projectCard" key={p.n}><span>{p.n}</span><h3>{p.title}</h3><p>{p.text}</p><div className="cardArrow">↗</div></article>)}</div></section>

    <section id="gallery" className="section gallerySection"><div className="sectionLabel">03 / INSIDE ANORANIYA</div><div className="galleryHeading"><h2>Built in the<br/><em>real world.</em></h2><p>Real experiments, real instruments and a student community learning by building.</p></div><div className="galleryGrid">{gallery.map(([src, alt], i) => <figure className={`galleryItem item${i+1}`} key={src}><img src={src} alt={alt}/><figcaption>{String(i+1).padStart(2,"0")} / {alt}</figcaption></figure>)}</div></section>

    <section id="milestones" className="section milestones"><div className="sectionLabel">04 / THE JOURNEY SO FAR</div><div className="twoCol"><h2>Milestones in<br/><em>the making.</em></h2><div className="bodyLarge"><p>A growing body of student-led work across quantum communication, optics, materials science and computational research.</p></div></div><div className="milestoneList">{milestones.map((m,i)=><div className="milestone" key={m}><span>0{i+1}</span><p>{m}</p><b>↗</b></div>)}</div></section>

    <section className="visitVisual"><div className="visitPhotos"><img src="/images/visit-1.jpg" alt="Anoraniya institutional visit"/><img src="/images/visit-2.jpg" alt="Anoraniya visit and learning experience"/><img src="/images/visit-3.jpg" alt="Club members during a visit"/><img src="/images/visit-4.jpg" alt="Anoraniya members at a research facility"/></div><div className="visitContent"><div className="sectionLabel">05 / LEARNING BEYOND CAMPUS</div><h2>Connected to the<br/><em>ecosystem.</em></h2><div className="visitList">{visits.map((v,i)=><div key={v}><span>{String(i+1).padStart(2,"0")}</span>{v}</div>)}</div></div></section>

    <section id="leadership" className="section leadership"><div className="sectionLabel">06 / THE PEOPLE</div><h2>Guided by science.<br/><em>Driven by students.</em></h2><div className="peopleGrid"><div className="advisor"><span>FACULTY ADVISORS</span><h3>Dr. Tribikram Gupta<br/>Dr. Sateesh Babu</h3><p>Mentoring the club's academic direction and scientific initiatives.</p></div><div className="leader suchirCard">

  <div className="leaderImage">
    <img
      src="/images/founders/suchir-dornala.png"
      alt="Suchir Dornala"
    />
  </div>

  <div className="leaderMeta">

    <span>CLUB HEAD</span>

    <h3>Suchir Dornala</h3>

    <p>
      Leading Anoraniya's student initiatives,
      research culture and community.
    </p>

  </div>

</div><div className="leader"><span>CLUB CO-HEAD</span><h3>Nireeksha A</h3><p>Supporting the club's technical and organisational direction.</p><div className="leaderMark">Q</div></div></div></section>


    <section id="founders" className="foundersSection">
      <div className="sectionLabel">07 / THE FOUNDATIONS</div>

      <div className="foundersHero">
        <div>
          <h2>Built by curiosity.<br/><em>Founded with purpose.</em></h2>
          <p>Meet the founding members who helped establish Anoraniya as a student-driven platform for quantum technology, scientific inquiry and hands-on experimentation at RVCE.</p>
        </div>
        <div className="founderTag">ANORANIYA<br/><span>FOUNDING STORY</span></div>
      </div>

      <div className="founderCards">
        <article className="founderCard">
          <div className="founderImage">
            <img src="/images/founders/raghava-mukunda.jpg" alt="Raghava Mukunda"/>
          </div>
          <div className="founderMeta">
            <span>FOUNDING MEMBER · 01</span>
            <h3>Raghava<br/>Mukunda</h3>
            <p>RV College of Engineering<br/>Electronics & Communication Engineering<br/>Batch of 2023–2027</p>
          </div>
        </article>

        <article className="founderCard">
          <div className="founderImage">
            <img src="/images/founders/prajwal-j.jpg" alt="Prajwal J"/>
          </div>
          <div className="founderMeta">
            <span>FOUNDING MEMBER · 02</span>
            <h3>Prajwal J</h3>
            <p>RV College of Engineering<br/>Electronics & Communication Engineering<br/>Batch of 2023–2027</p>
          </div>
        </article>
      </div>
    </section>

    <section className="joinSection"><div className="sectionLabel">08 / YOUR TURN</div><h2>Curious enough to<br/><em>change the world?</em></h2><p>Membership is open to RVCE students through a formal application and interview process at the beginning of each academic year. Selection is based on enthusiasm, initiative and alignment with Anoraniya's mission.</p><a href="mailto:anoraniya@rvce.edu.in?subject=Interest%20in%20joining%20Anoraniya" className="primaryBtn lightBtn">Express your interest ↗</a></section>

    <footer id="contact"><div className="footerTop"><div className="footerBrand"><img src="/images/anoraniya-logo.jpg" alt="Anoraniya logo"/><div><h2>ANORANIYA</h2><p>Quantum Technology Club<br/>RV College of Engineering</p></div></div><div className="footerInfo"><div><span>WORKSPACE</span><p>ANORANIYA · PH306<br/>Department of Physics, RVCE</p></div><div><span>CONTACT</span><p><a href="mailto:anoraniya@rvce.edu.in">anoraniya@rvce.edu.in</a><br/>8762463439</p></div></div></div><div className="footerBottom"><span>© {new Date().getFullYear()} ANORANIYA · RVCE</span><span>EXPLORING THE QUANTUM FRONTIER</span></div></footer>
  </main>;
}
