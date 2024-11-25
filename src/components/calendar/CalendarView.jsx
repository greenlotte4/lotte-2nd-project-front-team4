import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko'; // 한글화
import CalendarSidebar from './CalendarSidebar';
import '@/styles/calendar/calendar.css';

const CalendarView = () => {
  const [events] = useState([
    {
      id: 1,
      title: '회의',
      start: '2024-11-28',
      category: '기본',
      allDay: true,
    },
    {
      id: 2,
      title: '프로젝트 마감',
      start: '2024-11-29',
      end: '2024-11-30',
      category: '업무',
    },
    {
      id: 3,
      title: '개인 공부',
      start: '2024-11-30',
      category: '개인',
      allDay: true,
    },
  ]);

  const [categories, setCategories] = useState({
    기본: true,
    업무: true,
    개인: true,
  });

  const filteredEvents = events.filter((event) => categories[event.category]);

  const handleCategoryChange = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 300px', borderRight: '1px solid #ddd' }}>
        <CalendarSidebar
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Main Calendar */}
      <div style={{ flex: 1, padding: '20px' }}>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView="dayGridMonth"
          locale={koLocale}
          events={filteredEvents}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
          }}
          height="auto"
        />
      </div>
    </div>
  );
};

export default CalendarView;
