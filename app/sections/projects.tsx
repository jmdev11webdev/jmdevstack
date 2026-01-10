import Image from "next/image";

export default function Projects(){
  return (
    <>
      {/* PROJECTS */}
        <section id="projects">
          <div className="projects-content">
            <div>
              <h2>
                <i className="fa-solid fa-diagram-project"></i>
                Projects
              </h2>
                  
              <p>
                These are my projects along with our capstone project and its revisions and versions.
              </p>
            </div>
            <div className="capstone-landseek">
              <Image 
                src="/images/landseek.png"
                alt="capstone-project"
                className="capstone-img"
                width={350}
                height={200}
              />

              <h3>
                Capstone Project 2025
              </h3>

              <p className="landseek-description">
                Title: LANDSEEK: A Digital Marketplace for Land Hunting <br />
                Description: A Dynamic web application for users who wants to buy or sell land properties <br />
                Source Code: <a href="https://github.com/jmdev11webdev/capstone-project-2025.git" target="_blank" rel="noopener">
                Capstone Project 
                </a>
              </p>
            </div>
          </div>
        </section>
    </>
  )
}