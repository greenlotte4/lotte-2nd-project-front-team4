import BaseModal from '@/components/common/BaseModal';
import styled from '@emotion/styled';
import { IoMdClose } from 'react-icons/io';
const ModalContainer = styled.div``;
const HeaderSection = styled.header`
  display: flex;
  padding: 20px 28px;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  font-size: 22px;
  font-weight: 900;
  line-height: 30px;
`;

const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  cursor: pointer;
`;

const MainSection = styled.main`
  padding: 16px 24px;
`;

const MemberAddInput = styled.input`
  width: 100%;
  height: 48px;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  outline-color: transparent;
  transition: outline-color 0.1s;

  &:focus {
    border-color: #2e7fdb;
    outline: 4px solid #c0e6ff;
  }
`;

const FooterSection = styled.footer`
  padding: 8px 28px 24px 28px;
  text-align: end;
`;

const CompleteButton = styled.button`
  width: 80px;
  height: 36px;
  border-radius: 8px;
  background-color: #0a5500;
  color: white;
  font-size: 15px;
  font-weight: bold;
  line-height: 26px;
  border: none;
  cursor: pointer;
`;

const RoomMemberAddModal = ({ isOpen, afterOpenModal, closeModal }) => {
  return (
    <BaseModal
      isOpen={isOpen}
      afterOpenModal={afterOpenModal}
      closeModal={closeModal}
      customStyles={{
        content: { maxWidth: '520px', width: '80%' },
      }}
    >
      <ModalContainer>
        <HeaderSection>
          <HeaderTitle>테스트에 멤버 추가</HeaderTitle>
          <CloseButton onClick={closeModal}>
            <IoMdClose style={{ width: '20px', height: '20px' }} />
          </CloseButton>
        </HeaderSection>
        <MainSection>
          <MemberAddInput type="text" placeholder="이름 또는 이메일 입력" />
        </MainSection>
        <FooterSection>
          <CompleteButton>추가</CompleteButton>
        </FooterSection>
      </ModalContainer>
    </BaseModal>
  );
};

export default RoomMemberAddModal;
