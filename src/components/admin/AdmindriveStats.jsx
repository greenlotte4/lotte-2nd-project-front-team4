import React from 'react';

const AdminMailStats = () => {
  return (
    <div className="mail-stats">
      <h2>문서함 통계</h2>
      <div className="stats-grid">
        <div className="chart">
          <h3>최근 24시간</h3>
          <div className="chart-placeholder">[24시간 차트]</div>
        </div>
        <div className="chart">
          <h3>최근 30일간</h3>
          <div className="chart-placeholder">[30일 차트]</div>
        </div>
      </div>
    </div>
  );
};

export default AdminMailStats;
