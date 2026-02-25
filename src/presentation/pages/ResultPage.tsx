// Layer: Presentation Page

import type { QuizResult } from '../../domain/entities/QuizResult';
import { ResultCard } from '../components/result/ResultCard';
import { ShareButton } from '../components/result/ShareButton';
import { SaveImageButton } from '../components/result/SaveImageButton';
import { useShareUrl } from '../hooks/useSharedResult';
import styles from './ResultPage.module.css';

interface Props {
  result: QuizResult;
  onRestart: () => void;
  isShared?: boolean;
}

export function ResultPage({ result, onRestart, isShared = false }: Props) {
  const shareUrl = useShareUrl(result);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>테스트 결과</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          {isShared && (
            <div className={styles.sharedNote}>
              공유된 결과를 보고 있어요. 직접 테스트해보려면 아래 버튼을 눌러주세요.
            </div>
          )}

          <ResultCard result={result} />

          <div className={styles.actions}>
            {shareUrl && <ShareButton url={shareUrl} />}
            <SaveImageButton result={result} />
            <button className={styles.restartButton} onClick={onRestart}>
              다시 테스트하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
