import React, { useState } from 'react';
import {
  Button,
  TextField,
  Checkbox,
  Select,
  MenuItem,
  FormControlLabel,
  RadioGroup,
  Radio,
} from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Sidebar from '@/components/common/Slidbar/Slidbar'; // Sidebar 컴포넌트
import CalendarSidebar from '@/components/calendar/CalendarSidebar'; // CalendarSidebar 추가
import '@/styles/calendar/calendar.css'; // CSS 파일 적용

const CalendarSetting = () => {
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
    공부: true,
    개인: true,
  });

  const [calendars, setCalendars] = useState([
    {
      id: '1',
      name: '기본 일정',
      isDefault: true,
      isPublic: true,
      selected: false,
    },
    {
      id: '2',
      name: '공부',
      isDefault: false,
      isPublic: true,
      selected: false,
    },
    {
      id: '3',
      name: '홍길동',
      isDefault: false,
      isPublic: false,
      selected: false,
    },
  ]);

  const [isDragEnabled, setIsDragEnabled] = useState(false); // 드래그 모드 상태

  const handleAddCalendar = (newCalendarName) => {
    if (!newCalendarName.trim()) return;

    const newCalendar = {
      id: `${Date.now()}`,
      name: newCalendarName,
      isDefault: false,
      isPublic: false,
      selected: false,
    };
    setCalendars([...calendars, newCalendar]);
  };

  const handleDeleteSelected = () => {
    const updatedCalendars = calendars.filter(
      (calendar) => !calendar.selected || calendar.isDefault
    );
    setCalendars(updatedCalendars);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedCalendars = Array.from(calendars);
    const [movedItem] = reorderedCalendars.splice(result.source.index, 1);
    reorderedCalendars.splice(result.destination.index, 0, movedItem);

    setCalendars(reorderedCalendars);
  };

  const handleSelectChange = (id) => {
    setCalendars((prev) =>
      prev.map((calendar) =>
        calendar.id === id
          ? { ...calendar, selected: !calendar.selected }
          : calendar
      )
    );
  };

  const handleDefaultChange = (id) => {
    setCalendars((prev) =>
      prev.map((calendar) =>
        calendar.id === id
          ? { ...calendar, isDefault: true }
          : { ...calendar, isDefault: false }
      )
    );
    alert('기본 캘린더가 변경되었습니다.');
  };

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
      {/* 좌측 Sidebar */}
      <Sidebar items={sidebarItems} userButtonText="캘린더 설정" />

      {/* 캘린더 설정 */}
      <div style={{ display: 'flex', width: '100%' }}>
        {/* 캘린더 사이드바 */}
        <div style={{ flex: '0 0 300px', borderRight: '1px solid #ddd' }}>
          <CalendarSidebar
            categories={categories}
            onCategoryChange={handleCategoryChange}
            onDeleteCategory={handleDeleteCategory}
          />
        </div>

        {/* 메인 설정 */}
        <div style={{ flex: 1, padding: '20px' }}>
          <h2>내 캘린더 관리</h2>

          {/* 캘린더 이름 추가 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <TextField
              label="캘린더 이름"
              variant="outlined"
              size="small"
              style={{ flex: 1, marginRight: '10px' }}
            />
            <Button
              variant="contained"
              onClick={() => handleAddCalendar('새로운 캘린더')}
            >
              추가
            </Button>
          </div>

          {/* 순서바꾸기, 삭제 버튼 */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
            <Button
              variant="outlined"
              onClick={() => setIsDragEnabled(!isDragEnabled)}
            >
              {isDragEnabled ? '드래그 완료' : '순서바꾸기'}
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={handleDeleteSelected}
            >
              삭제
            </Button>
          </div>

          {/* 캘린더 리스트 */}
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="calendars" isDropDisabled={!isDragEnabled}>
              {(provided) => (
                <table
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{ width: '100%', borderCollapse: 'collapse' }}
                >
                  <thead>
                    <tr style={{ borderBottom: '2px solid #ddd' }}>
                      <th style={{ textAlign: 'center', padding: '10px' }}>
                        선택
                      </th>
                      <th style={{ textAlign: 'left', padding: '10px' }}>
                        캘린더
                      </th>
                      <th style={{ textAlign: 'center', padding: '10px' }}>
                        기본 캘린더
                      </th>
                      <th style={{ textAlign: 'center', padding: '10px' }}>
                        공개 상태
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {calendars.map((calendar, index) => (
                      <Draggable
                        key={calendar.id}
                        draggableId={calendar.id}
                        index={index}
                        isDragDisabled={!isDragEnabled}
                      >
                        {(provided) => (
                          <tr
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              backgroundColor: calendar.isDefault
                                ? '#f0f8ff'
                                : '#fff',
                              borderBottom: '1px solid #ddd',
                              ...provided.draggableProps.style,
                            }}
                          >
                            <td style={{ textAlign: 'center' }}>
                              <Checkbox
                                checked={calendar.selected}
                                onChange={() => handleSelectChange(calendar.id)}
                                disabled={calendar.isDefault}
                              />
                            </td>
                            <td style={{ padding: '10px' }}>{calendar.name}</td>
                            <td style={{ textAlign: 'center' }}>
                              <RadioGroup
                                row
                                value={calendar.isDefault}
                                onChange={() =>
                                  handleDefaultChange(calendar.id)
                                }
                              >
                                <FormControlLabel
                                  value={true}
                                  control={<Radio />}
                                  label=""
                                  style={{ margin: 0 }}
                                />
                              </RadioGroup>
                            </td>
                            <td style={{ textAlign: 'center' }}>
                              <Select
                                value={calendar.isPublic ? '공개' : '비공개'}
                                onChange={(e) =>
                                  setCalendars((prev) =>
                                    prev.map((item) =>
                                      item.id === calendar.id
                                        ? {
                                            ...item,
                                            isPublic: e.target.value === '공개',
                                          }
                                        : item
                                    )
                                  )
                                }
                                size="small"
                              >
                                <MenuItem value="공개">공개</MenuItem>
                                <MenuItem value="비공개">비공개</MenuItem>
                              </Select>
                            </td>
                          </tr>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </tbody>
                </table>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </div>
  );
};

export default CalendarSetting;
