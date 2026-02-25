// Layer: Domain Entity

import { LoveLanguage } from './LoveLanguage';

export interface Answer {
  label: 'A' | 'B';
  text: string;
  language: LoveLanguage;
}

export interface Question {
  id: number;
  answers: [Answer, Answer]; // Always exactly A and B
}
