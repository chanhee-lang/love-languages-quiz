// Layer: Presentation Component

import { useState } from 'react';
import type { QuizResult } from '../../../domain/entities/QuizResult';
import { generateResultImage } from '../../utils/generateResultImage';
import styles from './SaveImageButton.module.css';

interface Props {
  result: QuizResult;
}

export function SaveImageButton({ result }: Props) {
  const [status, setStatus] = useState<'idle' | 'generating' | 'done'>('idle');

  const handleClick = async () => {
    setStatus('generating');
    try {
      const blob = await generateResultImage(result);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'love-language-result.png';
      a.click();
      URL.revokeObjectURL(url);
      setStatus('done');
      setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('idle');
    }
  };

  const labels: Record<typeof status, string> = {
    idle: '이미지로 저장하기',
    generating: '이미지 생성 중...',
    done: '이미지 저장됨!',
  };

  const icons: Record<typeof status, string> = {
    idle: '🖼️',
    generating: '⏳',
    done: '✓',
  };

  return (
    <button
      className={styles.button}
      onClick={handleClick}
      disabled={status === 'generating'}
    >
      <span className={styles.icon}>{icons[status]}</span>
      {labels[status]}
    </button>
  );
}
