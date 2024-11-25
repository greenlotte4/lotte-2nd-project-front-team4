import React from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import '../../styles/board/board.css';

export default function Writer() {
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
          <aside className="side">
            <section className="gnb_title">
              <h1>
                <a href="#" id="boardHome">
                  글쓰기
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

          {/* 새로운 작성 폼 추가 */}
          <main className="content" style={{ width: '70%', padding: '30px' }}>
            <header className="content-header">
              <h1>게시판 홈</h1>
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
                  <span
                    className="btn_minor"
                    data-role="button"
                    data-btntype="tmpSave"
                  >
                    <span className="txt">취소</span>
                  </span>
                  <span
                    className="btn_major"
                    data-role="button"
                    data-btntype="saveBbs"
                  >
                    <span className="txt">등록</span>
                  </span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
}
