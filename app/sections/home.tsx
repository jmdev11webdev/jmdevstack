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

              <a
                href="https://www.linkedin.com/in/juan-miguel-tagle-lahorra-289573344/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-5 inline-block rounded bg-gray-700 px-4 py-2 font-semibold text-white hover:bg-gray-800"
              >
                Hire Me
              </a>

              <DevStackModal />
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