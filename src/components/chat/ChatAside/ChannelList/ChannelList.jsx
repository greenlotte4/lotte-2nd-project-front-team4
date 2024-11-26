import { Link } from 'react-router-dom';
import { Container, ChatListTitle, ChatListItem } from './ChatListStyles';

const ChannelList = () => {
  return (
    <Container>
      <ChatListTitle>가입커뮤니티</ChatListTitle>
      <ul>
        <ChatListItem>
          <Link to={`/chat/room/12`}>커뮤니티 테스트</Link>
        </ChatListItem>
        <ChatListItem>
          <Link to={`/chat/room/12`}>다탈출</Link>
        </ChatListItem>
        <ChatListItem>
          <Link to={`/chat/room/12`}>동호회</Link>
        </ChatListItem>
        <ChatListItem>
          <Link to={`/chat/room/12`}>콜백싯 제출</Link>
        </ChatListItem>
      </ul>
    </Container>
  );
};

export default ChannelList;
