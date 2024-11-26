import React from 'react';

const SearchResults = ({ results, onEventClick }) => {
  return (
    <div className="search-results">
      <h3>검색 결과</h3>
      <table>
        <thead>
          <tr>
            <th>날짜</th>
            <th>기간</th>
            <th>일정명</th>
          </tr>
        </thead>
        <tbody>
          {results.map((event) => (
            <tr key={event.id}>
              <td>{event.start}</td>
              <td>
                {event.allDay
                  ? '종일일정'
                  : `${event.start} ~ ${event.end || ''}`}
              </td>
              <td onClick={() => onEventClick(event)}>{event.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
