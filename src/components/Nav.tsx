'use client';

import { useState, useRef, useEffect } from 'react';

const servicesSub = [
  { label: '다국어 웹사이트 디자인 기획 및 개발', href: '#services' },
  { label: '영어권 마케팅 운영', href: '#marketing' },
];

const navLinks = [
  { label: '서비스', href: '#services', hasSub: true },
  { label: '포트폴리오', href: '#portfolio', hasSub: false },
  { label: '인플루언서\n협업 성과', href: '#marketing', hasSub: false },
  { label: '소개', href: '#about', hasSub: false },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-9">
        <ul className="flex gap-9 items-center">
          {/* 서비스 with dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setServiceOpen(!serviceOpen)}
              className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.05em] text-ink hover:text-midnight transition-all inline-flex items-baseline gap-1 border-b border-transparent hover:border-plum pb-0.5"
            >
              서비스
              <svg
                className={`w-2.5 h-2.5 transition-transform translate-y-px ${serviceOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {serviceOpen && (
              <div className="absolute top-full left-0 mt-3 bg-white border border-ink/8 shadow-lg py-2 min-w-[280px] z-50">
                {servicesSub.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    onClick={() => setServiceOpen(false)}
                    className="block px-5 py-2.5 text-[12px] text-ink hover:bg-ink/[0.03] hover:text-plum transition-colors"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a href="#portfolio" className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.05em] text-ink hover:text-midnight transition-all border-b border-transparent hover:border-plum pb-0.5">
              포트폴리오
            </a>
          </li>
          <li>
            <a href="#marketing" className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.05em] text-ink hover:text-midnight transition-all border-b border-transparent hover:border-plum pb-0.5 whitespace-nowrap">
              협업 성과
            </a>
          </li>
          <li>
            <a href="#about" className="font-[family-name:var(--font-outfit)] text-xs tracking-[0.05em] text-ink hover:text-midnight transition-all border-b border-transparent hover:border-plum pb-0.5">
              소개
            </a>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="font-[family-name:var(--font-outfit)] text-[11px] font-medium tracking-[0.06em] bg-gradient-to-br from-plum to-rose-a text-white px-5 py-2 rounded-sm transition-opacity hover:opacity-90"
        >
          미팅 문의하기
        </a>
      </div>

      {/* Mobile: CTA + hamburger */}
      <div className="md:hidden flex items-center gap-4">
        <a
          href="#contact"
          className="font-[family-name:var(--font-outfit)] text-[10px] font-medium tracking-[0.06em] bg-gradient-to-br from-plum to-rose-a text-white px-4 py-1.5 rounded-sm"
        >
          미팅 문의하기
        </a>
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5"
          aria-label="메뉴"
        >
          <span className={`block h-px w-5 bg-midnight transition-all ${open ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block h-px w-5 bg-midnight transition-all ${open ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white z-50 px-6 py-8 border-b border-ink/8 md:hidden">
          <ul className="flex flex-col gap-6">
            <li>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.05em] text-ink flex items-center gap-1.5"
              >
                서비스
                <svg
                  className={`w-3 h-3 transition-transform ${serviceOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {serviceOpen && (
                <ul className="mt-3 ml-3 flex flex-col gap-3 border-l border-ink/8 pl-4">
                  {servicesSub.map((s) => (
                    <li key={s.href}>
                      <a
                        href={s.href}
                        onClick={() => { setOpen(false); setServiceOpen(false); }}
                        className="text-[12px] text-ink/60 hover:text-plum transition-colors"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <a href="#portfolio" onClick={() => setOpen(false)} className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.05em] text-ink">
                포트폴리오
              </a>
            </li>
            <li>
              <a href="#marketing" onClick={() => setOpen(false)} className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.05em] text-ink">
                인플루언서 협업 성과
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setOpen(false)} className="font-[family-name:var(--font-outfit)] text-sm tracking-[0.05em] text-ink">
                소개
              </a>
            </li>
          </ul>
        </div>
      )}
      </div>
    </nav>
  );
}
