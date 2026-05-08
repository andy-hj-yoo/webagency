const milestones = [
  {
    date: '2025.10',
    label: '개원',
    details: ['다국어 홈페이지 완성', '중국, 일본 마케팅 시작'],
    highlight: false,
  },
  {
    date: '2025.12',
    label: '영어권 마케팅 시작',
    highlight: false,
  },
  {
    date: '2026.01',
    label: '월매출 5.5억 돌파',
    highlight: false,
  },
  {
    date: '2026.03',
    label: '월매출 10억+ 달성',
    details: ['해외 고객 매출 비중 85%+', '영어권 매출 3억+'],
    highlight: true,
  },
];

const services = [
  {
    num: '01',
    title: '다국어 웹사이트 디자인 기획 및 개발',
    href: '#services',
  },
  {
    num: '02',
    title: '영어권 마케팅 운영',
    href: '#marketing',
  },
  {
    num: '03',
    title: '내부 운영 효율 및 자동화',
    desc: 'CS 자동화, 매출 관리 대시보드',
    href: '#automation',
  },
];

export default function Approach() {
  return (
    <section className="px-14 py-25 max-md:px-6 border-t border-ink/8">
      <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-ink mb-3">
        Our Approach
      </p>

      <h2 className="text-[38px] max-md:text-[26px] font-extralight leading-[1.5] tracking-[-0.02em] text-midnight mb-16 max-w-[600px]">
        <span className="font-bold text-plum">월 매출 10억 달성</span> 경험으로,
        <br />
        웹사이트 디자인 개발부터
        <br />
        마케팅 운영까지 전부 진행해드립니다.
      </h2>

      {/* Timeline */}
      <div className="mb-16">
        <div className="relative">
          {/* Line */}
          <div className="absolute top-3 left-0 right-0 h-px bg-ink/8" />
          <div
            className="absolute top-3 left-0 h-px bg-gradient-to-r from-plum to-rose-a"
            style={{ width: '100%' }}
          />

          {/* Dots */}
          <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-y-10 relative">
            {milestones.map((m) => (
              <div key={m.date} className="flex flex-col items-start">
                <div
                  className={`w-[7px] h-[7px] rounded-full mb-4 ${
                    m.highlight
                      ? 'bg-gradient-to-br from-plum to-rose-a'
                      : 'bg-ink/20'
                  }`}
                />
                <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.06em] text-ink/40 mb-1">
                  {m.date}
                </p>
                <p
                  className={`text-sm font-normal ${
                    m.highlight ? 'font-bold text-plum' : 'text-ink'
                  }`}
                >
                  {m.label}
                </p>
                {m.details && (
                  <ul className="mt-2 space-y-0.5">
                    {m.details.map((d) => (
                      <li
                        key={d}
                        className={`text-[12px] font-medium leading-[1.7] ${
                          m.highlight ? 'text-plum' : 'text-ink/60'
                        }`}
                      >
                        — {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Services CTA */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-ink/8">
        {services.map((s) => (
          <a
            key={s.num}
            href={s.href}
            className="bg-white p-10 max-md:p-8 flex flex-col justify-between min-h-[180px] group transition-colors hover:bg-midnight"
          >
            <span className="font-[family-name:var(--font-outfit)] text-[40px] font-extralight text-midnight/10 leading-none tracking-[-0.04em] group-hover:text-white/10">
              {s.num}
            </span>
            <div>
              <h3 className="font-[family-name:var(--font-sora)] text-[13px] font-medium tracking-[0.04em] text-midnight mt-6 mb-1 group-hover:text-white">
                {s.title}
              </h3>
              {s.desc && (
                <p className="text-[11px] text-ink/50 group-hover:text-white/50">
                  {s.desc}
                </p>
              )}
              <span className="inline-flex items-center gap-2 font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.06em] text-plum mt-4 group-hover:text-rose-a">
                자세히 보기 →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Note */}
      <div className="border-l-2 border-plum pl-6 mt-12 max-w-[500px]">
        <p className="text-[12px] font-normal text-ink/50 leading-[1.8]">
          일본은 최근 효율이 나오지 않고 있고,
          <br />
          중국, 대만은 상담 진행 후 설명 도와드리고 있습니다.
        </p>
      </div>
    </section>
  );
}
