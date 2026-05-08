export default function Footer() {
  return (
    <footer className="px-14 pt-25 pb-16 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
      <div className="flex justify-between items-start max-md:flex-col-reverse max-md:gap-6 mb-8">
        <div className="text-[11px] text-ink/40 leading-[1.8]">
          <p>프랙시아코퍼레이션 · 대표 유강안</p>
          <p>사업자등록번호 840-86-03689</p>
          <p>서울 서초구 강남대로 311 드림플러스 강남</p>
          <p>support@praxia-in.com</p>
        </div>
        <p className="font-[family-name:var(--font-outfit)] text-[120px] max-md:text-[56px] font-light tracking-[-0.04em] leading-[0.9] text-ink/8 select-none">
          Praxia
        </p>
      </div>
      <div className="flex justify-between items-end max-md:flex-col max-md:items-start max-md:gap-4">
        <span className="font-[family-name:var(--font-outfit)] text-[11px] text-ink tracking-[0.06em]">
          © 2026 Praxia Corporation. All rights reserved.
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
