import { useCallback, useContext } from 'react';

import { ModalContext } from '@/components/prodiver/ModalProvider';
import { Modals } from '@/types';
import { createUid, delay } from '@/utils';

interface Props {
  id: string;
  component?: () => JSX.Element;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}

const useModal = ({
  id,
  component,
  onAfterOpen = () => {},
  onAfterClose = () => {},
}: Props) => {
  const { duration, setModals } = useContext(ModalContext);

  const openModal = useCallback(() => {
    setModals((prevState: Modals) => {
      const newState = new Map(prevState);
      if (id && newState.has(id)) {
        return prevState;
      }
      const key = id || createUid();
      const isOpen = true;
      const createdAt = new Date().getTime();
      const modalData = {
        id: key,
        isOpen,
        createdAt,
        component,
      };
      newState.set(key, modalData);
      onAfterOpen();
      return newState;
    });
  }, [id, component, onAfterOpen, setModals]);

  const closeModal = useCallback(async () => {
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
      onAfterClose();
      return newState;
    });
  }, [id, duration, onAfterClose, setModals]);

  return {
    openModal,
    closeModal,
  };
};

export default useModal;
