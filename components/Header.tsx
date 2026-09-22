const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#work", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="navbar">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <a href="#top" className="font-serif text-lg nav-icon"><b>
          Precious Omosefe</b>
        </a>
        <nav className="flex gap-6 text-sm ">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white nav-links"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
