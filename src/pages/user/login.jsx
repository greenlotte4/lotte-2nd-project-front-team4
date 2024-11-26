import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { login } from "../../slices/userSlice"; 
import { postUserLogin } from "../../services/UserService"; 
import "../../styles/login/go_style.css";
import "../../styles/login/go_color_mint.css";
import "../../styles/login/go_login.css";
import logo from "../../assets/login/logo.png";

const initState = {
  userId: "", 
  pass: "",   
};

const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
    console.log(`Language changed to: ${e.target.value}`);
  };

  return (
    <header className="go_header">
      <div id="language_select" className="language">
        <select onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="ko">한국어</option>
          <option value="en">English</option>
          <option value="ja">日本語</option>
        </select>
      </div>
    </header>
  );
};


const LoginForm = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState({ ...initState });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login data being sent:", user);

    try {
      const response = await postUserLogin(user);
      if (response) {
        console.log("Login successful:", response);

        // Redux 상태 업데이트
        dispatch(login({
          username: response.username,
          role: response.role,
          accessToken: response.accessToken,
        }));

        // 메인 페이지로 이동
        navigate("/main");
      } else {
        alert("로그인 실패: 아이디와 비밀번호를 확인하세요.");
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("로그인 중 오류가 발생했습니다.");
    }
  };

  return (
    <form id="loginForm" method="post" onSubmit={handleLogin}>
      <section className="login_box">
        <div className="sticker">
          <span className="go" title="groupoffice"></span>
        </div>
        <div className="custom_visual">
          <img src={logo} alt="Group Office Logo" />
        </div>
        <fieldset>
          <legend>{t("login")}</legend>
          <div className="login_id">
            <input
              type="text"
              id="userId"
              name="userId"
              value={user.userId}
              className="ipt_login login_wide"
              placeholder={t("username")}
              onChange={changeHandler}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              id="pass"
              name="pass"
              value={user.pass}
              className="ipt_login"
              placeholder={t("password")}
              onChange={changeHandler}
            />
          </div>
          <button id="login_submit" className="btn_login" type="submit">
            {t("login")}
          </button>
        </fieldset>
        <div className="login_check">
          <span className="option_wrap">
            <input type="checkbox" id="saveLoginId" />
            <label htmlFor="saveLoginId">{t("rememberMe")}</label>
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

const WakeUpSection = ({ isVisible }) => {
  const { t } = useTranslation();
  if (!isVisible) return null;

  return (
    <section id="wakeup" className="login_box msg_box">
      <div className="sleeping_msg">
        <p className="title">{t("idleAccount")}</p>
        <p className="desc">{t("idleMessage")}</p>
      </div>
      <div className="btn_box">
        <button id="submit" className="btn_bk">
          {t("wakeUp")}
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
        <WakeUpSection isVisible={false} />
      </div>
    </div>
  );
};

export default App;
 