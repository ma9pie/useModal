import React from 'react';

import Modal from '@/components/modal/Modal';
import useModal from '@/hooks/useModal';

const FIRST_MODAL_ID = 'first-modal';
const SECOND_MODAL_ID = 'second-modal';

const App = () => {
  const { openModal, closeModal, changeModal } = useModal();

  const openFirstModal = () => {
    openModal({
      id: FIRST_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: FIRST_MODAL_ID,
            });
          }}
        >
          <p>FirstModal</p>
          <button onClick={changeToSecondModal}>changeToSecondModal</button>
        </Modal>
      ),
    });
  };

  const changeToSecondModal = () => {
    changeModal({
      id: SECOND_MODAL_ID,
      closeId: FIRST_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: SECOND_MODAL_ID,
            });
          }}
        >
          <p>SecondModal</p>
        </Modal>
      ),
    });
  };

  return (
    <div>
      <button onClick={openFirstModal}>openFirstModal</button>
    </div>
  );
};

export default App;
