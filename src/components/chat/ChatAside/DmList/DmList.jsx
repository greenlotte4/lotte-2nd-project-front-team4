import { Container, DmListItem, DmListTitle } from './DmListStyles';

const DmList = () => {
  return (
    <Container>
      <DmListTitle>DM</DmListTitle>
      <ul>
        <DmListItem>이상훈, 박경림</DmListItem>
        <DmListItem>김소히, 조수빈</DmListItem>
        <DmListItem>신승우, 박준우</DmListItem>
      </ul>
    </Container>
  );
};

export default DmList;
