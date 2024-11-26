import styled from '@emotion/styled';

const Container = styled.div`
  padding: 12px 12px;
  display: flex;
  align-items: center;
  width: 100%;

  &:hover {
    background-color: rgba(29, 28, 29, 0.04);
  }
`;

const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 12px;
`;

const NicknameSpan = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: bold;
  line-height: 22px;
`;

const MemberStatusContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FulledCircle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: rgb(32, 162, 113);
`;

const EmptyCircle = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1px solid rgb(0, 0, 0);
`;
const NameSpan = styled.span`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  line-height: 22px;
`;

const MemberInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  overflow: hidden; /* 부모도 넘침을 숨김 */
`;
const RoomMemberListItem = ({ nickname, isMe, isOnline, name, img }) => {
  return (
    <Container>
      <ProfileImage src={img} />
      <MemberInfoContainer>
        <NicknameSpan>
          {nickname} <span>{isMe ? '(나)' : ''}</span>
        </NicknameSpan>
        <MemberStatusContainer>
          {isOnline ? <FulledCircle /> : <EmptyCircle />}
        </MemberStatusContainer>
        <NameSpan>{name}</NameSpan>
      </MemberInfoContainer>
    </Container>
  );
};

export default RoomMemberListItem;
