import Technology from "@/components/own/Technology.tsx";

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
          <span>Alonso Nuñez - Alicante, Spain.</span>
        </div>

        {/* PROJECTS */}

        <section className="border m-2 mb-40">
          <img src="/icons/mockup.png" alt="" className="h-130 object-cover" />
          <article className="m-1 p-8 bg-foreground text-background">
            
            <header className="flex flex-col mb-6">
              <h1 className="text-3xl font-bold ">
                <a href="https://svetlane.vercel.app/">Svetlane</a>{" "}
              </h1>

              <div className="flex items-center gap-2">
                <span>Language Learning </span>
                <span className="text-xs border py-1 px-2 m-1 bg-secondary ">
                  App
                </span>
              </div>
            </header>

            <p>
              Designed a modular architecture that separates business logic, UI
              components, API communications, making the application easier to
              scale and maintain while supporting AI functionalities such as
              OpenAI.{" "}
            </p>
          </article>
        </section>

        {/* SKILLS */}
        <div className="">
          <section className="flex flex-col gap-8 m-4 mb-20">
            <div className="">
              <header className="flex items-center gap-2 mb-4">
                <h1 className="text-md">· Client</h1>
                <span className="border-t flex-1"></span>
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
              <header className="flex items-center gap-2 mb-3">
                <h1>· Server</h1>
                <span className="border-t flex-1"></span>
              </header>

              <div className="flex gap-2 ">
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
              <header className="flex items-center gap-2 mb-3">
                <h1>· QA - DevOps</h1>
                <span className="border-t flex-1"></span>
              </header>

              <div className="flex gap-2 ">
                <Technology img="junit.svg" text="JUnit5"></Technology>
                <Technology
                  img="docker.png"
                  text="Docker"
                  info="Compose"
                ></Technology>
              </div>
            </div>

            <div className="">
              <header className="flex items-center gap-2 mb-3">
                <h1>· Tools</h1>
                <span className="border-t flex-1"></span>
              </header>

              <div className="flex gap-2 ">
                <Technology img="slack.svg" text="Slack"></Technology>
                <Technology img="git.png" text="Git"></Technology>
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
              <img src="/icons/codex.png" alt="" className="h-14" />
              <span className="text-xl font-light">
                Find vulnerabilities and ensure <br /> Infraestructure Quality
              </span>
            </p>
          </section>
        </div>

        {/* LANGUAGES */}
        <section>
          <h1>Languages</h1>

          <article>
            <span>B2 Level</span>
          </article>
          <p>English</p>
        </section>

        {/* CONTACT */}

        <span>alonsojn@proton.me</span>

        <footer className="flex justify-center my-20">
          <h1 className="gradient text-3xl font-semibold tracking-tighter ">
            Let's build that idea.
          </h1>
        </footer>
      </section>
    </>
  );
}

export default Home;
