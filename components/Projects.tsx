// Edit this array with your own projects. Each one renders as a row below.
const projects = [
  {
    title: "E-commerce Web app",
    description: "Replace with a one-line description of what it does and who it's for.",
    stack: "React, Next.js, Tailwind",
    href: "https://shop-ease-m.vercel.app/",
  },
  {
    title: "Forex Trading journal",
    description: "Replace with a one-line description of what it does and who it's for.",
    stack: "Next.js, TypeScript",
    href: "#",
  },
  {
    title: "Hotel website",
    description: "Replace with a one-line description of what it does and who it's for.",
    stack: "React, REST API",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className=" text-2xl sectn-header">Projects</h2>
      <div className="mt-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between service-box"
          >
            <div>
              <h3 className="text-xl projects-headr ">
                {project.title}
              </h3>
              <p className="mt-1 max-w-prose text-sm service-descr">
                {project.description}
              </p>
            </div>
            <span className="whitespace-nowrap proj-descr text-zinc-500">
              {project.stack}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
