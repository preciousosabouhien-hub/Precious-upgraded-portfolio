const skills = [
  "HTML & CSS",
  "Figma",
  "JavaScript",
  "React",
  "Vite.js",
  "Next.js",
  "Tailwind CSS",
  "Git",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-[2fr,1fr]">
        <div>
          <h2 className="text-2xl sectn-header">About</h2>
          <p className="mt-4 max-w-prose sectn-about">

          Hi, I'm Precious Osabouhien Omosefe, a web developer with a Bachelor's degree in Statistics.
          My background in Statistics has shaped the way I approach problems - I enjoy breaking complex problems into smaller,
          practical steps and using data to make better decisions. I've brought that mindset into web development, where I focus on building clean,
          responsive, accessible, and user-friendly digital experiences. I'm currently 
          open to remote opportunities, freelance projects, and collaborations where I can contribute, grow and create meaningful digital experiences.</p> 
        </div>
        <div>
          <h3 className="text-xl sectn-mini-header">Skills</h3>
          <ul className="mt-3 flex flex-wrap gap-2 ">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-3 py-1 sectn-mini-info"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
