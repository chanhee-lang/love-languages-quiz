// Layer: Presentation Component

import type { Question, Answer } from '../../../domain/entities/Question';
import { OptionButton } from './OptionButton';
import styles from './QuizCard.module.css';

interface Props {
  question: Question;
  questionNumber: number;
  onSelect: (answer: Answer) => void;
}

export function QuizCard({ question, questionNumber, onSelect }: Props) {
  return (
    <div className={styles.card} key={question.id}>
      <div className={styles.questionNumber}>질문 {questionNumber}</div>
      <p className={styles.prompt}>나에게 더 중요한 것은?</p>
      <div className={styles.options}>
        <OptionButton answer={question.answers[0]} onClick={onSelect} />
        <div className={styles.divider}>OR</div>
        <OptionButton answer={question.answers[1]} onClick={onSelect} />
      </div>
    </div>
  );
}
