'use client';

import { useState } from 'react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-14 py-8 max-md:px-6">
      <div className="max-w-[900px] mx-auto flex items-center justify-between">
      <a href="#" className="flex items-center font-[family-name:var(--font-outfit)]">
        <span className="text-[17px] font-normal tracking-[0.04em] text-midnight">
          Praxia
        </span>
        <span className="ml-2 h-1 w-1 rounded-full bg-gradient-to-br from-plum to-rose-a" />
        <span className="ml-1.5 text-[17px] font-light bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">
          Labs
        </span>
      </a>

      {/* Desktop */}
      <ul className="hidden md:flex gap-9">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.05em] text-ink hover:text-midnight transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5"
        aria-label="메뉴"
      >
        <span className={`block h-px w-5 bg-midnight transition-all ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
        <span className={`block h-px w-5 bg-midnight transition-all ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 px-6 py-8 border-b border-ink/8 md:hidden">
          <ul className="flex flex-col gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.05em] text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}
