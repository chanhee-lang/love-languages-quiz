// Layer: Domain Entity

export const LoveLanguage = {
  WordsOfAffirmation: 'WA',
  QualityTime: 'QT',
  ReceivingGifts: 'RG',
  ActsOfService: 'AS',
  PhysicalTouch: 'PT',
} as const;

export type LoveLanguage = (typeof LoveLanguage)[keyof typeof LoveLanguage];

export interface LoveLanguageMeta {
  code: LoveLanguage;
  name: string;
  description: string;
  color: string;
  emoji: string;
}

export const LOVE_LANGUAGE_META: Record<LoveLanguage, LoveLanguageMeta> = {
  WA: {
    code: 'WA',
    name: '인정하는 말',
    description: '언어적 표현을 통해 사랑을 느낍니다. 칭찬, 격려, 감사의 말이 마음을 채웁니다.',
    color: '#FF6B6B',
    emoji: '💬',
  },
  QT: {
    code: 'QT',
    name: '함께하는 시간',
    description: '온전한 집중과 함께하는 순간을 통해 사랑을 느낍니다. 방해 없이 함께하는 시간이 소중합니다.',
    color: '#4ECDC4',
    emoji: '⏰',
  },
  RG: {
    code: 'RG',
    name: '선물',
    description: '선물을 주고받는 행위를 통해 사랑을 느낍니다. 선물의 크기보다 마음이 담긴 표현이 중요합니다.',
    color: '#FFD93D',
    emoji: '🎁',
  },
  AS: {
    code: 'AS',
    name: '봉사 행위',
    description: '실질적인 도움과 행동을 통해 사랑을 느낍니다. "말보다 행동"이 사랑의 언어입니다.',
    color: '#6BCB77',
    emoji: '🤝',
  },
  PT: {
    code: 'PT',
    name: '신체적 접촉',
    description: '포옹, 손잡기, 가벼운 터치를 통해 사랑을 느낍니다. 물리적 연결이 안정감을 줍니다.',
    color: '#A78BFA',
    emoji: '🤗',
  },
};

export const ALL_LOVE_LANGUAGES: LoveLanguage[] = ['WA', 'QT', 'RG', 'AS', 'PT'];
