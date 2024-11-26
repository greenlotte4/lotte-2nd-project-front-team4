import styled from '@emotion/styled';

const MessageContainer = styled.div`
  width: 100%;
  padding: 8px 20px;
  display: flex;
  gap: 8px;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const ProfileImage = styled.img`
  /* 더 직관적인 이름 */
  width: 36px;
  height: 36px;
  object-fit: cover;
`;

const MessageContentContainer = styled.div``;

const MessageHeader = styled.div`
  /* 상단 패널 대신 헤더로 변경 */
  display: flex;
  gap: 4px;
  align-items: center;
  line-height: 22px;
`;

const MessageText = styled.div`
  /* 메시지 텍스트를 명확히 */
  line-height: 22px;
  font-size: 15px;
  color: #333;
`;

const Writer = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const CreatedAt = styled.span`
  font-size: 12px;
  color: rgb(97, 96, 97);
`;

const MessageListItem = () => {
  return (
    <MessageContainer>
      <ProfileImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/300px-Cat_November_2010-1a.jpg" />
      <MessageContentContainer>
        <MessageHeader>
          <Writer>이상훈96</Writer>
          <CreatedAt>오전 9:47</CreatedAt>
        </MessageHeader>
        <MessageText>메시지 내용</MessageText>
      </MessageContentContainer>
    </MessageContainer>
  );
};

export default MessageListItem;
