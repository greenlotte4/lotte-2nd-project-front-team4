import React from 'react';
import AdminServiceInfo from '../../components/admin/AdminServiceInfo';
import AdmindriveStats from '../../components/admin/AdmindriveStats';
import styles from '@styles/admin/admin.module.css';

const AdminDashboard = () => {
  return (
    <div className={styles['admin-dashboard']}>
      <div className={styles['admin-service-info']}>
        <AdminServiceInfo />
      </div>
      <div className={styles['admin-drive-stats']}>
        <AdmindriveStats />
      </div>
    </div>
  );
};

export default AdminDashboard;
