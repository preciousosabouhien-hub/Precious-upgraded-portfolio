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
            Replace this with a few sentences about your background, how you
            got into web development, and what kind of work you want to do
            next. Keep it specific - mention a real project or moment, not
            just a list of adjectives.
          </p>
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
