import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './AuthRouter';
import UserLayout from '@/layouts/UserLayout/UserLayout';

const MyPage = lazy(() => import('@/pages'));
const Board = lazy(() => import('@/pages/board/board'));
const Write = lazy(() => import('@/pages/board/write'));
const Login = lazy(() => import('@/pages/user/login'));
const Terms = lazy(() => import('@/pages/user/terms'));
const Register = lazy(() => import('@/pages/user/register'));
const FindId = lazy(() => import('@/pages/user/findId'));
const FindPass = lazy(() => import('@/pages/user/findPass'));
const Main = lazy(() => import('@/pages/index'));
const Chat = lazy(() => import('@/pages/chat/Chat'));

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/a" element={<div>main</div>} />
      {/* 해당 route 자식은 인증 필요 */}
      <Route path="/b" element={<PrivateRouter />}>
        <Route path="mypage" element={<MyPage />} />
      </Route>
      <Route path="board" element={<Board />} />
      <Route path="board/write" element={<Write />} />
      <Route path="login" element={<Login />} />
      <Route path="findId" element={<FindId />} />
      <Route path="findPass" element={<FindPass />} />
      <Route path="terms" element={<Terms />} />
      <Route path="register" element={<Register />} />
      <Route path="Main" element={<Main />} />
      <Route element={<UserLayout />}>
        <Route path="chat" element={<Chat />} />
      </Route>
      <Route path="/*" element={<div>404</div>} />
    </Routes>
  );
};

export default AppRouter;
