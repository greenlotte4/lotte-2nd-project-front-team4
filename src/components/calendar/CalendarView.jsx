import { useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko'; // 한글화
import CalendarSidebar from './CalendarSidebar';
import SearchResults from './SearchResults';
import EventForm from './EventForm'; // 일정 등록 컴포넌트
import { useNavigate } from 'react-router-dom'; // 리디렉션을 위한 useNavigate
import '@/styles/calendar/calendar.css';

const CalendarView = () => {
  const [events] = useState([
    { id: 1, title: '회의', start: '2024-11-28', category: '기본', allDay: true },
    { id: 2, title: '프로젝트 마감', start: '2024-11-29', end: '2024-11-30', category: '업무' },
    { id: 3, title: '개인 공부', start: '2024-11-30', category: '개인', allDay: true },
    { id: 4, title: '12월 일정', start: '2024-12-15', category: '개인', allDay: true },

  ]);

  const [categories, setCategories] = useState({ 기본: true, 업무: true, 개인: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isEventFormVisible, setIsEventFormVisible] = useState(false); // 일정 등록 폼 가시성

  const calendarRef = useRef(null);
  const navigate = useNavigate();


  const handleCategoryChange = (category) => {
    setCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSearch = () => {
    const results = events.filter(
      (event) =>
        categories[event.category] &&
        event.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleEventClick = (event) => {
    if (calendarRef.current) {
      calendarRef.current.getApi().gotoDate(event.start);
    }
  };


  const handleAddEvent = (newEvent) => {
    setEvents((prevEvents) => [...prevEvents, { ...newEvent, id: Date.now() }]);
    setIsEventFormVisible(false); // 폼 숨김
  };
  const filteredEvents = events.filter(
    (event) =>
      categories[event.category] &&
      event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {/* Sidebar */}
      <div style={{ flex: '0 0 300px', borderRight: '1px solid #ddd' }}>
        <CalendarSidebar
          categories={categories}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '20px' }}>
        {/* 캘린더 헤더 */}
        <div className="calendar-header">
          <h2>캘린더</h2>
          <div>
            <input
              type="text"
              placeholder="검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <button onClick={handleSearch}>검색</button>
          </div>
        </div>

             {/* 일정 등록 폼 */}
             {isEventFormVisible && (
          <EventForm onAddEvent={handleAddEvent} />
        )}

        {/* 캘린더 */}
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
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

        {/* 검색 결과 */}
        {searchResults && searchResults.length > 0 && (
          <SearchResults results={searchResults} onEventClick={handleEventClick} />
        )}
      </div>
    </div>
  );
};

export default CalendarView;
