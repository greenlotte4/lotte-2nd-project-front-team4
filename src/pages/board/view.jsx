import React from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/dev.css';
import { FaPencil } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { MdFileCopy } from 'react-icons/md';
// import '../../styles/board/view.css';

export default function Board() {
  const navigate = useNavigate();

  const changeHandler = () => {
    navigate('/board/write');
  };

  const handleSubmit = () => {
    // 등록 버튼 클릭 시 실행할 로직
    console.log('등록 버튼 클릭');
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
    <div
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
          </aside>
          {/* Main Content */}
          <div className="content">
            {/* Header Section */}
            <header className="header">
              <h1 className="title">공지사항(데모)</h1>
              <div className="header-meta">
                <h2 className="subtitle">게시물 목록</h2>
                <div className="info">
                  <span>운영자: 조수빈</span>
                  <span>LION 공지 게시판</span>
                </div>
              </div>
            </header>
            {/* Content Info */}
            <div className="info-bar">
              <span
                className="close-button"
                id="boardInfoBtn"
                title="닫기"
              ></span>
            </div>

            <div className="toolbar-and-search">
              {/* Toolbar Section */}
              <section className="toolbar">
                <ul className="actions">
                  <li>
                    <a
                      className="action write"
                      // href="/app/board/post/write/10/60"
                    >
                      <FaPencil />
                      <span className="text-new" onClick={changeHandler}>
                        새글쓰기
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="action delete" data-bypass="">
                      <MdDelete />
                      <span className="text-delete">삭제</span>
                    </a>
                  </li>
                  <li>
                    <a className="action list" data-bypass="">
                      <FaList />
                      <span
                        className="text-list"
                        onClick={() => navigate('/board')}
                      >
                        목록
                      </span>
                    </a>
                  </li>
                  <li>
                    <a className="action print" data-role="button">
                      <MdFileCopy />
                      <span className="text-copy">인쇄</span>
                    </a>
                  </li>
                </ul>
              </section>
              {/* Search Section */}
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
            </div>

            <section className="detail">
              <header className="detail-header">
                <h1>
                  [라이언오피스] 게시판 필수 체크
                  <span className="comment-count" id="comment_num">
                    [0]
                  </span>
                </h1>
                <div className="meta">
                  <a data-userid="234" className="author" data-bypass="">
                    김소희 부장
                  </a>
                  <br />
                  <span className="date">2024-11-26(화) 12:59</span>
                </div>
              </header>
              <article className="detail-view">
                <div id="attachments" className="attachments">
                  <ul className="file-list">
                    <li data-name="[다운로드]다운로드 자료.pdf">
                      <span className="name">
                        <a href="#">[다운로드] 다운로드 자료.pdf</a>
                      </span>
                      <span className="size">(13.9MB)</span>
                      <span className="actions"></span>
                    </li>
                  </ul>
                </div>
                <div id="boardContent">
                  <p>test 게시글입니다.</p>
                </div>
              </article>
            </section>
            {/* Replies Section */}
            <div className="reply-list">
              <ul className="reply-items">
                <li className="reply-item">
                  <div className="reply-content">
                    <p>작성된 댓글입니다.</p>
                  </div>
                  <div className="reply-actions">
                    <button className="button edit">수정</button>
                    <button className="button delete">삭제</button>
                  </div>
                </li>
              </ul>
              <div className="reply-create">
                <div className="form-wrap">
                  <div className="textarea-wrap">
                    <textarea
                      className="input"
                      placeholder="댓글을 남겨보세요"
                    ></textarea>
                    <button className="button submit" id="create">
                      등록
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
