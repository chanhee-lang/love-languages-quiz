# 💕 사랑의 언어 5가지 테스트

Gary Chapman의 **5 Love Languages** 퀴즈 웹앱. 30문항 A/B 선택으로 나만의 사랑의 언어를 발견하세요.

🔗 **[지금 테스트하기 →](https://love-languages-quiz.vercel.app)**

---

## 5가지 사랑의 언어

| 이모지 | 언어 | 설명 |
|--------|------|------|
| 💬 | 인정하는 말 | 칭찬, 격려, 감사의 언어적 표현 |
| ⏰ | 함께하는 시간 | 온전한 집중과 함께하는 순간 |
| 🎁 | 선물 | 마음이 담긴 선물을 주고받는 행위 |
| 🤝 | 봉사 행위 | 실질적인 도움과 행동 |
| 🤗 | 신체적 접촉 | 포옹, 손잡기, 가벼운 터치 |

---

## 기능

- **30문항 A/B 선택** — Gary Chapman 원전 방식 (5가지 언어 쌍 × 3회)
- **점수 차트** — 5개 언어 점수를 바 차트로 시각화
- **결과 공유** — URL 한 번으로 결과 공유 (`?result=` 쿼리 파라미터)
- **이미지 저장** — Canvas API로 1200×630 결과 이미지 생성 후 PNG 다운로드
- **공유 URL 직접 접근** — URL 진입 시 바로 결과 페이지 렌더링

---

## 기술 스택

- **Vite + React + TypeScript**
- **CSS Modules** + CSS Custom Properties
- 백엔드 없음 (100% 클라이언트 사이드)

---

## 아키텍처

Clean Architecture 4계층 구조를 적용했습니다.

```
src/
├── domain/               # 엔티티, 포트 (프레임워크 의존성 없음)
│   ├── entities/
│   │   ├── LoveLanguage.ts
│   │   ├── Question.ts
│   │   └── QuizResult.ts
│   └── repositories/
│       └── IQuestionRepository.ts
├── application/          # 유즈케이스
│   ├── usecases/
│   │   ├── CalculateScoreUseCase.ts
│   │   └── ShareResultUseCase.ts
│   └── ports/
│       └── IResultEncoder.ts
├── infrastructure/       # 외부 구현체
│   ├── data/questions.ts
│   ├── repositories/StaticQuestionRepository.ts
│   └── encoders/Base64ResultEncoder.ts
└── presentation/         # React UI
    ├── hooks/
    ├── components/
    ├── pages/
    └── utils/
```

의존성 방향: `Presentation → Application → Domain ← Infrastructure`

---

## 로컬 실행

```bash
git clone https://github.com/chanhee-lang/love-languages-quiz.git
cd love-languages-quiz
npm install
npm run dev
```

`http://localhost:5173` 에서 확인

---

## 라이선스

MIT
