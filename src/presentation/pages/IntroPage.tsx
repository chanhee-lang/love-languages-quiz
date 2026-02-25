// Layer: Presentation Page

import styles from './IntroPage.module.css';

interface Props {
  onStart: () => void;
}

export function IntroPage({ onStart }: Props) {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.iconRow}>
          <span className={styles.icon}>💬</span>
          <span className={styles.icon}>⏰</span>
          <span className={styles.icon}>🎁</span>
          <span className={styles.icon}>🤝</span>
          <span className={styles.icon}>🤗</span>
        </div>

        <div className={styles.heading}>
          <p className={styles.subtitle}>Gary Chapman</p>
          <h1 className={styles.title}>사랑의 언어<br />5가지 테스트</h1>
        </div>

        <p className={styles.description}>
          당신이 사랑을 표현하고 받아들이는 방식은 무엇인가요?<br />
          30개의 질문으로 당신만의 사랑의 언어를 발견하세요.
        </p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statValue}>30</span>
            <span className={styles.statLabel}>문항</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>5</span>
            <span className={styles.statLabel}>언어 유형</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>5분</span>
            <span className={styles.statLabel}>소요 시간</span>
          </div>
        </div>

        <button className={styles.startButton} onClick={onStart}>
          테스트 시작하기
        </button>

        <p className={styles.note}>결과는 저장되지 않으며, URL로 공유할 수 있어요.</p>
      </div>
    </div>
  );
}
