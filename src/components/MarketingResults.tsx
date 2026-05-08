'use client';

import { useEffect, useRef } from 'react';

const row1 = [
  { platform: 'IG Reels', name: 'Sarah Beauty', handle: '@sarahbeauty · 1.2M', views: '850K', engage: '4.2%' },
  { platform: 'TikTok', name: 'Mia Aesthetic', handle: '@miaaesthetic · 2.1M', views: '1.5M', engage: '6.1%' },
  { platform: 'YT Shorts', name: 'GlowUp Kate', handle: '@glowupkate · 680K', views: '420K', engage: '5.8%' },
  { platform: 'IG Reels', name: 'Rachel Derm', handle: '@rachelderm · 1.6M', views: '920K', engage: '5.1%' },
  { platform: 'TikTok', name: 'Zoe Clinic', handle: '@zoeclinic · 780K', views: '560K', engage: '4.5%' },
];

const row2 = [
  { platform: 'IG Reels', name: 'Jenna Glow', handle: '@jennaglow · 950K', views: '620K', engage: '5.3%' },
  { platform: 'TikTok', name: 'Lina Derma', handle: '@linaderma · 1.8M', views: '980K', engage: '4.7%' },
  { platform: 'YT Shorts', name: 'Amy Seoul', handle: '@amyseoul · 520K', views: '310K', engage: '6.4%' },
  { platform: 'IG Reels', name: 'Chloe Skin', handle: '@chloeskin · 740K', views: '480K', engage: '5.0%' },
  { platform: 'TikTok', name: 'Hana Med', handle: '@hanamed · 1.1M', views: '720K', engage: '5.8%' },
];

function ReelCard({ item }: { item: (typeof row1)[number] }) {
  return (
    <div className="flex-none w-[calc((100%-24px)/3)] max-md:w-[calc((100%-10px)/2)] snap-start rounded-lg overflow-hidden cursor-pointer group">
      <div className="aspect-[9/16] bg-gradient-to-br from-plum/30 to-rose-a/20 relative flex items-center justify-center">
        <span className="absolute top-2.5 left-2.5 font-[family-name:var(--font-outfit)] text-[8px] tracking-[0.1em] uppercase text-white bg-black/40 px-1.5 py-0.5 rounded-sm">
          {item.platform}
        </span>
        <span className="w-11 h-11 rounded-full bg-white/12 backdrop-blur-sm flex items-center justify-center text-white text-base transition-transform group-hover:scale-110">
          ▶
        </span>
        <div className="absolute bottom-0 inset-x-0 p-3.5 bg-gradient-to-t from-black/60 to-transparent">
          <p className="font-[family-name:var(--font-sora)] text-[11px] font-medium text-white mb-0.5">{item.name}</p>
          <p className="font-[family-name:var(--font-outfit)] text-[10px] text-white/50 mb-2">{item.handle}</p>
          <div className="flex gap-3">
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-sm font-light text-white">{item.views}</p>
              <p className="font-[family-name:var(--font-outfit)] text-[8px] tracking-[0.08em] uppercase text-white/40">Views</p>
            </div>
            <div>
              <p className="font-[family-name:var(--font-outfit)] text-sm font-light text-white">{item.engage}</p>
              <p className="font-[family-name:var(--font-outfit)] text-[8px] tracking-[0.08em] uppercase text-white/40">Engage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselRow({ items, direction }: { items: (typeof row1); direction: 1 | -1 }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    if (direction === -1) {
      track.scrollLeft = track.scrollWidth;
    }

    const interval = setInterval(() => {
      if (!track) return;
      const cardWidth = track.querySelector<HTMLElement>(':first-child')?.offsetWidth ?? 0;
      const scrollAmt = cardWidth + 12;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (direction === 1) {
        if (track.scrollLeft >= maxScroll - 2) {
          track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: scrollAmt, behavior: 'smooth' });
        }
      } else {
        if (track.scrollLeft <= 2) {
          track.scrollTo({ left: maxScroll, behavior: 'smooth' });
        } else {
          track.scrollBy({ left: -scrollAmt, behavior: 'smooth' });
        }
      }
    }, 3000);

    const pause = () => clearInterval(interval);
    track.addEventListener('mouseenter', pause);

    return () => {
      clearInterval(interval);
      track.removeEventListener('mouseenter', pause);
    };
  }, [direction]);

  return (
    <div className="relative mb-4">
      <div
        ref={trackRef}
        className="flex gap-3 max-md:gap-2.5 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
        {items.map((item) => (
          <ReelCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function MarketingResults() {
  return (
    <section id="marketing" className="px-14 py-20 max-md:px-6">
      <div className="max-w-[900px] mx-auto">
        <p className="font-[family-name:var(--font-outfit)] text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-12">
          Proven Results
        </p>

        <h2 className="font-[family-name:var(--font-outfit)] text-[36px] max-md:text-[26px] font-extralight tracking-[-0.03em] leading-[1.3] text-midnight mb-2">
          <strong className="font-bold bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">338건</strong>이 넘는
          <br />
          실제 협업{' '}
          <strong className="font-bold bg-gradient-to-br from-plum to-rose-a bg-clip-text text-transparent">성과</strong>
        </h2>
        <p className="text-[13px] text-ink/50 mb-10">
          직접 성사시킨 인플루언서 캠페인 결과입니다.
        </p>

        <CarouselRow items={row1} direction={1} />
        <CarouselRow items={row2} direction={-1} />

        <a
          href="/collaborations"
          className="flex items-center justify-center gap-2 mt-6 py-3.5 border border-ink/8 font-[family-name:var(--font-outfit)] text-[13px] font-medium tracking-[0.04em] text-ink hover:border-plum hover:text-plum transition-colors"
        >
          <span>협업 사례 더보기</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  );
}
