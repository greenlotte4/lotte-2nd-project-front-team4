import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../../styles/login/go_style.css";
import "../../styles/login/go_color_mint.css";
import "../../styles/login/go_login.css";

const Header = () => {
  const [language, setLanguage] = useState("ko");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <header className="go_header">
      <h1></h1>
      <div id="language_select" className="language">
        <select value={language} onChange={handleLanguageChange}>
          <option value="language">언어(Language)</option>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </header>
  );
};

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigator("../myPage");
    if (!username || !password) {
      setError("계정과 비밀번호를 입력해주세요.");
      return;
    }
    setError("");
    console.log("Logging in with:", { username, password });
  };

  return (
    <form id="loginForm" method="post" onSubmit={handleLogin}>
      <section className="login_box">
        <div className="sticker">
          <span className="go" title="groupoffice"></span>
        </div>

        <div className="custom_visual">
          <img src="../../public/login/down.jpg" alt="메인 로고" />
        </div>

        {error && (
          <div className="login_msg">
            <span className="ic_error">!</span>
            <span className="txt">{error}</span>
          </div>
        )}

        <fieldset>
          <legend>로그인</legend>
          <div className="login_id">
            <input
              type="text"
              id="username"
              name="username"
              className="ipt_login login_wide"
              placeholder="계정"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              name="password"
              id="password"
              className="ipt_login"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button id="login_submit" className="btn_login" type="submit">
            로그인
          </button>
        </fieldset>

        <div className="login_check">
          <span className="option_wrap">
            <input
              type="checkbox"
              name="saveEmail"
              id="saveLoginId"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <label id="login_id_save_label">계정 저장</label>
          </span>
          <div className="register" style={{ alignSelf: "flex-end" }}>
            <a href="/terms">회원가입</a>
          </div>
          <div className="id_check" style={{ alignSelf: "flex-end" }}>
            <a href="/findId">아이디 찾기</a>
          </div>
          <div className="pass_check" style={{ alignSelf: "flex-end" }}>
            <a href="/findPass">패스워드 찾기</a>
          </div>
        </div>
      </section>
    </form>
  );
};

const WakeUpSection = () => {
  return (
    <section id="wakeup" className="login_box msg_box" style={{ display: "none" }}>
      <div className="sleeping_msg">
        <p className="title">현재 계정이 휴면 상태입니다.</p>
        <p className="desc">
          3개월간 로그인한 기록이 없을 경우, 휴면 계정으로 변경되며,
          <br />
          휴면 기간에는 새로운 메일을 수신하거나, 휴대폰 알림을 받을 수 없습니다.
        </p>
      </div>
      <div className="btn_box">
        <button id="submit" className="btn_bk">
          휴면 해제
        </button>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="go_wrap go_skin_default go_intro_wrap mint_theme">
      <Header />
      <div className="go_intro">
        <LoginForm />
        <WakeUpSection />
      </div>
    </div>
  );
};

export default App;
