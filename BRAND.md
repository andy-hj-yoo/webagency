# BRAND.md — Praxia Labs (WebAgency)

홈페이지 개발 외주 스튜디오. Dusty Rose 톤의 미니멀 프리미엄 브랜드.
소스: `PRAXIA_dusty_rose_v6.html`

---

## Color Palette

| Token | Hex | CSS Variable | Tailwind | Usage |
|-------|-----|-------------|----------|-------|
| Midnight | `#1A1A2E` | `--midnight` | `midnight` | Primary text, dark section bg |
| Plum | `#3D3456` | `--plum` | `plum` | Emphasis (light mode), accent |
| Plum Light | `#6B5B95` | `--plum-light` | `plum-light` | Dark mode gradient 시작점 only |
| Dusty Rose | `#C08497` | `--rose` | `rose-a` | Gradient endpoint only |
| White | `#FFFFFF` | `--pure` | `white` | Light section bg |
| Border | `rgba(26,26,46,0.08)` | `--border` | `border-ink/8` | Borders, dividers |

### Gradient (Light / Dark 분리)
```css
/* Light mode — 밝은 배경 위 */
background: linear-gradient(135deg, #3D3456, #C08497);

/* Dark mode — 어두운 배경 위 */
background: linear-gradient(135deg, #6B5B95, #C08497);
```
- 135° 기본, 90°/180° 허용
- 용도: CTA 버튼, 텍스트 강조, 로고 "Labs" 텍스트
- **그 외 색 없음. 4색(Midnight, Plum, Plum Light, Rose) + 그라데이션만 사용.**
- `#6B5B95`는 **다크 섹션 전용** — 밝은 배경에서 절대 사용 금지

### Light vs Dark 강조 규칙
| Context | Emphasis Style |
|---------|---------------|
| Light section | `color: #3D3456` (Plum 단색) |
| Dark section | `background: linear-gradient(135deg, #6B5B95, #C08497)` + `background-clip: text` |

### Selection (드래그) 색상
```css
::selection { background: #3D3456; color: #fff; }
```

---

## Typography

### Font Families
| Font | CDN | Role |
|------|-----|------|
| **Outfit** | Google Fonts | English display, nav, labels, buttons, numbers |
| **Sora** | Google Fonts | Portfolio card names (accent) |
| **Pretendard** | orioncactus CDN | Korean display, body text |

### Scale
| Role | Font | Size | Weight | Letter-spacing | Line-height |
|------|------|------|--------|----------------|-------------|
| Display EN | Outfit | 60–64px | 200 (bold: 700) | -0.03em | 1.15–1.25 |
| Display KR | Pretendard | 38–48px | 100 (bold: 700) | -0.02em | 1.5–1.55 |
| Body KR | Pretendard | 14–15px | 400 | 0 | 1.85–1.9 |
| Label | Outfit | 10–12px | 400–500 | 0.06–0.2em | — |
| Nav | Outfit | 12px | 400 | 0.05em | — |
| Button | Outfit | 12–13px | 500 | 0.06em | — |
| Stat Number | Outfit | 56px | 200 | -0.04em | 1 |
| Kicker | Outfit | 14px | 300 | 0.06em | — |

### 강조 규칙
- Light mode bold: `font-weight: 700; color: var(--plum);`
- Dark mode bold: `font-weight: 700; gradient text (#6B5B95→#C08497)`
- Labels: 항상 `uppercase`, `letter-spacing ≥ 0.1em`

---

## Components

### Buttons (Light)
| Variant | Class Pattern | Style |
|---------|--------------|-------|
| Primary | `btn-dark` | `bg: #1A1A2E, color: #fff` |
| Gradient | `btn-grad` | `bg: gradient, color: #fff` |
| Outline | `btn-outline` | `border: 1px solid border, bg: transparent` |
| Ghost | `btn-ghost` | `no bg, border-bottom: 1px solid plum` |

### Buttons (Dark)
| Variant | Class Pattern | Style |
|---------|--------------|-------|
| Primary | `btn-light` | `bg: #fff, color: #1A1A2E` |
| Gradient | `btn-grad` | `bg: dark gradient (#6B5B95→#C08497), color: #fff` |
| Outline | `btn-outline` | `border: 1px solid white/10` |
| Ghost | `btn-ghost` | `no bg, border-bottom: 1px solid plum/50` |

### Shared Button Specs
- `font-family: Outfit, 12–13px, weight 500, letter-spacing 0.06em`
- `padding: 12px 26px`
- Arrow suffix: `→`

### CTA Link
- Underline style + circle arrow (34×34px, border-radius 50%)
- Hover: circle fills with `--plum`, arrow turns white

### Quote Block
- `border-left: 2px solid var(--plum)` (light)
- `border-left: 2px solid rgba(192,132,151,0.3)` (dark)
- `padding: 24px`

### Cards
- No border, no shadow, no radius
- Separated by 1px grid gap with border color
- `padding: 44px 32px` (portfolio), `36px 32px` (component)

---

## Layout

### Spacing
| Token | Desktop | Mobile (≤768px) |
|-------|---------|-----------------|
| Section horizontal padding | 56px | 24px |
| Section vertical padding | 80–100px | same |
| Nav padding | 32px 56px | 32px 24px |

### Max-widths
- Hero title: 720px
- Hero subtitle: 460px
- Body/notes: 440–480px

### Grid
- Portfolio: 3-column, 1px gap
- Components: 2-column, 1px gap
- Mobile: all collapse to 1-column

---

## Dark vs Light Sections

| Element | Light | Dark |
|---------|-------|------|
| Background | `#FFFFFF` | `#1A1A2E` |
| Text | `#1A1A2E` | `#FFFFFF` |
| Emphasis | Plum solid (`#3D3456`) | Gradient text (`#6B5B95→#C08497`) |
| Border/grid gap | `rgba(26,26,46,0.08)` | `rgba(255,255,255,0.05)` |
| Card bg | `#FFFFFF` | `rgba(255,255,255,0.03)` |

---

## Logo

- "Praxia" — Outfit 400, color: `--midnight`
- Dot — 4×4px circle, gradient fill
- "Labs" — Outfit 300, gradient text
- Gap: `margin-left: 6px` (Labs), `margin-left: 8px` (dot)

---

## Voice & Copy

- 한국어 본문 + 영어 슬로건
- 톤: 자신감 있고 직설적. 겸손하지 않음.
- 숫자 강조 (2 DAYS, 6 HOURS)
- CTA: "무료 상담 신청", "시작하기"
