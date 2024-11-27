import React, { useState } from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/board.css';

import logo from '../../assets/login/logo.png';
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { FiHelpCircle } from "react-icons/fi";



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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  return (
    <body
      id="main"
      data-role="main"
      data-app-name="board"
      className="go_skin_default go_skin_advanced mini"
    >
      <div className="go_wrap">
        <div className="go_body go_renew" style={{ display: 'flex' }}>
        <header className="header">
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
          <main className="content" style={{ width: '100%', padding: '30px' }}>
          <section className="section-header">
              <Link to={"/assistant"}>
                <FiHelpCircle size={30} />
              </Link>
              <Link to="/alert">
                <HiOutlineBellAlert size={30} />
              </Link>
              <div style={{ position: "relative" }}>
                <img
                  className="user-img"
                  src={logo}
                  alt="User"
                  onClick={toggleDropdown}
                  style={{ width: "30px", height: "30px", borderRadius: "50%", cursor: "pointer" }}
                />
                {isDropdownOpen && (
                  <ul
                    className="dropdown-list"
                    style={{
                      position: "absolute",
                      width: 120,
                      right: "0",
                      background: "white",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                      listStyle: "none",
                      padding: "10px",
                      borderRadius: "4px",
                      zIndex: 1000,
                    }}
                  >
                    <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                      관리자
                    </li>
                    <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                      프로필
                    </li>
                    <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                      설정
                    </li>
                    <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                      로그아웃
                    </li>
                  </ul>
                )}
              </div>
            </section>
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
