import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sayyeda Fatima Khizer Mufti — Software Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Sayyeda Fatima Khizer Mufti — Software Engineer building thoughtful web experiences and human-centered interfaces.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const STYLES = `
:root{--bg:#08040f;--bg2:#100920;--bg3:#160c2e;--purple:#7c3aed;--purple-light:#a855f7;--cyan:#00e5ff;--cyan-dim:#00b8d9;--text:#e8e0f5;--text-muted:#8b7aa8;--glass:rgba(124,58,237,0.08);--glass-border:rgba(124,58,237,0.25);--card:rgba(16,9,32,0.7)}
.portfolio,.portfolio *,.portfolio *::before,.portfolio *::after{box-sizing:border-box}
.portfolio{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);overflow-x:hidden;line-height:1.7;min-height:100vh;position:relative}
.portfolio h1,.portfolio h2,.portfolio h3,.portfolio h4{margin:0}
html{scroll-behavior:smooth}
.portfolio::before{content:'';position:fixed;inset:0;z-index:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");pointer-events:none;opacity:.4}
.orb{position:fixed;border-radius:50%;filter:blur(120px);pointer-events:none;z-index:0;opacity:.18;animation:drift 18s ease-in-out infinite alternate}
.orb1{width:600px;height:600px;background:var(--purple);top:-200px;left:-150px;animation-duration:20s}
.orb2{width:400px;height:400px;background:var(--cyan);bottom:-100px;right:-100px;animation-duration:25s}
.orb3{width:300px;height:300px;background:var(--purple-light);top:40%;left:60%;animation-duration:15s}
@keyframes drift{from{transform:translate(0,0) scale(1)}to{transform:translate(40px,30px) scale(1.08)}}
.portfolio nav{position:fixed;top:0;left:0;right:0;z-index:100;padding:1.2rem 4rem;display:flex;justify-content:space-between;align-items:center;background:rgba(8,4,15,0.7);backdrop-filter:blur(20px);border-bottom:1px solid var(--glass-border);transition:all .3s}
.nav-logo{font-family:'Syne',sans-serif;font-weight:800;font-size:1.2rem;background:linear-gradient(135deg,var(--purple-light),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.nav-links{display:flex;gap:2.5rem;list-style:none;margin:0;padding:0}
.nav-links a{color:var(--text-muted);text-decoration:none;font-size:.9rem;font-weight:500;letter-spacing:.5px;transition:color .25s;position:relative}
.nav-links a::after{content:'';position:absolute;bottom:-4px;left:0;width:0;height:2px;background:linear-gradient(90deg,var(--purple),var(--cyan));transition:width .3s}
.nav-links a:hover{color:var(--text)}
.nav-links a:hover::after{width:100%}
.hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;background:none;border:none;padding:0}
.hamburger span{width:26px;height:2px;background:var(--text);transition:.3s}
.portfolio section{position:relative;z-index:1}
.container{max-width:1100px;margin:0 auto;padding:0 2rem}
#hero{min-height:100vh;display:flex;align-items:center;padding:8rem 2rem 4rem}
.hero-inner{max-width:1100px;margin:0 auto;width:100%}
.hero-eyebrow{display:inline-flex;align-items:center;gap:.6rem;font-size:.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--cyan);font-weight:500;margin-bottom:1.5rem;opacity:0;animation:fadeUp .8s .2s forwards}
.hero-eyebrow::before{content:'';display:block;width:30px;height:1px;background:var(--cyan)}
.hero-name{font-family:'Syne',sans-serif;font-size:clamp(2.6rem,7vw,5.6rem);font-weight:800;line-height:1.05;letter-spacing:-2px;opacity:0;animation:fadeUp .9s .35s forwards}
.hero-name .gradient-text{background:linear-gradient(135deg,var(--purple-light) 0%,var(--cyan) 60%);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero-tagline{font-family:'Syne',sans-serif;font-size:1.05rem;font-weight:600;color:var(--text-muted);border-left:3px solid var(--cyan);padding-left:1rem;margin:2rem 0;opacity:0;animation:fadeUp .9s .65s forwards;max-width:640px}
.hero-ctas{display:flex;gap:1rem;flex-wrap:wrap;margin-top:2.5rem;opacity:0;animation:fadeUp .9s .8s forwards}
.btn-primary{padding:.85rem 2rem;background:linear-gradient(135deg,var(--purple),var(--cyan-dim));color:#fff;border:none;border-radius:50px;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:500;cursor:pointer;text-decoration:none;transition:transform .25s,box-shadow .25s;box-shadow:0 0 30px rgba(124,58,237,.4);display:inline-block}
.btn-primary:hover{transform:translateY(-3px);box-shadow:0 8px 40px rgba(0,229,255,.35)}
.btn-outline{padding:.85rem 2rem;background:transparent;color:var(--text);border:1px solid var(--glass-border);border-radius:50px;font-family:'DM Sans',sans-serif;font-size:.95rem;font-weight:500;cursor:pointer;text-decoration:none;transition:border-color .25s,color .25s,transform .25s;display:inline-block}
.btn-outline:hover{border-color:var(--cyan);color:var(--cyan);transform:translateY(-3px)}
.hero-scroll{margin-top:4rem;display:flex;align-items:center;gap:.6rem;font-size:.8rem;letter-spacing:1.5px;text-transform:uppercase;color:var(--text-muted);opacity:0;animation:fadeUp 1s 1.2s forwards}
.scroll-line{width:40px;height:1px;background:var(--text-muted);animation:scrollPulse 2s infinite}
@keyframes scrollPulse{0%,100%{width:40px;background:var(--text-muted)}50%{width:70px;background:var(--cyan)}}
.section-header{margin-bottom:4rem;text-align:center}
.section-label{font-size:.75rem;letter-spacing:3px;text-transform:uppercase;color:var(--cyan);font-weight:500;margin-bottom:.8rem;display:block}
.section-title{font-family:'Syne',sans-serif;font-size:clamp(2rem,5vw,3rem);font-weight:800;letter-spacing:-1px;line-height:1.1}
.section-title .accent{color:var(--purple-light)}
.section-line{width:60px;height:3px;background:linear-gradient(90deg,var(--purple),var(--cyan));margin:1.2rem auto 0;border-radius:2px}
#about{padding:7rem 0;background:var(--bg2)}
.about-content{max-width:780px;margin:0 auto}
.about-content p{color:var(--text-muted);line-height:1.95;margin-bottom:1.4rem;font-size:1.05rem}
.about-content p strong{color:var(--text);font-weight:600}
.about-content p em{color:var(--cyan);font-style:normal;font-weight:500}
#skills{padding:7rem 0}
.skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.skill-category{background:var(--card);border:1px solid var(--glass-border);border-radius:20px;padding:2rem;backdrop-filter:blur(20px);transition:border-color .3s,transform .3s,box-shadow .3s}
.skill-category:hover{border-color:var(--purple);transform:translateY(-5px);box-shadow:0 20px 60px rgba(124,58,237,.2)}
.skill-cat-header{display:flex;align-items:center;gap:.8rem;margin-bottom:1.2rem}
.skill-cat-icon-svg{width:32px;height:32px;flex-shrink:0;color:var(--cyan)}
.skill-cat-title{font-family:'Syne',sans-serif;font-weight:700;font-size:.95rem;color:var(--cyan);letter-spacing:1px;text-transform:uppercase}
.skill-tags{display:flex;flex-wrap:wrap;gap:.5rem}
.skill-tag{background:rgba(124,58,237,.12);border:1px solid rgba(124,58,237,.3);border-radius:30px;padding:.35rem .9rem;font-size:.82rem;color:var(--text-muted);transition:background .25s,color .25s,border-color .25s}
.skill-tag:hover{background:rgba(0,229,255,.1);border-color:var(--cyan);color:var(--cyan)}
#projects{padding:7rem 0;background:var(--bg2)}
.projects-grid{display:flex;flex-direction:column;gap:3rem}
.project-card{background:var(--card);border:1px solid var(--glass-border);border-radius:24px;overflow:hidden;backdrop-filter:blur(20px);display:grid;grid-template-columns:1fr 1fr;transition:border-color .3s,box-shadow .3s,transform .3s}
.project-card:hover{border-color:var(--purple-light);box-shadow:0 30px 80px rgba(124,58,237,.25);transform:translateY(-4px)}
.project-card.reverse .project-visual{order:2}
.project-visual{padding:3rem;display:flex;align-items:center;justify-content:center;min-height:300px;position:relative;overflow:hidden}
.project-visual.kaavish{background:linear-gradient(135deg,#0f0a2a 0%,#1a0f40 50%,#0d1a3a 100%)}
.project-visual.farm{background:linear-gradient(135deg,#0a1a0a 0%,#0f2a0f 50%,#081408 100%)}
.proj-icon-wrap{display:flex;align-items:center;justify-content:center;animation:float 4s ease-in-out infinite;color:#fff}
.proj-icon-wrap svg{width:140px;height:140px;filter:drop-shadow(0 10px 30px rgba(0,229,255,.35))}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}
.project-content{padding:3rem;display:flex;flex-direction:column;justify-content:center}
.project-num{font-family:'Syne',sans-serif;font-size:.75rem;font-weight:700;letter-spacing:3px;color:var(--cyan);text-transform:uppercase;margin-bottom:.8rem}
.project-title{font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;letter-spacing:-.5px;margin-bottom:1rem;line-height:1.1}
.project-desc{color:var(--text-muted);font-size:.95rem;line-height:1.8;margin-bottom:1.5rem}
.project-stack{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.8rem}
.stack-tag{background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.2);border-radius:20px;padding:.25rem .75rem;font-size:.78rem;color:var(--cyan-dim)}
.project-links{display:flex;gap:1rem;flex-wrap:wrap}
.proj-link{display:inline-flex;align-items:center;gap:.4rem;font-size:.85rem;font-weight:500;text-decoration:none;transition:color .25s}
.proj-link.github{color:var(--text-muted)}
.proj-link.github:hover{color:var(--text)}
.proj-link.live{color:var(--cyan)}
.proj-link.live:hover{color:#fff}
#uiux{padding:7rem 0}
.uiux-banner{background:linear-gradient(135deg,rgba(0,30,60,.85),rgba(124,58,237,.2));border:1px solid rgba(0,229,255,.25);border-radius:30px;padding:4rem;margin-bottom:4rem;position:relative;overflow:hidden}
.uiux-banner::before{content:'';position:absolute;top:-100px;right:-100px;width:500px;height:500px;border-radius:50%;background:radial-gradient(circle,rgba(0,229,255,.1),transparent 70%);pointer-events:none}
.uiux-banner-top{display:flex;align-items:flex-start;justify-content:space-between;gap:2rem;flex-wrap:wrap;position:relative}
.uiux-tag{display:inline-block;background:rgba(0,229,255,.1);border:1px solid rgba(0,229,255,.3);border-radius:20px;padding:.35rem 1rem;font-size:.75rem;color:var(--cyan);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:1.2rem}
.uiux-banner h3{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,4vw,2.8rem);font-weight:800;letter-spacing:-1px;margin-bottom:1rem;line-height:1.1}
.uiux-banner p{color:var(--text-muted);font-size:1rem;max-width:580px;line-height:1.8}
.figma-btn{display:inline-flex;align-items:center;gap:.6rem;flex-shrink:0;padding:.8rem 1.6rem;background:linear-gradient(135deg,#1a0f40,#0f2040);border:1px solid rgba(0,229,255,.4);border-radius:50px;color:var(--cyan);text-decoration:none;font-size:.88rem;font-weight:500;transition:box-shadow .3s,transform .3s}
.figma-btn:hover{box-shadow:0 0 30px rgba(0,229,255,.3);transform:translateY(-2px)}
.process-row{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1.5rem;margin-bottom:4rem}
.process-step{background:var(--card);border:1px solid var(--glass-border);border-radius:18px;padding:2rem;backdrop-filter:blur(20px);position:relative}
.process-step::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--purple),var(--cyan));border-radius:18px 18px 0 0}
.step-num{font-family:'Syne',sans-serif;font-size:2.5rem;font-weight:800;color:rgba(124,58,237,.25);line-height:1;margin-bottom:.8rem}
.step-title{font-family:'Syne',sans-serif;font-weight:700;font-size:.9rem;color:var(--cyan);margin-bottom:.6rem;letter-spacing:.5px}
.step-text{color:var(--text-muted);font-size:.85rem;line-height:1.7}
.screens-label{font-family:'Syne',sans-serif;font-weight:700;font-size:1.1rem;color:var(--text);margin-bottom:1.8rem;display:flex;align-items:center;gap:.8rem}
.screens-label::after{content:'';flex:1;height:1px;background:var(--glass-border)}
.screens-strip{position:relative;margin:0 -2rem;padding:1rem 2rem 2rem;overflow-x:auto;overflow-y:hidden;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:thin;scrollbar-color:var(--purple) transparent}
.screens-strip::-webkit-scrollbar{height:6px}
.screens-strip::-webkit-scrollbar-thumb{background:linear-gradient(90deg,var(--purple),var(--cyan));border-radius:3px}
.screens-track{display:flex;gap:1.8rem;padding-bottom:.5rem;width:max-content}
.phone-frame{position:relative;width:240px;flex-shrink:0;scroll-snap-align:start;border-radius:38px;padding:12px;background:linear-gradient(145deg,#1a0f30,#05030a);border:1px solid rgba(255,255,255,.08);box-shadow:0 30px 70px rgba(0,0,0,.55),0 0 0 1px rgba(124,58,237,.18),inset 0 1px 0 rgba(255,255,255,.05);transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}
.phone-frame:hover{transform:translateY(-10px);border-color:var(--cyan);box-shadow:0 40px 80px rgba(0,229,255,.2),0 0 0 1px rgba(0,229,255,.35)}
.phone-frame::before{content:'';position:absolute;top:20px;left:50%;transform:translateX(-50%);width:80px;height:22px;background:#000;border-radius:14px;z-index:2}
.phone-screen{position:relative;width:100%;aspect-ratio:9/19.5;border-radius:28px;overflow:hidden;background:#fff;display:flex;align-items:flex-start;justify-content:center}
.phone-screen img{width:100%;height:100%;object-fit:contain;object-position:top center;display:block;background:#fff}
.phone-caption{margin-top:1rem;font-size:.78rem;font-weight:500;color:var(--text-muted);text-align:center;letter-spacing:.3px}
.phone-caption strong{color:var(--text);font-weight:600;display:block;margin-bottom:.15rem;font-family:'Syne',sans-serif;font-size:.88rem}
.web-frame{position:relative;width:560px;flex-shrink:0;scroll-snap-align:start;border-radius:14px;padding:32px 10px 14px;background:linear-gradient(145deg,#1a0f30,#05030a);border:1px solid rgba(255,255,255,.08);box-shadow:0 30px 70px rgba(0,0,0,.55),0 0 0 1px rgba(124,58,237,.18)}
.web-frame::before{content:'● ● ●';position:absolute;top:10px;left:16px;color:rgba(255,255,255,.4);font-size:11px;letter-spacing:5px}
.web-frame::after{content:'goride.app';position:absolute;top:8px;left:50%;transform:translateX(-50%);background:rgba(255,255,255,.06);color:rgba(255,255,255,.5);font-size:10px;padding:3px 18px;border-radius:6px;letter-spacing:.5px}
.web-screen{width:100%;aspect-ratio:16/10;border-radius:8px;overflow:hidden;background:#fff;display:flex;align-items:flex-start;justify-content:center}
.web-screen img{width:100%;height:100%;object-fit:contain;object-position:top center;display:block;background:#fff}
.web-caption{margin-top:1rem;font-size:.78rem;font-weight:500;color:var(--text-muted);text-align:center;letter-spacing:.3px}
.web-caption strong{color:var(--text);font-weight:600;display:block;margin-bottom:.15rem;font-family:'Syne',sans-serif;font-size:.88rem}
.screens-label-sub{margin-top:3rem}
.case-study + .case-study{margin-top:6rem;padding-top:6rem;border-top:1px solid var(--glass-border)}
.case-tag-nutrinest{background:rgba(143,185,150,.14);border-color:rgba(143,185,150,.4);color:#a8d4af}
.uiux-banner.nutrinest{background:linear-gradient(135deg,rgba(20,40,25,.7),rgba(143,185,150,.18));border-color:rgba(143,185,150,.3)}
.uiux-banner.nutrinest::before{background:radial-gradient(circle,rgba(143,185,150,.14),transparent 70%)}
#education{padding:7rem 0;background:var(--bg2)}
.timeline{position:relative;padding-left:2rem;max-width:780px;margin:0 auto}
.timeline::before{content:'';position:absolute;left:0;top:10px;bottom:10px;width:2px;background:linear-gradient(to bottom,var(--purple),var(--cyan),transparent)}
.timeline-item{position:relative;margin-bottom:3rem;padding-left:2.5rem}
.timeline-dot{position:absolute;left:-2.5rem;top:8px;width:16px;height:16px;border-radius:50%;background:linear-gradient(135deg,var(--purple),var(--cyan));border:3px solid var(--bg);box-shadow:0 0 20px rgba(124,58,237,.6)}
.timeline-date{font-size:.78rem;color:var(--cyan);letter-spacing:1.5px;text-transform:uppercase;font-weight:600;margin-bottom:.5rem}
.timeline-degree{font-family:'Syne',sans-serif;font-size:1.2rem;font-weight:700;margin-bottom:.2rem}
.timeline-school{color:var(--text-muted);font-size:.95rem;margin-bottom:.5rem}
#contact{padding:7rem 0}
.contact-inner{max-width:700px;margin:0 auto;text-align:center}
.contact-email{display:block;margin:2rem 0;font-family:'Syne',sans-serif;font-size:clamp(1.5rem,4vw,2.5rem);font-weight:800;letter-spacing:-1px;background:linear-gradient(135deg,var(--purple-light),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none;transition:opacity .25s}
.contact-email:hover{opacity:.8}
.contact-links{display:flex;justify-content:center;gap:1.5rem;flex-wrap:wrap;margin-top:2.5rem}
.contact-link{display:inline-flex;align-items:center;gap:.5rem;padding:.75rem 1.5rem;background:var(--card);border:1px solid var(--glass-border);border-radius:50px;color:var(--text-muted);text-decoration:none;font-size:.9rem;transition:border-color .25s,color .25s,transform .25s}
.contact-link:hover{border-color:var(--cyan);color:var(--cyan);transform:translateY(-3px)}
.portfolio footer{border-top:1px solid var(--glass-border);padding:2rem;text-align:center;color:var(--text-muted);font-size:.85rem;z-index:1;position:relative}
.portfolio footer span{background:linear-gradient(135deg,var(--purple-light),var(--cyan));-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:600}
@keyframes fadeUp{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:768px){.portfolio nav{padding:1rem 1.5rem}.nav-links{display:none;flex-direction:column;position:absolute;top:100%;left:0;right:0;background:rgba(8,4,15,.97);padding:1.5rem;gap:1.2rem;border-bottom:1px solid var(--glass-border)}.nav-links.open{display:flex}.hamburger{display:flex}.project-card{grid-template-columns:1fr}.project-card.reverse .project-visual{order:0}.project-visual{min-height:200px}.uiux-banner{padding:2rem}.uiux-banner-top{flex-direction:column}.phone-frame{width:200px}.web-frame{width:360px;padding-top:28px}}
.hero-motto{margin-top:2rem;font-family:'Syne',sans-serif;font-size:.85rem;letter-spacing:4px;text-transform:uppercase;color:var(--text-muted);opacity:0;animation:fadeUp 1s 1s forwards;display:flex;flex-wrap:wrap;gap:.4rem .8rem;align-items:center}
.hero-motto span{color:var(--cyan)}
.hero-motto .dot{width:4px;height:4px;border-radius:50%;background:var(--purple-light);display:inline-block}
`;

const navLinks = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["UI/UX", "#uiux"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

const skills = [
  {
    title: "Languages",
    icon: (
      <svg className="skill-cat-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    tags: ["C++", "Java", "Python", "JavaScript"],
  },
  {
    title: "Web",
    icon: (
      <svg className="skill-cat-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
      </svg>
    ),
    tags: ["HTML", "CSS", "Tailwind", "JavaScript"],
  },
  {
    title: "Design & Tools",
    icon: (
      <svg className="skill-cat-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    tags: ["Figma", "Git", "GitHub", "VS Code"],
  },
  {
    title: "Foundations",
    icon: (
      <svg className="skill-cat-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 3h20v14H2zM8 21h8M12 17v4" />
      </svg>
    ),
    tags: ["Data Structures", "OOP", "Databases", "HCI"],
  },
];

const goRideAppScreens = [
  { src: "/goride/app-01.jpg", title: "Splash", caption: "Brand intro" },
  { src: "/goride/app-02.jpg", title: "Welcome", caption: "Login or sign up" },
  { src: "/goride/app-03.jpg", title: "Role Select", caption: "Driver or passenger" },
  { src: "/goride/app-04.jpg", title: "Auth Choice", caption: "Quick start" },
  { src: "/goride/app-05.jpg", title: "Login", caption: "Returning user" },
  { src: "/goride/app-06.jpg", title: "Login Alt", caption: "Streamlined form" },
  { src: "/goride/app-07.jpg", title: "Registration", caption: "Driver onboarding" },
  { src: "/goride/app-08.jpg", title: "Sign Up", caption: "New passenger" },
  { src: "/goride/app-09.jpg", title: "Available Rides", caption: "Live booking feed" },
  { src: "/goride/app-10.jpg", title: "Services", caption: "Multi-service hub" },
  { src: "/goride/app-11.jpg", title: "City to City", caption: "Long-distance booking" },
  { src: "/goride/app-12.jpg", title: "City Ride", caption: "In-city booking" },
  { src: "/goride/app-13.jpg", title: "Courier", caption: "Parcel delivery" },
  { src: "/goride/app-14.jpg", title: "Groceries", caption: "Shop on demand" },
  { src: "/goride/app-15.jpg", title: "Cart", caption: "Checkout & pay" },
];

const goRideWebScreens = [
  { src: "/goride/web-25.jpg", title: "Login", caption: "Web sign-in" },
  { src: "/goride/web-26.jpg", title: "Registration", caption: "Driver signup" },
  { src: "/goride/web-27.jpg", title: "Dashboard", caption: "Passenger services" },
  { src: "/goride/web-28.jpg", title: "Sign Up", caption: "Create account" },
  { src: "/goride/web-29.jpg", title: "City Ride", caption: "Booking flow" },
  { src: "/goride/web-30.jpg", title: "City to City", caption: "Schedule a trip" },
  { src: "/goride/web-31.jpg", title: "Courier", caption: "Send a parcel" },
  { src: "/goride/web-32.jpg", title: "Available Rides", caption: "Live feed" },
  { src: "/goride/web-33.jpg", title: "Groceries", caption: "Browse products" },
  { src: "/goride/web-34.jpg", title: "Cart", caption: "Checkout" },
];

const nutriNestScreens = [
  { src: "/nutrinest/01-splash.jpg", title: "Splash", caption: "First impression" },
  { src: "/nutrinest/02-meal-detail.jpg", title: "Meal Detail", caption: "Recipe & nutrition" },
  { src: "/nutrinest/03-planner.jpg", title: "Meal Planner", caption: "Weekly schedule" },
  { src: "/nutrinest/04-progress.jpg", title: "Progress", caption: "Insights & habits" },
  { src: "/nutrinest/05-profile.jpg", title: "Profile", caption: "Goals & preferences" },
];

function Portfolio() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, []);

  return (
    <div className="portfolio">
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />

      <nav>
        <a href="#hero" className="nav-logo">SFKM.</a>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {navLinks.map(([label, href]) => (
            <li key={href}><a href={href} onClick={() => setOpen(false)}>{label}</a></li>
          ))}
        </ul>
        <button className="hamburger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
          <span /><span /><span />
        </button>
      </nav>

      <section id="hero">
        <div className="hero-inner">
          <div className="hero-eyebrow">Software Engineer</div>
          <h1 className="hero-name">
            Sayyeda Fatima<br />
            <span className="gradient-text">Khizer Mufti</span>
          </h1>
          <p className="hero-tagline">
            I build clean, reliable web experiences — combining engineering rigor with a love for thoughtful, human-centered design.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn-primary">View My Work</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-motto">
            <span>Design</span><i className="dot" />
            <span>Build</span><i className="dot" />
            <span>Refactor</span><i className="dot" />
            <span>Repeat</span>
          </div>
          <div className="hero-scroll"><div className="scroll-line" />Scroll</div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-label">About</span>
            <h2 className="section-title">A little <span className="accent">about me</span></h2>
            <div className="section-line" />
          </div>
          <div className="about-content">
            <p>
              Hi, I'm <strong>Fatima</strong> — someone who has always been a little obsessed with how things work and even more with how they <em>feel</em> to use. I grew up taking interfaces apart in my head, wondering why one app felt effortless and another didn't.
            </p>
            <p>
              I'm endlessly curious. I read more than I probably should, get unreasonably excited about a well-designed checkout flow, and treat every project like a puzzle worth solving from a few different angles. I care about the small details — the spacing, the wording, the moment of friction nobody else noticed — because I think they add up to something honest.
            </p>
            <p>
              Outside of code, I'm usually sketching ideas in a notebook, learning something just because, or convincing my friends that the menu of a website matters. I'd rather build something <em>quietly meaningful</em> than something loud, and I'm always looking for collaborators who feel the same.
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Toolkit</span>
            <h2 className="section-title">Skills &amp; <span className="accent">Tools</span></h2>
            <div className="section-line" />
          </div>
          <div className="skills-grid">
            {skills.map((s) => (
              <div key={s.title} className="skill-category">
                <div className="skill-cat-header">{s.icon}<div className="skill-cat-title">{s.title}</div></div>
                <div className="skill-tags">
                  {s.tags.map((t) => <span key={t} className="skill-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Featured Projects</span>
            <h2 className="section-title">Selected <span className="accent">Work</span></h2>
            <div className="section-line" />
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <div className="project-visual kaavish">
                <div className="proj-icon-wrap">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="6" y="10" width="52" height="38" rx="4" />
                    <path d="M6 20h52" /><circle cx="12" cy="15" r="1.4" fill="currentColor" /><circle cx="17" cy="15" r="1.4" fill="currentColor" /><circle cx="22" cy="15" r="1.4" fill="currentColor" />
                    <path d="M16 32l6 6 12-14 14 18" /><circle cx="42" cy="28" r="3" />
                    <path d="M22 56h20M32 48v8" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <div className="project-num">Project 01</div>
                <h3 className="project-title">Kaavish — Creative Studio Site</h3>
                <p className="project-desc">
                  A polished, story-driven website for a creative studio: smooth motion, considered typography, and a layout built to make the work the hero.
                </p>
                <div className="project-stack">
                  <span className="stack-tag">React</span>
                  <span className="stack-tag">Tailwind</span>
                  <span className="stack-tag">Framer Motion</span>
                </div>
                <div className="project-links">
                  <a href="https://kaaviissh.vercel.app/" target="_blank" rel="noreferrer" className="proj-link live">Live Site →</a>
                </div>
              </div>
            </article>

            <article className="project-card reverse">
              <div className="project-visual farm">
                <div className="proj-icon-wrap">
                  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 50V28l16-12 16 12v22" />
                    <path d="M40 50V34h16v16" />
                    <path d="M8 50h48" />
                    <path d="M18 50V40h12v10" />
                    <path d="M44 38h8M44 44h8" />
                    <path d="M52 18c-3 0-5 2-5 5 0 3 5 7 5 7s5-4 5-7c0-3-2-5-5-5z" />
                  </svg>
                </div>
              </div>
              <div className="project-content">
                <div className="project-num">Project 02</div>
                <h3 className="project-title">Farm Management System</h3>
                <p className="project-desc">
                  A Python desktop application backed by a SQL database — handles livestock, crops, inventory, and finances with clean queries, normalized schemas, and a focus on real-world farm workflows.
                </p>
                <div className="project-stack">
                  <span className="stack-tag">Python</span>
                  <span className="stack-tag">SQL</span>
                  <span className="stack-tag">Database Design</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="uiux">
        <div className="container">
          <div className="section-header">
            <span className="section-label">UI / UX Design</span>
            <h2 className="section-title">Design <span className="accent">Case Studies</span></h2>
            <div className="section-line" />
          </div>

          {/* Case Study 01 — GO RIDE */}
          <div className="case-study">
            <div className="uiux-banner">
              <div className="uiux-banner-top">
                <div>
                  <span className="uiux-tag">Case Study 01 · Mobile + Web · HCI</span>
                  <h3>GO RIDE — AI-Assisted Ride Booking</h3>
                  <p>
                    An end-to-end ride-booking experience with an integrated AI assistant — designed for two distinct user roles (driver &amp; passenger) across mobile and web. Every screen was crafted to keep the flow effortless, from onboarding to checkout.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-row">
              {[
                ["01","Research","Interviewed riders & drivers to map pain points around safety, fare clarity and trip booking."],
                ["02","Wireframes","Low-fi flows for both roles — passenger booking, courier, groceries, and driver dashboards."],
                ["03","Visual Design","A friendly purple system with strong contrast, large tap targets, and a consistent icon language."],
                ["04","Prototype","Interactive Figma prototype covering 30+ screens across mobile and a responsive web companion."],
              ].map(([n,t,d]) => (
                <div key={n} className="process-step">
                  <div className="step-num">{n}</div>
                  <div className="step-title">{t}</div>
                  <div className="step-text">{d}</div>
                </div>
              ))}
            </div>

            <div className="screens-label">High-Fidelity Prototype · Mobile</div>
            <div className="screens-strip">
              <div className="screens-track">
                {goRideScreens.map((s) => (
                  <div key={s.src} className="phone-frame">
                    <div className="phone-screen">
                      <img src={s.src} alt={s.title} loading="lazy" />
                    </div>
                    <div className="phone-caption"><strong>{s.title}</strong>{s.caption}</div>
                  </div>
                ))}
                <div className="web-frame">
                  <div className="web-screen">
                    <img src="/goride/12-web-landing.jpg" alt="Web Companion" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Study 02 — NutriNest */}
          <div className="case-study">
            <div className="uiux-banner nutrinest">
              <div className="uiux-banner-top">
                <div>
                  <span className="uiux-tag case-tag-nutrinest">Case Study 02 · Mobile · Wellness</span>
                  <h3>NutriNest — Healthy Eating Made Simple</h3>
                  <p>
                    A modern healthy food planning app for students and busy professionals — personalized meal plans, calorie tracking, grocery lists, and gentle hydration reminders, all wrapped in a calm, paper-soft wellness aesthetic.
                  </p>
                </div>
              </div>
            </div>

            <div className="process-row">
              {[
                ["01","Discovery","Mapped pain points for students, gym beginners, and office workers — skipped meals, unclear calories, and apps that felt overwhelming."],
                ["02","Concept","An AI-powered planner that suggests personalized meals, tracks nutrition, and keeps the interface minimal and stress-free."],
                ["03","Visual Language","Sage green, beige cream, and warm brown on an 8pt grid. Rounded 20–24px cards, soft shadows, and large food photography for a Pinterest-wellness mood."],
                ["04","Prototype","High-fidelity flows covering onboarding, meal detail, planner calendar, progress analytics, and profile preferences."],
              ].map(([n,t,d]) => (
                <div key={n} className="process-step">
                  <div className="step-num">{n}</div>
                  <div className="step-title">{t}</div>
                  <div className="step-text">{d}</div>
                </div>
              ))}
            </div>

            <div className="screens-label">High-Fidelity Prototype · Mobile</div>
            <div className="screens-strip">
              <div className="screens-track">
                {nutriNestScreens.map((s) => (
                  <div key={s.src} className="phone-frame">
                    <div className="phone-screen">
                      <img src={s.src} alt={s.title} loading="lazy" />
                    </div>
                    <div className="phone-caption"><strong>{s.title}</strong>{s.caption}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Journey</span>
            <h2 className="section-title">Education &amp; <span className="accent">Background</span></h2>
            <div className="section-line" />
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">2024 — Present</div>
              <div className="timeline-degree">BS Software Engineering</div>
              <div className="timeline-school">COMSATS University Islamabad — Lahore Campus</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">Pre-University</div>
              <div className="timeline-degree">FSc Pre-Medical · A* Grade</div>
              <div className="timeline-school">Foundation in biology, chemistry &amp; physics</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-date">Secondary</div>
              <div className="timeline-degree">Matriculation · A* Grade</div>
              <div className="timeline-school">DHA Senior School for Girls</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Contact</span>
            <h2 className="section-title">Let's <span className="accent">Talk</span></h2>
            <div className="section-line" />
          </div>
          <div className="contact-inner">
            <p style={{ color: "var(--text-muted)" }}>
              Got a project in mind, or just want to say hi? My inbox is always open.
            </p>
            <a className="contact-email" href="mailto:s.fatimakhizer@gmail.com">s.fatimakhizer@gmail.com</a>
            <div className="contact-links">
              <a className="contact-link" href="https://github.com/sayyedaFatimakhizer" target="_blank" rel="noreferrer">GitHub</a>
              <a className="contact-link" href="https://github.com/sayyedaFatimakhizer" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} <span>Sayyeda Fatima Khizer Mufti</span> — Designed &amp; built with care.
      </footer>
    </div>
  );
}
