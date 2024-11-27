import React from 'react';
import styles from '@styles/admin/admin.module.css';

const AdminMailStats = () => {
  return (
    <div className={styles['mail-stats']}>
      <h2 className={styles['mail-stats-title']}>문서함 통계</h2>
      <div className={styles['stats-grid']}>
        <div className={styles['chart']}>
          <h3 className={styles['chart-title']}>최근 24시간</h3>
          <div className={styles['chart-placeholder']}>[24시간 차트]</div>
        </div>
        <div className={styles['chart']}>
          <h3 className={styles['chart-title']}>최근 30일간</h3>
          <div className={styles['chart-placeholder']}>[30일 차트]</div>
        </div>
      </div>
    </div>
  );
};

export default AdminMailStats;
