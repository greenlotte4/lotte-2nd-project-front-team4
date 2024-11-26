import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
} from '@mui/material';
import '@/styles/calendar/calendar.css'; // CSS 파일 적용

const EventDetails = ({ event, onUpdateEvent, onDeleteEvent }) => {
  const [title, setTitle] = useState(event.title || '');
  const [start, setStart] = useState(event.start || '');
  const [end, setEnd] = useState(event.end || '');
  const [isAllDay, setIsAllDay] = useState(event.allDay || false);
  const [isRepeating, setIsRepeating] = useState(event.isRepeating || false);
  const [category, setCategory] = useState(event.category || '기본');
  const [location, setLocation] = useState(event.location || '');
  const [description, setDescription] = useState(event.description || '');

  const navigate = useNavigate();

  const handleUpdate = () => {
    const updatedEvent = {
      ...event,
      title,
      start,
      end,
      allDay: isAllDay,
      isRepeating,
      category,
      location,
      description,
    };
    if (onUpdateEvent) {
      onUpdateEvent(updatedEvent);
    }
    alert('일정이 수정되었습니다.');
  };

  const handleDelete = () => {
    if (onDeleteEvent) {
      onDeleteEvent(event.id);
    }
    alert('일정이 삭제되었습니다.');
    navigate('/calendar'); // 캘린더로 돌아가기
  };

  return (
    <div className="event-details-container">
      {/* 캘린더로 돌아가기 버튼 */}
      <div className="back-button-container">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/calendar')}
        >
          캘린더로 돌아가기
        </Button>
      </div>

      {/* 일정 상세 제목 */}
      <h1 className="details-title">일정 상세</h1>

      {/* 제목 */}
      <div className="form-row">
        <label>제목</label>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
      </div>

      {/* 날짜 */}
      <div className="form-row">
        <label>날짜</label>
        <TextField
          type="datetime-local"
          value={start}
          onChange={(e) => setStart(e.target.value)}
          disabled={isAllDay}
          style={{ marginRight: '10px' }}
        />
        <span>~</span>
        <TextField
          type="datetime-local"
          value={end}
          onChange={(e) => setEnd(e.target.value)}
          disabled={isAllDay}
          style={{ marginLeft: '10px' }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isAllDay}
              onChange={(e) => setIsAllDay(e.target.checked)}
            />
          }
          label="종일"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={isRepeating}
              onChange={(e) => setIsRepeating(e.target.checked)}
            />
          }
          label="반복"
        />
      </div>

      {/* 내 캘린더 */}
      <div className="form-row">
        <label>내 캘린더</label>
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
        >
          <MenuItem value="기본">기본</MenuItem>
          <MenuItem value="업무">업무</MenuItem>
          <MenuItem value="개인">개인</MenuItem>
        </Select>
      </div>

      {/* 장소 */}
      <div className="form-row">
        <label>장소</label>
        <TextField
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          fullWidth
        />
      </div>

      {/* 내용 */}
      <div className="form-row">
        <label>내용</label>
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={3}
        />
      </div>

      {/* 버튼 */}
      <div className="form-actions">
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          확인
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate('/calendar')}
        >
          취소
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          일정 삭제
        </Button>
      </div>
    </div>
  );
};

export default EventDetails;
