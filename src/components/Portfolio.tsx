const portfolios = [
  {
    category: 'UI/UX 및 브랜드 디자인',
    name: '노드클리닉',
    desc: '강남 130평 클리닉 개원 5개월, 월매출 10억+ 달성을 함께한 다국어 브랜딩 및 웹사이트',
    href: '#',
  },
  {
    category: 'AI SaaS 풀스택 개발',
    name: '메디파일럿',
    desc: 'AI 기반 의료 SaaS 플랫폼 풀스택 설계 및 개발',
    href: '#',
  },
  {
    category: 'AI 캐릭터챗 브랜딩 및 프론트엔드',
    name: '척척여우',
    desc: 'AI 기반 캐릭터 채팅 서비스 브랜드 아이덴티티 및 프론트엔드 개발',
    href: '#',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="px-14 py-20 max-md:px-6 border-t border-ink/8">
      <div className="max-w-[900px] mx-auto">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-ink mb-12">
          Portfolio
        </p>

        <h2 className="text-[28px] max-md:text-[22px] font-extralight leading-[1.55] tracking-[-0.02em] text-midnight mb-3">
          <span className="hidden max-md:inline">
            수많은 업계 개발업체를
            <br />
            만나면서 느낀 건,
            <br />
          </span>
          <span className="max-md:hidden">
            수많은 업계 외주개발업체를 만나면서 느낀 건,
            <br />
          </span>
          <strong className="font-bold text-plum">올드하고 해외고객 관점의 UI/UX 감각이 없다</strong>는 것입니다.
        </h2>
        <p className="text-[14px] font-light leading-[1.7] text-ink/70 mb-12 max-w-[550px]">
          프랙시아랩은 가장 트렌디한 서비스를 개발한 젊은 감각과,
          <br />
          <strong className="font-bold text-plum">월 해외매출 8.5억</strong>을 만든 다국어 개발 노하우로 만듭니다.
        </p>

        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-5">
          {portfolios.map((p) => (
            <div key={p.name} className="border border-ink/6 overflow-hidden">
              <div className="relative aspect-[4/3] max-md:aspect-[16/10] bg-gradient-to-br from-plum/10 to-rose-a/5 flex items-center justify-center">
                <span className="text-[11px] text-ink/15 tracking-[0.1em] uppercase">{p.name} Screenshot</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-3.5 right-3.5 font-[family-name:var(--font-outfit)] text-[11px] font-medium tracking-[0.04em] text-white bg-black/50 backdrop-blur-sm px-4 py-2 flex items-center gap-1.5 hover:bg-plum transition-colors"
                >
                  바로가기 →
                </a>
              </div>
              <div className="p-6">
                <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.1em] uppercase text-plum font-medium mb-2">
                  {p.category}
                </p>
                <h3 className="font-[family-name:var(--font-sora)] text-[18px] font-semibold text-midnight mb-2">
                  {p.name}
                </h3>
                <p className="text-[12px] text-midnight leading-[1.6]">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
