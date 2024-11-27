import { useCallback, useState } from 'react';
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
import RoomMemberAddModal from '@/components/modal/RoomMemberAddModal/RoomMemberAddModal';
import { useOpenModal } from '@/utils/store';

const ChatRoom = () => {
  const isOpenMemberAddModal = useOpenModal(
    (state) => state.isOpenMemberAddModal
  );
  const CloseMemberAddModal = useOpenModal(
    (state) => state.CloseMemberAddModal
  );

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
      <RoomMemberAddModal
        isOpen={isOpenMemberAddModal}
        closeModal={CloseMemberAddModal}
      />
    </RoomContainer>
  );
};

export default ChatRoom;
