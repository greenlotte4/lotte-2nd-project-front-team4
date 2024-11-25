import { DmListSection } from './ChatAsideStyles';
import {
  ChatListSection,
  CreateChatButton,
  HeaderSection,
  HeaderTitle,
} from './ChatAsideStyles';
import ChannelList from './ChatList/ChannelList';
import DmList from './DmList/DmList';

const ChatAside = () => {
  return (
    <div>
      <HeaderSection>
        <HeaderTitle>채팅</HeaderTitle>
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
