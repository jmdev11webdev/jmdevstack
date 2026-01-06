"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="desktop-nav">
      {/* LOGO */}
      <div className="desktop-nav-links">
        <Link href="/#home" className="web-link">
          <i className="fa-solid fa-code"></i>

          <h1 className="jm-logo">
            JM
          </h1>

          <small className="stack-title">
            Dev Stack <br />
            Full Stack Developer
          </small>
        </Link>

      {/* DESKTOP MENU */}
      <ul className="desktop-links">
        <NavItem href="/" icon="fa-house" label="Home" />
        <NavItem href="/#about" icon="fa-user" label="About" />
        <NavItem href="/#contact" icon="fa-phone" label="Contacts" />
        <NavItem href="/#projects" icon="fa-diagram-project" label="Projects" />

        <li>
          <a
            href="https://github.com/jmdev11webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link-btn"
          >
            <i className="fa-brands fa-github"></i>
            GitHub
          </a>
        </li>
      </ul>
        
      {/* MOBILE HAMBURGER */}
      <button onClick={() => setOpen(!open)} className="mobile-hamburger">
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars mr-1"}`}></i>
        Menu
      </button>
  </div>
          
        

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-nav">
          <ul className="">
            <MobileItem href="/#home" label="Home" setOpen={setOpen} />
            <MobileItem href="/#about" label="About" setOpen={setOpen} />
            <MobileItem href="/#contact" label="Contacts" setOpen={setOpen} />
            <MobileItem href="/#projects" label="Projects" setOpen={setOpen} />

            <a
              href="https://github.com/jmdev11webdev"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              GitHub
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

/* ---------- COMPONENTS ---------- */

function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="desktop-NavItem"
      >
        <i className={`fa-solid ${icon}`}></i>
        {label}
      </Link>
    </li>
  );
}

function MobileItem({
  href,
  label,
  setOpen,
}: {
  href: string;
  label: string;
  setOpen: (v: boolean) => void;
}) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className=""
    >
      {label}
    </Link>
  );
}
