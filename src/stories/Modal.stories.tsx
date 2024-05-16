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

const App = () => {
  const { isOpen, openModal, closeModal } = useModal({
    id: 'test',
    component: () => <TestModal close={closeModal}></TestModal>,
    onAfterOpen: () => {
      console.log('opend');
    },
    onAfterClose: () => {
      console.log('closed');
    },
  });

  return (
    <Container>
      <Button onClick={openModal}>openTestModal</Button>
      <p>{isOpen ? 'opend' : 'closed'}</p>
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
