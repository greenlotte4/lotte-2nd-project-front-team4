import React from 'react';
import AdminServiceInfo from './AdminServiceInfo';
import AdminMailStats from './AdmindriveStats';
import '../styles/admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-service-info">
        <AdminServiceInfo />
      </div>
      <div className="admin-mail-stats">
        <AdminMailStats />
      </div>
    </div>
  );
};

export default AdminDashboard;
