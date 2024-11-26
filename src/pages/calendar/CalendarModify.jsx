import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EventDetails from '@/components/calendar/EventDetails'; // 상세 컴포넌트 불러오기
import Sidebar from '@/components/common/Slidbar/Slidbar';
import CalendarSidebar from '@/components/calendar/CalendarSidebar';

const CalendarModify = () => {
  const navigate = useNavigate();

  // 샘플 데이터 (실제 데이터는 API나 상태에서 가져와야 함)
  const [selectedEvent, setSelectedEvent] = useState({
    id: 1,
    title: '임원 정기 회의',
    start: '2024-11-28T10:00',
    end: '2024-11-28T12:00',
    allDay: false,
    isRepeating: true,
    category: '기본',
    location: '서울 본사 회의실',
    description: '주간 보고 및 안건 상의',
  });

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

  const handleUpdateEvent = (updatedEvent) => {
    setSelectedEvent(updatedEvent);
    alert('일정이 수정되었습니다.');
  };

  const handleDeleteEvent = (id) => {
    alert('일정이 삭제되었습니다.');
    navigate('/calendar'); // 일정 삭제 후 캘린더로 돌아가기
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <Sidebar items={sidebarItems} userButtonText="캘린더" />

      {/* 캘린더 사이드바 */}
      <div className="calendar-sidebar">
        <CalendarSidebar
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* 일정 상세 컴포넌트 */}
      <div className="calendar-main">
        <div className="calendar-modify__form">
          <EventDetails
            event={selectedEvent}
            onUpdateEvent={handleUpdateEvent}
            onDeleteEvent={handleDeleteEvent}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarModify;
