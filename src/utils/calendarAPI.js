const API_BASE = '/api/calendar';

// 공통 Fetch 함수
const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);

    // HTTP 에러 확인
    if (!response.ok) {
      throw new Error(`HTTP 오류 발생: ${response.status}`);
    }

    // JSON 파싱
    return await response.json();
  } catch (error) {
    console.error('API 호출 중 오류 발생:', error.message);
    throw error;
  }
};

// 캘린더 목록 가져오기 (calendar 테이블)
export const getCalendars = async (userId) => {
  return await fetchData(`${API_BASE}/list?user_id=${userId}`);
};

// 캘린더 내 카테고리 목록 가져오기 (calendar_category 테이블)
export const getCalendarCategories = async (calendarId) => {
  return await fetchData(`${API_BASE}/categories?calendar_id=${calendarId}`);
};

// 일정 목록 가져오기 (calendar_event 테이블)
export const getEvents = async (calendarId, categoryId) => {
  const params = new URLSearchParams();
  if (calendarId) params.append('calendar_id', calendarId);
  if (categoryId) params.append('category_id', categoryId);

  return await fetchData(`${API_BASE}/events?${params.toString()}`);
};

// 일정 상세 보기 (calendar_event 테이블)
export const getEventDetail = async (eventId) => {
  return await fetchData(`${API_BASE}/events/${eventId}`);
};

// 일정 등록 (calendar_event 테이블)
export const createEvent = async (eventData) => {
  return await fetchData(`${API_BASE}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
};

// 일정 수정 (calendar_event 테이블)
export const updateEvent = async (eventId, eventData) => {
  return await fetchData(`${API_BASE}/events/${eventId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventData),
  });
};

// 일정 삭제 (calendar_event 테이블)
export const deleteEvent = async (eventId) => {
  return await fetchData(`${API_BASE}/events/${eventId}`, {
    method: 'DELETE',
  });
};

// 캘린더 공유받은 사용자 목록 가져오기 (calendar_user 테이블)
export const getSharedUsers = async (calendarId) => {
  return await fetchData(`${API_BASE}/shared-users?calendar_id=${calendarId}`);
};

// 캘린더 공유 사용자 추가 (calendar_user 테이블)
export const addSharedUser = async (calendarId, userId) => {
  return await fetchData(`${API_BASE}/shared-users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ calendar_id: calendarId, user_id: userId }),
  });
};

// 캘린더 공유 사용자 삭제 (calendar_user 테이블)
export const removeSharedUser = async (sharedUserId) => {
  return await fetchData(`${API_BASE}/shared-users/${sharedUserId}`, {
    method: 'DELETE',
  });
};
