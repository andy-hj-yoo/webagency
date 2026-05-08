'use client';

import { useState, useEffect, useRef } from 'react';

const reviews = [
  // 웹사이트 디자인 기획 및 개발
  {
    quote: '이렇게 빠르게 만들어주는 곳은 처음입니다. 다른 대행사에서 2주 걸린다는 걸 이틀 만에 해결해주셨어요.',
    author: 'K원장',
    clinic: '강남 피부과',
    service: '웹사이트',
    rating: 5,
    date: '2026.03',
  },
  {
    quote: '디자인 퀄리티가 이 속도에서 나올 줄 몰랐어요. 환자분들이 홈페이지 보고 신뢰가 간다고 하십니다.',
    author: 'P원장',
    clinic: '서초 성형외과',
    service: '웹사이트',
    rating: 5,
    date: '2026.02',
  },
  {
    quote: '다국어 SEO까지 잡아주니 구글에서 외국인 환자가 직접 검색해서 들어옵니다. 다른 곳에서는 신경도 안 쓰던 부분이에요.',
    author: 'J원장',
    clinic: '신사동 피부과',
    service: '웹사이트',
    rating: 5,
    date: '2026.01',
  },
  // 영어권 마케팅 운영
  {
    quote: '인플루언서 단가 협상을 이렇게 잘하는 곳은 처음 봤어요. 광고비를 40% 가까이 절감했습니다.',
    author: 'S원장',
    clinic: '강남 피부과',
    service: '마케팅',
    rating: 5,
    date: '2026.04',
  },
  {
    quote: '다른 대행사는 한국 거주 인플루언서만 데려왔는데, 여기는 해외 거주 인플루언서를 직접 유치해줘서 진짜 효율이 달라요.',
    author: 'H원장',
    clinic: '청담 성형외과',
    service: '마케팅',
    rating: 5,
    date: '2026.03',
  },
  {
    quote: '매달 인플루언서 30명 이상 꾸준히 보장해주시고, 캠페인 기획까지 해주니 저는 진료에만 집중하면 됩니다.',
    author: 'Y원장',
    clinic: '논현동 피부과',
    service: '마케팅',
    rating: 5,
    date: '2026.02',
  },
  // 웹사이트 + 마케팅 올인원
  {
    quote: '외국인 환자 유치가 목표였는데 개원 3개월 만에 해외 매출 비중 60% 넘겼습니다. 홈페이지부터 마케팅까지 한 곳에서 해결하니 시너지가 다릅니다.',
    author: 'C원장',
    clinic: '청담 성형외과',
    service: '웹사이트 + 마케팅',
    rating: 5,
    date: '2025.12',
  },
  {
    quote: '홈페이지 리뉴얼하고 인플루언서 마케팅 동시에 시작했더니 문의량이 3배 넘게 뛰었어요. 따로 맡기면 이런 결과 못 나옵니다.',
    author: 'L원장',
    clinic: '압구정 성형외과',
    service: '웹사이트 + 마케팅',
    rating: 5,
    date: '2026.01',
  },
  {
    quote: '반응형 웹이 이렇게 깔끔하게 나올 줄 몰랐어요. 모바일에서 예약하는 외국인 환자가 확실히 늘었습니다.',
    author: 'M원장',
    clinic: '역삼동 피부과',
    service: '웹사이트',
    rating: 5,
    date: '2026.04',
  },
  {
    quote: '비용 구조를 전부 공개해주셔서 신뢰가 갔어요. 다른 대행사처럼 마진 숨기는 거 없이 투명하게 진행해주십니다.',
    author: 'W원장',
    clinic: '강남 성형외과',
    service: '마케팅',
    rating: 5,
    date: '2026.05',
  },
  {
    quote: '대표님이 직접 상담해주시고 직접 만들어주시니까 중간에 전달 오류가 없어요. 소통 스트레스가 제로였습니다.',
    author: 'B원장',
    clinic: '삼성동 피부과',
    service: '웹사이트 + 마케팅',
    rating: 5,
    date: '2026.03',
  },
  {
    quote: '퍼포먼스 마케팅까지 해주는 곳은 여기뿐이었어요. 리타겟팅 세팅해주신 이후로 전환율이 눈에 띄게 올랐습니다.',
    author: 'N원장',
    clinic: '청담 피부과',
    service: '마케팅',
    rating: 5,
    date: '2026.04',
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-rose-a text-[12px]">★</span>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[number] }) {
  return (
    <div className="bg-white/[0.04] border border-white/8 rounded-lg p-7 flex flex-col justify-between min-h-[220px]">
      <div>
        <div className="flex items-center justify-between mb-4">
          <Stars count={review.rating} />
          <span className="font-[family-name:var(--font-outfit)] text-[10px] text-white/25">{review.date}</span>
        </div>
        <p className="text-[14px] font-light leading-[1.85] text-white/90 mb-6">
          &ldquo;{review.quote}&rdquo;
        </p>
      </div>
      <div className="border-t border-white/8 pt-4 flex items-center justify-between">
        <div>
          <p className="text-[13px] font-medium text-white">{review.author}</p>
          <p className="text-[11px] text-white/40 mt-0.5">{review.clinic}</p>
        </div>
        <span className="text-[10px] text-plum-light bg-plum/15 px-2.5 py-1 rounded-full whitespace-nowrap">
          {review.service}
        </span>
      </div>
    </div>
  );
}

export default function Value() {
  const [page, setPage] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const perPage = 3;
  const totalPages = Math.ceil(reviews.length / perPage);

  const goTo = (p: number) => setPage(p);
  const next = () => setPage((prev) => (prev + 1) % totalPages);
  const prev = () => setPage((prev) => (prev - 1 + totalPages) % totalPages);

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [totalPages]);

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(next, 5000);
  };

  const handlePrev = () => { prev(); resetTimer(); };
  const handleNext = () => { next(); resetTimer(); };

  const currentReviews = reviews.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="bg-midnight px-14 py-25 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
      {/* Value copy */}
      <div className="text-center mb-20">
        <h2 className="text-[28px] max-md:text-[22px] font-extralight leading-[1.6] tracking-[-0.02em] text-white mb-5">
          높아진 인테리어 비용, 비싼 장비 가격,
          <br />
          많은 비용 투자로 부담되신다는 점
          <br />
          가까이서 봐왔기에 누구보다 잘 알고 있습니다
        </h2>
        <p className="text-[16px] max-md:text-[14px] font-extralight leading-[1.7] text-white/70">
          그렇기에, 함께{' '}
          <strong className="font-bold bg-gradient-to-br from-plum-light to-rose-a bg-clip-text text-transparent">매출을 책임진다는 마음</strong>으로
          <br />
          투명하게 모든 정성을 다하고 있습니다
        </p>
      </div>

      {/* Reviews — 3 cards per page */}
      <div>
        <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4 transition-opacity duration-300">
          {currentReviews.map((r) => (
            <ReviewCard key={r.author} review={r} />
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-plum hover:text-plum transition-colors"
          >
            ←
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => { goTo(i); resetTimer(); }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === page ? 'bg-plum' : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/40 hover:border-plum hover:text-plum transition-colors"
          >
            →
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
