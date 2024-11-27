import ChatAside from '@/components/chat/ChatAside/ChatAside';
import { Aside, Container, Main } from './ChatStyles';
import { Outlet } from 'react-router-dom';
import RoomCreateModal from '@/components/modal/RoomCreateModal/RoomCreateModal';
import { useOpenModal } from '@/utils/store';
import { useEffect } from 'react';

const Chat = () => {
  const isOpenRoomCreateModal = useOpenModal(
    (state) => state.isOpenRoomCreateModal
  );
  const CloseRoomCreateModal = useOpenModal(
    (state) => state.CloseRoomCreateModal
  );

  return (
    <Container>
      <Aside>
        <ChatAside />
      </Aside>
      <Main>
        {/* <ChatMain /> */}
        <Outlet />
      </Main>
      <RoomCreateModal
        isOpen={isOpenRoomCreateModal}
        closeModal={CloseRoomCreateModal}
      />
    </Container>
  );
};

export default Chat;
