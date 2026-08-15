# KidStory 랜딩페이지 이미지 생성 요청서

랜딩페이지(`src/app/page.tsx`)와 메타데이터(`src/app/layout.tsx`)에 쓰이는 이미지 자산 명세.
**생성한 파일은 아래 지정된 파일명 그대로 `public/images/` 에 저장**하면 된다(경로·파일명이 코드와 1:1로 연결됨).

---

## 0. 공통 스타일 가이드 (모든 이미지 공통 적용)

- **컨셉**: 따뜻하고 몽환적인 **한국 그림동화(picture-book) 삽화**. 잠자리에서 읽어주는 동화책 느낌.
- **화풍**: 부드러운 페인터리(painterly) 일러스트. 수채/과슈 느낌의 질감, 은은한 빛번짐.
- **브랜드 팔레트** (주조색으로 사용):
  | 역할 | HEX |
  |---|---|
  | 배경 크림 | `#FBF6EC` |
  | Primary 틸 | `#16938E` |
  | Secondary 웜오렌지 | `#F2915C` |
  | Accent 골드 | `#F5C147` |
- **금지 사항**: 실사 사진 톤 / 날카로운 하드엣지 / **이미지 안에 글자·워터마크·로고** / 특정 IP 캐릭터(디즈니·지브리 등) 유사물 / 무섭거나 자극적인 요소.
- **아이 표현**: 특정 실존 인물이 아닌 **일반적인 유아~아동(3~7세)**. 얼굴은 과한 디테일 없이 동화 삽화체로. 한국 유아 느낌이면 자연스럽다.
- **안전**: 아동 대상 서비스이므로 전 연령 안심 콘텐츠.

### 저장 규칙
- JPG는 **품질 80 내외, 파일당 300KB 이하** 목표. PNG는 압축(tinypng 등) 후 저장.
- "권장 픽셀"은 레티나 2x 기준. 더 크게 생성했다면 리사이즈 후 저장.
- 투명 배경이 필요한 건 **#5 `child-reading.png` 와 #1 `logo.png` 둘뿐**. 나머지는 전부 불투명 JPG.

---

## 1. 현재 이미지 사용 현황 (문제점 포함)

| 파일 | 현재 쓰이는 곳 | 상태 |
|---|---|---|
| `logo.png` | 헤더 로고, 푸터 로고 | 정상 |
| `dreamy-sky.jpg` | 히어로 배경 + CTA 배경 + **스토리카드(우주)** + **OG 이미지** | ⚠️ **4곳 과다 재사용** |
| `soft-hills.jpg` | 히어로 작은 카드 | 정상 |
| `scene-tree.jpg` | 히어로 메인 카드 + **스토리카드(자연)** | ⚠️ **세로 이미지가 가로칸에 크롭됨** |
| `child-reading.png` | 히어로 아이 캐릭터 | 정상 |
| `scene-cover.jpg` | 스토리카드(판타지) | 정상 |

> 핵심 문제: **스토리 미리보기 카드 3장 중 2장이 배경 이미지를 돌려쓰고 있다.** 특히 `scene-tree.jpg`는 세로(3:4)인데 가로(4:3) 칸에 들어가 위아래가 잘린다. → **Tier 2에서 전용 이미지로 분리**한다.

---

## 2. Tier 1 — 기존 파일 교체 (코드 수정 불필요)

아래 6개는 **같은 파일명으로 덮어쓰기만 하면 즉시 반영**된다. 현재는 범용 플레이스홀더 수준이라 브랜드 톤 전용 일러스트로 교체하는 게 목적.

### #1 `logo.png` — 브랜드 로고 / 앱 아이콘
- **사용처**: 헤더(36×36), 푸터(32×32) — `src/app/page.tsx:29`, `:507`
- **비율 / 픽셀**: 1:1 / **512×512**
- **포맷**: **PNG (투명 배경)** — 모서리 라운딩은 CSS(`rounded-xl`)가 처리하므로 아트는 꽉 찬 정사각형으로
- **주의**: 아주 작게 표시됨 → 단순하고 또렷한 심볼. **이미 확정된 앱 아이콘이 있으면 그걸 쓰고 이 항목은 건너뛴다.**
- **프롬프트**:
  > A minimal, friendly app icon for a children's AI storybook brand. A soft rounded open book with a small warm star or a child silhouette, warm teal (#16938E) and golden (#F5C147) tones, flat modern illustration, centered composition, crisp and readable at 32px, no text, no letters. Transparent background. 512x512.

### #2 `dreamy-sky.jpg` — 몽환적 하늘 (와이드 배경)
- **사용처**: 히어로 섹션 배경(`page.tsx:65`), 하단 CTA 배경(`page.tsx:443`)
- **비율 / 픽셀**: 16:9 / **2400×1350**
- **포맷**: JPG
- **표시 방식**: `object-cover object-top`. 히어로에선 위에 크림색 그라디언트가, CTA에선 어두운 오버레이가 덮인다.
- **구도 주의**: **상단 1/3은 텍스트가 올라가는 영역** → 디테일 적고 밝고 균일하게. 복잡한 요소는 하단에 배치.
- **프롬프트**:
  > A dreamy pastel storybook sky at golden hour, soft billowing clouds, a few gentle twinkling stars and a faint crescent moon, warm cream, peach and soft teal gradient, painterly children's book background art, very soft, calm and airy. Upper third should be light, simple and uncluttered. No characters, no text. 16:9 wide.

### #3 `soft-hills.jpg` — 히어로 작은 장면 카드 (세로)
- **사용처**: 히어로 우상단에 떠 있는 작은 흰 카드(살짝 회전) — `page.tsx:126`
- **비율 / 픽셀**: 3:4 (세로) / **1200×1600**
- **포맷**: JPG
- **표시 방식**: `object-cover` (중앙 크롭). 작게 표시되므로 **단순한 구도**가 유리.
- **프롬프트**:
  > A cozy storybook scene of rolling green hills under a warm pastel sky, a small winding path and a lone friendly tree, soft golden afternoon light, gentle peaceful children's picture-book illustration, painterly, warm palette of teal, peach and gold. Simple uncluttered composition. No characters, no text. Vertical 3:4.

### #4 `scene-tree.jpg` — 히어로 메인 장면 카드 (세로)
- **사용처**: 히어로 중앙의 **가장 큰 스토리북 카드** — `page.tsx:135`. 랜딩에서 시선이 가장 오래 머무는 이미지.
- **비율 / 픽셀**: 3:4 (세로) / **1200×1600**
- **포맷**: JPG
- **표시 방식**: `object-cover`. **좌하단에 "우리 아이 동화" 흰색 배지가 겹침** → 그 자리에 핵심 요소 배치 금지.
- **프롬프트**:
  > A magical storybook scene: a large glowing tree in an enchanted forest at dusk, warm fireflies and soft floating light, a small child seen from behind looking up in wonder, dreamy palette of teal, peach and gold, painterly children's picture-book illustration, cozy and awe-inspiring. Keep the main subject in the upper-center; leave the bottom-left area visually quiet. No text. Vertical 3:4.

### #5 `child-reading.png` — 히어로 아이 캐릭터 (**투명 PNG**)
- **사용처**: 히어로 좌하단, 메인 카드와 겹쳐 떠 있는 캐릭터 — `page.tsx:148`
- **비율 / 픽셀**: 1:1 / **1000×1000**
- **포맷**: **PNG — 투명 배경 필수** (배경 없이 아이만 오려낸 컷아웃)
- **표시 방식**: `w-full h-auto`, CSS `drop-shadow` 적용됨
- **⚠️ 중요**: **그림자·바닥·배경을 그리지 말 것**(CSS가 그림자 처리). 캐릭터 주변에 **여백을 넉넉히** 둬서 잘리지 않게.
- **프롬프트**:
  > A cute young child (age 4-6) sitting cross-legged and reading a softly glowing open storybook, joyful cozy expression, soft painterly children's book illustration, warm palette with teal and gold accents. Full body, centered, generous empty padding around the figure. **Transparent background (clean PNG cutout), no shadow, no ground, no background elements, no text.** 1:1.

### #6 `scene-cover.jpg` — 스토리 카드: 판타지 (가로)
- **사용처**: "이런 동화가 만들어져요" 3번째 카드 (#판타지 — "마법의 성 대모험")
- **비율 / 픽셀**: 4:3 (가로) / **1600×1200**
- **포맷**: JPG
- **표시 방식**: `object-cover`, hover 시 1.05배 확대. **좌하단 `#판타지` 배지 겹침.**
- **프롬프트**:
  > A whimsical fairy-tale castle glowing warmly under a moonlit night sky, soft magical sparkles and drifting clouds, dreamy purple-teal-gold palette, inviting children's picture-book illustration, painterly. Leave the bottom-left area visually quiet. No text. Horizontal 4:3.

---

## 3. Tier 2 — 신규 생성 (중복 해소) · 코드 1줄씩 수정 필요

스토리 카드 2장이 배경 이미지를 재사용 중이라 완성도가 떨어진다. 아래 2개를 새로 만들면 해결된다.
**파일만 만들어 두면 코드 연결은 내가 처리한다.**

### #7 `story-space.jpg` — 스토리 카드: 우주 (가로)
- **교체 대상**: `page.tsx:386` — `image: "/images/dreamy-sky.jpg"` → `"/images/story-space.jpg"`
- **카드 제목**: "별빛 우주 탐험가" / 태그 `#우주`
- **비율 / 픽셀**: 4:3 (가로) / **1600×1200** · JPG
- **프롬프트**:
  > A child astronaut floating joyfully among glowing stars, small planets and a friendly crescent moon, dreamy night-sky palette with deep teal, soft violet and warm gold, painterly children's picture-book illustration, full of wonder and warmth. Leave the bottom-left area visually quiet. No text. Horizontal 4:3.

### #8 `story-nature.jpg` — 스토리 카드: 자연/동물 (가로)
- **교체 대상**: `page.tsx:392` — `image: "/images/scene-tree.jpg"` → `"/images/story-nature.jpg"`
- **카드 제목**: "숲속 동물 친구들" / 태그 `#자연`
- **비율 / 픽셀**: 4:3 (가로) / **1600×1200** · JPG
- **프롬프트**:
  > A cozy sunlit forest clearing with friendly woodland animals — a rabbit, a deer and a fox — gathered around a small child under a big tree, warm dappled sunlight, soft painterly children's picture-book illustration, teal-green and gold palette, gentle and heartwarming. Leave the bottom-left area visually quiet. No text. Horizontal 4:3.

---

## 4. Tier 3 — OG 공유 이미지 (지금은 임시값으로 동작 중)

### #9 `og-image.png` — 카카오톡·SNS·검색 공유 썸네일
- **현재 상태**: `src/app/layout.tsx:42`, `:53` 에서 **임시로 `dreamy-sky.jpg`(하늘 배경)를 쓰고 있다.** 동작은 하지만 브랜드·카피가 없어 공유 시 밋밋하다.
- **비율 / 픽셀**: 1.91:1 / **1200×630**
- **포맷**: PNG (또는 JPG)
- **⚠️ 예외**: **이 이미지에는 글자를 넣어도 된다** (마케팅 배너이므로). 나머지 이미지와 달리 텍스트 허용.
- **넣을 내용**:
  - KidStory 로고/워드마크
  - 메인 카피: **"우리 아이가 주인공이 되는 AI 맞춤 동화"**
  - 대표 일러스트(아이 + 동화책 느낌)
  - 배경은 브랜드 크림/틸 톤
- **안전 영역**: 카톡·트위터에서 가장자리가 잘릴 수 있으니 **중앙 1080×500 안에 핵심 요소**를 배치.
- **연결**: 파일 준비되면 `layout.tsx`의 2줄을 `/images/og-image.png`로 교체 — 내가 처리한다.

---

## 5. 요약 체크리스트

| # | 파일명 | 비율 | 픽셀 | 포맷 | 투명 | 글자 | 코드수정 |
|---|--------|------|------|------|------|------|----------|
| 1 | `logo.png` | 1:1 | 512² | PNG | ✅ | ❌ | 불필요 |
| 2 | `dreamy-sky.jpg` | 16:9 | 2400×1350 | JPG | ❌ | ❌ | 불필요 |
| 3 | `soft-hills.jpg` | 3:4 | 1200×1600 | JPG | ❌ | ❌ | 불필요 |
| 4 | `scene-tree.jpg` | 3:4 | 1200×1600 | JPG | ❌ | ❌ | 불필요 |
| 5 | `child-reading.png` | 1:1 | 1000² | PNG | ✅ | ❌ | 불필요 |
| 6 | `scene-cover.jpg` | 4:3 | 1600×1200 | JPG | ❌ | ❌ | 불필요 |
| 7 | `story-space.jpg` | 4:3 | 1600×1200 | JPG | ❌ | ❌ | page.tsx |
| 8 | `story-nature.jpg` | 4:3 | 1600×1200 | JPG | ❌ | ❌ | page.tsx |
| 9 | `og-image.png` | 1.91:1 | 1200×630 | PNG | ❌ | ✅ | layout.tsx |

**추천 작업 순서**: #9 (공유 썸네일, 효과 즉시) → #4·#5 (히어로 주목도) → #7·#8 (중복 해소) → #2·#3·#6 → #1

---

## 6. 이 문서 범위 밖 (AI 생성 불가)

- **앱 스크린샷**: 실제 앱 화면 캡처가 필요하므로 AI로 만들면 안 된다(허위 표현 위험). 실기기/시뮬레이터 캡처본을 별도로 준비해야 하며, 랜딩에 넣을 슬롯도 아직 없다.
- **후기/평점 이미지**: 실제 데이터가 없으므로 만들지 않는다. (허위 소셜프루프는 이미 랜딩에서 제거했다.)
