"use client";

import { useState } from "react";

export default function DevStackModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="cursor-pointer rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
      >
        <i className="fa-brands fa-stack-overflow mr-1"></i>
        Dev Stack
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
            
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold">My Dev Stack</h3>
              <button
                onClick={() => setOpen(false)}
                className="text-xl font-bold text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Frontend</h4>
                <p>HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
              </div>

              <div>
                <h4 className="font-semibold">Backend</h4>
                <p>Node.js, Express, PHP</p>
              </div>

              <div>
                <h4 className="font-semibold">Database</h4>
                <p>MySQL, MongoDB</p>
              </div>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-gray-700 px-4 py-2 text-white hover:bg-gray-800"
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
