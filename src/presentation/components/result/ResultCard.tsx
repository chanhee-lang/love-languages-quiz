// Layer: Presentation Component

import type { QuizResult } from '../../../domain/entities/QuizResult';
import { LOVE_LANGUAGE_META } from '../../../domain/entities/LoveLanguage';
import { ScoreBar } from './ScoreBar';
import styles from './ResultCard.module.css';

interface Props {
  result: QuizResult;
}

export function ResultCard({ result }: Props) {
  const primary = LOVE_LANGUAGE_META[result.primaryLanguage];
  const maxScore = result.scores[0].score;

  const colorTransparent = `${primary.color}1a`;
  const colorBorder = `${primary.color}33`;

  return (
    <div
      className={styles.card}
      style={{
        '--primary-color': primary.color,
        '--primary-color-transparent': colorTransparent,
        '--primary-color-bg': colorTransparent,
        '--primary-color-border': colorBorder,
      } as React.CSSProperties}
    >
      <div className={styles.hero}>
        <span className={styles.emoji}>{primary.emoji}</span>
        <span className={styles.badge}>나의 주요 사랑의 언어</span>
        <h2 className={styles.primaryName}>{primary.name}</h2>
        <p className={styles.description}>{primary.description}</p>
      </div>

      <div className={styles.scoresSection}>
        <div className={styles.sectionTitle}>전체 점수</div>
        <div className={styles.scoreList}>
          {result.scores.map((score) => (
            <ScoreBar
              key={score.language}
              score={score}
              maxScore={maxScore}
              isPrimary={score.language === result.primaryLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
