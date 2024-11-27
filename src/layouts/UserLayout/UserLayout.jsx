import Sidebar from '@/components/common/Slidbar/Slidbar';
import { Outlet } from 'react-router-dom';
import { Aside, Container, Main } from './UserLayoutStyles';


import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';

const UserLayout = () => {
  const sidebarItems = [
    { text: '홈', link: '/main', icon: <FaHome /> },
    { text: '게시판', link: '/board', icon: <AiOutlineMail /> },
    { text: '캘린더', link: '/calendar', icon: <BsCalendar /> },
    { text: '자료실', link: '/drive', icon: <BiBookBookmark /> },
    { text: '커뮤니티', link: '/community', icon: <FaUsers /> },
    { text: '프로젝트', link: '/project', icon: <RiProjectorLine /> },
    { text: '채팅', link: '/chat', icon: <MdChat /> },
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
