"use client";

import DevStackModal from "@/app/components/devstackmodal";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main id="home">
        <div className="home-content">
          {/* TEXT */}
          <div>
            <h1>
              Welcome to JMDevStack!
            </h1>

            <p>
              Explore my projects and feel free to reach out!
            </p>

            <div className="hire-stack">
                <a
                href="/#contacts"
                target="_blank"
                rel="noopener noreferrer"
                className="hire"
                >
                  Hire Me
                </a>

                <DevStackModal />
            </div>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/JMDevStack_Logo.png"
            alt="JM Dev Stack"
            className="jmdevstack-logo"
            width={300}
            height={300}
          />
          
          <ul>
            <li>
              <a href="https://www.facebook.com/jmlahorra">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/jmlahorra">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
              
            <li>
              <a href="https://www.github.com/jmlahorra">
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
              
            <li>
              <a href="https://www.linkedin.com/in/juan-miguel-tagle-lahorra-289573344/">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

        
      </main>
    </>
  );
}