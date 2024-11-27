import {React} from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/dev.css';
import { FaPencil } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { MdFileCopy } from 'react-icons/md';
import { MdUpdate } from "react-icons/md";

import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';


export default function View() {
  const navigate = useNavigate();

  const changeHandler = () => {
    navigate('/community/write');
  };

  const handleSubmit = () => {
    // 등록 버튼 클릭 시 실행할 로직
    console.log('등록 버튼 클릭');
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
                  커뮤니티
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
              <h1 className="section-title" >가입 커뮤니티 <FaPencil 
              onClick={changeHandler} 
              style={{ cursor: 'pointer', marginLeft: '10px' }} />
            </h1>
              <ul className="board-tree">
                <li>
                  <a href="#">그린아카데미</a>
                </li>
                <li>
                  <a href="#">LION동호회</a>
                </li>
                <li>
                  <a href="#">4팀 프로젝트</a>
                </li>
              </ul>
            </section>
            <section id="companySide" className="lnb" data-type="company">
              <h1 className="section-title" >가입 멤버</h1>
              <ul className="board-tree">
                <li>
                  <a href="#">박준우</a>
                </li>
                <li>
                  <a href="#">조수빈</a>
                </li>
                <li>
                  <a href="#">신승우</a>
                </li>
                <li>
                  <a href="#">이상훈</a>
                </li>
                <li>
                  <a href="#">박경림</a>
                </li>
                <li>
                  <a href="#">김소희</a>
                </li>
              </ul>
            </section>
          </aside>
          {/* Main Content */}
          <div className="content">
            {/* Header Section */}
            <header className="header">
              <h1 className="title">그린아카데미</h1>
              <div className="header-meta">
                <h2 className="subtitle">커뮤니티 목록</h2>
                <div className="info">
                  <span>운영자: 조수빈</span>
                  <span>그린아카데미</span>
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
                    <a className="action update" data-bypass="">
                      <MdUpdate />
                      <span className="text-update"
                      onClick={() => navigate('/community/update?@{no}')}
                      >수정
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
                        onClick={() => navigate('/community/list')}
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
                    <option value="appSearch">전체</option>
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
                  [그린아카데미] 퇴사 안내
                  <span className="comment-count" id="comment_num">
                    [0]
                  </span>
                </h1>
                <div className="meta">
                  <a data-userid="234" className="author" data-bypass="">
                    이상훈 대표
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
