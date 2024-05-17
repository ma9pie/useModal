import type { Meta } from '@storybook/react';
import React from 'react';

import TestModal from '@/components/modal/TestModal';
import useModal from '@/hooks/useModal';

const meta = {
  title: 'Components/Modal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

const MODAL_ID = 'test';

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const openTestModal = () => {
    openModal({
      id: MODAL_ID,
      component: () => <TestModal close={closeTestModal}></TestModal>,
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

export const Modal_ = {
  render: () => <App></App>,
};
