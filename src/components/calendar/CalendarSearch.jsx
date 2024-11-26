import React, { useState } from 'react';

const CalendarSearch = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = () => {
    onSearch(keyword); // 부모 컴포넌트로 키워드 전달
  };

  return (
    <div className="calendar-search">
      <input
        type="text"
        placeholder="키워드로 검색하세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        검색
      </button>
    </div>
  );
};

export default CalendarSearch;
