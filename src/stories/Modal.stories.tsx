import styled from '@emotion/styled';
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
  const { openModal, closeModal } = useModal();

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
    <Container>
      <Button onClick={openTestModal}>openTestModal</Button>
    </Container>
  );
};

export const Modal_ = {
  render: () => <App></App>,
};

const Container = styled.div`
  display: flex;
  flex: wrap;
  gap: 16px;
`;
const Button = styled.button`
  border: 1px solid black;
  padding: 8px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`;
