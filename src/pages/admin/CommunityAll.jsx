import React, { useState } from 'react';
import styles from '@styles/admin/admin.module.css';

const CommunityAll = () => {
  const [communities, setCommunities] = useState([
    {
      id: 1,
      name: '안녕하세요',
      creator: '김다우 부회장',
      createdDate: '2024-11-07',
      memberCount: 1,
      postCount: 0,
      usage: 0.0,
    },
    {
      id: 2,
      name: '개선 사항 커뮤니티 테스트',
      creator: '김다우 부회장',
      createdDate: '2024-10-29',
      memberCount: 1,
      postCount: 2,
      usage: 0.0,
    },
  ]);

  // totalCommunities 변수 선언 및 초기화
  const totalCommunities = communities.length;

  return (
    <div className={styles['community-container']}>
      <div className={styles['top-label']}>메뉴 관리 / 커뮤니티</div>
      <header className={styles['summary']}>
        <h1>전체 커뮤니티</h1>
        <span className={styles['total-count']}>
          총 커뮤니티 수: {totalCommunities}개
        </span>
      </header>

      <section className={styles['actions']}>
        <button>목록 다운로드</button>
      </section>
      <table className={styles['community-table']}>
        <thead>
          <tr>
            <th>커뮤니티 명</th>
            <th>개설자</th>
            <th>생성일</th>
            <th>회원수(명)</th>
            <th>게시물수(개)</th>
            <th>사용율(MB)</th>
          </tr>
        </thead>
        <tbody>
          {communities.map((community) => (
            <tr key={community.id}>
              <td>{community.name}</td>
              <td>{community.creator}</td>
              <td>{community.createdDate}</td>
              <td>{community.memberCount}</td>
              <td>{community.postCount}</td>
              <td>{community.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles['pagination']}>
        <span>1</span>
      </div>
      <footer className={styles['footer']}>
        <input type="text" placeholder="커뮤니티 명" />
        <button>검색</button>
      </footer>
    </div>
  );
};

export default CommunityAll;
