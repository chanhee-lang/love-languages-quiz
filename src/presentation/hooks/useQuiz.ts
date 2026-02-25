// Layer: Presentation Hook

import { useState, useCallback } from 'react';
import type { Answer, Question } from '../../domain/entities/Question';
import type { QuizResult } from '../../domain/entities/QuizResult';
import { StaticQuestionRepository } from '../../infrastructure/repositories/StaticQuestionRepository';
import { CalculateScoreUseCase } from '../../application/usecases/CalculateScoreUseCase';

const repository = new StaticQuestionRepository();
const calculateScore = new CalculateScoreUseCase();

export type QuizPhase = 'intro' | 'quiz' | 'result';

export function useQuiz() {
  const [phase, setPhase] = useState<QuizPhase>('intro');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const questions: Question[] = repository.getAll();
  const totalQuestions = repository.count();
  const currentQuestion = questions[currentIndex] ?? null;

  const start = useCallback(() => {
    setPhase('quiz');
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setResult(null);
  }, []);

  const selectAnswer = useCallback(
    (answer: Answer) => {
      const next = [...selectedAnswers, answer];
      setSelectedAnswers(next);

      if (currentIndex + 1 >= totalQuestions) {
        const quizResult = calculateScore.execute(next);
        setResult(quizResult);
        setPhase('result');
      } else {
        setCurrentIndex((i) => i + 1);
      }
    },
    [currentIndex, selectedAnswers, totalQuestions]
  );

  const restart = useCallback(() => {
    setPhase('intro');
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setResult(null);
  }, []);

  return {
    phase,
    currentQuestion,
    currentIndex,
    totalQuestions,
    result,
    start,
    selectAnswer,
    restart,
  };
}
