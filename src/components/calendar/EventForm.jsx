import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const EventForm = () => {
  const [isPrivate, setIsPrivate] = useState(false);
  const [alarms, setAlarms] = useState([]);
  const [newAlarm, setNewAlarm] = useState({ time: 30, type: "푸시알람" });

  const handleAddAlarm = () => {
    setAlarms((prev) => [...prev, newAlarm]);
    setNewAlarm({ time: 30, type: "푸시알람" });
  };

  const handleDeleteAlarm = (index) => {
    setAlarms((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <TextField
        label="일정 제목"
        variant="outlined"
        fullWidth
        className="form-input"
        style={{ marginBottom: "20px" }}
      />
      <div className="form-row">
        <TextField
          label="시작 날짜"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          className="form-input"
          fullWidth
        />
        <TextField
          label="종료 날짜"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          className="form-input"
          fullWidth
        />
      </div>
      <FormControlLabel
        control={
          <Checkbox
            checked={isPrivate}
            onChange={(e) => setIsPrivate(e.target.checked)}
          />
        }
        label="비공개"
      />
      <div className="alarm-settings">
        <TextField
          label="알람 시간"
          type="number"
          value={newAlarm.time}
          onChange={(e) => setNewAlarm({ ...newAlarm, time: e.target.value })}
        />
        <Select
          value={newAlarm.type}
          onChange={(e) => setNewAlarm({ ...newAlarm, type: e.target.value })}
        >
          <MenuItem value="푸시알람">푸시알람</MenuItem>
          <MenuItem value="메일알람">메일알람</MenuItem>
        </Select>
        <Button onClick={handleAddAlarm}>알람 추가</Button>
      </div>
      <div className="alarm-list">
        {alarms.map((alarm, index) => (
          <div key={index}>
            {alarm.time}분 전 - {alarm.type}
            <IconButton onClick={() => handleDeleteAlarm(index)}>
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
      </div>
      <div className="form-actions">
        <Button variant="contained">확인</Button>
        <Button variant="outlined">취소</Button>
      </div>
    </div>
  );
};

export default EventForm;
