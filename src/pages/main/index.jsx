import React, { useState } from "react";
import Sidebar from '@/components/common/Slidbar/Slidbar';
import '../../styles/main/main_style.css';
import logo from '../../assets/login/logo.png';
import { HiOutlineBellAlert } from "react-icons/hi2";

import { Link } from 'react-router-dom';
import { FiHelpCircle } from "react-icons/fi";

import { FaHome } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai';
import { BsCalendar } from 'react-icons/bs'; 
import { BiBookBookmark } from 'react-icons/bi'; 
import { FaUsers } from 'react-icons/fa'; 
import { RiProjectorLine } from 'react-icons/ri'; 
import { MdChat } from 'react-icons/md';



const index = () => {
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
    <body>
      <div className="dashboard">
        <header className="header">
          <Sidebar items={sidebarItems} userButtonText="사용자" />
        </header>
        <main className="main-content">
          {/* 공통 섹션 맨위부분 */}
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
                  <Link to={"/admin/home"}>관리자</Link> 
                </li>
                <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                  <Link to={"/setting"}>설정</Link> 
                </li>
                <li style={{ padding: "8px 12px", cursor: "pointer" }}>
                  <Link to={"/login"}>로그아웃</Link> 
                </li>
              </ul>
            )}
          </div>
        </section>
          <section className="recent-notifications">
            <h2>최근 알림</h2>
            <ul className="notification-list">
              <li>
                <p className="notification-text">
                  [알림] 운영자 확인이 필요한 근태 정보가 있습니다. 근태관리에서
                  확인하세요.
                </p>
                <p className="notification-meta">
                  <span className="notification-time">11-18 08:34</span> |
                  <span className="notification-author">김상후 대표이사</span>
                </p>
              </li>
              <li>
                <p className="notification-text">
                  [알림] 부(부)서장 확인이 필요한 근태 정보가 있습니다.
                  근태관리에서 확인하세요.
                </p>
                <p className="notification-meta">
                  <span className="notification-time">11-18 08:34</span> |
                  <span className="notification-author">김상후 대표이사</span>
                </p>
              </li>
              <li>
                <p className="notification-text">
                  [알림] 운영자 확인이 필요한 근태 정보가 있습니다. 근태관리에서
                  확인하세요.
                </p>
                <p className="notification-meta">
                  <span className="notification-time">11-15 09:31</span> |
                  <span className="notification-author">김상후 대표이사</span>
                </p>
              </li>
              <li>
                <p className="notification-text">
                  [알림] 부(부)서장 확인이 필요한 근태 정보가 있습니다.
                  근태관리에서 확인하세요.
                </p>
                <p className="notification-meta">
                  <span className="notification-time">11-15 09:31</span> |
                  <span className="notification-author">김상후 대표이사</span>
                </p>
              </li>
              <li>
                <p className="notification-text">
                  [결재 도착][의견 포함] '김지연 부장'이(가) 작성한
                  '회계(입금,출금,대체)품의서'이(가) 도착했습니다.
                </p>
                <p className="notification-meta">
                  <span className="notification-time">11-14 14:58</span> |
                  <span className="notification-author">김지연 부장</span>
                </p>
              </li>
            </ul>
          </section>
          <section className="board-updates">
            <h2>전사게시판 최근글</h2>
            <ul className="board-list">
              <li>
                <p className="board-title">게시판</p>
                <p className="board-meta">
                  <span className="board-date">2024-11-12 13:26</span> |
                  <span className="board-author">김상후 대표이사</span>
                </p>
              </li>
              <li>
                <p className="board-title">공지글 올립니다</p>
                <p className="board-meta">
                  <span className="board-date">2024-11-04 17:00</span> |
                  <span className="board-author">마장웅 상무</span>
                </p>
              </li>
              <li>
                <p className="board-title">123 [2]</p>
                <p className="board-meta">
                  <span className="board-date">2024-11-04 16:58</span> |
                  <span className="board-author">김지연 부장</span>
                </p>
              </li>
            </ul>
          </section>
          <section className="work-progress">
            <h2>업무 진행 현황</h2>
            <div className="progress">
              <p>현재 업무 진행 사항을 표시하는 공간입니다.</p>
            </div>
          </section>
        </main>
      </div>
      <script src="../styles/script.js"></script>
    </body>
  );
};

export default index;
