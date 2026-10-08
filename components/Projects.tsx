// Edit this array with your own projects. Each one renders as a row below.
const projects = [
  {
    title: "Ssusuluxe-hair",
    description: "A modern e-commerce platform built for a US-based hair and weavon business. The application provides customers with a seamless shopping experience while giving administrators tools to manage products, customers, orders and store content. The project was designed with a focus on responsive UI, secure authentication, API-driven architecture, database management and production deployment",
    stack: "Next.js, TypeScript, Python, FastAPI, SQLalchemy, PostgreSQL (Supabase), Vercel, Render",
    href: "https://ssusuluxe.vercel.app/",
    image: "/ssusuluxe-banner.png",
  },
  {
    title: "Midas Trading journal",
    description: "A full-stack trading journal that syncs real trade data from MetaTrader 5, tracks P&L, win rate, and strategy performance, and is deployed with JWT-protected CRUD operations",
    stack: "React, Node.js, Express, PostgreSQl, Python, JWT, Render, Tailwind",
    href: "https://journal-frontend-uooz.onrender.com/",
    image: "/Trading-journal.png",
  },
  {
    title: "SkyBook",
    description: "A full-stack flight booking platform that manage bookings, and verify tickets, with a secure admin dashboard for managing flights, bookings, users, and revenue",
    stack:"React, TypeScript, Vite, Node.js, Express, Prisma, PostgreSQL (Supabase), JWT, Vercel, Render",
    href:"https://skybooking-seven.vercel.app/",
    image: "/sky-booking.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-16">
      <h2 className="text-2xl sectn-header">Projects</h2>
      <div className="mt-10">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.href}
            target="_blank"  rel="noopener noreferrer"  aria-label={project.title}
            className="group flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between service-box"
          >
            <div>
              <h3 className="text-xl projects-headr ">
                {project.title}
              </h3>
              <div className="projImage">
                 <img
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
            />
              </div>
       
            </div>
            <span className="proj-descr text-zinc-200">
                     <p className="mt-1 max-w-prose text-sm service-descr proj-des">
                {project.description} 
              </p>
              {project.stack}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
