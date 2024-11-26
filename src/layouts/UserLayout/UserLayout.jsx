import Sidebar from '@/components/common/Slidbar/Slidbar';
import { Outlet } from 'react-router-dom';
import { Aside, Container, Main } from './UserLayoutStyles';

const UserLayout = () => {
  const sidebarItems = [
    { text: '홈', link: '/main', icon: 'home-icon.png' },
    { text: '게시판', link: '/board', icon: 'mail-icon.png' },
    { text: '캘린더', link: '/calendar', icon: 'address-book-icon.png' },
    { text: '자료실', link: '/drive', icon: 'works-icon.png' },
    { text: '커뮤니티', link: '/community', icon: 'board-icon.png' },
    { text: '프로젝트', link: '/project', icon: 'calendar-icon.png' },
    { text: '채팅', link: '/chat', icon: 'calendar-icon.png' },
  ];

  return (
    <Container>
      <Aside>
        <Sidebar items={sidebarItems} userButtonText="사용자" />
      </Aside>
      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default UserLayout;
