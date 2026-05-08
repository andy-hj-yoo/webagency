const reviews = [
  {
    quote: '이렇게 빠르게 만들어주는 곳은 처음입니다.',
    author: '강남 클리닉 대표',
  },
  {
    quote: '디자인 퀄리티가 이 속도에서 나올 줄 몰랐어요.',
    author: '뷰티 브랜드 마케팅 팀장',
  },
  {
    quote: '기획부터 런칭까지 원스톱으로 해주니 편했습니다.',
    author: '스타트업 COO',
  },
];

export default function Value() {
  return (
    <section className="bg-midnight px-14 py-25 max-md:px-6">
      {/* Value copy */}
      <div className="text-center mb-20">
        <h2 className="font-[family-name:var(--font-outfit)] text-[60px] max-md:text-[32px] font-extralight tracking-[-0.03em] leading-[1.25] text-white mb-5">
          <span className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
            속도
          </span>
          ,{' '}
          <span className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
            집요함
          </span>
          ,{' '}
          <span className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
            똑똑함
          </span>
          은
          <br />
          저희가 포기할 수 없는
          <br />
          가치입니다
        </h2>
        <p className="font-[family-name:var(--font-outfit)] text-[11px] tracking-[0.2em] uppercase text-white">
          Praxia Labs — Execution Studio
        </p>
      </div>

      {/* Reviews */}
      <div className="grid grid-cols-3 max-md:grid-cols-1 gap-px bg-white/5">
        {reviews.map((r) => (
          <div
            key={r.author}
            className="bg-white/[0.03] p-10 max-md:p-8 flex flex-col justify-between min-h-[180px]"
          >
            <p className="text-[15px] font-extralight leading-[1.8] text-white mb-6">
              &ldquo;{r.quote}&rdquo;
            </p>
            <span className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.08em] uppercase text-white/50">
              — {r.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
