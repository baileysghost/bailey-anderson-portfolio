import Work from "../components/Work";
import { Icon } from "../components/visuals";
import archive from "../content/archive.json";
import skills from "../content/skills.json";
export default function Home() {
  return (
    <main id="main">
      <div id="top" />
      <section className="hero">
        <div className="heroscene" aria-hidden="true" />
        <div className="wrap herobody">
          <div className="herolabel">
            <span /> ENGINEERING PORTFOLIO
          </div>
          <h1>
            Bailey
            <br />
            Anderson<span>.</span>
          </h1>
          <p className="titleline">
            AI Application Developer <b>/</b> Agentic Systems Engineer
            <br className="wide" /> <b>/</b> Creative Technologist
          </p>
          <p className="intro">
            Founder of Red Phoenix Global LLC. I build autonomous research
            systems, trading software and tools for creative production.
          </p>
          <div className="actions">
            <a className="button primary" href="#work">
              Explore work <Icon name="arrow" />
            </a>
            <a
              className="button secondary"
              href="/Bailey-Anderson-Portfolio.pdf"
              download
            >
              <Icon name="down" /> Portfolio PDF
            </a>
          </div>
        </div>
        <div className="herofoot wrap">
          <span>
            <Icon size={14} name="pin" /> LOS ANGELES, CA
          </span>
          <span className="ticks" aria-hidden="true" />
          <span>RED PHOENIX GLOBAL LLC</span>
        </div>
      </section>
      <Work />
      <section className="wrap band" id="archive">
        <div className="kicker">
          <span /> PROJECT ARCHIVE
        </div>
        <h2>
          More explorations<span className="accent">.</span>
        </h2>
        <div className="archive">
          {archive.map(([title, area, status, body, tech]) => (
            <details key={title}>
              <summary>
                <span className="category">{area}</span>
                <span className="archiveTitle">{title}</span>
                <Icon name="plus" size={17} />
              </summary>
              <div className="detailbody">
                <span className="category">{status}</span>
                <p>{body}</p>
                <small>{tech}</small>
              </div>
            </details>
          ))}
        </div>
      </section>
      <section className="wrap band" id="expertise">
        <div className="kicker">
          <span /> TOOLKIT
        </div>
        <h2>
          Technical expertise<span className="accent">.</span>
        </h2>
        <div className="skillgrid">
          {Object.entries(skills).map(([name, items]) => (
            <div key={name}>
              <h3>{name}</h3>
              <div className="tags">
                {items.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="wrap band" id="experience">
        <div className="kicker">
          <span /> BACKGROUND
        </div>
        <h2>
          Experience<span className="accent">.</span>
        </h2>
        <div className="timeline">
          {[
            [
              "2019 — Present",
              "Founder & full-stack developer",
              "Red Phoenix Global LLC",
              "I build web applications, manage paid acquisition and design automation around client operations.",
            ],
            [
              "2012 — 2016",
              "Label and recording work",
              "Independent music production",
              "Recording, editing and mixing shaped my approach to building tools for artists and engineers.",
            ],
            [
              "2009 — 2012",
              "Assistant engineer",
              "Glenwood Place Studios",
              "Supported recording sessions and studio workflows in Los Angeles.",
            ],
            [
              "2008",
              "Recording arts training",
              "Los Angeles Recording School",
              "Studied recording and production before moving into professional studio work.",
            ],
          ].map(([date, title, org, body]) => (
            <div key={date}>
              <span className="category">{date}</span>
              <section>
                <h3>{title}</h3>
                <strong>{org}</strong>
                <p>{body}</p>
              </section>
            </div>
          ))}
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="wrap">
          <div className="kicker">
            <span /> CONTACT
          </div>
          <h2>
            Get in touch<span className="accent">.</span>
          </h2>
          <p>For engineering opportunities and creative collaborations.</p>
          <a className="button primary" href="https://github.com/baileysghost">
            Find me on GitHub <Icon name="out" />
          </a>
        </div>
      </section>
    </main>
  );
}
