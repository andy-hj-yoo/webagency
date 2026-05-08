export default function Footer() {
  return (
    <footer className="px-14 pt-25 pb-16 max-md:px-6">
      <div className="max-w-[1080px] mx-auto">
      <p className="font-[family-name:var(--font-outfit)] text-[120px] max-md:text-[56px] font-light tracking-[-0.04em] leading-[0.9] text-ink/8 select-none mb-6">
        Praxia
      </p>
      <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-4">
        <span className="font-[family-name:var(--font-outfit)] text-[11px] text-ink tracking-[0.06em]">
          © 2026 Praxia Labs. All rights reserved.
        </span>
        <div className="flex gap-8">
          {['Instagram', 'Contact', 'Blog'].map((label) => (
            <a
              key={label}
              href="#"
              className="font-[family-name:var(--font-outfit)] text-[11px] text-ink tracking-[0.04em] hover:text-midnight transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
      </div>
    </footer>
  );
}
