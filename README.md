This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 랜딩페이지 (2026-10 개편)

- `/`: 캐릭터·원고 확인·태블릿 읽기·앱 화면 갤러리·명작·요금·FAQ·다운로드.
- `src/app/landing.css`: 랜딩 전용 반응형 스타일. 공통 브랜드 색상은 `src/app/globals.css`.
- `src/components/landing`: 기기별 앱 화면 갤러리와 크레딧 계산기만 클라이언트 컴포넌트로 사용.
- `src/lib/pricing.ts`: 단건 상품 표시값과 계산 단가. 실제 판매 가격/구매 가능 여부는 인앱 스토어를 따름.
- `src/lib/app-links.ts`: App Store, Google Play, 고객 지원 링크.

### 자료와 정책 근거

이미지는 Desktop의 `kidstory-header-codex` 및 `kidstory-store-screenshots`에서 가져와
`public/images/landing`에 WebP로 최적화했습니다. 원본 자료는 수정하지 않았습니다.
워드마크 폰트는 앱의 `LoveYaLikeASister-Regular.ttf`를 사용합니다.

2026-10-11 기준 인접 앱/서버 저장소의 다음 구현을 확인했습니다.

- `kidstory-flutter/DESIGN.md`: 종이색/라일락 색상과 워드마크.
- `kidstory-flutter/docs/spec.md`: 캐릭터, 원고 확인, 명작, 커뮤니티, 태블릿 리더.
- `kidstory-server/app/services/payment_catalog.py`: 시작 팩 200, 단건 450/1,000/2,200, 월 구독 1,200크레딧.
- `kidstory-server/app/services/credit_service.py`: 페이지당 일반 30/프리미엄 50, 사진 참조당·페이지당 10, 캐릭터 생성 40/스타일 변경 50크레딧.
- `kidstory-server/docs/credit-products.md`: 한국 안내 가격과 스토어 앱 ID. 기존 `docs/pricing.md`의 이용권 가격은 구형 정책이므로 사용하지 않음.

무료 명작 읽기와 유료 맞춤 제작을 구분합니다. 월 구독의 최대 편수는 기존 캐릭터,
5페이지, 추가 사진 없음 기준이며 일반/프리미엄 편수는 합산하지 않습니다.
가격·생성 단가가 바뀌면 상품 데이터, 요금표, FAQ, 이용약관을 함께 확인해 주세요.
