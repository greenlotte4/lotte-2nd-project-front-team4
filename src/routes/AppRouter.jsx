import { lazy, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRouter from './AuthRouter';
import UserLayout from '@/layouts/UserLayout/UserLayout';
import ChatMain from '@/components/chat/ChatMain/ChatMain';
import RecentChat from '@/components/chat/ChatMain/RecentChat/RecentChat';
import RegisterChannel from '@/components/chat/ChatMain/RegisterChannel/RegisterChannel';
import ChatRoom from '@/components/chat/ChatRoom/ChatRoom';
import Landing from '../pages/landing/Landing';

const MyPage = lazy(() => import('@/pages'));
const Board = lazy(() => import('@/pages/board/board'));
const List = lazy(() => import('@/pages/board/list'));
const Write = lazy(() => import('@/pages/board/write'));
const View = lazy(() => import('@/pages/board/view'));
const Add = lazy(() => import('@/pages/board/add'));
const Login = lazy(() => import('@/pages/user/login'));
const Terms = lazy(() => import('@/pages/user/terms'));
const Register = lazy(() => import('@/pages/user/register'));
const FindId = lazy(() => import('@/pages/user/findId'));
const FindPass = lazy(() => import('@/pages/user/findPass'));
const Main = lazy(() => import('@/pages/index'));
const Chat = lazy(() => import('@/pages/chat/Chat'));
const Project = lazy(() => import('@/pages/project/Project'));
const ProjectBoard = lazy(() => import('@/pages/project/ProjectBoard'));

// 새로운 캘린더 관련 라우트 추가
const CalendarList = lazy(() => import('@/pages/calendar/CalendarList'));
const CalendarWrite = lazy(() => import('@/pages/calendar/CalendarWrite'));
const CalendarModify = lazy(() => import('@/pages/calendar/CalendarModify'));
const CalendarSetting = lazy(() => import('@/pages/calendar/CalendarSetting'));

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/a" element={<div>main</div>} />
        {/* 해당 route 자식은 인증 필요 */}
        <Route path="/b" element={<PrivateRouter />}>
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path="board" element={<Board />} />
        <Route path="board/list" element={<List />} />
        <Route path="board/write" element={<Write />} />
        <Route path="board/view" element={<View />} />
        <Route path="board/add" element={<Add />} />
        <Route path="login" element={<Login />} />
        <Route path="findId" element={<FindId />} />
        <Route path="findPass" element={<FindPass />} />
        <Route path="terms" element={<Terms />} />
        <Route path="register" element={<Register />} />
        <Route path="Main" element={<Main />} />
        <Route element={<UserLayout />}>
          <Route path="chat" element={<Chat />}>
            <Route index element={<Navigate to="home" replace />} />
            <Route path="room/:id" element={<ChatRoom />} />
            <Route path="home" element={<ChatMain />}>
              <Route
                index
                element={<Navigate to="recentChatting" replace={true} />}
              />
              <Route path="recentChatting" element={<RecentChat />} />
              <Route path="registerChannel" element={<RegisterChannel />} />
            </Route>
          </Route>
        </Route>
        <Route path="project" element={<Project />} />
        <Route path="project/board" element={<ProjectBoard />} />
        {/* 캘린더 관련 경로 추가 */}
        <Route path="calendar" element={<CalendarList />} />
        <Route path="calendar/write" element={<CalendarWrite />} />
        <Route path="calendar/modify" element={<CalendarModify />} />
        <Route path="calendar/setting" element={<CalendarSetting />} />
        {/* 새로 추가된 Landing 경로 */}
        <Route path="login" element={<Login />} />
        <Route path="landing" element={<Landing />} />
        <Route path="/*" element={<div>404</div>} />
      
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
