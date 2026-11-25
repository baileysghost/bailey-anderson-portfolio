"use client";
import { useState } from "react";
import { Icon, Mark } from "./visuals";
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap nav">
        <a href="/" className="brand" aria-label="Bailey Anderson homepage">
          <Mark /> Bailey Anderson
        </a>
        <button
          className="menu"
          aria-controls="primary-nav"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name="menu" /> Menu
        </button>
        <nav
          id="primary-nav"
          className={open ? "opened" : ""}
          aria-label="Main navigation"
        >
          {[
            ["Work", "work"],
            ["Expertise", "expertise"],
            ["Experience", "experience"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={"/#" + id} onClick={() => setOpen(false)}>
              {label}
              {id === "contact" && <Icon name="out" size={14} />}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
