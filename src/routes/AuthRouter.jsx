import { useAuthenticate } from '@/hooks/useAuthenticate';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {
  const { isUserLoggedIn, loading } = useAuthenticate();
  if (loading) return <div>인증중...</div>;

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
