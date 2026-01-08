"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="desktop-nav">
      {/* LOGO */}
      <Link href="" className="web-link">

        <h1 className="jm-logo">
          JM
        </h1>

        <small className="stack-title">
          Dev Stack <br />
          Full Stack Developer
        </small>
      </Link>

      {/* DESKTOP MENU */}
      <div className="nav-right">
        <ul className="desktop-links">
          <NavItem href="/#home" icon="fa-house" label="Home" />
          <NavItem href="/#about" icon="fa-user" label="About" />
          <NavItem href="/#contact" icon="fa-phone" label="Contacts" />
          <NavItem href="/#projects" icon="fa-diagram-project" label="Projects" />

          <li>
            <a href="javascript:void(0)" className="dropdown-btn">
              <i className="fa-solid fa-share-nodes"></i>
              Socials
            </a>
          </li>
        </ul>
        
        {/* MOBILE HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="mobile-hamburger">
            &#x2630;
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-nav">
          <ul className="">
            <MobileItem href="/" label="Home" setOpen={setOpen} />
            <MobileItem href="/#about" label="About" setOpen={setOpen} />
            <MobileItem href="/#contact" label="Contacts" setOpen={setOpen} />
            <MobileItem href="/#projects" label="Projects" setOpen={setOpen} />
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
