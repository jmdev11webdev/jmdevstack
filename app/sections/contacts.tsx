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

      console.log({
        service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        key: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      });

  };

    return (
        <>
            <section id="contacts">
  <div className="contacts-container">
    <div className="contacts-content">
    </div>

    <div className="contact-form-wrapper">
      <form ref={formRef} onSubmit={sendEmail} className="contact-form">
        <h3>Send Me an Email</h3>

        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />

        <textarea
          name="message"
          rows={4}
          placeholder="Your Message"
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : (
            <>
              <i className="fa-solid fa-paper-plane"></i> Send Email
            </>
          )}
        </button>

        {status === "success" && (
          <div className="form-success">
            ✅ Message sent successfully. I’ll get back to you soon!
          </div>
        )}

        {status === "error" && (
          <div className="form-error">
            ❌ Failed to send message. Please try again later.
          </div>
        )}
      </form>
    </div>
  </div>
</section>
        </>
    );
}

