import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '@styles/admin/admin.module.css';

const BoardSetting = () => {
  const navigate = useNavigate();

  const [boards, setBoards] = useState([
    {
      id: 1,
      title: 'test',
      status: '정상',
      postCount: 2,
      createdDate: '2024-10-30',
    },
    {
      id: 2,
      title: '전사 알림',
      status: '정상',
      postCount: 2,
      createdDate: '2018-06-11',
    },
    {
      id: 3,
      title: '공지사항',
      status: '정상',
      postCount: 4,
      createdDate: '2018-06-11',
    },
    {
      id: 4,
      title: '익명게시판',
      status: '정상',
      postCount: 1,
      createdDate: '2024-11-12',
    },
    {
      id: 5,
      title: '그린',
      status: '정상',
      postCount: 0,
      createdDate: '2024-11-13',
    },
  ]);

  const [filterStatus, setFilterStatus] = useState('전체');

  const handleStatusFilter = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredBoards =
    filterStatus === '전체'
      ? boards
      : boards.filter((board) => board.status === filterStatus);

  return (
    <div className={styles['board-container']}>
      <div className={styles['top-label']}>메뉴 관리 / 게시판</div>
      <header className={styles['summary']}>
        <h1>전체 게시판 통계</h1>
        <span className={styles['total-count']}>
          총 게시판 수: {boards.length}개 &nbsp;&nbsp;정상:{' '}
          {boards.filter((board) => board.status === '정상').length} / 중지:{' '}
          {boards.filter((board) => board.status === '중지').length}
        </span>
      </header>

      <section className={styles['actions']}>
        <button>목록 다운로드</button>
        <button
          onClick={() => navigate('/admin/board/list')}
          className={styles['notice-button']}
        >
          공지사항 관리
        </button>
      </section>
      <table className={styles['board-table']}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>제목</th>
            <th style={{ textAlign: 'center' }}>
              상태
              <select
                value={filterStatus}
                onChange={handleStatusFilter}
                className={styles['status-filter']}
              >
                <option value="전체">전체</option>
                <option value="정상">정상</option>
                <option value="중지">중지</option>
              </select>
            </th>
            <th style={{ textAlign: 'right' }}>게시물 개수</th>
            <th style={{ textAlign: 'right' }}>생성일</th>
          </tr>
        </thead>
        <tbody>
          {filteredBoards.map((board) => (
            <tr key={board.id}>
              <td style={{ textAlign: 'left' }}>{board.title}</td>
              <td style={{ textAlign: 'center' }}>{board.status}</td>
              <td style={{ textAlign: 'right' }}>{board.postCount}</td>
              <td style={{ textAlign: 'right' }}>{board.createdDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles['pagination']}>
        <span>&lt;</span>
        <span>1</span>
        <span>&gt;</span>
      </div>
      <footer className={styles['footer']}>
        <select className={styles['filter-select']}>
          <option>게시판 제목</option>
        </select>
        <input type="text" placeholder="검색" />
        <button>검색</button>
      </footer>
    </div>
  );
};

export default BoardSetting;
