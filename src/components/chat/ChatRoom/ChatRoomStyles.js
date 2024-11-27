import styled from '@emotion/styled';

export const RoomContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const RoomTitle = styled.h1`
  padding: 18px 24px;
  color: #333;
  font-size: 22px;
  font-style: normal;
  line-height: normal;
  letter-spacing: -1px;
  font-weight: 400;
`;

export const MessageListSection = styled.section`
  padding: 12px;
  flex: 1;
`;
export const RoomMemberSection = styled.section`
  padding: 12px;
  padding-left: 0;
  width: 300px;
`;
export const MessageMainContainer = styled.section`
  flex: 1;
  padding-bottom: 0px;
  min-height: 0;
  min-width: 0;
  display: flex;
`;

export const MessageInputSection = styled.section`
  min-height: 80px;
  padding: 12px;
  padding-top: 0;
`;
