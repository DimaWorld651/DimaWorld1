import { useEffect, useState } from 'react';
import { Menu, X, Blocks } from 'lucide-react';

const navLinks = [
  { label: 'Головна', href: '#hero' },
  { label: 'Що на сервері', href: '#modes' },
  { label: 'Галерея', href: '#gallery' },
  { label: 'Правила', href: '#rules' },
  { label: "Ком'юніті", href: '#community' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-obsidian-950/85 backdrop-blur-lg border-b border-grass-500/20 shadow-lg shadow-grass-500/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-pad flex items-center justify-between h-16 lg:h-20">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-md bg-gradient-to-br from-grass-400 to-grass-600 flex items-center justify-center shadow-block-sm group-hover:rotate-6 transition-transform">
            <Blocks className="w-5 h-5 text-white" />
          </div>
          <span className="pixel-font text-sm sm:text-base text-white tracking-tight">
            Dima<span className="text-grass-400">World</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="px-4 py-2 text-sm font-semibold text-gray-300 hover:text-grass-400 rounded-md hover:bg-white/5 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="https://discord.gg/YZMzgwRTsr" target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
            Discord
          </a>
          <a href="#hero" className="btn-primary text-sm animate-pulse-glow">
            Грати
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md bg-white/10 text-white"
          aria-label="Меню"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-obsidian-950/95 backdrop-blur-lg border-t border-grass-500/20">
          <ul className="section-pad py-4 space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm font-semibold text-gray-300 hover:text-grass-400 hover:bg-white/5 rounded-md transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 flex gap-2">
              <a href="https://discord.gg/YZMzgwRTsr" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-ghost flex-1 text-sm">
                Discord
              </a>
              <a href="#hero" onClick={() => setOpen(false)} className="btn-primary flex-1 text-sm">
                Грати
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
