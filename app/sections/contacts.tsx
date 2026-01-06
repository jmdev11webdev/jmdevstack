"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function Contacts(){
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);
    setStatus("idle");

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("success");   // ✅ show success UI
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");     // ❌ show error UI
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

    return (
        <>
            <section id="contact" className="min-h-screen bg-gray-100 scroll-mt-[100px]">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-12 py-20 md:flex-row md:items-start">
        
            {/* LEFT — TEXT */}
            <div className="text-center md:text-left">
            <h2 className="mb-6 text-4xl font-bold">
                <i className="fa-solid fa-phone mr-2"></i>
                Contacts
            </h2>

            <p className="max-w-lg text-lg leading-relaxed">
                Feel free to contact me through these communication platforms below.
            </p>

            <ul className="mt-5 flex-col">
                <li className="bg-white p-2 rounded-2xl border-l-4 border-blue-700 inline-flex">
                <p>
                    <i className="fa-brands fa-whatsapp mr-1 text-green-700"></i>
                    Whatsapp: <strong>+63 928 332 9944</strong> 
                </p>
                </li> <br /><br />

                <li className="bg-white p-2 rounded-2xl border-l-4 border-blue-700 inline-flex">
                <p>
                    <i className="fa-brands fa-viber mr-1 text-purple-700"></i>
                    Viber: <strong>+63 928 332 9944</strong> 
                </p>
                </li> <br /><br />
                
                <li className="bg-white p-2 rounded-2xl border-l-4 border-blue-700 inline-flex">
                <p>
                    <i className="fa-brands fa-facebook-messenger mr-1 text-blue-700"></i>
                    Messenger: <strong>@jmtl.jmdev</strong> 
                </p>
                </li> 
            </ul>
            </div>

            {/* RIGHT — FORM */}
            <form ref={formRef} onSubmit={sendEmail} className="w-full max-w-md rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-bold">Send Me an Email</h3>

            <input type="text" name="name" placeholder="Your Name" required
            className="mb-3 w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2
            focus:ring-gray-600"/>

            <input type="email" name="email" placeholder="Your Email" required
            className="mb-3 w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2
            focus:ring-gray-600"/>

            <textarea
                name="message"
                rows={4}
                placeholder="Your Message"
                required
                className="mb-4 w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />

            <button type="submit" disabled={loading} className="w-full rounded bg-gray-700 px-4 py-2 text-sm 
            font-bold text-white hover:bg-gray-800 disabled:opacity-50">
                {loading ? "Sending..." : (
                <>
                    <i className="fa-solid fa-paper-plane mr-2"></i>
                    Send Email
                </>
                )}
            </button>


            {/* STATUS */}
            {status === "success" && (
                <div className="mt-4 rounded-lg border border-green-300 bg-green-100 p-3 text-sm text-green-700">
                ✅ Message sent successfully. I’ll get back to you soon!
                </div>
            )}

            {status === "error" && (
                <div className="mt-4 rounded-lg border border-red-300 bg-red-100 p-3 text-sm text-red-700">
                ❌ Failed to send message. Please try again later.
                </div>
            )}
            </form>
            </div>
        </section>
        </>
    );
}

