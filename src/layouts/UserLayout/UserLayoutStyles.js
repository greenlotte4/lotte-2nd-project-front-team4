import styled from '@emotion/styled';

export const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100dvh;
  background-color: #f8f9fa;
`;

export const Main = styled.main`
  margin-left: 60px;
  min-height: 100dvh; /* 콘텐츠가 적을 때도 최소 높이 유지 */
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 약간의 스타일 추가 */
  box-sizing: border-box;
`;
