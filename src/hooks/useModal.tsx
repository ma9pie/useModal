import { useCallback, useContext } from 'react';

import { ModalContext } from '@/contexts';
import { CloseModalProps, IsOpen, Modals, OpenModalProps } from '@/types';
import { delay } from '@/utils';

const useModal = () => {
  const { duration, isOpen, setIsOpen, setModals } = useContext(ModalContext);

  const openModal = useCallback(
    (props: OpenModalProps) => {
      const { id, component, onAfterOpen } = props;
      setIsOpen((prevState: IsOpen) => {
        const newState = { ...prevState, [id]: true };
        return newState;
      });
      setModals((prevState: Modals) => {
        const newState = new Map(prevState);
        if (newState.has(id)) {
          return prevState;
        }
        const modalData = {
          id,
          isOpen: true,
          createdAt: new Date().getTime(),
          component,
        };
        newState.set(id, modalData);
        onAfterOpen?.();
        return newState;
      });
    },
    [setIsOpen, setModals]
  );

  const closeModal = useCallback(
    async (props: CloseModalProps) => {
      const { id, onAfterClose } = props;
      setIsOpen((prevState: IsOpen) => {
        const newState = { ...prevState, [id]: false };
        return newState;
      });
      setModals((prevState: Modals) => {
        const newState = new Map(prevState);
        const modalData = newState.get(id);
        if (!modalData) {
          return prevState;
        }
        modalData.isOpen = false;
        newState.set(id, modalData);
        return newState;
      });
      await delay(duration);
      setIsOpen((prevState: IsOpen) => {
        const newState = { ...prevState };
        delete newState[id];
        return newState;
      });
      setModals((prevState: Modals) => {
        const newState = new Map(prevState);
        newState.delete(id);
        onAfterClose?.();
        return newState;
      });
    },
    [duration, setIsOpen, setModals]
  );

  return { isOpen, openModal, closeModal };
};

export default useModal;
