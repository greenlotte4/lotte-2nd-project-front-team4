import React from 'react';
import AdminServiceInfo from '../../components/admin/AdminServiceInfo';
import AdmindriveStats from '../../components/admin/AdmindriveStats';
import '../../styles/admin/admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <div className="admin-service-info">
        <AdminServiceInfo />
      </div>
      <div className="admin-drive-stats">
        <AdmindriveStats />
      </div>
    </div>
  );
};

export default AdminDashboard;
