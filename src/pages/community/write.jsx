import React from 'react';
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

export default function Writer() {
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

          {/* 새로운 작성 폼 추가 */}
          <main className="content" style={{ width: '70%', padding: '30px' }}>
            <header className="content-header">
              <h1>커뮤니티</h1>
            </header>

            <div className="go_content" id="content">
              <header className="content_top">
                <h1>
                  <span id="title" className="txt" title="글쓰기">
                    글쓰기
                  </span>
                  <span className="meta"></span>
                </h1>
              </header>
              <div className="content_page go_renew">
                <div className="target_wrap">
                  <span className="spacer"></span>
                  <span className="txt">To.</span>
                  <span id="deptList">
                    <select id="dept_select" className="wfix_large">
                      <option value="10" data-ownertype="Department">
                        [부서]다우그룹
                      </option>
                      <option value="10" data-ownertype="Company">
                        전사게시판
                      </option>
                    </select>
                    <span id="board_select_wrap">
                      <select id="select_board" className="wfix_large">
                        <option
                          value="359"
                          data-bbstype="CLASSIC"
                          data-headerflag="false"
                          data-headerrequiredflag="false"
                        >
                          1f
                        </option>
                      </select>
                      <input type="hidden" id="writePostId" value="" />
                      <input type="hidden" id="writeType" value="" />
                      <span id="board_header_wrap"></span>
                    </span>
                  </span>
                  <input type="hidden" name="currentBoard" value="359" />
                </div>
                <form id="classicWriteWrap" className="editor_form">
                  <fieldset>
                    <table className="form_type">
                      <colgroup>
                        <col width="130px" />
                        <col width="*" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>
                            <span className="title">제목</span>
                          </th>
                          <td>
                            <div className="wrap_txt w_max">
                              <input
                                className="txt w_max"
                                type="text"
                                id="subject"
                                placeholder="제목을 입력하세요"
                              />
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <span className="title">내용</span>
                          </th>
                          <td>
                            <textarea
                              className="editor_content"
                              placeholder="내용을 입력하세요"
                            ></textarea>
                          </td>
                        </tr>
                        <tr id="attachPart">
                          <th>
                            <span className="title">파일 첨부</span>
                          </th>
                          <td>
                            <div id="dropZone" className="dd_attach">
                              <p className="drag_txt">
                                이 곳에 파일을 드래그 하세요.
                              </p>
                              <div className="area_txt">
                                <span className="ic_attach ic_upload"></span>
                                <span className="msg">
                                  이 곳에 파일을 드래그 하세요. 또는
                                  <span className="btn_file">
                                    <span className="txt">파일선택</span>
                                    <input
                                      type="file"
                                      name="file"
                                      title="파일선택"
                                      multiple
                                    />
                                  </span>
                                  <span id="total_size" className="size">
                                    ( 0MB )
                                  </span>
                                </span>
                              </div>
                              <div className="wrap_attach">
                                <ul className="file_wrap" id="fileWrap"></ul>
                                <ul className="img_wrap" id="imgWrap"></ul>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </fieldset>
                </form>
                <div className="page_action_wrap" id="classicWriteSubmitWrap">
                  <button
                    type="button"
                    className="btn_minor"
                    onClick={() => navigate('/community')}
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className="btn_major"
                    onClick={handleSubmit} // 등록 버튼의 클릭 핸들러 추가
                  >
                    등록
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}
