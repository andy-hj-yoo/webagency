const KAKAO_URL = '#contact';

export default function Hero() {
  return (
    <section className="px-14 pt-18 pb-25 max-md:px-6">
      <p className="font-[family-name:var(--font-outfit)] text-sm font-light text-plum tracking-[0.06em] mb-6">
        We don&apos;t compromise.
      </p>

      <h1 className="text-[48px] max-md:text-[30px] font-extralight leading-[1.55] tracking-[-0.02em] text-midnight mb-5 max-w-[720px]">
        <span className="font-bold text-plum">죄송합니다.</span>
        <br />
        대표님은 사업에만 집중해주세요
        <br />
        <span className="font-bold text-plum">자동화</span>와{' '}
        <span className="font-bold text-plum">개발</span>은 저희가 하겠습니다.
      </h1>

      <p className="text-sm font-normal leading-[1.85] text-ink max-w-[460px] mb-11">
        비싼 개발비, 긴 완성시간, 낮은 디자인 수준,
        <br />
        아직도 속고 계신가요?
        <br />
        <br />
        <strong className="font-bold">3분만 보세요.</strong>
        <br />
        왜 프랙시아랩스가 정답인지 알게 되실 겁니다.
      </p>

      <a
        href={KAKAO_URL}
        className="inline-flex items-center gap-3.5 font-[family-name:var(--font-outfit)] text-[13px] font-medium tracking-[0.06em] text-midnight border-b border-plum pb-0.5 group"
      >
        간편 문의하기
        <span className="flex items-center justify-center w-[34px] h-[34px] rounded-full border border-plum text-sm transition-all group-hover:bg-plum group-hover:text-white">
          →
        </span>
      </a>
    </section>
  );
}
