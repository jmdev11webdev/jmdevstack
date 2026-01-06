"use client";

import DevStackModal from "@/app/components/devstackmodal";

export default function HomePage() {
  return (
    <>
        <div>
          {/* TEXT */}
          <div className="text-center md:text-left">
            <h1 className="mb-4 text-4xl font-bold">
              Welcome to JMDevStack!
            </h1>

            <p className="mb-6 max-w-md text-lg">
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
          <img
            src="/images/JMDevStack_Logo.png"
            alt="JM Dev Stack"
            className="w-60 rounded-full shadow-xl md:w-72"
          />
          {/* SOCIAL LINKS */}
          <ul className="absolute flex bottom-5 mt-5 ">
            <li className="mr-5">
              <a href="https://www.facebook.com/jmtl.jmdev">
                <i className="fa-brands fa-facebook mr-2"></i>
                Facebook
              </a>
            </li>

            |

            <li className="ml-5">
              <a href="https://www.facebook.com/jmtl.jmdev">
                <i className="fa-brands fa-instagram mr-2"></i>
                Instagram
              </a>
            </li>
          </ul>
        </div>
    </>
  );
}