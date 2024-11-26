import { Link } from 'react-router-dom';
import { DmListSection } from './ChatAsideStyles';
import {
  ChatListSection,
  CreateChatButton,
  HeaderSection,
  HeaderTitle,
} from './ChatAsideStyles';
import ChannelList from './ChannelList/ChannelList';
import DmList from './DmList/DmList';

const ChatAside = () => {
  return (
    <div>
      <HeaderSection>
        <HeaderTitle>
          <Link to="/chat">채팅</Link>
        </HeaderTitle>
        <CreateChatButton>채팅방 만들기</CreateChatButton>
        <CreateChatButton>DM 만들기</CreateChatButton>
      </HeaderSection>
      <ChatListSection>
        <ChannelList />
      </ChatListSection>
      <DmListSection>
        <DmList />
      </DmListSection>
    </div>
  );
};

export default ChatAside;
