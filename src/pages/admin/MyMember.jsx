import React, { useState } from 'react';
import styles from '@styles/admin/admin.module.css';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // 결제 상태 아이콘 추가

const MyMember = () => {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: '조수빈',
      email: 'soobin@example.com',
      paymentStatus: 'O',
    },
    {
      id: 2,
      name: '관리자(메인)',
      email: 'admin@example.com',
      paymentStatus: 'O',
    },
    {
      id: 3,
      name: '김소희',
      email: 'kimsohee@example.com',
      paymentStatus: 'X',
    },
    {
      id: 4,
      name: '이상훈',
      email: 'sanghoon@example.com',
      paymentStatus: 'X',
    },
    {
      id: 5,
      name: '박경림',
      email: 'kyunglim@example.com',
      paymentStatus: 'X',
    },
  ]);

  return (
    <div className={styles['my-member-container']}>
      <div className={styles['top-label']}>조직 관리</div>
      <h1>멤버통합관리</h1>
      <header className={styles['my-member-header']}>
        <div className={styles['member-summary']}>
          <div>
            현재 멤버 수: <strong>{members.length}</strong>명
          </div>
          <div>전체 {members.length}명 / 유료 멤버 70명</div>
        </div>
      </header>

      <section className={styles['member-actions']}>
        <button>멤버 삭제</button>
        <button>상태 변경</button>
        <button>목록 다운로드</button>
        <button>일괄 등록</button>
      </section>

      <table className={styles['member-table']}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>이름</th>
            <th>아이디</th>
            <th>이메일</th>
            <th>결제 상태</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{member.name}</td>
              <td>{member.id}</td>
              <td>{member.email}</td>
              <td>
                {member.paymentStatus === 'O' ? (
                  <FaCheckCircle style={{ color: 'green' }} />
                ) : (
                  <FaTimesCircle style={{ color: 'red' }} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer className={styles['member-footer']}>
        <input type="text" placeholder="이름 + 이메일" />
        <button>검색</button>
      </footer>
    </div>
  );
};

export default MyMember;
