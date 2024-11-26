import styled from '@emotion/styled';

const HeaderSection = styled.section`
  padding: 25px;
  font-size: 17px;

  & > span {
    font-size: 13px;
  }
`;

const Th = styled.th`
  text-align: left;
  height: 32px;
  line-height: 32px;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 13px;
  font-weight: bolder;
  width: 25%;
  &:not(:first-child) {
    padding: 0 16px;
  }
  &:first-child {
    padding-left: 24px;
  }
`;

const Td = styled.td`
  font-size: 14px;
  overflow: hidden;

  white-space: nowrap;

  text-overflow: ellipsis;

  &:not(:first-child) {
    padding: 8px 16px;
  }
  &:first-child {
    padding-left: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const RegisterChannel = () => {
  return (
    <div>
      <HeaderSection>
        가입 채널<span>(총 8개)</span>
      </HeaderSection>
      <table style={{ width: '100%', tableLayout: 'fixed' }}>
        <tr>
          <Th>채널</Th>
          <Th>회원수</Th>
          <Th>최근 날짜</Th>
          <Th>마스터</Th>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
        <tr>
          <Td>테스트 방 채널</Td>
          <Td>12</Td>
          <Td>2024-10-23</Td>
          <Td>훈레기</Td>
        </tr>
      </table>
    </div>
  );
};

export default RegisterChannel;
