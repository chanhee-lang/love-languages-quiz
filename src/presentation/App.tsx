// Layer: Presentation Root

import { useQuiz } from './hooks/useQuiz';
import { useSharedResult } from './hooks/useSharedResult';
import { IntroPage } from './pages/IntroPage';
import { QuizPage } from './pages/QuizPage';
import { ResultPage } from './pages/ResultPage';
import './styles/global.css';

export function App() {
  const sharedResult = useSharedResult();
  const { phase, currentQuestion, currentIndex, totalQuestions, result, start, selectAnswer, restart } = useQuiz();

  // If URL contains a shared result, render it immediately
  if (sharedResult) {
    const handleRestart = () => {
      window.history.replaceState({}, '', window.location.pathname);
      restart();
    };

    return (
      <ResultPage
        result={sharedResult}
        onRestart={handleRestart}
        isShared
      />
    );
  }

  if (phase === 'intro') {
    return <IntroPage onStart={start} />;
  }

  if (phase === 'quiz' && currentQuestion) {
    return (
      <QuizPage
        question={currentQuestion}
        currentIndex={currentIndex}
        totalQuestions={totalQuestions}
        onSelect={selectAnswer}
        onBack={restart}
      />
    );
  }

  if (phase === 'result' && result) {
    return <ResultPage result={result} onRestart={restart} />;
  }

  return null;
}
