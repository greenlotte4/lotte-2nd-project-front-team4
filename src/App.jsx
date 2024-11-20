import '@styles/reset.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routes/AppRouter';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<span>로딩중...</span>}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
