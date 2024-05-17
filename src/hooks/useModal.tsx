import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/prodiver/ModalProvider';
import { Modals } from '@/types';
import { createUid, delay } from '@/utils';

interface OpenModalProps {
  id: string;
  component?: () => JSX.Element;
  onAfterOpen?: () => void;
}

interface CloseModalProps {
  id: string;
  onAfterClose?: () => void;
}

const useModal = () => {
  const { duration, setModals } = useContext(ModalContext);

  const openModal = useCallback(
    (props: OpenModalProps) => {
      const { id, component, onAfterOpen } = props;
      setModals((prevState: Modals) => {
        const newState = new Map(prevState);
        if (id && newState.has(id)) {
          return prevState;
        }
        const modalData = {
          id: id || createUid(),
          isOpen: true,
          createdAt: new Date().getTime(),
          component,
        };
        newState.set(modalData.id, modalData);
        onAfterOpen?.();
        return newState;
      });
    },
    [setModals]
  );

  const closeModal = useCallback(
    async (props: CloseModalProps) => {
      const { id, onAfterClose } = props;
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
      setModals((prevState: Modals) => {
        const newState = new Map(prevState);
        newState.delete(id);
        onAfterClose?.();
        return newState;
      });
    },
    [duration, setModals]
  );

  return { openModal, closeModal };
};

export default useModal;
