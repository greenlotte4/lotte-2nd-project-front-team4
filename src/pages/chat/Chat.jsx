import ChatAside from '@/components/chat/ChatAside/ChatAside';
import { Aside, Container, Main } from './ChatStyles';
import { Outlet } from 'react-router-dom';

const Chat = () => {
  return (
    <Container>
      <Aside>
        <ChatAside />
      </Aside>
      <Main>
        {/* <ChatMain /> */}
        <Outlet />
      </Main>
    </Container>
  );
};

export default Chat;
