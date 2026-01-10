"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="desktop-nav">
      {/* LOGO */}
      <Link href="https://jmdevstack.vercel.app" className="web-link">
        <h1>
          JMDEVSTACK
        </h1>
      </Link>

      {/* DESKTOP MENU */}
      <div className="nav-right">
        <ul className="desktop-links">
          <NavItem href="/#home" icon="fa-house" label="Home" />
          <NavItem href="/#about" icon="fa-user" label="About" />
          <NavItem href="/#contacts" icon="fa-phone" label="Contact" />
          <NavItem href="/#projects" icon="fa-diagram-project" label="Projects" />
        </ul>
        
        {/* MOBILE HAMBURGER */}
        <button onClick={() => setOpen(!open)} className="hamburger">
            &#x2630;
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-nav">
          <ul className="mobile-nav-links">
            <MobileItem href="/" label="Home" setOpen={setOpen} />
            <MobileItem href="/#about" label="About" setOpen={setOpen} />
            <MobileItem href="/#contacts" label="Contacts" setOpen={setOpen} />
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
