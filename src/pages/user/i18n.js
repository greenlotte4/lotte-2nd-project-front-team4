import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      login: "Login",
      username: "Username",
      password: "Password",
      rememberMe: "Remember Me",
      register: "Register",
      findId: "Find ID",
      findPass: "Find Password",
      idleAccount: "This account is idle.",
      idleMessage: "If there is no login record for 3 months, it will be marked as idle.",
      wakeUp: "Reactivate Account",
    },
  },
  ko: {
    translation: {
      login: "로그인",
      username: "계정",
      password: "비밀번호",
      rememberMe: "계정 저장",
      register: "회원가입",
      findId: "아이디 찾기",
      findPass: "비밀번호 찾기",
      idleAccount: "현재 계정이 휴면 상태입니다.",
      idleMessage: "3개월간 로그인한 기록이 없을 경우, 휴면 계정으로 변경됩니다.",
      wakeUp: "휴면 해제",
    },
  },
  ja: {
    translation: {
      login: "ログイン",
      username: "ユーザー名",
      password: "パスワード",
      rememberMe: "アカウントを保存する",
      register: "新規登録",
      findId: "IDを探す",
      findPass: "パスワードを探す",
      idleAccount: "現在のアカウントは休眠状態です。",
      idleMessage: "3ヶ月間ログイン履歴がない場合、休眠アカウントとして扱われます。",
      wakeUp: "アカウントを再アクティブ化",
    },
  },
};

i18n
  .use(LanguageDetector) // 언어 감지 플러그인
  .use(initReactI18next) // React와 i18next 통합
  .init({
    resources,
    fallbackLng: "ko", // 기본 언어
    interpolation: {
      escapeValue: false, // React 사용 시 HTML 이스케이프를 방지
    },
  });

export default i18n;
