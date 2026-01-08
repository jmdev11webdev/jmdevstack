import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="aboutme-content">
          {/* IMAGE */}
          <Image
            src="/images/jmdev.jpg"
            className="jmdevstack-logo"
            alt="Fullstack Developer"
            width={300}
            height={300}
          />

          {/* TEXT */}
          <div className="texts">
            <h1 className="abouteme-header">
              <i className="fa-solid fa-user"></i>
              About Me
            </h1>

            <p>
              Dedicated, passionate, and commited full stack developer on delivering high quality and creative solutions.
            </p>

            <p>
              Graduating from <strong>Divine Word Collge of Legazpi</strong>, taking Bachelor of Science in 
              <strong> Information Technology</strong> specialized in <strong>Web Development</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}