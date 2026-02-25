// Layer: Presentation Component

import { useState } from 'react';
import styles from './ShareButton.module.css';

interface Props {
  url: string;
}

export function ShareButton({ url }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.prompt('아래 URL을 복사하세요:', url);
    }
  };

  return (
    <button
      className={`${styles.button} ${copied ? styles.copied : ''}`}
      onClick={handleClick}
    >
      <span className={styles.icon}>{copied ? '✓' : '🔗'}</span>
      {copied ? '링크 복사됨!' : '결과 공유하기'}
    </button>
  );
}
