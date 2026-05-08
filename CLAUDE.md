# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

홈페이지 개발 외주 스튜디오 웹사이트. 클라이언트에게 웹 개발 서비스를 소개하고 포트폴리오를 보여주는 스튜디오 홈페이지.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Commands

```bash
npm run dev          # 개발 서버 (localhost:3000)
npm run build        # 프로덕션 빌드
npm run lint         # ESLint
npx tsc --noEmit     # 타입 체크
```

## Architecture

- `app/` — App Router pages and layouts
- `components/` — Reusable UI components
- `public/` — Static assets (images, fonts)
- `lib/` — Utility functions and shared logic

## Conventions

- Server Components by default, `'use client'` only when needed
- Korean content with English code/comments
- Responsive-first: mobile → tablet → desktop
- All images use `next/image` with explicit width/height
