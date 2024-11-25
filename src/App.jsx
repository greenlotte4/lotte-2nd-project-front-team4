import '@styles/reset.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from '@routes/AppRouter';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled from '@emotion/styled';

const Container = styled.div`
  height: 100%;
`;

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <Suspense fallback={<span>로딩중...</span>}>
        <BrowserRouter>
          <Container>
            <AppRouter />
          </Container>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
