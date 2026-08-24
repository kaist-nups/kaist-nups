"use client";
import { useEffect,useState } from "react";
import OrbitScene from "./OrbitScene";

const activities=[
  ["01","Observation & Exoplanets","망원경을 들고 직접 밤하늘을 관측합니다. 행성, 성운, 외계행성 등 관심 있는 대상을 함께 찾아봅니다."],
  ["02","Seminar & Study","최근 우주 연구부터 천문 현상과 우주산업 이야기까지 자유롭게 공부하고 공유합니다."],
  ["03","Hands-on Project","라디오존데, 천문 데이터 분석, 시뮬레이션, 블랙홀 컴퓨팅, 관측 장비, AI 프로젝트를 직접 만듭니다."],
  ["04","Competition","학술대회, 연구 프로그램, 해커톤, NASA Space Apps Challenge에 팀을 꾸려 참여합니다."],
];
const achievements=[
  ["2024","LIG Nex1 대표이사상","공군사관학교–KAIST 미래항공우주 학술대회"],
  ["2025","AIAA 발표","American Institute of Aeronautics and Astronautics"],
  ["2025","국제 연례회의 발표","대기·빙하·해양과학 분야 연구 발표"],
  ["2025","최우수상","KAIST 학생선도 연구 프로젝트 2개 출품"],
  ["2025","Global Top 45","NASA Space Apps · 국내 3위 / 전 세계 18,860팀"],
];

function Countdown(){
  const [now,setNow]=useState(()=>Date.now());
  useEffect(()=>{const id=setInterval(()=>setNow(Date.now()),1000);return()=>clearInterval(id);},[]);
  const diff=Math.max(0,new Date("2026-09-04T23:59:00+09:00").getTime()-now),days=Math.floor(diff/86400000),hours=Math.floor(diff/3600000%24),minutes=Math.floor(diff/60000%60);
  return <span className="deadline">D-{days} · {String(hours).padStart(2,"0")}:{String(minutes).padStart(2,"0")}</span>;
}

export default function Home(){return <main>
  <div className="space-backdrop" aria-hidden="true"><img src="nups-space-bg.webp" alt=""/></div>
  <header className="header"><a href="#top" className="wordmark"><b>NUPS</b><span>KAIST SPACE CLUB</span></a><nav><a href="#about">About</a><a href="#activity">Activity</a><a href="#record">Record</a><a href="#recruit">Recruit</a><a href="https://www.instagram.com/kaist.nups/" target="_blank" rel="noreferrer">Instagram ↗</a></nav></header>
  <section className="hero" id="top"><div className="hero-text"><p className="overline">KAIST’S ONLY SPACE CLUB · SINCE 2023</p><h1>NUPS</h1><h2>우주를 좋아하는 사람들이<br/>KAIST에서 만나는 곳</h2><p className="lead">외계행성과 외계생명체를 찾아 시작한 동아리에서, 이제는 우주에 관한 모든 관심사를 함께 나누는 커뮤니티로.</p><a className="text-link" href="#recruit">2026 가을학기 지원하기 <span>↘</span></a></div><OrbitScene/><div className="scroll">SCROLL TO EXPLORE <i/></div></section>
  <div className="content">
    <section className="section about" id="about"><div className="section-title"><p>01 / ABOUT</p><h2><span>#NUPS</span>&lt;About&gt;</h2></div><div className="about-copy"><p><strong>NUPS</strong>는 우주를 연구하는 곳이기도 하지만, 그보다 먼저 우주를 좋아하는 사람들이 모이는 곳입니다.</p><p>우주를 좋아하지만 뭘 해야 할지 몰라도 괜찮습니다. 망원경으로 밤하늘을 보고, 흥미로운 이야기를 나누고, 마음이 맞는 사람들과 프로젝트를 시작합니다. 연구는 필수가 아닙니다. 자신이 원하는 방식으로 NUPS를 즐기면 됩니다.</p></div></section>
    <section className="section" id="activity"><div className="section-title"><p>02 / ACTIVITY</p><h2><span>#NUPS</span>&lt;Activity&gt;</h2></div><div className="activity-list">{activities.map(([number,title,body])=><article key={number}><span>{number}</span><h3>&gt; {title}</h3><p>{body}</p></article>)}</div><div className="research-note"><p>OPTIONAL RESEARCH</p><h3>조금 더 깊게 해보고 싶다면?</h3><span>연구주도자가 진행하는 프로젝트에 팀원으로 참여합니다. 경험이 없어도 함께 배우며 시작할 수 있습니다.</span></div></section>
    <section className="section records" id="record"><div className="section-title"><p>03 / RECORD</p><h2><span>#NUPS</span>&lt;FlightLog&gt;</h2></div><div className="record-layout"><img src="achievement-award.webp" alt="NUPS members receiving an aerospace competition award"/><div className="record-list">{achievements.map(([year,title,detail])=><div key={title}><time>{year}</time><h3>{title}</h3><p>{detail}</p></div>)}</div></div></section>
  </div>
  <section className="recruit" id="recruit"><div className="recruit-inner"><div><p>04 / FALL 2026 RECRUITING</p><h2>다음 탐사에<br/>함께하세요.</h2></div><div className="recruit-info"><Countdown/><dl><div><dt>지원 기간</dt><dd>2026.08.26 — 09.04 · 23:59</dd></div><div><dt>면접 일정</dt><dd>2026.09.06 — 09.07</dd></div><div><dt>지원 자격</dt><dd>우주에 관심 있는 KAIST 재학생 누구나</dd></div></dl><a href="https://www.instagram.com/kaist.nups/" target="_blank" rel="noreferrer">지원 링크 확인하기 ↗</a><small>문의 · NUPS 회장 이정민 · @kaist.nups</small></div></div></section>
  <footer><b>NUPS</b><p>KAIST에서 우주를 좋아하는 사람들이 모이는 곳.</p><span>© 2026 KAIST NUPS</span></footer>
</main>;}
