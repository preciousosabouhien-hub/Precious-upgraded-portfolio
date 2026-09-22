import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between hero"
    >
      <div>
        <p className="mb-4 text-sm  hero-info-text">Front-end Developer</p>
        <h1 className="max-w-2xl sm:text-6xl hero-text">
          I build clean, fast interfaces with modern frameworks.
        </h1>
        <p className="mt-6 max-w-prose text-zinc-500 hero-p">
          Currently open to remote roles and freelance projects. I care about
          readable code, accessible interfaces, and shipping things that work
          on a slow connection as well as a fast one.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#work"
            className="px-5 py-2.5 transition-colors primary-btn"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 primary-btn-2"
          >
            Get in touch 
          </a>
        </div>
      </div>

      {/* Swap "/profile.jpg" for your own file name in the public/ folder */}
      <Image
        src="/ME2.png"
        alt="Profile photo"
        width={160}
        height={160}
        priority
        className="h-40 w-40 flex-shrink-0 rounded-full profileImage object-cover"
      />
    </section>
  );
}
