const stats = [
  { num: '50+', label: '프로젝트' },
  { num: '2일', label: '평균 납기' },
  { num: '100%', label: '직접 제작' },
];

export default function About() {
  return (
    <section id="about" className="px-14 py-25 max-md:px-6 border-t border-ink/8">
      <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-ink mb-12">
        About Us
      </p>

      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-16 max-md:gap-12">
        {/* Copy */}
        <div>
          <h2 className="text-[38px] max-md:text-[26px] font-extralight leading-[1.5] tracking-[-0.02em] text-midnight mb-6 max-w-[480px]">
            <span className="font-bold text-plum">강남 클리닉 월 매출 10억</span>을
            <br />
            만든 사람이
            <br />
            상담부터 제작까지 함께합니다.
          </h2>
          <p className="text-sm font-normal leading-[1.85] text-ink max-w-[400px]">
            기획, 디자인, 브랜딩, 개발까지 직접 합니다.
            <br />
            외주를 또 외주 주지 않습니다.
            <br />
            대표가 직접 상담하고, 직접 만듭니다.
          </p>
        </div>

        {/* Stats */}
        <div className="flex gap-px bg-ink/8 self-end">
          {stats.map((s) => (
            <div key={s.label} className="bg-white flex-1 p-8 text-center">
              <p className="font-[family-name:var(--font-outfit)] text-[48px] max-md:text-[36px] font-extralight text-midnight leading-none tracking-[-0.04em] mb-2">
                {s.num}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.08em] uppercase text-plum">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
