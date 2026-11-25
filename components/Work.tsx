"use client";
import { useState } from "react";
import projects from "../content/projects.json";
import { Artwork, Icon } from "./visuals";
import { motion, useReducedMotion } from "motion/react";
export default function Work() {
  const [filter, choose] = useState("All work");
  const reduced = useReducedMotion();
  return (
    <section id="work" className="work wrap">
      <div className="kicker">
        <span /> PROJECT INDEX
      </div>
      <div className="sectionhead">
        <h2>
          Selected work<span className="accent">.</span>
        </h2>
        <div className="filters" aria-label="Filter selected work">
          {["All work", "AI systems", "Engineering", "Creative systems"].map(
            (x) => (
              <button
                aria-pressed={filter === x}
                onClick={() => choose(x)}
                key={x}
              >
                {x}
              </button>
            ),
          )}
        </div>
      </div>
      <div className="cards">
        {projects
          .filter((p) => filter === "All work" || p.group === filter)
          .map((p) => (
            <motion.article
              key={p.slug}
              whileInView={reduced ? {} : { y: [5, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <a className="card" href={"/work/" + p.slug + "/"}>
                <div className={"thumb " + p.slug}>
                  <Artwork slug={p.slug} />
                  <span className="state">
                    <i />
                    {p.status}
                  </span>
                </div>
                <div className="cardtext">
                  <div className="category">{p.category}</div>
                  <div className="cardtitle">
                    <h3>{p.name}</h3>
                    <Icon name="out" size={20} />
                  </div>
                  <p>{p.summary}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
      </div>
    </section>
  );
}
