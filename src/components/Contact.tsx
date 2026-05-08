const KAKAO_URL = 'https://pf.kakao.com/_placeholder';

export default function Contact() {
  return (
    <section id="contact" className="bg-midnight px-14 py-25 max-md:px-6">
      <div className="max-w-[1080px] mx-auto">
      <div className="max-w-[600px] mx-auto text-center">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-white/50 mb-8">
          Contact
        </p>

        {/* Quote */}
        <div className="border-l-2 border-rose-a/30 pl-6 text-left mb-14 max-md:mb-10">
          <p className="text-[17px] font-extralight leading-[1.7] text-white">
            빠르게 만들어도
            <br />
            <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
              완성도가 떨어지지
              <br />
              않는다는 점
            </strong>
            입니다.
          </p>
        </div>

        <h2 className="font-[family-name:var(--font-outfit)] text-[40px] max-md:text-[28px] font-extralight tracking-[-0.03em] leading-[1.3] text-white mb-4">
          지금{' '}
          <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">
            시작
          </strong>
          하세요
        </h2>
        <p className="text-sm font-normal leading-[1.85] text-white/70 mb-10">
          3분 상담으로 견적부터 일정까지
          <br />
          바로 확인하실 수 있습니다.
        </p>

        <a
          href={KAKAO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-[family-name:var(--font-outfit)] text-[13px] font-medium tracking-[0.06em] bg-gradient-to-br from-plum-light to-rose-a text-white px-8 py-3.5 transition-opacity hover:opacity-90"
        >
          카카오톡 상담하기 →
        </a>

        <p className="font-[family-name:var(--font-outfit)] text-[11px] text-white/30 mt-6">
          평일 10:00 – 19:00 · 주말 카톡 접수 가능
        </p>
      </div>
      </div>
    </section>
  );
}
