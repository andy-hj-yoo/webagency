const stats = [
  {
    num: '85%',
    label: '해외 매출 비중',
    desc: '강남 월매출 10억+ 클리닉 기준',
  },
  {
    num: '+72%',
    label: '외국인 환자 증가',
    desc: '117만(2024) → 201만(2025)',
  },
  {
    num: '476만',
    label: '2026 1분기 외국인 관광객',
    desc: '동기 기준 역대 최대, 전년비 +23%',
  },
];

export default function Urgency() {
  return (
    <section className="bg-midnight px-14 py-25 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
      <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-white/50 mb-3">
        Why Now
      </p>

      <h2 className="text-[38px] max-md:text-[26px] font-extralight leading-[1.5] tracking-[-0.02em] text-white mb-6 max-w-[600px]">
        원장님, 개원하셨나요?
        <br />
        <span className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
          지금이 마지막 기회
        </span>
        입니다.
        <br />
        이제 외국인 환자 유치만이 답입니다.
      </h2>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-white/5 mt-14">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/[0.03] p-11 max-md:p-8 flex flex-col justify-between min-h-[200px]"
          >
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-[56px] max-md:text-[44px] font-extralight text-white leading-none tracking-[-0.04em]">
                {s.num}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.08em] uppercase text-white/50 mt-2">
                {s.label}
              </p>
            </div>
            <p className="text-[11px] font-normal text-white/40 leading-[1.6] mt-6">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
