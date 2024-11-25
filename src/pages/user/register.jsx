import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/login/register.css";
import { postUser } from "../../services/UserService";


const initState = {
  userId: "", 
  pass: "",   
  username: "",
  email: "",
  plan_id: null,
  role: "USER",
  hp:"",
  addr1: "",
  addr2: "",
  zipcode: "",
  status: "ACTIVE",
};


const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ ...initState });
  const [showAuthInput, setShowAuthInput] = useState(false); 

  const onClickCheckBtn1 = async () => {
    if (!user.userId) {
      alert("아이디를 입력하세요.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/check-user-id/${user.userId}`);
      const result = await response.json();
  
      if (result.isAvailable) {
        alert("이미 사용 중인 아이디입니다.");
      } else {
        alert("사용 가능한 아이디입니다.");
      }
    } catch (error) {
      console.error("아이디 중복 확인 실패:", error);
      alert("아이디 중복 확인 중 오류가 발생했습니다.");
    }
  }

  const onClickCheckBtn2 = async () => {
    if (!user.email) {
      alert("이메일을 입력하세요.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });

      if (response.ok) {
        alert("인증번호가 이메일로 전송되었습니다.");
        setShowAuthInput(true); // 인증번호 입력 필드 표시
      } else {
        alert("인증번호 전송 실패");
      }
    } catch (error) {
      console.error("이메일 인증 요청 실패:", error);
      alert("이메일 인증 요청 중 오류가 발생했습니다.");
    }
  };


  const verifyEmailAuth = async () => {
    if (!user.email || !user.auth) {
      alert("이메일과 인증번호를 입력하세요.");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:8080/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email, authCode: user.auth }),
      });
  
      if (response.ok) {
        alert("이메일 인증이 완료되었습니다.");
      } else {
        alert("인증번호가 일치하지 않습니다.");
      }
    } catch (error) {
      console.error("이메일 인증 실패:", error);
      alert("이메일 인증 중 오류가 발생했습니다.");
    }
  };

  const onClickCheckBtn3 = async () => {
    if (!user.hp) {
      alert("휴대폰 번호를 입력하세요.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/check-phone`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber: user.hp }),
      });
  
      const result = await response.json();
  
      if (result.exists) {
        alert("이미 사용 중인 휴대폰 번호입니다.");
      } else {
        alert("사용 가능한 휴대폰 번호입니다.");
      }
    } catch (error) {
      console.error("휴대폰 중복 확인 실패:", error);
      alert("휴대폰 중복 확인 중 오류가 발생했습니다.");
    }
  };

  const changeHandler = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const savedUser = postUser(user);

    console.log("savedUser : " + savedUser);
    if (savedUser) {
      alert("회원가입이 완료되었습니다.");
      navigate("/login");
    } else {
      alert("회원가입이 실패 했습니다.");
    }
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
                        name="userId"
                        className="inputUid"
                        placeholder="아이디 입력"
                        required
                        value={user.userId}
                        onChange={changeHandler}
                      />
                      <button
                        type="button"
                        id="btnCheckUid"
                        data-type="userId"
                        className="register-btns"
                        onClick={onClickCheckBtn1}
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
                        value={user.pass}
                        onChange={changeHandler}
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
                        value={user.name}
                        onChange={changeHandler}
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
                        value={user.email}
                        onChange={changeHandler}
                      />
                      <button
                        type="button"
                        id="btnCheckEmail"
                        data-type="uid"
                        className="register-btns"
                        onClick={onClickCheckBtn2}
                      >
                        이메일 인증
                      </button>
                      <div className="auth" style={{ display: showAuthInput ? "block" : "none" }}>
                        <input
                          type="text"
                          name="auth"
                          className="inputEmailCode"
                          placeholder="인증번호 입력"
                          onChange={changeHandler}
                        />
                        <button
                          type="button"
                          id="btnCheckEmailCode"
                          className="register-btns"
                          onClick={verifyEmailAuth}
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
                        name="hp"
                        placeholder="- 포함 13자리 입력"
                        minLength="13"
                        maxLength="13"
                        className="inputHp"
                        value={user.hp}
                        onChange={changeHandler}
                      />
                      <button
                        type="button"
                        id="btnCheckHp"
                        data-type="uid"
                        className="register-btns"
                        onClick={onClickCheckBtn3}
                      >
                        휴대폰 인증
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
                          value={user.zipcode}
                          onChange={changeHandler}
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
                          value={user.addr1}
                          onChange={changeHandler}
                          readOnly
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="memberInfo.address.addr2"
                          id="addr2"
                          placeholder="상세주소 입력"
                          value={user.addr2}
                          onChange={changeHandler}
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
