// Layer: Presentation Component

import type { LanguageScore } from '../../../domain/entities/QuizResult';
import { LOVE_LANGUAGE_META } from '../../../domain/entities/LoveLanguage';
import styles from './ScoreBar.module.css';

interface Props {
  score: LanguageScore;
  maxScore: number;
  isPrimary: boolean;
}

export function ScoreBar({ score, maxScore, isPrimary }: Props) {
  const meta = LOVE_LANGUAGE_META[score.language];
  const pct = maxScore > 0 ? (score.score / maxScore) * 100 : 0;

  return (
    <div className={`${styles.item} ${isPrimary ? styles.primary : ''}`}>
      <div className={styles.header}>
        <span className={styles.label}>
          <span className={styles.emoji}>{meta.emoji}</span>
          {meta.name}
        </span>
        <span className={styles.score}>{score.score}점</span>
      </div>
      <div className={styles.track}>
        <div
          className={styles.fill}
          style={{ width: `${pct}%`, backgroundColor: meta.color, color: meta.color }}
        />
      </div>
    </div>
  );
}
