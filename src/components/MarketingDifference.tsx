const rows = [
  { them: '광고비 불투명 + 높은 마진', us: '최초 제안 · 협상 금액 전액 공개', highlight: '전액 공개' },
  { them: '단가 협상 없이 견적 그대로', us: '평균 30-40%+ 광고비 할인 협상 성공', highlight: '30-40%+' },
  { them: '타 클리닉 광고를 이미 한 한국 거주 인플루언서 위주', us: '인플루언서 인바운드 신청 유도 → 효율 높은 해외 거주 인플루언서 유치', highlight: '인바운드 신청 유도' },
  { them: '성과 기반 높은 변동비', us: '팔로워/인게이지먼트 기반 정액제 통한 합리적 비용', highlight: '팔로워/인게이지먼트 기반 정액제' },
  { them: '보장 없는 성과', us: '월 30명+ 인플루언서 보장', highlight: '월 30명+', note: '부담스러우시면 조정 가능합니다' },
  { them: '단순 인플루언서 연결', us: '영어권 트렌드에 맞는 맞춤 시술 구성 캠페인 기획', highlight: '맞춤 시술 구성 캠페인 기획' },
];

const stats = [
  { num: '30-40%+', label: '광고비 할인 협상' },
  { num: '30+', label: '월 인플루언서' },
  { num: '100%', label: '비용 투명 공개' },
];

function HighlightText({ text, highlight }: { text: string; highlight: string }) {
  const idx = text.indexOf(highlight);
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <span className="font-bold text-plum">{highlight}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

export default function MarketingDifference() {
  return (
    <section className="px-14 py-20 max-md:px-6 border-t border-ink/8">
      <div className="max-w-[900px] mx-auto">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-ink mb-12">
          Our Difference
        </p>

        <h2 className="text-[32px] max-md:text-[22px] font-extralight leading-[1.5] tracking-[-0.02em] text-midnight mb-12">
          일반 대행사와{' '}
          <strong className="font-bold text-plum">프랙시아랩스</strong>는
          <br />
          다릅니다
        </h2>

        {/* Comparison table */}
        <div className="hidden md:block">
          {/* Desktop: side-by-side */}
          <div className="grid grid-cols-2 gap-0">
            <div className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.12em] uppercase px-6 py-4 border-b border-ink/8 text-ink/30 bg-ink/[0.02]">
              일반 대행사
            </div>
            <div className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.12em] uppercase px-6 py-4 border-b border-ink/8 text-plum font-medium">
              Praxia Labs
            </div>
          </div>
          {rows.map((r, i) => (
            <div key={i} className={`grid grid-cols-2 gap-0 ${i < rows.length - 1 ? 'border-b border-ink/8' : ''}`}>
              <div className="px-6 py-5 text-[13px] text-ink/40 leading-[1.7] bg-ink/[0.02] before:content-['✕_'] before:text-ink/15">
                {r.them}
              </div>
              <div className="px-6 py-5 text-[13px] text-ink leading-[1.7] before:content-['✓_'] before:text-plum before:font-bold">
                <HighlightText text={r.us} highlight={r.highlight} />
                {r.note && (
                  <span className="block text-[11px] text-ink/40 mt-1">{r.note}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: stacked */}
        <div className="md:hidden space-y-0 border-t border-ink/8">
          {rows.map((r, i) => (
            <div key={i} className={`py-4 px-5 ${i < rows.length - 1 ? 'border-b border-ink/8' : ''}`}>
              <p className="text-[11px] text-ink/35 mb-1">✕ {r.them}</p>
              <p className="text-[13px] text-ink">
                ✓ <HighlightText text={r.us} highlight={r.highlight} />
              </p>
              {r.note && (
                <p className="text-[11px] text-ink/40 mt-1">{r.note}</p>
              )}
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-px bg-ink/8 mt-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white flex-1 p-6 text-center">
              <p className="font-[family-name:var(--font-outfit)] text-[36px] max-md:text-[28px] font-extralight text-midnight tracking-[-0.04em]">
                {s.num}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.08em] uppercase text-plum mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
