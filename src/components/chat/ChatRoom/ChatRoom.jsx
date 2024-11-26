import {
  MessageMainContainer,
  MessageInputSection,
  RoomContainer,
  RoomTitle,
  MessageListSection,
  RoomMemberSection,
} from './ChatRoomStyles';
import MessageInput from './MessageInput/MessageInput';
import MessageList from './MessageList/MessageList';
import RoomMemberList from './RoomMember/RoomMemberList';

const ChatRoom = () => {
  return (
    <RoomContainer>
      <RoomTitle>채팅방 A</RoomTitle>
      <MessageMainContainer>
        <MessageListSection>
          <MessageList />
        </MessageListSection>
        <RoomMemberSection>
          <RoomMemberList />
        </RoomMemberSection>
      </MessageMainContainer>
      <MessageInputSection>
        <MessageInput />
      </MessageInputSection>
    </RoomContainer>
  );
};

export default ChatRoom;
