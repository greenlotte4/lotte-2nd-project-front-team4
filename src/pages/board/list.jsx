import React, { useState } from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/board.css';

import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';

export default function Board() {
  const [showAddBoardForm, setShowAddBoardForm] = useState(false);
  const navigate = useNavigate();

  const changeHandler = () => {
    navigate('/board/write');
  };

  const toggleAddBoardForm = () => {
    setShowAddBoardForm((prev) => !prev);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const boardName = event.target.boardName.value;
    console.log(`게시판 이름: ${boardName}`);
    setShowAddBoardForm(false);
  };

  const sidebarItems = [
    { text: '홈', link: '/main', icon: <FaHome /> },
    { text: '게시판', link: '/board', icon: <AiOutlineMail /> },
    { text: '캘린더', link: '/calendar', icon: <BsCalendar /> },
    { text: '자료실', link: '/drive', icon: <BiBookBookmark /> },
    { text: '커뮤니티', link: '/community', icon: <FaUsers /> },
    { text: '프로젝트', link: '/project', icon: <RiProjectorLine /> },
    { text: '채팅', link: '/chat', icon: <MdChat /> },
  ];

  return (
    <div
      id="main"
      data-role="main"
      data-app-name="board"
      className="go_skin_default go_skin_advanced mini"
    >
      <div className="go_wrap">
        <div className="go_body go_renew" style={{ display: 'flex' }}>
          <header className="go_header go_header_2row go_header_advanced">
            <Sidebar items={sidebarItems} userButtonText="사용자" />
          </header>
          <aside className="side">
            <section className="gnb_title">
              <h1>
                <a href="#" id="boardHome">
                  게시판
                </a>
              </h1>
            </section>
            <section className="function">
              <a className="btn_function" id="writeBtn">
                <span className="ic_side ic_app_bbs"></span>
                <button className="btn_wrt" onClick={changeHandler}>
                  글쓰기
                </button>
              </a>
            </section>
            <section id="companySide" className="lnb" data-type="company">
              <h1 className="section-title">사내게시판</h1>
              <ul className="board-tree">
                <li>
                  <a href="#">공지사항</a>
                </li>
                <li>
                  <a href="#">주간식단표</a>
                </li>
                <li>
                  <a href="#">무엇이든 물어보세요!</a>
                </li>
              </ul>
              <h1 className="section-title">개인 게시판</h1>
              <ul className="board-tree">
                <li>
                  <a href="#">test1</a>
                </li>
                <li>
                  <a href="#">test2</a>
                </li>
              </ul>
            </section>
            <div className="list_action">
              <button className="btn_side2" onClick={toggleAddBoardForm}>
                게시판 추가
              </button>
              {showAddBoardForm && (
                <div className="add-board-form">
                  <form onSubmit={handleFormSubmit}>
                    <div>
                      <label htmlFor="boardName">게시판 이름</label>
                      <input
                        type="text"
                        id="boardName"
                        name="boardName"
                        placeholder="게시판 이름을 입력하세요"
                        required
                      />
                    </div>
                    <div className="form-actions">
                      <button type="button" onClick={toggleAddBoardForm}>
                        취소
                      </button>
                      <button type="submit">등록</button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </aside>
          {/* 새로운 내용 추가 */}
          <div className="content">
            <header className="content-header">
              <h1 className="content_top">공지사항(데모)</h1>
              <div className="article-header">
                <h2>게시물 목록</h2>
                <div className="extra-info">
                  <span>운영자: 조수빈</span>
                  <span>LION 공지 게시판</span>
                </div>
              </div>
            </header>
            <div className="combine_search">
              <div className="search_wrap">
                <select className="search_op" id="searchType">
                  <option value="appSearch">게시판</option>
                  <option value="title">제목</option>
                  <option value="content">내용</option>
                  <option value="writer">글쓴이</option>
                </select>
                <input
                  className="c_search"
                  type="text"
                  id="simpleInput"
                  placeholder="검색"
                />
                <button className="btn_search" id="simpleSearch">
                  검색
                </button>
              </div>
            </div>
            <div id="postContents">
              <table className="board_table">
                <thead>
                  <tr>
                    <th>
                      <input type="checkbox" id="checkAll" />
                    </th>
                    <th>번호</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>작성일</th>
                    <th>조회</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>1</td>
                    <td>
                      <a href="#">공지사항 제목</a>
                    </td>
                    <td>운영자</td>
                    <td>2024-11-26</td>
                    <td>12</td>
                  </tr>
                  <tr>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>2</td>
                    <td>
                      <a href="#">공지사항 제목</a>
                    </td>
                    <td>운영자</td>
                    <td>2024-11-25</td>
                    <td>15</td>
                  </tr>
                </tbody>
              </table>
              <div className="pagination">
                <button className="prev_page">이전</button>
                <button className="page active">1</button>
                <button className="page">2</button>
                <button className="next_page">다음</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
