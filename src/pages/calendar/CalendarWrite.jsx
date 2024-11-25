import React, { useState } from 'react';
import EventForm from '../../components/calendar/EventForm';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import CalendarSidebar from '../../components/calendar/CalendarSidebar';
import '@/styles/calendar/calendar.css'; // CSS 파일 적용

const CalendarWrite = () => {
  const sidebarItems = [
    { text: '홈', link: '/main', icon: 'home-icon.png' },
    { text: '게시판', link: '/board', icon: 'mail-icon.png' },
    { text: '캘린더', link: '/calendar', icon: 'address-book-icon.png' },
    { text: '자료실', link: '/drive', icon: 'works-icon.png' },
    { text: '커뮤니티', link: '/community', icon: 'board-icon.png' },
    { text: '프로젝트', link: '/project', icon: 'calendar-icon.png' },
    { text: '채팅', link: '/chat', icon: 'calendar-icon.png' },
  ];

  const [categories, setCategories] = useState({
    기본: true,
    업무: true,
    개인: true,
  });

  const handleCategoryChange = (category, isActive) => {
    setCategories((prev) => ({
      ...prev,
      [category]: isActive,
    }));
  };

  const handleDeleteCategory = (category) => {
    setCategories((prev) => {
      const updatedCategories = { ...prev };
      delete updatedCategories[category];
      return updatedCategories;
    });
  };

  return (
    <div className="dashboard">
      {/* 좌측 공통 Sidebar */}
      <Sidebar items={sidebarItems} userButtonText="캘린더" />

      {/* 캘린더 사이드바 */}
      <div className="calendar-sidebar">
        <CalendarSidebar
          categories={categories}
          onCategoryChange={handleCategoryChange}
          onDeleteCategory={handleDeleteCategory}
        />
      </div>

      {/* 일정 등록 폼 */}
      <div className="calendar-main">
        <div className="calendar-write__form">
          <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>일정 등록</h1>
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default CalendarWrite;
