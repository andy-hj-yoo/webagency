const cards = [
  {
    icon: '◎',
    title: '픽셀 · GTM 설치',
    desc: 'Meta Pixel, Google Tag Manager 설치로\n방문자 행동 데이터를 수집합니다.',
  },
  {
    icon: '⟲',
    title: '리타겟팅 활성화',
    desc: '홈페이지 방문자, 영상 시청자를\n다시 타겟팅하여 전환율을 높입니다.',
  },
  {
    icon: '▤',
    title: '데이터 기반 최적화',
    desc: '캠페인 성과를 실시간 분석하고\n예산 배분을 자동 최적화합니다.',
  },
  {
    icon: '↗',
    title: '광고비 효율 극대화',
    desc: 'CPA 기반 성과 측정으로\n낭비 없는 광고 집행을 보장합니다.',
  },
];

export default function MarketingPerformance() {
  return (
    <section id="automation" className="bg-midnight px-14 py-20 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-12 text-center">
          Campaign & Performance Marketing
        </p>

        <div className="text-center mb-14">
          <h2 className="text-[28px] max-md:text-[22px] font-extralight leading-[1.5] tracking-[-0.02em] text-white mb-3">
            단순 인플루언서만 데려오고 끝내는
            <br />
            무책임한 방식으로 일하지 않습니다.
          </h2>
          <p className="text-[16px] max-md:text-[14px] font-extralight leading-[1.7] text-white/70">
            프랙시아는 시술 트렌드 분석을 통한{' '}
            <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">캠페인 기획</strong>과,
            <br />
            <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">퍼포먼스 마케팅</strong>을 통해 매출을 극대화합니다.
          </p>
        </div>

        {/* Desktop: [기획] + [실행] then ↓ result */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[0.75fr_auto_1fr] items-center gap-5">
            {/* 캠페인 기획 */}
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.12em] uppercase text-white font-medium mb-3 text-center">
                캠페인 기획
              </p>
              <div className="aspect-[4/5] rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center">
                <span className="text-[11px] text-white/20 tracking-[0.1em] uppercase">Campaign Image</span>
              </div>
            </div>

            {/* Plus sign */}
            <div className="flex items-center justify-center">
              <span className="font-[family-name:var(--font-outfit)] text-[28px] font-extralight text-white/30">+</span>
            </div>

            {/* 퍼포먼스 마케팅 실행 */}
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.12em] uppercase text-white font-medium mb-3 text-center">
                퍼포먼스 마케팅 실행
              </p>
              <div className="grid grid-cols-2 gap-px bg-white/5">
                {cards.map((c) => (
                  <div key={c.title} className="bg-white/[0.03] p-6">
                    <span className="font-[family-name:var(--font-outfit)] text-[24px] font-extralight text-rose-a">
                      {c.icon}
                    </span>
                    <h3 className="font-[family-name:var(--font-sora)] text-[12px] font-medium text-white mt-3 mb-1.5 tracking-[0.02em]">
                      {c.title}
                    </h3>
                    <p className="text-[11px] text-white/45 leading-[1.7] whitespace-pre-line">
                      {c.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow down + Result */}
          <div className="flex flex-col items-center mt-6">
            <div className="w-px h-6 bg-gradient-to-b from-transparent to-white/15" />
            <span className="font-[family-name:var(--font-outfit)] text-[20px] font-extralight text-white/25 my-1">=</span>
            <div className="w-px h-6 bg-gradient-to-b from-white/15 to-transparent" />
          </div>

          <div className="border border-white/15 rounded-lg bg-gradient-to-br from-plum/15 to-rose-a/10 px-10 py-8 flex items-center justify-center text-center mt-2 max-w-[400px] mx-auto">
            <p className="font-[family-name:var(--font-sora)] text-[22px] font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent leading-[1.4]">
              해외고객 매출 극대화
            </p>
          </div>
        </div>

        {/* Mobile: [기획] + [실행] stacked, then result */}
        <div className="md:hidden">
          {/* 캠페인 기획 */}
          <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.12em] uppercase text-white font-medium mb-3">
            캠페인 기획
          </p>
          <div className="aspect-[16/9] rounded-lg bg-white/[0.04] border border-white/8 flex items-center justify-center">
            <span className="text-[11px] text-white/20 tracking-[0.1em] uppercase">Campaign Image</span>
          </div>

          {/* Plus */}
          <div className="flex items-center justify-center py-4">
            <span className="font-[family-name:var(--font-outfit)] text-[24px] font-extralight text-white/30">+</span>
          </div>

          {/* 퍼포먼스 마케팅 실행 */}
          <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.12em] uppercase text-white font-medium mb-3">
            퍼포먼스 마케팅 실행
          </p>
          <div className="grid grid-cols-1 gap-px bg-white/5">
            {cards.map((c) => (
              <div key={c.title} className="bg-white/[0.03] p-6">
                <span className="font-[family-name:var(--font-outfit)] text-[28px] font-extralight text-rose-a">
                  {c.icon}
                </span>
                <h3 className="font-[family-name:var(--font-sora)] text-[13px] font-medium text-white mt-4 mb-2 tracking-[0.02em]">
                  {c.title}
                </h3>
                <p className="text-[12px] text-white/45 leading-[1.7] whitespace-pre-line">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Equals + Result */}
          <div className="flex flex-col items-center mt-5">
            <div className="w-px h-5 bg-gradient-to-b from-transparent to-white/15" />
            <span className="font-[family-name:var(--font-outfit)] text-[18px] font-extralight text-white/25 my-1">=</span>
            <div className="w-px h-5 bg-gradient-to-b from-white/15 to-transparent" />
          </div>

          <div className="border border-white/15 rounded-lg bg-gradient-to-br from-plum/15 to-rose-a/10 px-8 py-6 flex items-center justify-center text-center mt-2">
            <p className="font-[family-name:var(--font-sora)] text-[18px] font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent leading-[1.4]">
              해외고객 매출 극대화
            </p>
          </div>
        </div>

        <p className="text-[18px] max-md:text-[15px] font-extralight leading-[1.7] text-white mt-10 text-center">
          캠페인 기획과 퍼포먼스 마케팅을 통한 효과 극대화,
          <br />
          프랙시아랩이 이 성공 공식을 선도합니다.
        </p>
      </div>
    </section>
  );
}
