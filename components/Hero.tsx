
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const linkedinInIcon: IconDefinition = {
  prefix: 'fab',
  iconName: 'linkedin-in',
  icon: [
    448, 512, [], "f0e1", // Width, height, ligatures, unicode
    "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 1 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" // SVG Path
  ]
};
const githubIcon: IconDefinition = {
  prefix: 'fab',
  iconName: 'github',
  icon: [
    496, 512, [], "f09b", // Width, height, ligatures, unicode
    "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5.7 1.3-1.6.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-.7zm-14.4-1.7c-.3 2 1.6 4.3 4.3 4.9 2.6 1 5.3 0 5.6-2s-1.6-4.3-4.3-4.9c-2.6-.7-5.3 0-5.6 2z" // SVG Path
  ]
};
export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto flex max-w-4xl flex-col-reverse items-start gap-8 px-6 pb-16 pt-20 sm:flex-row sm:items-center sm:justify-between hero"
    >
      <div>
        <p className="mb-4 text-sm  hero-info-text">Front-end Developer</p>
        <h1 className="max-w-2xl hero-text">
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
          </a><a href="https://www.linkedin.com/in/precious-omosefe-917128136/"  target="_blank"  rel="noopener noreferrer"  aria-label="Visit my LinkedIn Profile"> <FontAwesomeIcon icon={linkedinInIcon} className="hero-icons" />
          </a><a href="https://github.com/preciousosabouhien-hub"   target="_blank"  rel="noopener noreferrer"  aria-label="Visit my GitHub Profile"><FontAwesomeIcon icon={ githubIcon} className="hero-icons" /> </a></div>
      </div>

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
