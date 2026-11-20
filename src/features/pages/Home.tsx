import Technology from "@/components/own/Technology.tsx";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <>
      <section>
        <header className="mb-20"></header>

        <div className="flex flex-col justify-center items-center mb-20">
          <p className="gradient font-semibold text-5xl text-center tracking-tighter mb-4 ">
            Websites that <br />
            look beyond <br />
            the ordinary and <br />
            turn visitors <br /> into customers
          </p>
          <span>Alonso Nuñez · Alicante, Spain.</span>
        </div>

        {/* PROJECTS */}

        <section className="border m-2 mb-30">
          <img src="/icons/mockup.png" alt="" className="h-130 object-cover" />
          <article className="p-8 bg-foreground text-background">
            <header className="flex flex-col mb-6">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold ">
                  <a
                    href="https://svetlane.vercel.app/"
                    className="flex gap-2 items-center"
                  >
                    Svetlane{" "}
                    <img
                      src="/icons/arrow-link.svg"
                      alt=""
                      className="h-6 invert"
                    />
                  </a>{" "}
                </h1>
                <span className="text-sm border py-1 px-2 m-1 bg-secondary ">
                  Web App
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  className="text-blue-400 underline "
                  href="https://svetlane.vercel.app/"
                >
                  svetlane.vercel.app{" "}
                </a>
              </div>
            </header>

            <p className="text-sm mb-2 text-primary font-light">
              2026 · Language Learning App
            </p>
            <p className="mb-8 font-light">
              App to connect people that are learning languages with others,
              learn and review languages. <br />
              <br />
              Built in Feature-based + MVC architecture, CD with Github Actions
              and Containerized with Docker.
            </p>

            <section className="flex justify-between">
              <div className="flex gap-3">
                <img src="/icons/react.svg" alt="" className="h-8 w-8" />

                <img src="/icons/springboot.svg" alt="" className="h-8 w-8" />

                <img src="/icons/mysql.png" alt="" className="h-8 w-8" />
                <img src="/icons/docker.png" alt="" className="h-8 w-8" />
              </div>

              <a
                href="https://github.com/alonsojn13/svetlane"
                className="flex gap-2 items-center"
              >
                <span className="text-green-600 text-2xl">•</span>
                <img
                  src="/icons/github.svg"
                  alt=""
                  className="h-8 w-8 invert"
                />
              </a>
            </section>
          </article>
        </section>

        <h1></h1>

        {/* SKILLS */}
        <div className="mb-30">
          <section className="flex flex-col gap-8 m-4 mb-20">
            <h1 className="text-center text-4xl font-semibold tracking-tighter mb-10">
              Technologies
            </h1>
            
            <div className="">
              <header className="flex items-center gap-2 mb-4">
                <h1 className="text-md">· Client</h1>
                <span className="border-t flex-1"></span>
                /
              </header>

              <div className="flex items-start gap-5">
                <Technology img="html.png" text="HTML" info=""></Technology>
                <Technology img="ts.svg" text="Typescript" info=""></Technology>
                <Technology
                  img="react.svg"
                  text="React"
                  info="Zod"
                ></Technology>
                <Technology
                  img="tailwindcss.png"
                  text="TailwindCSS"
                  info=""
                ></Technology>
              </div>
            </div>

                 
            <div className="">
              <header className="flex items-center gap-2 mb-4">
                <h1 className="text-md">· Server</h1>
                <span className="border-t flex-1"></span>
                /
              </header>

              <div className="flex items-start gap-5">
               <Technology img="java.svg" text="Java"></Technology>
                <Technology
                  img="mysql.png"
                  text="MySQL"
                  info="Migrations"
                ></Technology>
                <Technology
                  img="springboot.svg"
                  text="Spring Boot"
                  info="Security - JWT"
                ></Technology>
              </div>
            </div>

                 <div className="">
              <header className="flex items-center gap-2 mb-4">
                <h1 className="text-md">· QA - DevOps</h1>
                <span className="border-t flex-1"></span>
                /
              </header>

              <div className="flex items-start gap-5">
              <Technology img="junit.svg" text="JUnit5"></Technology>
                <Technology
                  img="docker.png"
                  text="Docker"
                  info="Compose"
                ></Technology>
              </div>
            </div>

     
            <div className="">
              <header className="flex items-center gap-2 mb-4">
                <h1 className="text-md">· Client</h1>
                <span className="border-t flex-1"></span>
                /
              </header>

              <div className="flex items-start gap-5">
        <Technology img="slack.svg" text="Slack"></Technology>
                <Technology img="git.png" text="Git"></Technology>
                <Technology
                  img="wordpress.svg"
                  text="Wordpress"
                  info="WooCommerce"
                ></Technology>
              </div>
            </div>

   

            {/* 
        <section>
          <h1>AI Integration</h1>
          <Technology img="python.png" text="HTML"></Technology>
          <Technology img="codex.svg" text="Typescript"></Technology>
          <Technology img="tailwindcss.png" text="TailwindCSS"></Technology>
        </section>
        */}
          </section>

          {/* ABOUT */}
          <section className="flex flex-col gap-10 m-4 text-end tracking-tight font-bold text-2xl">
            <p>
              With over 1 year of experience developing Full-Stack applications,
              applying UX{" "}
              <span className="text-primary">
                {" "}
                best practices, integrating REST APIs and AI models as APIs.
              </span>
            </p>

            <p>
              Trying to captivize the user with modern and cutting-edge designs.
              <span className="text-primary">
                Feature-based architecture. Unit tests. Automatize Continuous
                Deployment.
              </span>
            </p>

            <p className="flex flex-col items-end">
              <img src="/icons/codex.png" alt="" className="h-12" />
              <span className="text-xl font-light">
                Levearging Codex to detect <br /> vulnerabilities and ensure{" "}
                <br /> Infraestructure Quality
              </span>
            </p>
          </section>
        </div>

        {/* LANGUAGES */}
        <section className="tracking-tighter mb-30">
          <h1 className="text-center text-4xl font-semibold tracking-tighter mb-10">
            Languages
          </h1>

          <article className="bg-foreground text-background p-6 m-2 flex flex-col items-start">
            <p className="text-3xl font-bold flex gap-2 items-center">
              English{" "}
              <img src="/icons/usa_flag.svg" alt="" className="h-8 w-8" />
            </p>
            <span className="text-xl mb-4 font-light">B2 Level</span>

            <Button variant="outline" size="lg">
              <a
                href="/utils/English CV - Alonso Nuñez.pdf"
                className="flex gap-2"
              >
                English CV
                <img
                  src="/icons/arrow-link.svg"
                  alt=""
                  className="invert h-5"
                />{" "}
              </a>
            </Button>
          </article>

          <article className="bg-foreground text-background p-6 m-2 flex flex-col items-start">
            <p className="text-3xl font-bold flex gap-2 items-center">
              Spanish <img src="/icons/spain.svg" alt="" className="h-8 w-8" />
            </p>
            <span className="text-xl mb-4 font-light">Native</span>

            <Button variant="outline" size="lg">
              <a
                href="/utils/English CV - Alonso Nuñez.pdf"
                className="flex gap-2"
              >
                CV Español
                <img
                  src="/icons/arrow-link.svg"
                  alt=""
                  className="invert h-5"
                />{" "}
              </a>
            </Button>
          </article>
        </section>

        {/* CERTIFICATIONS */}
          <section className="tracking-tighter mb-30 m-4">
          <h1 className="text-center text-4xl font-semibold tracking-tighter mb-10">
            Certifications
          </h1>

          <section className="flex flex-col gap-15">
            <article className="border-l-2 px-4 pb-8">
              <header className="mb-2">
                <h1 className="bg-secondary text-background p-3 text-2xl font-bold flex gap-2 items-center mb-1">
                  Web Development Applications <img src="/icons/spain.svg" alt="" className="h-6" />
                </h1>

                <div className="flex items-center gap-2 ">
                  <h2 className="bg-secondary text-background p-2 text-md inline">
                    Higher Vocational Training
                  </h2>
                  <p className=" text-sm border p-2">EFQ Level 5</p>
                </div>
              </header>
              <h3 className="mb-3 border-b-2 py-1">CIPFP Batoi, Alicante • 2025 - 2027</h3>

              <p>
                Technologies learned: HTML; CSS; Javascript; MySQL; Docker; Git; Java; Spring Boot. 
              </p>
            </article>


     
          </section>
        </section>
        {/* EXPERIENCE */}
        <section className="tracking-tighter mb-30 m-4">
          <h1 className="text-center text-4xl font-semibold tracking-tighter mb-10">
            Experience
          </h1>

          <section className="flex flex-col gap-15">
            <article className="border-l-3 px-4">
              <header className="mb-2">
                <h1 className="bg-secondary text-background p-3 text-3xl font-bold flex gap-2 items-center mb-1">
                  Kebes <img src="/icons/spain.svg" alt="" className="h-6" />
                </h1>

                <div className="flex items-center gap-2 ">
                  <h2 className="bg-secondary text-background p-2 text-md inline">
                    Frontend Developer
                  </h2>
                  <p className=" text-sm border p-2">2026 - 1 Month</p>
                </div>
              </header>
              <h3 className="mb-3 border-b-2 pb-2">Internships - Alicante</h3>

              <p>
                Designing and deploying Wordpress web pages on cPanel and using
                Astra Pro plugin.
              </p>
            </article>


     
          </section>
        </section>

        {/* CONTACT */}
        <section className="flex justify-center gap-12">
          <a
            href="https://github.com/alonsojn13"
            className="flex flex-col items-center gap-2"
          >
            <img src="/icons/github.svg" alt="" className="h-10 w-10" />
            <span>Github</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alonso-nunez13/"
            className="flex flex-col items-center gap-2"
          >
            <img src="/icons/linkedin.svg" alt="" className="h-10 w-10" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alonsojn@proton.me"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2"
          >
            <img src="/icons/email.svg" alt="" className="h-10 w-10" />
            <span>Email</span>
          </a>
        </section>

        {/* FOOTER */}
        <footer className="flex justify-center my-30">
          <h1 className="gradient text-4xl font-semibold tracking-tighter ">
            Let's build that idea.
          </h1>
        </footer>
      </section>
    </>
  );
}

export default Home;
