import React from "react";
import "./i18n";
import { useTranslation } from "react-i18next";
import "../../styles/login/go_style.css";
import "../../styles/login/go_color_mint.css";
import "../../styles/login/go_login.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
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

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login submitted");
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
              id="username"
              name="username"
              className="ipt_login login_wide"
              placeholder={t("username")}
            />
          </div>
          <div className="login_pw">
            <input
              type="password"
              name="password"
              id="password"
              className="ipt_login"
              placeholder={t("password")}
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
          <div className="login_register" style={{alignSelf: 'flex-end'}}>
            <a href="/terms">{t("register")}</a>
          </div>
          <div className="id_check" style={{alignSelf: 'flex-end'}}>
            <a href="/findId">{t("findId")}</a>
          </div>
          <div className="pass_check" style={{alignSelf: 'flex-end'}}>
            <a href="/findPass">{t("findPass")}</a>
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
