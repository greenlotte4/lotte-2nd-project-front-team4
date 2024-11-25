import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Aside = styled.aside`
  top: 0;
  left: 0;
  min-width: 60px;
  height: 100%;
  background-color: #f8f9fa;
`;

export const Main = styled.main`
  /* margin-left: 60px; */
  height: 100%; /* 콘텐츠가 적을 때도 최소 높이 유지 */
  background-color: #ffffff;
  box-sizing: border-box;
  flex: 1;
`;
