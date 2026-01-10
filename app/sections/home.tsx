"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <main id="home">
        <div className="home-content">
          {/* TEXT + ACTIONS */}
          <div className="home-text">
            <h1>Welcome to my Web Portfolio!</h1>
            <p>Explore my projects and feel free to reach out!</p>

            {/* SOCIAL LINKS */}
            <ul className="socials-profiles">
              <li>
                <a href="https://www.facebook.com/jmlahorra" aria-label="Facebook" target="_blank" rel="noopener">
                  <i className="fa-brands fa-facebook fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/jmlahorra" aria-label="Instagram" target="_blank" rel="noopener">
                  <i className="fa-brands fa-instagram fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.github.com/jmdev11webdev" aria-label="GitHub" target="_blank" rel="noopener">
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/juan-miguel-tagle-lahorra-289573344/" aria-label="LinkedIn" target="_blank" rel="noopener">
                  <i className="fa-brands fa-linkedin-in fa-2x"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/JMDevStack_Logo.png"
            alt="JM Dev Stack"
            className="jmdevstack-logo"
            width={300}
            height={300}
          />
        </div>
      </main>
    </>
  );
}