// Layer: Domain Entity

import { LoveLanguage } from './LoveLanguage';

export interface LanguageScore {
  language: LoveLanguage;
  score: number;
}

export interface QuizResult {
  scores: LanguageScore[]; // Sorted descending by score
  primaryLanguage: LoveLanguage;
  totalAnswered: number;
}
