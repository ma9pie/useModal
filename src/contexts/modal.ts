import { createContext, SetStateAction } from 'react';

import { IsOpen, Modals } from '@/types';

interface ModalContextProps {
  duration: number;
  isOpen: IsOpen;
  modals: Modals;
  setIsOpen: (value: SetStateAction<IsOpen>) => void;
  setModals: (value: SetStateAction<Modals>) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  duration: 0,
  isOpen: {},
  modals: new Map(),
  setIsOpen: (value: SetStateAction<IsOpen>) => {},
  setModals: (value: SetStateAction<Modals>) => {},
});
