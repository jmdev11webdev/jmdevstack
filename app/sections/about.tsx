import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="about-content">
          {/* TEXT */}
          <div>
            <h1>
              <i className="fa-solid fa-user"></i>
              About Me
            </h1>

            <p>
              An aspiring full-stack developer continuously learning, adapting, creating projects, and turning ideas into creative solutions.
            </p>
          </div>

          {/* IMAGE */}
          <Image
            src="/images/jmdev.jpg"
            className="jmdevstack-logo"
            alt="Fullstack Developer"
            width={300}
            height={300}
          />
        </div>
      </section>
    </>
  );
}