import React, { useState } from 'react';
import {
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom'; // useNavigate 추가

const CalendarSidebar = ({
  categories,
  onCategoryChange,
  onDeleteCategory,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [open, setOpen] = useState(false);
  const [newCalendarName, setNewCalendarName] = useState('');
  const navigate = useNavigate(); // useNavigate 초기화

  const handleAddCalendar = () => {
    if (newCalendarName.trim() === '') return;
    onCategoryChange(newCalendarName, true); // 새 캘린더를 활성화 상태로 추가
    setNewCalendarName('');
    setOpen(false);
  };

  return (
    <div
      style={{
        padding: '20px',
        width: '300px',
        backgroundColor: '#f8f9fa',
        borderRight: '1px solid #ddd',
        height: '100vh',
        overflowY: 'auto',
      }}
    >
      {/* 일정 등록 버튼 */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginBottom: '20px' }}
        onClick={() => navigate('/calendar/write')} // 버튼 클릭 시 페이지 이동
      >
        일정 등록
      </Button>

      <h3
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        내 캘린더
        <Button
          onClick={() => setEditMode(!editMode)}
          style={{
            fontSize: '14px',
            textTransform: 'none',
            padding: 0,
            minWidth: '40px',
          }}
        >
          {editMode ? '완료' : '편집'}
        </Button>
      </h3>

      {Object.entries(categories).map(([category, isActive]) => (
        <div
          key={category}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '10px',
          }}
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={isActive}
                onChange={() => onCategoryChange(category, !isActive)}
                disabled={editMode}
                color="primary"
              />
            }
            label={category}
            style={{ flexGrow: 1 }}
          />
          {editMode && (
            <IconButton
              color="secondary"
              size="small"
              onClick={() => onDeleteCategory(category)} // 삭제 함수 호출
            >
              <CloseIcon fontSize="small" />
            </IconButton>
          )}
        </div>
      ))}

      {!editMode && (
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => setOpen(true)}
          style={{ marginTop: '10px' }}
        >
          내 캘린더 추가
        </Button>
      )}

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>내 캘린더 추가</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            label="캘린더 이름"
            value={newCalendarName}
            onChange={(e) => setNewCalendarName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            취소
          </Button>
          <Button onClick={handleAddCalendar} color="primary">
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CalendarSidebar;
