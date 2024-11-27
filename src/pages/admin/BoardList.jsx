import React, { useState } from 'react';
import styles from '@styles/admin/admin.module.css';

const BoardList = () => {
  const [notices, setNotices] = useState([
    { id: 1, title: '게시판 제목', author: '관리자', views: 100 },
    { id: 2, title: '전사 공지', author: '관리자', views: 100 },
    { id: 3, title: '전사 알림', author: '관리자', views: 100 },
    { id: 4, title: 'test', author: '관리자', views: 100 },
  ]);

  const handleDelete = () => {
    alert('선택된 공지를 삭제합니다.');
  };

  const handleSettings = (notice) => {
    alert(`${notice.title} 설정 페이지로 이동합니다.`);
  };

  const handleWrite = () => {
    alert('글쓰기 페이지로 이동합니다.');
  };

  return (
    <div className={styles['notice-container']}>
      <div className={styles['top-label']}>게시판 관리 / 게시판</div>
      <h1 className={styles['page-title']}>공지사항</h1>

      <section className={styles['actions']}>
        <button className={styles['delete-button']} onClick={handleDelete}>
          삭제
        </button>
      </section>

      <table className={styles['notice-table']}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
            <th>설정</th>
          </tr>
        </thead>
        <tbody>
          {notices.map((notice) => (
            <tr key={notice.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{notice.title}</td>
              <td>{notice.author}</td>
              <td>{notice.views}</td>
              <td>
                <button
                  className={styles['settings-button']}
                  onClick={() => handleSettings(notice)}
                >
                  설정
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className={styles['footer']}>
        <button className={styles['write-button']} onClick={handleWrite}>
          글쓰기
        </button>
      </footer>
    </div>
  );
};

export default BoardList;
