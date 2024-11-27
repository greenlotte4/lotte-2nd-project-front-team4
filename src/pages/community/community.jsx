import React, { useState } from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import { FaPencil } from 'react-icons/fa6';
import '../../styles/community/community.css';

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

  const navigateToAddCommunity = () => {
    navigate('/community/add');
  };

  const changeHandler = () => {
    navigate('/community/write');
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
    <body
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
          {/* 유지되는 기존 내용 */}
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
                <button className="btn_wrt" onClick={navigateToAddCommunity}>
                  커뮤니티 만들기
                </button>
              </a>
            </section>
            <section id="companySide" className="lnb" data-type="company">
              <h1 className="section-title" >가입 커뮤니티 <FaPencil 
            onClick={changeHandler} 
            style={{ cursor: 'pointer', marginLeft: '10px' }} 
            /></h1>
              <ul className="board-tree">
                <li>
                  <Link to="/community/list">그린아카데미</Link>
                </li>
                <li>
                  <a href="#">LION동호회</a>
                </li>
                <li>
                  <a href="#">4팀 프로젝트</a>
                </li>
              </ul>
            </section>
          </aside>

          {/* 새로운 내용 추가 */}
          <main className="content" style={{ width: '100%', padding: '30px' }}>
            <header className="content-header">
              <h1>커뮤니티 홈</h1>
              <h2>최근글</h2>
            </header>
            <section className="board-list" style={{ padding: '10px' }}>
              <ul>
                <li>
                  <div className="article">
                    <span className="category">그린아카데미</span>
                    <div className="article-header">
                      <h2>퇴사 공지</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 0</span>
                        <span className="author">이상훈 대표</span>
                        <span className="time">5시간 전</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="article">
                    <span className="category">LION동호회</span>
                    <div className="article-header">
                      <h2>회비 납부 안내</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 123</span>
                        <span className="author">조수빈 팀장</span>
                        <span className="time">1일 전</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="article">
                    <span className="category">4팀 프로젝트</span>
                    <div className="article-header">
                      <h2>프로젝트 진행상황 안내</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 20</span>
                        <span className="author">박경림 과장</span>
                        <span className="time">2일 전</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="article">
                    <span className="category">그린아카데미</span>
                    <div className="article-header">
                      <h2>병결 안내</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 20</span>
                        <span className="author">박준우 상무</span>
                        <span className="time">2일 전</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="article">
                    <span className="category">4팀 프로젝트</span>
                    <div className="article-header">
                      <h2>test입니다</h2>
                      <div className="extra-info">
                        <span className="views">조회수: 20</span>
                        <span className="author">신승우 과장</span>
                        <span className="time">2일 전</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </body>
  );
}
