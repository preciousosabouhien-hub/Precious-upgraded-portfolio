// Edit this array with your own projects. Each one renders as a row below.
const services = [
    {
    title: "Front-end development",
    description: "I build responsive, modern, and user-friendly websites and web applications using technologies like React, Next.js, JavaScript, and Tailwind CSS.",
    href: "#contact",
  },
  { 
    title: "Backend Development",
    description: "I build reliable backend systems, APIs, and server-side functionality that power web applications, including database integration, authentication, and data management.",
    href: "#contact",
  },
    {
    title: "UI/UX Design",
    description: "I create clean and intuitive interfaces focused on usability, responsiveness, and a smooth user experience.",
    href: "#contact",
  },
  {
    title: "Full-Stack Development",
    description: "I develop web applications by combining modern frontend interfaces with robust backend functionality and database integration.",
    href: "#contact",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className=" text-2xl  sectn-header ">Services</h2>
      <div className="mt-8 ">
        {services.map((service) => (
          <a
            key={service.title}
            href={service.href}
            className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between service-box"
          >
            <div>
              <h3 className="text-xl service-headr">
                {service.title}
              </h3>
              <p className="mt-1 max-w-prose text-sm  service-descr">
                {service.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
