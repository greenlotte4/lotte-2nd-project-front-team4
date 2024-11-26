import { useMemo } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MainContainer, MainTitle, TabSection } from './ChatMainStyles';

const ChatMain = () => {
  const Tab = useMemo(
    () =>
      // eslint-disable-next-line react/display-name
      ({ children, to }) => {
        const getStyle = ({ isActive }) => ({
          height: '100%',
          display: 'flex',
          alignItems: 'center',

          fontWeight: isActive ? 'bold' : null,
          borderBottom: isActive ? '2px solid black' : null,
        });

        return (
          <NavLink style={getStyle} to={to}>
            {children}
          </NavLink>
        );
      },
    [] // 컴포넌트가 다시 생성되지 않도록 의존성을 빈 배열로 설정
  );

  return (
    <MainContainer>
      <MainTitle>채팅 홈</MainTitle>
      <TabSection>
        <Tab to="/chat/home/recentChatting">최근채팅</Tab>
        <Tab to="/chat/home/registerChannel">가입채널</Tab>
      </TabSection>

      <Outlet />
    </MainContainer>
  );
};

export default ChatMain;
