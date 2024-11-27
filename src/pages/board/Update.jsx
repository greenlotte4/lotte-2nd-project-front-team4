import React, { useState } from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/update.css';
import { FaPencil } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { FaList } from 'react-icons/fa';
import { MdFileCopy } from 'react-icons/md';

import RichTextEditor from '@/components/board/BoardText/RichTextEditor';

import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';

export default function Update() {
  const navigate = useNavigate();

  // 에디터의 초기 상태 설정
  const [editorContent, setEditorContent] = useState([
    { type: 'paragraph', children: [{ text: 'test 게시글입니다.' }] },
  ]);

  const changeHandler = () => {
    navigate('/board/write');
  };

  const handleSubmit = () => {
    // 에디터 내용 로그 출력
    console.log('에디터 내용:', editorContent);
    alert('수정되었습니다.');
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
          </aside>
          {/* Main Content */}
          <div className="content">
            {/* Header Section */}
            <header className="header">
              <h1 className="title">공지사항(데모)</h1>
              <div className="header-meta">
                <h2 className="subtitle">게시물 수정</h2>
                <div className="info">
                  <span>운영자: 라이언</span>
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
                    <a className="action write">
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
                        onClick={() => navigate('/board/list')}
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
                    김소희 대표
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
                  <RichTextEditor
                    value={editorContent}
                    onChange={(value) => setEditorContent(value)}
                  />
                </div>
              </article>
              <button className="button submit" onClick={handleSubmit}>
                수정
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
