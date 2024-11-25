import styled from '@emotion/styled';

export const Container = styled.div`
  font-size: 14px;
`;

export const DmListTitle = styled.h4`
  font-weight: bold;
  padding-top: 4px;
  padding-bottom: 7px;
`;

export const DmListItem = styled.li`
  padding: 2px 0;
  padding-left: 16px;
  cursor: pointer;
  color: #3b3b3b;
  font-size: 14px;
  font-style: normal;
  line-height: 21px; /* 150% */
  letter-spacing: -0.5px;
  transition: all 0.1s;

  &:hover {
    color: #000000;
    font-weight: bold;
  }
`;
