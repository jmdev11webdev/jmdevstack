import Image from "next/image";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="aboutme-content">
          {/* TEXT */}
          <div className="texts">
            <h1 className="abouteme-header">
              <i className="fa-solid fa-user"></i>
              About Me
            </h1>

            <p>
              A dedicated and passionate web developer who is looking forward to be a full stack web developer and am turning ideas into scalable solutions
            </p>

            <p >
              I am committed to delivering high-quality, creative solutions—whether
              developing a website from scratch or enhancing an existing one—to help
              businesses and individuals achieve their goals.
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