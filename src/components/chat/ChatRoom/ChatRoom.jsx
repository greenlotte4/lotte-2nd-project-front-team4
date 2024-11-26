import { CustomScroll } from 'react-custom-scroll';
import {
  MessageListSection,
  MessageInputSection,
  RoomContainer,
  RoomTitle,
} from './ChatRoomStyles';
import MessageInput from './MessageInput/MessageInput';
import MessageList from './MessageList/MessageList';

const ChatRoom = () => {
  return (
    <RoomContainer>
      <RoomTitle>채팅방 A</RoomTitle>
      <MessageListSection>
        <MessageList />
      </MessageListSection>
      <MessageInputSection>
        <MessageInput />
      </MessageInputSection>
    </RoomContainer>
  );
};

export default ChatRoom;
