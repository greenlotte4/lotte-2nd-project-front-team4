import React from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import '../../styles/board/board.css';

export default function Board() {
  const sidebarItems = [
    { text: '홈', link: '/main', icon: 'home-icon.png' },
    { text: '게시판', link: '#', icon: 'mail-icon.png' },
    { text: '캘린더', link: '#', icon: 'address-book-icon.png' },
    { text: '자료실', link: '#', icon: 'works-icon.png' },
    { text: '커뮤니티', link: '#', icon: 'board-icon.png' },
    { text: '프로젝트', link: '#', icon: 'calendar-icon.png' },
    { text: '채팅', link: '#', icon: 'calendar-icon.png' },
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
                <button className="btn_wrt">글쓰기</button>
              </a>
            </section>
            <section id="companySide" className="lnb" data-type="company">
              <h1 className="company">
                <ins className="ic"></ins>
                <span className="txt">전사게시판</span>
              </h1>
              <ul className="board-tree">
                <li>
                  <a href="#">사내 공지</a>
                </li>
                <li>
                  <a href="#">주간식단표</a>
                </li>
                <li>
                  <a href="#">무엇이든 물어보세요!</a>
                </li>
              </ul>
            </section>
            <div className="list_action">
              <button className="btn_side2">게시판 추가</button>
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
