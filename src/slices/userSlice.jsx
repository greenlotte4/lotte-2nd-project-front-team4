import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const loadStateFromCookie = () => {
  const authCookie = Cookies.get("auth");
  if (!authCookie) {
    // 쿠키가 없으면 기본값 반환
    return { username: null, role: null, accessToken: null };
  }

  try {
    // JSON 파싱 시도
    const auth = JSON.parse(authCookie);
    return {
      username: auth?.username || null,
      role: auth?.role || null,
      accessToken: auth?.accessToken || null,
    };
  } catch (error) {
    console.error("Failed to parse auth cookie:", error);
    // 유효하지 않은 JSON일 경우 기본값 반환
    return { username: null, role: null, accessToken: null };
  }
};

const initState = {
  username: null,
  role: null,
  accessToken: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: loadStateFromCookie() || initState, // 쿠키 값으로 리덕스 상태 초기화
  reducers: {
    login: (state, action) => {
      const data = action.payload;
      console.log("userSlice login data : " + JSON.stringify(data));

      // 리덕스 상태 초기화
      state.username = data.username;
      state.role = data.role;
      state.accessToken = data.accessToken;

      // 쿠키 저장(영구저장을 위해 쿠키 사용)
      Cookies.set("auth", JSON.stringify(data));
    },
    logout: (state) => {
      console.log("로그아웃...");

      // 상태 초기화
      state.username = null;
      state.role = null;
      state.accessToken = null;

      // 쿠키 삭제
      Cookies.remove("auth");
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
