// Layer: Application UseCase

import { ALL_LOVE_LANGUAGES } from '../../domain/entities/LoveLanguage';
import type { LoveLanguage } from '../../domain/entities/LoveLanguage';
import type { Answer } from '../../domain/entities/Question';
import type { QuizResult, LanguageScore } from '../../domain/entities/QuizResult';

export class CalculateScoreUseCase {
  execute(answers: Answer[]): QuizResult {
    const scoreMap = new Map<LoveLanguage, number>(
      ALL_LOVE_LANGUAGES.map((lang) => [lang, 0])
    );

    for (const answer of answers) {
      const current = scoreMap.get(answer.language) ?? 0;
      scoreMap.set(answer.language, current + 1);
    }

    const scores: LanguageScore[] = ALL_LOVE_LANGUAGES.map((lang) => ({
      language: lang,
      score: scoreMap.get(lang) ?? 0,
    })).sort((a, b) => b.score - a.score);

    return {
      scores,
      primaryLanguage: scores[0].language,
      totalAnswered: answers.length,
    };
  }
}
