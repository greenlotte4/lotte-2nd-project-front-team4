import React from 'react';
import CalendarView from '../../components/calendar/CalendarView';
import Sidebar from '@/components/common/Slidbar/Slidbar'; // Sidebar 컴포넌트

const CalendarList = () => {
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
    <div className="dashboard">
      {/* 좌측 Sidebar */}
      <Sidebar items={sidebarItems} userButtonText="캘린더" />

      {/* 캘린더 컨텐츠 */}
      <div className="calendar-main">
        <CalendarView />
      </div>
    </div>
  );
};

export default CalendarList;
