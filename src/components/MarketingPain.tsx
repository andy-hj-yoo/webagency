const pains = [
  {
    num: '01',
    title: '적은 인플루언서 모수',
    desc: '영어권 인플루언서 네트워크가 없어 같은 몇 명만 반복 제안합니다. 선택지가 없으니 단가는 올라갑니다.',
  },
  {
    num: '02',
    title: '높은 마진 + 거짓말',
    desc: '실제 인플루언서 단가에 50-100% 마진을 얹고, 원래 이 가격이라고 말합니다. 비용 검증이 불가능합니다.',
    tag: '업계 평균 마진 50-100%',
  },
  {
    num: '03',
    title: '광고비는 급증했으나 협상력이 없음',
    desc: '환율 상승과 화장품 업체들의 경쟁 과열로 인플루언서 광고비가 급격히 올라가고 있으나, 협상력이 없습니다.',
  },
  {
    num: '04',
    title: '영어권 전문성 부재',
    desc: '중국·일본 마케팅 위주의 대행사가 영어권도 해준다고 합니다. 전문성이 없습니다.',
  },
];

export default function MarketingPain() {
  return (
    <section className="bg-midnight px-14 py-20 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-white/30 mb-12">
          The Problem
        </p>

        <h2 className="font-[family-name:var(--font-outfit)] text-[36px] max-md:text-[24px] font-extralight tracking-[-0.03em] leading-[1.3] text-white mb-2">
          영어권 마케팅,
          <br />
          아직도 대행사에{' '}
          <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
            속고
          </strong>{' '}
          계신가요?
        </h2>
        <p className="text-[13px] text-white/40 mb-12">
          대부분의 대행사는 이렇게 운영합니다.
        </p>

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-px bg-white/5">
          {pains.map((p) => (
            <div key={p.num} className="bg-white/[0.03] p-7 max-md:p-6">
              <span className="font-[family-name:var(--font-outfit)] text-[32px] font-extralight text-white/8 leading-none tracking-[-0.04em]">
                {p.num}
              </span>
              <h3 className="font-[family-name:var(--font-sora)] text-[13px] font-medium text-white mt-3 mb-2 tracking-[0.02em]">
                {p.title}
              </h3>
              <p className="text-[12px] text-white/45 leading-[1.7]">{p.desc}</p>
              {p.tag && (
                <span className="inline-block font-[family-name:var(--font-outfit)] text-[9px] tracking-[0.1em] uppercase px-2 py-0.5 border border-rose-a/30 text-rose-a mt-3">
                  {p.tag}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
