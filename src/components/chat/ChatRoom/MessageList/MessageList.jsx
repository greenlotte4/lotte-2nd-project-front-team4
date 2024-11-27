import styled from '@emotion/styled';
import { CustomScroll } from 'react-custom-scroll';
import MessageListItem from './MessageListItem/MessageListItem';
const Container = styled.div`
  height: 100%;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
`;

const MessageList = () => {
  return (
    <Container>
      <CustomScroll heightRelativeToParent="100%">
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
        <MessageListItem />
      </CustomScroll>
    </Container>
  );
};

export default MessageList;
