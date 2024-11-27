import React, { useState } from 'react';
import styles from '@styles/admin/admin.module.css';

const CalendarHoliday = () => {
  const [holidays, setHolidays] = useState([
    { id: 1, type: '음력', date: '1월 1일', name: '신정', category: '휴일' },
    { id: 2, type: '음력', date: '1월 2일', name: '-설날', category: '휴일' },
    { id: 3, type: '양력', date: '3월 1일', name: '삼일절', category: '휴일' },
    {
      id: 4,
      type: '음력',
      date: '4월 8일',
      name: '석가탄신일',
      category: '기념일',
    },
    {
      id: 5,
      type: '양력',
      date: '5월 1일',
      name: '근로자의 날',
      category: '휴일',
    },
    {
      id: 6,
      type: '양력',
      date: '5월 5일',
      name: '어린이날',
      category: '휴일',
    },
    { id: 7, type: '양력', date: '6월 6일', name: '현충일', category: '휴일' },
    { id: 8, type: '음력', date: '8월 14일', name: '-추석', category: '휴일' },
    { id: 9, type: '음력', date: '8월 15일', name: '추석', category: '휴일' },
    {
      id: 10,
      type: '양력',
      date: '8월 15일',
      name: '광복절',
      category: '휴일',
    },
    { id: 11, type: '음력', date: '8월 16일', name: '-추석', category: '휴일' },
    {
      id: 12,
      type: '양력',
      date: '10월 3일',
      name: '개천절',
      category: '휴일',
    },
  ]);

  return (
    <div className={styles['calendar-container']}>
      <div className={styles['top-label']}>메뉴 관리 / 캘린더</div>
      <h1>전사 기념일 / 공휴일</h1>
      <section className={styles['calendar-actions']}>
        <button>신규 추가</button>
        <button>삭제</button>
        <button>목록 다운로드</button>
      </section>
      <table className={styles['calendar-table']}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>구분</th>
            <th>날짜</th>
            <th>명칭</th>
            <th>구분</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{holiday.type}</td>
              <td>{holiday.date}</td>
              <td>{holiday.name}</td>
              <td>{holiday.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CalendarHoliday;
