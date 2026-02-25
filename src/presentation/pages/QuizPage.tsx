// Layer: Presentation Page

import type { Question, Answer } from '../../domain/entities/Question';
import { ProgressBar } from '../components/quiz/ProgressBar';
import { QuizCard } from '../components/quiz/QuizCard';
import styles from './QuizPage.module.css';

interface Props {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onSelect: (answer: Answer) => void;
  onBack: () => void;
}

export function QuizPage({ question, currentIndex, totalQuestions, onSelect, onBack }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.nav}>
          <button className={styles.backButton} onClick={onBack}>
            ← 처음으로
          </button>
          <span className={styles.questionCount}>
            {currentIndex + 1} / {totalQuestions}
          </span>
        </div>
        <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      </div>

      <div className={styles.main}>
        <div className={styles.cardWrapper}>
          <QuizCard
            question={question}
            questionNumber={currentIndex + 1}
            onSelect={onSelect}
          />
        </div>
      </div>
    </div>
  );
}
