"use client";

import { useState } from "react";

export default function DevStackModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="dev-stack"
      >
        <i className="fa-brands fa-stack-overflow"></i>
        Dev Stack
      </button>

      {/* MODAL */}
      {open && (
        <div className="">
          <div className="">
            
            <div className="">
              <h3 className="text-2xl font-bold">My Dev Stack</h3>
              <button
                onClick={() => setOpen(false)}
                className=""
              >
                ✕
              </button>
            </div>

            <div className="">
              <div>
                <h4 className="">Frontend</h4>
                <p>HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
              </div>

              <div>
                <h4 className="">Backend</h4>
                <p>Node.js, Express, PHP</p>
              </div>

              <div>
                <h4 className="">Database</h4>
                <p>MySQL, MongoDB</p>
              </div>
            </div>

            <div className="">
              <button
                onClick={() => setOpen(false)}
                className=""
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
