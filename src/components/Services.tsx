const services = [
  {
    title: '기획 · 브랜딩',
    desc: '시장 분석부터 브랜드 포지셔닝,\n네이밍, 카피까지 직접 설계합니다.',
    num: '01',
  },
  {
    title: '디자인 · UI/UX',
    desc: '트렌디한 비주얼과 직관적인 UX.\n무드보드부터 프로덕션 디자인까지.',
    num: '02',
  },
  {
    title: '개발 · 런칭',
    desc: 'Next.js, React, 자동화 시스템.\n개발부터 배포, 운영까지 원스톱.',
    num: '03',
  },
];

export default function Services() {
  return (
    <section id="services" className="px-14 py-20 max-md:px-6 border-t border-ink/8">
      <div className="max-w-[900px] mx-auto">
      <div className="text-center mb-14">
        <h2 className="font-[family-name:var(--font-outfit)] text-[60px] max-md:text-[32px] font-extralight tracking-[-0.03em] leading-[1.25] text-midnight mb-5">
          Share <strong className="font-bold bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">Clearer.</strong>
          <br />
          Build <strong className="font-bold bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">Sharper.</strong>
          <br />
          Scale <strong className="font-bold bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">Smarter.</strong>
        </h2>
        <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.2em] uppercase text-ink">
          Our Services
        </p>
      </div>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-ink/8">
        {services.map((s) => (
          <div
            key={s.num}
            className="bg-white p-11 max-md:p-8 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="font-[family-name:var(--font-outfit)] text-[56px] font-extralight text-midnight/30 leading-none tracking-[-0.04em]">
                {s.num}
              </span>
              <h3 className="font-[family-name:var(--font-sora)] text-[13px] font-medium tracking-[0.04em] text-midnight mt-6 mb-2">
                {s.title}
              </h3>
            </div>
            <p className="text-[11px] font-normal text-ink leading-[1.8] whitespace-pre-line">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
