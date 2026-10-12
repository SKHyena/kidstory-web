/** 2026-10-11 앱/서버 카탈로그 기준. 실제 판매 가격과 구매 가능 여부는 인앱 스토어가 원천입니다. */
export const CREDIT_PRODUCTS = [
  { name: "가볍게", credits: 450, price: "4,900", books: 3 },
  { name: "넉넉하게", credits: 1000, price: "9,900", books: 6 },
  { name: "오래오래", credits: 2200, price: "19,900", books: 14 },
] as const;
export const CREDIT_RATES = {
  normal: 30,
  premium: 50,
  reference: 10,
  character: 40,
  style: 50,
} as const;
