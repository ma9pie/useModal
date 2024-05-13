import styled from '@emotion/styled';
import React from 'react';

interface Props {
  close: () => {};
}

const TestModal = ({ close }: Props) => {
  return (
    <Wrapper>
      <Overlay onClick={close}></Overlay>
      <Container>TestModal</Container>
    </Wrapper>
  );
};

export default TestModal;

const Wrapper = styled.div``;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;
const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  gap: 16px;
  width: 240px;
  padding: 16px;
  border-radius: 8px;
  background-color: white;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 1000;
`;
