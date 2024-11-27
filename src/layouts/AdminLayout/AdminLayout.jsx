import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '@/components/admin/AdminSidebar';

const AdminLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <AdminSidebar /> {/* 사이드바 */}
      <div style={{ flex: 1, padding: '20px', backgroundColor: '#f4f4f4' }}>
        <Outlet /> {/* 여기서 자식 라우트가 렌더링됩니다 */}
      </div>
    </div>
  );
};

export default AdminLayout;
