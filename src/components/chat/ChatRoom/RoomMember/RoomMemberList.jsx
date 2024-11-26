import styled from '@emotion/styled';
import { AiOutlineUserAdd } from 'react-icons/ai';
import RoomMemberListItem from './RoomMemberListItem/RoomMemberListItem';
import { CustomScroll } from 'react-custom-scroll';
const RoomMemberContainer = styled.div`
  height: 100%;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

const MemberAddButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  padding: 12px 12px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 28, 29, 0.04);
  }
`;

const MemberIconSection = styled.section`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  background-color: #1d9bd11a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`;

const MemberAddButtonText = styled.span`
  font-size: 15px;
  font-weight: bold;
`;

const MemberSection = styled.div`
  flex: 1;
  min-height: 0;
  min-width: 0;
`;

const RoomMemberList = () => {
  return (
    <RoomMemberContainer>
      <MemberAddButton>
        <MemberIconSection>
          <AiOutlineUserAdd
            style={{ width: '70%', height: '70%', color: '#1264a3' }}
          />
        </MemberIconSection>
        <MemberAddButtonText>사용자 추가</MemberAddButtonText>
      </MemberAddButton>
      <MemberSection>
        <CustomScroll heightRelativeToParent="100%">
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={false}
            isOnline={false}
            name="이상훈"
            nickname="김소히"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
          <RoomMemberListItem
            img="https://ca.slack-edge.com/T07A6NYL1EF-U07ATR6TPQR-b2493909da32-4"
            isMe={true}
            isOnline={true}
            name="이상훈"
            nickname="이상훈96"
          />
        </CustomScroll>
      </MemberSection>
    </RoomMemberContainer>
  );
};

export default RoomMemberList;
