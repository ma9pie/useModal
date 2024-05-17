import React from 'react';

import Modal from '@/components/modal/Modal';
import useModal from '@/hooks/useModal';

const MODAL_ID = 'test';

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const openTestModal = () => {
    openModal({
      id: MODAL_ID,
      component: () => <Modal close={closeTestModal}>TestModa</Modal>,
      onAfterOpen: () => {
        console.log('opend');
      },
    });
  };

  const closeTestModal = () => {
    closeModal({
      id: MODAL_ID,
      onAfterClose: () => {
        console.log('closed');
      },
    });
  };

  return (
    <div>
      <button onClick={openTestModal}>openTestModal</button>
      <p>{String(isOpen[MODAL_ID])}</p>
    </div>
  );
};

export default App;
