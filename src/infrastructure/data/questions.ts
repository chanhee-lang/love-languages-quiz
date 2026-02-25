// Layer: Infrastructure Data
// 30 questions covering all C(5,2)=10 language pairs, each pair repeated 3 times

import type { Question } from '../../domain/entities/Question';
import { LoveLanguage as L } from '../../domain/entities/LoveLanguage';

export const QUESTIONS: Question[] = [
  // === Pair 1: WA vs QT (×3) ===
  {
    id: 1,
    answers: [
      { label: 'A', text: '파트너가 "당신 덕분에 내가 더 나은 사람이 됐어"라고 말해줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너와 함께 산책하며 하루를 이야기할 때', language: L.QualityTime },
    ],
  },
  {
    id: 2,
    answers: [
      { label: 'A', text: '파트너가 내가 한 일을 주변 사람들에게 칭찬할 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '주말 아침을 파트너와 함께 느긋하게 보낼 때', language: L.QualityTime },
    ],
  },
  {
    id: 3,
    answers: [
      { label: 'A', text: '파트너에게 "오늘 정말 멋있었어"라는 문자를 받을 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 핸드폰을 내려놓고 온전히 나에게 집중할 때', language: L.QualityTime },
    ],
  },

  // === Pair 2: WA vs RG (×3) ===
  {
    id: 4,
    answers: [
      { label: 'A', text: '파트너가 진심이 담긴 손편지를 써줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 내가 좋아한다고 말했던 것을 기억하고 선물해줄 때', language: L.ReceivingGifts },
    ],
  },
  {
    id: 5,
    answers: [
      { label: 'A', text: '파트너가 내 노력을 알아보고 구체적으로 칭찬해줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '여행에서 나를 생각하며 가져온 기념품을 받을 때', language: L.ReceivingGifts },
    ],
  },
  {
    id: 6,
    answers: [
      { label: 'A', text: '파트너가 "네가 내 옆에 있어서 다행이야"라고 말해줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '이유 없이 꽃 한 송이를 들고 나타날 때', language: L.ReceivingGifts },
    ],
  },

  // === Pair 3: WA vs AS (×3) ===
  {
    id: 7,
    answers: [
      { label: 'A', text: '파트너가 내 결정을 믿고 지지해준다고 말할 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 내가 힘들 때 알아서 집안일을 처리해줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 8,
    answers: [
      { label: 'A', text: '파트너가 메시지로 "오늘 수고했어, 정말 대단해"라고 보내줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 내 부탁을 말하기 전에 먼저 해결해줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 9,
    answers: [
      { label: 'A', text: '파트너가 내 꿈을 응원하고 할 수 있다고 격려할 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 내 출퇴근 길을 챙겨주거나 차로 태워줄 때', language: L.ActsOfService },
    ],
  },

  // === Pair 4: WA vs PT (×3) ===
  {
    id: 10,
    answers: [
      { label: 'A', text: '파트너가 "네가 정말 자랑스러워"라고 말해줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '힘든 날 파트너가 조용히 안아줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 11,
    answers: [
      { label: 'A', text: '파트너가 내 생각과 의견을 진지하게 들어주고 맞장구칠 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너가 자연스럽게 손을 잡아줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 12,
    answers: [
      { label: 'A', text: '파트너가 내 SNS에 진심 어린 댓글을 달아줄 때', language: L.WordsOfAffirmation },
      { label: 'B', text: '파트너와 소파에 기대어 함께 영화를 볼 때', language: L.PhysicalTouch },
    ],
  },

  // === Pair 5: QT vs RG (×3) ===
  {
    id: 13,
    answers: [
      { label: 'A', text: '파트너와 둘만의 여행을 떠날 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 내 생일을 위해 오래 준비한 선물을 줄 때', language: L.ReceivingGifts },
    ],
  },
  {
    id: 14,
    answers: [
      { label: 'A', text: '파트너와 함께 새로운 취미를 시작할 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 내 취향을 정확히 알고 선물을 골라줄 때', language: L.ReceivingGifts },
    ],
  },
  {
    id: 15,
    answers: [
      { label: 'A', text: '파트너와 카페에 앉아 깊은 이야기를 나눌 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 특별한 날 깜짝 선물을 준비해줄 때', language: L.ReceivingGifts },
    ],
  },

  // === Pair 6: QT vs AS (×3) ===
  {
    id: 16,
    answers: [
      { label: 'A', text: '파트너와 저녁을 함께 만들며 시간을 보낼 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 내가 바쁠 때 알아서 모든 것을 처리해줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 17,
    answers: [
      { label: 'A', text: '파트너가 하루 일과를 마치고 나와 대화하는 시간을 챙길 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 내 건강을 위해 식사를 준비해줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 18,
    answers: [
      { label: 'A', text: '파트너와 아무것도 안 하고 그냥 함께 있을 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 내 힘든 업무를 함께 도와줄 때', language: L.ActsOfService },
    ],
  },

  // === Pair 7: QT vs PT (×3) ===
  {
    id: 19,
    answers: [
      { label: 'A', text: '파트너와 함께 운동하거나 야외 활동을 할 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 뒤에서 어깨를 감싸줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 20,
    answers: [
      { label: 'A', text: '파트너와 같은 공간에서 각자의 일을 하며 함께할 때', language: L.QualityTime },
      { label: 'B', text: '파트너가 지나가다 가볍게 머리를 쓰다듬어줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 21,
    answers: [
      { label: 'A', text: '파트너가 주말 계획을 나와 함께 세우고 실행할 때', language: L.QualityTime },
      { label: 'B', text: '잠들기 전 파트너와 몸을 붙이고 누울 때', language: L.PhysicalTouch },
    ],
  },

  // === Pair 8: RG vs AS (×3) ===
  {
    id: 22,
    answers: [
      { label: 'A', text: '파트너가 별 이유 없이 작은 선물을 사다줄 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 내 짐을 들어주거나 불편함을 먼저 해결해줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 23,
    answers: [
      { label: 'A', text: '파트너가 내가 좋아하는 음식을 포장해서 가져다줄 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 내 스케줄을 관리하거나 예약을 대신 잡아줄 때', language: L.ActsOfService },
    ],
  },
  {
    id: 24,
    answers: [
      { label: 'A', text: '파트너가 내가 원하던 것을 기념일에 선물해줄 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 아플 때 약을 사다주고 곁에서 챙겨줄 때', language: L.ActsOfService },
    ],
  },

  // === Pair 9: RG vs PT (×3) ===
  {
    id: 25,
    answers: [
      { label: 'A', text: '파트너가 직접 만든 수제 선물을 줄 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 기쁠 때 나를 꽉 안아줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 26,
    answers: [
      { label: 'A', text: '파트너가 여행지에서 나를 생각하며 선물을 골라올 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 외출 전 가볍게 볼에 입을 맞춰줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 27,
    answers: [
      { label: 'A', text: '파트너가 중요한 날 꽃다발을 들고 나타날 때', language: L.ReceivingGifts },
      { label: 'B', text: '파트너가 내 등을 토닥이며 "괜찮아"라고 할 때', language: L.PhysicalTouch },
    ],
  },

  // === Pair 10: AS vs PT (×3) ===
  {
    id: 28,
    answers: [
      { label: 'A', text: '파트너가 내가 야근하는 날 저녁을 챙겨줄 때', language: L.ActsOfService },
      { label: 'B', text: '파트너가 긴 하루를 보낸 내 어깨를 마사지해줄 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 29,
    answers: [
      { label: 'A', text: '파트너가 내 이사나 이직을 실질적으로 도와줄 때', language: L.ActsOfService },
      { label: 'B', text: '파트너가 손을 꼭 잡고 "함께야"라고 말할 때', language: L.PhysicalTouch },
    ],
  },
  {
    id: 30,
    answers: [
      { label: 'A', text: '파트너가 내 차를 점검하거나 집 수리를 도맡아 할 때', language: L.ActsOfService },
      { label: 'B', text: '길을 걷다 파트너가 자연스럽게 허리에 손을 얹을 때', language: L.PhysicalTouch },
    ],
  },
];
