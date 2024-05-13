import '@/styles/index.css';

import styled from '@emotion/styled';
import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import { ModalProps, Modals } from '@/types';

type Props = {
  openAnimationName?: string;
  closeAnimationName?: string;
  deleteDelay?: number;
  children: ReactNode;
};

export const ModalContext = createContext({
  deleteDelay: 0,
  modals: new Map(),
  setModals: (value: SetStateAction<Modals>) => {},
});

const ModalProvider = ({
  openAnimationName = 'fade-in',
  closeAnimationName = 'fade-out',
  deleteDelay = 200,
  children,
}: Props) => {
  const [modals, setModals] = useState<Modals>(new Map());

  const modalList: ModalProps[] = useMemo(
    () => Array.from(modals.values()),
    [modals]
  );

  return (
    <ModalContext.Provider value={{ deleteDelay, modals, setModals }}>
      <Container id="modal-provider">
        {modalList.map(({ id, isOpen, component }) => (
          <ModalWrapper
            key={id}
            isOpen={isOpen}
            openAnimationName={openAnimationName}
            closeAnimationName={closeAnimationName}
            duration={deleteDelay}
          >
            {component && component()}
          </ModalWrapper>
        ))}
      </Container>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

const Container = styled.div``;
const ModalWrapper = styled.div<{
  openAnimationName: string;
  closeAnimationName: string;
  isOpen: boolean;
  duration: number;
}>`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  animation-name: ${({ isOpen, openAnimationName, closeAnimationName }) =>
    isOpen ? openAnimationName : closeAnimationName};
  animation-timing-function: ease-in-out;
  animation-duration: ${({ duration }) => `${duration}ms`};
  animation-fill-mode: forwards;
`;
