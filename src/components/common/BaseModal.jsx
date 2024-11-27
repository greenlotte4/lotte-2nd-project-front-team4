import { padding } from '@mui/system';
import Modal from 'react-modal';

const defaultCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
};

const BaseModal = ({
  isOpen,
  afterOpenModal,
  closeModal,
  children,
  customStyles,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      ariaHideApp={false}
      style={{
        ...defaultCustomStyles,
        content: { ...defaultCustomStyles.content, ...customStyles.content },
      }}
    >
      {children}
    </Modal>
  );
};

export default BaseModal;
