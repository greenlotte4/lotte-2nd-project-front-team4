import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '@styles/admin/admin.module.css';

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { label: '기본 관리', path: '/admin/home' },
    { label: '커뮤니티 관리', path: '/admin/community/all' },
    { label: '캘린더 관리', path: '/admin/calendar/holiday' },
    { label: '게시판 관리', path: '/admin/board/setting' },
    { label: '통합 유저 관리', path: '/admin/my/member' },
  ];

  return (
    <div className={styles.sidebar}>
      <h1 className={styles['sidebar-title']}>관리자</h1>
      <h2 className={styles['sidebar-section-title']}>Management</h2>
      <ul className={styles['sidebar-menu']}>
        {menuItems.map((item) => (
          <li key={item.path} className={styles['sidebar-item']}>
            <Link
              to={item.path}
              className={`${styles['sidebar-link']} ${
                location.pathname === item.path ? styles['active'] : ''
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
