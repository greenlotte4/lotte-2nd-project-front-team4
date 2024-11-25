import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login/register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    // 회원가입 처리 로직이 있다면 여기에 추가
    navigate("/login"); // 로그인 페이지로 이동
  };

  return (
    <>
      <div>
        <h2 className="titregister">
          <span className="tit">회원가입</span>
        </h2>
      </div>
      <div className="main-wrapper">
        <div className="main-box">
          <section className="register">
            <form onSubmit={handleSubmit}>
              <table>
                <input type="hidden" name="role" value="member" />
                <tbody>
                  <tr>
                    <td>아이디</td>
                    <td>
                      <input
                        type="text"
                        name="uid"
                        className="inputUid"
                        placeholder="아이디 입력"
                        required
                      />
                      <button
                        type="button"
                        id="btnCheckUid"
                        data-type="uid"
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
                    <td>성별</td>
                    <td>
                      <div className="gender-selection">
                        <label>
                          <input
                            type="radio"
                            name="memberInfo.gender"
                            value="0"
                            defaultChecked
                          />
                          남
                        </label>
                        <label>
                          <input
                            type="radio"
                            name="memberInfo.gender"
                            value="1"
                          />
                          여
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>이메일</td>
                    <td>
                      <input
                        type="email"
                        name="memberInfo.email"
                        className="inputEmail"
                        placeholder="이메일 입력"
                      />
                      <button
                        type="button"
                        id="btnCheckEmail"
                        data-type="uid"
                        className="register-btns"
                      >
                        이메일 인증
                      </button>
                      <div className="auth" style={{ display: "none" }}>
                        <input
                          type="text"
                          name="auth"
                          className="inputEmailCode"
                          placeholder="인증번호 입력"
                        />
                        <button
                          type="button"
                          id="btnCheckEmailCode"
                          className="register-btns"
                        >
                          확인
                        </button>
                      </div>
                      <span id="resultEmail" className="resultEmail desc"></span>
                    </td>
                  </tr>
                  <tr>
                    <td>휴대폰</td>
                    <td>
                      <input
                        type="text"
                        name="memberInfo.hp"
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
                        휴대폰 인증
                      </button>
                      <span id="resultHp" className="resultHp desc"></span>
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
                <input type="submit" value="회원가입" className="regBtn" />
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Register;
