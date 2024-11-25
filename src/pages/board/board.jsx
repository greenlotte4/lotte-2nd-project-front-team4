import React from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';

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
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <title>게시판 - DaouOffice</title>
        <link
          href="../article/resources/images/favicon/DO_favicon.ico"
          rel="shortcut icon"
        />
        <link
          rel="preload"
          href="../article/resources/fonts/notosans/noto-sans-kr-v25-latin_korean-regular.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="stylesheet"
          href="../style/board/fonts/notosans.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board//master_style.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board//go_style.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board//go_app_style2.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board//go_app_style3.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board/doc_editor.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board/go_home_dashboard.css"
          media="all"
        />
        <link
          rel="stylesheet"
          href="../style/board/go_print.css"
          media="print"
        />
        <link
          rel="stylesheet"
          href="../style/board/go_color_default.css"
          media="all"
        />
      </head>
      <body
        id="main"
        data-role="main"
        data-app-name="board"
        className="go_skin_default go_skin_advanced mini"
      >
        <div className="go_wrap">
          <header className="go_header go_header_2row go_header_advanced">
            <h1 className="logo" id="advanced_logo">
              <a href="/app/home">
                <img
                  className="logo"
                  src="/resources/images/logo_do_advanced.png"
                  alt="로고"
                />
              </a>
            </h1>
            <Sidebar items={sidebarItems} userButtonText="사용자" />
          </header>
          <div className="go_body go_renew">
            <aside className="go_side" id="side">
              <section className="gnb_title">
                <h1>
                  <a id="boardHome">게시판</a>
                </h1>
              </section>
              <section className="function">
                <a className="btn_function" id="writeBtn">
                  <span className="txt">글쓰기</span>
                </a>
              </section>
              {/* 다른 섹션들 추가 */}
            </aside>
            <main className="go_content" id="content">
              <header className="content_top">
                <h1>
                  <span id="title" className="txt">
                    게시판 홈
                  </span>
                </h1>
                <section className="combine_search">
                  <div className="c_search_wrap">
                    <select className="search_op" id="searchType">
                      <option value="appSearch">게시판</option>
                      <option value="totalSearch">통합검색</option>
                    </select>
                    <input
                      className="c_search"
                      type="text"
                      id="simpleInput"
                      placeholder="검색"
                    />
                    <input
                      className="btn_c_search"
                      type="button"
                      id="simpleSearch"
                      value="검색"
                    />
                  </div>
                </section>
              </header>
              <section className="comm_list comm_home board_home">
                <div className="home_tab_wrap">
                  <ul className="comm_home_tab">
                    <li className="active">
                      <span className="txt">전체 게시판</span>
                    </li>
                  </ul>
                </div>
                <div className="tab_contents">
                  <ul className="article_list home_list">
                    <li className="classic dataItem">
                      <div className="article_wrap">
                        <span className="title">
                          <a href="#">게시판 등록</a>
                        </span>
                        <div className="info">
                          <span className="name">김상후 대표이사</span>
                          <span className="date">11-12 13:26</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
