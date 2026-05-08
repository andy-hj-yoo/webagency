const projects = [
  { name: '척척여우', desc: '기획부터 런칭까지', time: '2', unit: 'DAYS' },
  { name: '도윤랩', desc: '기획부터 런칭까지', time: '6', unit: 'HOURS' },
  { name: '아카버스', desc: '기획부터 런칭까지', time: '1', unit: 'DAY' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-midnight px-14 py-20 max-md:px-6">
      <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-white mb-3">
        Selected Results
      </p>
      <p className="text-xl font-extralight leading-[1.7] text-white mb-14 max-w-[480px]">
        아래 결과를 보시고도
        <br />
        모르시겠다면,
        <br />
        지금 돌아가셔도 좋습니다.
      </p>

      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-white/5 mb-12">
        {projects.map((p) => (
          <div
            key={p.name}
            className="bg-white/[0.03] p-11 max-md:p-8 flex flex-col justify-between min-h-[190px]"
          >
            <div>
              <h3 className="font-[family-name:var(--font-sora)] text-[13px] font-medium tracking-[0.04em] text-white mb-1.5">
                {p.name}
              </h3>
              <p className="text-[11px] font-normal text-white/70">{p.desc}</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-[56px] font-extralight text-white leading-none tracking-[-0.04em] mt-7">
                {p.time}
              </p>
              <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.08em] text-white/50 mt-1">
                {p.unit}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[13px] font-normal leading-[2] text-white/80 max-w-[440px]">
        빠르게 만든 것이 핵심이 아닙니다.
        <br />
        중요한 건, 빠르게 만들어도
        <br />
        <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
          완성도가 떨어지지 않는다는 점
        </strong>
        입니다.
      </p>
    </section>
  );
}
