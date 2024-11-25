import React, { useState } from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/board.css';

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
    { text: '홈', link: '/main', icon: 'home-icon.png' },
    { text: '게시판', link: '/board', icon: 'mail-icon.png' },
    { text: '캘린더', link: '/calendar', icon: 'address-book-icon.png' },
    { text: '자료실', link: '#', icon: 'works-icon.png' },
    { text: '커뮤니티', link: '#', icon: 'board-icon.png' },
    { text: '프로젝트', link: '#', icon: 'calendar-icon.png' },
    { text: '채팅', link: '/chat', icon: 'calendar-icon.png' },
  ];

  return (
    <body
      id="main"
      data-role="main"
      data-app-name="board"
      className="go_skin_default go_skin_advanced mini"
    >
      <div className="go_wrap">
        <div className="go_body go_renew" style={{ display: 'flex' }}>
          <header className="go_header go_header_2row go_header_advanced">
            <h1 className="logo" id="advanced_logo">
              <a href="/main">
                <img
                  className="logo"
                  src="/resources/images/logo_do_advanced.png"
                  alt="로고"
                />
              </a>
            </h1>
            <Sidebar items={sidebarItems} userButtonText="사용자" />
          </header>
          {/* 유지되는 기존 내용 */}
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
          <main className="content" style={{ width: '50%', padding: '30px' }}>
            <header className="content-header">
              <h1>게시판 홈</h1>
            </header>
            <section className="board-list" style={{ padding: '10px' }}>
              <ul>
                <li>
                  <div className="article">
                    <span className="category">다우그룹 &gt; 사내 공지</span>
                    <div className="article-header">
                      <h2>공지</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 123</span>
                        <span className="author">김상후 대표이사</span>
                        <span className="time">5시간 전</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="article">
                    <span className="category">다우그룹 &gt; 사내 공지</span>
                    <div className="article-header">
                      <h2>공지</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 123</span>
                        <span className="author">김상후 대표이사</span>
                        <span className="time">5시간 전</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
            <div className="load-more">
              <button>더 보기</button>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}
