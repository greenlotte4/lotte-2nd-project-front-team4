import React from 'react';
import Sidebar from '@/components/common/Slidbar/Slidbar';
import { useNavigate } from 'react-router-dom';
import '../../styles/board/board.css';

export default function Writer() {
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
    { text: '캘린더', link: '#', icon: 'address-book-icon.png' },
    { text: '자료실', link: '#', icon: 'works-icon.png' },
    { text: '커뮤니티', link: '#', icon: 'board-icon.png' },
    { text: '프로젝트', link: '#', icon: 'calendar-icon.png' },
    { text: '채팅', link: '/chat', icon: 'calendar-icon.png' },
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
              <button className="btn_side2">게시판 추가</button>
            </div>
          </aside>

          {/* 새로운 작성 폼 추가 */}
          <main className="content" style={{ width: '70%', padding: '30px' }}>
            <header className="content-header">
              <h1>게시판 추가</h1>
            </header>

            <div className="go_content" id="content">
              <header className="content_top">
                <h1>
                  <span id="title" className="txt" title="게시판 추가">
                    게시판 추가
                  </span>
                  <span className="meta"></span>
                </h1>
              </header>
              <div className="content_page go_renew">
                <div className="target_wrap">
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
                            <span className="title">설명</span>
                          </th>
                          <td>
                            <textarea
                              className="editor_content"
                              placeholder="내용을 입력하세요"
                            ></textarea>
                          </td>
                        </tr>
                        <tr>
                          <th>
                            <span className="title">비공개 설정</span>
                          </th>
                          <td>
                            <span className="wrap_option">
                              <input
                                type="radio"
                                id="publicFlag1"
                                name="publicFlag"
                                value="true"
                              />
                              <label htmlFor="publicFlag1">공개</label>
                            </span>
                            <span className="horspace1"></span>
                            <span className="wrap_option">
                              <input
                                type="radio"
                                id="publicFlag0"
                                name="publicFlag"
                                value="false"
                                defaultChecked
                              />
                              <label htmlFor="publicFlag0">비공개</label>
                            </span>
                            <div
                              id="publicFlagOption"
                              style={{ display: 'none' }}
                            >
                              <div
                                className="option_display"
                                id="publicFlagOptionTable"
                              ></div>
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
                    onClick={() => navigate('/board')}
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
