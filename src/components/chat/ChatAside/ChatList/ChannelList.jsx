import { Container, ChatListTitle, ChatListItem } from './ChatListStyles';

const ChannelList = () => {
  return (
    <Container>
      <ChatListTitle>가입커뮤니티</ChatListTitle>
      <ul>
        <ChatListItem>커뮤니티 테스트</ChatListItem>
        <ChatListItem>다탈출</ChatListItem>
        <ChatListItem>동호회</ChatListItem>
        <ChatListItem>콜백싯 제출</ChatListItem>
      </ul>
    </Container>
  );
};

export default ChannelList;
