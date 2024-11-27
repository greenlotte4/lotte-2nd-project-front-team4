import React from 'react';
import styles from '@styles/admin/admin.module.css';

const AdminServiceInfo = () => {
  const serviceInfo = {
    siteName: '관리자',
    siteURL: 'adm.daouoffice.com',
    domainName: 'adm.daouoffice.com',
    totalAccounts: '100개 / 100개',
    activityAccounts: '100',
    responsiblePerson: '관리자(메인)',
    siteId: 61,
    joinDate: '2018-06-11(월) 16:07',
    usageLimit: '무제한',
  };

  return (
    <div className={styles['service-info']}>
      <h2 className={styles['service-info-title']}>서비스 정보</h2>
      <div className={styles['info-grid']}>
        <div>
          <strong>사이트명:</strong> {serviceInfo.siteName}
        </div>
        <div>
          <strong>담당자:</strong> {serviceInfo.responsiblePerson}
        </div>
        <div>
          <strong>사이트 URL:</strong> {serviceInfo.siteURL}
        </div>
        <div>
          <strong>사이트 ID:</strong> {serviceInfo.siteId}
        </div>
        <div>
          <strong>도메인명:</strong> {serviceInfo.domainName}
        </div>
        <div>
          <strong>도입일자:</strong> {serviceInfo.joinDate}
        </div>
        <div>
          <strong>총 계정수:</strong> {serviceInfo.totalAccounts}
        </div>
        <div>
          <strong>활동 계정:</strong> {serviceInfo.activityAccounts}
        </div>
        <div>
          <strong>총 합당 계정 용량:</strong> {serviceInfo.usageLimit}
        </div>
      </div>
    </div>
  );
};

export default AdminServiceInfo;
