"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b-4 border-gray-700 bg-white shadow-lg">
      <div className="mx-auto flex h-[100px] max-w-7xl items-center justify-between px-12">
        
        {/* LOGO */}
        <Link href="/#home" className="flex items-center gap-4">
          <i className="fa-solid fa-code text-xl"></i>

          <h1 className="rounded bg-gray-800 px-3 py-1 text-3xl font-bold text-white shadow-[4px_4px_0px_rgba(0,0,0,0.4)]">
            JM
          </h1>

          <small className="hidden text-sm font-bold leading-tight text-gray-700 sm:block">
            Dev Stack <br />
            Freelance Developer
          </small>
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-4 md:flex">
          <NavItem href="/#home" icon="fa-house" label="Home" />
          <NavItem href="/#about" icon="fa-user" label="About" />
          <NavItem href="/#contact" icon="fa-phone" label="Contacts" />
          <NavItem href="/#projects" icon="fa-diagram-project" label="Projects" />

          <li>
            <a
              href="https://github.com/jmdev11webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-gray-900 px-5 py-2 font-bold text-white hover:bg-gray-800"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </li>
        </ul>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden"
        >
          <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars mr-1"}`}></i>
          Menu
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 shadow-lg">
          <ul className="flex flex-col gap-4">
            <MobileItem href="/#home" label="Home" setOpen={setOpen} />
            <MobileItem href="/#about" label="About" setOpen={setOpen} />
            <MobileItem href="/#contact" label="Contacts" setOpen={setOpen} />
            <MobileItem href="/#projects" label="Projects" setOpen={setOpen} />

            <a
              href="https://github.com/jmdev11webdev"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-gray-900 px-4 py-2 text-center font-bold text-white hover:bg-gray-800"
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
        className="flex items-center gap-2 px-4 py-2 font-extrabold hover:text-gray-700"
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
      className="rounded px-4 py-2 font-bold hover:bg-gray-100"
    >
      {label}
    </Link>
  );
}
