import React, { useState } from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom'; // 리디렉션을 위한 useNavigate

const EventForm = ({ onAddEvent }) => {
  const [title, setTitle] = useState(''); // 일정 제목
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 16)
  ); // 시작 날짜
  const [endDate, setEndDate] = useState(new Date().toISOString().slice(0, 16)); // 종료 날짜
  const [calendarOption, setCalendarOption] = useState('기본'); // 내 캘린더 옵션
  const [isPrivate, setIsPrivate] = useState(false); // 비공개 여부
  const [isAllDay, setIsAllDay] = useState(false); // 종일 옵션
  const [isRepeating, setIsRepeating] = useState(false); // 반복 옵션
  const [location, setLocation] = useState(''); // 장소
  const [description, setDescription] = useState(''); // 내용
  const [alarms, setAlarms] = useState([]); // 알람 리스트
  const [showAlarmForm, setShowAlarmForm] = useState(false); // 알람 폼 표시 여부
  const [newAlarm, setNewAlarm] = useState({ time: 30, type: '푸시알람' }); // 새로운 알람

  const handleAllDayChange = (e) => {
    const isChecked = e.target.checked;
    setIsAllDay(isChecked);

    if (isChecked) {
      // 종일 체크 시 시작 날짜와 종료 날짜를 동기화
      setEndDate(startDate.split('T')[0]);
    }
  };

  const handleEndDateChange = (e) => {
    if (!isAllDay) {
      // 종일 상태가 아닐 때만 종료 날짜 변경 허용
      setEndDate(e.target.value);
    }
  };

  const handleAddAlarm = () => {
    setAlarms((prev) => [...prev, newAlarm]);
    setShowAlarmForm(false); // 알람 추가 폼 숨김
    setNewAlarm({ time: 30, type: '푸시알람' }); // 초기화
  };

  const handleDeleteAlarm = (index) => {
    setAlarms((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!title || !startDate) {
      alert('제목과 날짜를 입력해주세요.');
      return;
    }

    const eventData = {
      title,
      startDate: isAllDay ? startDate.split('T')[0] : startDate,
      endDate: isAllDay ? startDate.split('T')[0] : endDate,
      isAllDay,
    };

    onAddEvent(eventData); // 부모로 이벤트 데이터 전달
    alert('일정이 등록되었습니다.');

    // 폼 초기화
    setTitle('');
    setStartDate(new Date().toISOString().slice(0, 16));
    setEndDate(new Date().toISOString().slice(0, 16));
    setCalendarOption('기본');
    setLocation('');
    setDescription('');
    setIsAllDay(false);
    setIsRepeating(false);
    setAlarms([]);
  };

  return (
    <div className="event-form-container">
      <h2 className="form-title">일정 등록</h2>

      {/* 일정 제목 */}
      <TextField
        placeholder="일정을 입력하세요"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        variant="outlined"
        fullWidth
        className="form-input"
        style={{ marginBottom: '20px' }}
        required
      />

      {/* 날짜 */}
      <div className="form-row">
        <label className="form-label">날짜</label>
        <TextField
          type="datetime-local"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          disabled={isAllDay} // 종일 체크 시 비활성화
        />
        <span className="date-separator">~</span>
        <TextField
          type="datetime-local"
          value={endDate}
          onChange={handleEndDateChange}
          fullWidth
          disabled={isAllDay} // 종일 체크 시 비활성화
        />
        <div className="form-options">
          <FormControlLabel
            control={
              <Checkbox checked={isAllDay} onChange={handleAllDayChange} />
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
      </div>

      {/* 내 캘린더 */}
      <div className="form-row">
        <label className="form-label">내 캘린더</label>
        <Select
          value={calendarOption}
          onChange={(e) => setCalendarOption(e.target.value)}
          className="form-input"
          fullWidth
        >
          <MenuItem value="기본">기본</MenuItem>
          <MenuItem value="업무">업무</MenuItem>
          <MenuItem value="개인">개인</MenuItem>
        </Select>
      </div>

      {/* 장소 */}
      <div className="form-row">
        <label className="form-label">장소</label>
        <TextField
          placeholder="장소를 입력하세요"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          variant="outlined"
          fullWidth
          className="form-input"
        />
      </div>

      {/* 내용 */}
      <div className="form-row">
        <label className="form-label">내용</label>
        <TextField
          placeholder="내용을 입력하세요"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          className="form-input"
        />
      </div>

      {/* 알람 설정 */}
      <div className="form-row">
        <label className="form-label">알람</label>
        <Button
          variant="outlined"
          onClick={() => setShowAlarmForm(!showAlarmForm)}
        >
          알람 추가
        </Button>
      </div>

      {/* 알람 추가 폼 */}
      {showAlarmForm && (
        <div className="alarm-form">
          <TextField
            type="number"
            label="알람 시간"
            value={newAlarm.time}
            onChange={(e) =>
              setNewAlarm((prev) => ({ ...prev, time: e.target.value }))
            }
            className="form-input"
            style={{ marginRight: '10px' }}
          />
          <Select
            value={newAlarm.type}
            onChange={(e) =>
              setNewAlarm((prev) => ({ ...prev, type: e.target.value }))
            }
            className="form-input"
            style={{ marginRight: '10px' }}
          >
            <MenuItem value="푸시알람">푸시알람</MenuItem>
            <MenuItem value="메일알람">메일알람</MenuItem>
          </Select>
          <Button variant="contained" color="primary" onClick={handleAddAlarm}>
            추가
          </Button>
        </div>
      )}

      {/* 추가된 알람 리스트 */}
      {alarms.length > 0 && (
        <div className="alarm-list">
          {alarms.map((alarm, index) => (
            <div key={index} className="alarm-item">
              <span>
                {alarm.time}분 전 - {alarm.type}
              </span>
              <IconButton
                onClick={() => handleDeleteAlarm(index)}
                color="secondary"
              >
                <DeleteIcon />
              </IconButton>
            </div>
          ))}
        </div>
      )}

      {/* 확인 및 취소 버튼 */}
      <div className="form-actions">
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          확인
        </Button>
        <Button variant="outlined" color="secondary">
          취소
        </Button>
      </div>
    </div>
  );
};

export default EventForm;
