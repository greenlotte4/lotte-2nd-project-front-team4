import styled from '@emotion/styled';

export const HeaderSection = styled.section`
  padding: 24px 27px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HeaderTitle = styled.h2`
  color: #3b3b3b;
  font-family: 'Noto Sans KR';
  font-size: 22px;
  font-style: normal;
  font-weight: bold;
  line-height: 24px; /* 109.091% */
  letter-spacing: -1px;
`;

export const CreateChatButton = styled.button`
  height: 46px;
  padding: 1px 49.92px 1px 49.91px;
  border-radius: 4px;
  border: 1px solid #888;
  background: #fff;
  color: #333;
  text-align: center;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  font-style: normal;
  line-height: 42px; /* 280% */
  letter-spacing: -1px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: #f1f1f1;
  }

  &:active {
    background: #dbdbdb;
  }
`;

export const ChatListSection = styled.section`
  padding: 4px 27px;
`;

export const DmListSection = styled.section`
  padding: 4px 27px;
`;
