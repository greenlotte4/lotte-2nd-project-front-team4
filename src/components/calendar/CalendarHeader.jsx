import React, { useState } from 'react';

const CalendarHeader = ({ onSearch }) => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchKeyword);
  };

  return (
    <div className="calendar-header">
      <div className="header-tabs">
        <span className="header-title">캘린더</span>
        <div className="search-box">
          <input
            type="text"
            value={searchKeyword}
            onChange={handleSearchChange}
            placeholder="검색어를 입력하세요"
            className="search-input"
          />
          <button onClick={handleSearchClick} className="search-button">
            검색
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
