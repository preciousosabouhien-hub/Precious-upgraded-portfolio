// Edit this array with your own projects. Each one renders as a row below.
const services = [
  {
    title: "UI design",
    description: "UI design using figma.",
    href: "#",
  },
  {
    title: "Front-end Web development",
    description: "Front-end web design using modern frameworks and libraries like tailwindCss, Next.js, Vite.js, React.js.",
    href: "#",
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
