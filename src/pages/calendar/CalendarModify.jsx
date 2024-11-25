import React from 'react';
import EventForm from '../../components/calendar/EventForm';

const CalendarModify = ({ eventId }) => {
  return (
    <div>
      <h1>일정 수정</h1>
      <EventForm eventId={eventId} />
    </div>
  );
};

export default CalendarModify;
