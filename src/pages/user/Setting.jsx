import React, { useState } from "react";
import Sidebar from '@/components/common/Slidbar/Slidbar';
import logo from '../../assets/login/logo.png';
import { HiOutlineBellAlert } from "react-icons/hi2";
import '../../styles/login/Setting.css';

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
        <section>
          <div>
            <h2 className="titregister">
              <span className="tit">회원수정</span>
            </h2>
          </div>
            <section className="info">
              <form >
                <table>
                  <input type="hidden" name="role" value="member" />
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{textAlign: "center", borderBottomColor: "white"}}>
                      <img
                        className="user-img"
                        src={logo}
                        alt="User" 
                        style={{ width: "70px", height: "70px", borderRadius: "50%", cursor: "pointer", border: "black 1px solid"}}
                        />
                      </td>                    
                    </tr>
                    <tr>
                      <td colSpan={2} style={{textAlign: "center"}}>
                      <button
                        type="button"
                        id="btnCheckUid"
                        data-type="userId"
                        className="change-imgbtn"
                      >
                        이미지 변경
                      </button>
                      </td>
                    </tr>
                    <tr>
                      <td>아이디</td>
                      <td>
                        <input
                          type="text"
                          name="userId"
                          className="inputUid"
                          placeholder="아이디 입력"
                          required
                        />
                        <button
                          type="button"
                          id="btnCheckUid"
                          data-type="userId"
                          className="register-btns"
                        >
                          중복확인
                        </button>
                        <span className="option"> 영문, 숫자 4~12자 설정</span>
                        <span className="resultId desc" id="resultUid"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>비밀번호</td>
                      <td>
                        <input
                          type="password"
                          name="pass"
                          className="inputPass"
                          placeholder="비밀번호 입력"
                        />
                        <span className="option">
                          {" "}
                          영문, 숫자, 특수문자 8~12자 설정
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>비밀번호확인</td>
                      <td>
                        <input
                          type="password"
                          name="pass2"
                          className="inputPass"
                          placeholder="비밀번호 확인 입력"
                        />
                        <button
                          type="button"
                          id="btnCheckEmail"
                          data-type="uid"
                          className="register-btns"
                        >
                          비밀번호 수정하기
                        </button>
                        <span className="resultPass desc" id="resultPass"></span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <td>이름</td>
                      <td>
                        <input
                          type="text"
                          name="memberInfo.name"
                          placeholder="이름 입력"
                        />
                        <span className="resultName"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>이메일</td>
                      <td>
                        <input
                          type="email"
                          name="email"
                          className="inputEmail"
                          placeholder="이메일 입력"
                        />
                        <button
                          type="button"
                          id="btnCheckEmail"
                          data-type="uid"
                          className="register-btns"
                        >
                          이메일 수정하기
                        </button>
                        <span id="resultEmail" className="resultEmail desc"></span>
                      </td>
                    </tr>
                    <tr>
                      <td>휴대폰</td>
                      <td>
                        <input
                          type="text"
                          name="hp"
                          placeholder="- 포함 13자리 입력"
                          minLength="13"
                          maxLength="13"
                          className="inputHp"
                        />
                        <button
                          type="button"
                          id="btnCheckHp"
                          data-type="uid"
                          className="register-btns"
                        >
                          휴대폰 수정
                        </button>
                        <span id="resultHp" className="resultHp desc" ></span>
                      </td>
                    </tr>
                    <tr>
                      <td>주소</td>
                      <td>
                        <div>
                          <input
                            type="text"
                            name="memberInfo.address.zipCode"
                            id="zip"
                            placeholder="우편번호 검색 클릭"
                            className="addr"
                            readOnly
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="memberInfo.address.addr1"
                            id="addr1"
                            placeholder="기본주소 검색"
                            className="addr"
                            readOnly
                          />
                        </div>
                        <div>
                          <input
                            type="text"
                            name="memberInfo.address.addr2"
                            id="addr2"
                            placeholder="상세주소 입력"
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="registerButton">
                  <input type="submit" value="회원수정" className="regBtn" />
                </div>
              </form>
            </section>
          </section>
        </main>
      </div>
    </body>
  );
};

export default index;
