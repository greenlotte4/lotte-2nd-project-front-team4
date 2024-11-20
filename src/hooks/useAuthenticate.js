import { useEffect, useState } from 'react';

export const useAuthenticate = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const sleep = (second) =>
    new Promise((resolve) => setTimeout(resolve, second));

  useEffect(() => {
    async function asyncFunciton() {
      await sleep(3000);
      console.log('AAAB');
      setIsUserLoggedIn(true);
      setLoading(false);
    }
    asyncFunciton();
  }, []);
  // 여기서 React-Query를 이용해 서버로부터 data fetching 수행

  return { isUserLoggedIn, loading };
};
