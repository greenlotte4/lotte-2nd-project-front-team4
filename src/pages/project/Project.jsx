import React, { useState } from "react";
import Sidebar from '@/components/common/Slidbar/Slidbar';
import '../../styles/project/Project.css';
import Modal from "react-modal";
import { Gantt, ViewMode } from "gantt-task-react";
import "gantt-task-react/dist/index.css"; 
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


const wbsData = [
  {
    id: 1,
    name: "프로젝트 관리",
    start: "2024-09-01",
    end: "2024-09-15",
    progress: 70,
    children: [
      {
        id: 2,
        name: "프로젝트 착수 및 계획수립",
        start: "2024-09-01",
        end: "2024-09-04",
        progress: 100,
        responsible: "김상후",
      },
      {
        id: 3,
        name: "프로젝트 수행 및 통제",
        start: "2024-09-06",
        end: "2024-09-10",
        progress: 60,
        responsible: "박수정",
      },
    ],
  },
];

const convertToGanttTasks = (wbsData) => {
  const tasks = [];
  const addTasks = (items, parentId = null) => {
    items.forEach((item) => {
      tasks.push({
        id: item.id.toString(),
        name: item.name,
        start: new Date(item.start),
        end: new Date(item.end),
        progress: item.progress || 0,
        type: "task",
        dependencies: parentId ? [parentId.toString()] : [],
      });
      if (item.children) {
        addTasks(item.children, item.id);
      }
    });
  };
  addTasks(wbsData);
  return tasks;
};

const TaskModal = ({ isOpen, onClose, task }) => {
  if (!task) return null; // task가 없으면 아무것도 렌더링하지 않음

  const [responsible, setResponsible] = useState(task.responsible || "");
  const [startDate, setStartDate] = useState(task.start || "");
  const [endDate, setEndDate] = useState(task.end || "");

  const handleSave = () => {
    console.log({
      task: task.name,
      responsible,
      startDate,
      endDate,
    });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
      <h2>{task.name} 설정</h2>
      <label>
        담당자:
        <input value={responsible} onChange={(e) => setResponsible(e.target.value)} />
      </label>
      <label>
        시작일:
        <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </label>
      <label>
        종료일:
        <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
      </label>
      <button onClick={handleSave}>저장</button>
      <button onClick={onClose}>취소</button>
    </Modal>
  );
};
export default function project() {
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
  const [modalTask, setModalTask] = useState(null);
  const ganttTasks = convertToGanttTasks(wbsData);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
  const openModal = (task) => setModalTask(task);
  const closeModal = () => setModalTask(null);

  return (
    <body
      id="main"
      data-role="main"
      data-app-name="project"
      className="go_skin_default go_skin_advanced mini"
    >
      <div className="go_wrap">
        <div className="go_body go_renew" style={{ display: 'flex' }}>
          <header className="go_header go_header_2row go_header_advanced">
            <h1 className="logo" id="advanced_logo">
            </h1>
            <Sidebar items={sidebarItems} userButtonText="사용자" />
          </header>
          <aside className="side">
            <section className="gnb_title">
              <h1>
                <a href="#" id="boardHome">
                  프로젝트
                </a>
              </h1>
            </section>
            <section className="function">
              <a className="btn_function" id="writeBtn">
                <span className="ic_side ic_app_bbs"></span>
                <button className="btn_wrt">프로젝트 만들기</button>
              </a>
            </section>
            <section id="companySide" className="lnb" data-type="company">
              <h1 className="company">
                <ins className="ic"></ins>
              </h1>
              <ul className="board-tree">
                <li>
                  <a href="#">a 프로젝트</a>
                </li>
                <li>
                  <a href="#">b 프로젝트</a>
                </li>
                <li>
                  <a href="#">c 프로젝트</a>
                </li>
              </ul>
            </section>
            <div className="list_action">
              <button className="btn_side2">담당자 추가</button>
            </div>
          </aside>
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
            <section className="project-list">
              {/* 여기에 지라 프로젝트 */}
            </section>
            <section className="gantt-chart">
              <Gantt tasks={ganttTasks} viewMode={ViewMode.Day} />
            </section>
            <TaskModal isOpen={!!modalTask} onClose={closeModal} task={modalTask} />
          </main>
        </div>
      </div>
    </body>
  );
}
