// Layer: Presentation Component

import type { Answer } from '../../../domain/entities/Question';
import styles from './OptionButton.module.css';

interface Props {
  answer: Answer;
  onClick: (answer: Answer) => void;
}

export function OptionButton({ answer, onClick }: Props) {
  return (
    <button className={styles.button} onClick={() => onClick(answer)}>
      <span className={styles.badge}>{answer.label}</span>
      <span className={styles.text}>{answer.text}</span>
    </button>
  );
}
