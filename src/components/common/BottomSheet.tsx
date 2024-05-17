import { css } from '@emotion/css';
import React, { ReactNode, useMemo } from 'react';

import useModal from '@/hooks/useModal';

interface Props {
  id: string;
  children?: ReactNode;
}

const BottomSheet = ({ id, children }: Props) => {
  const modal = useModal();

  const isOpen = useMemo(() => modal.isOpen[id], [id, modal.isOpen]);

  const close = () => {
    modal.closeModal({ id });
  };

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1000,
        }}
        onClick={close}
      ></div>
      <div
        className={isOpen ? slideUp : slideDown}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          padding: 24,
          borderRadius: '24px 24px 0px 0px',
          backgroundColor: 'white',
          boxSizing: 'border-box',
          zIndex: 1000,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;

const slideUp = css`
  @keyframes slide-up {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0%);
    }
  }
  animation: slide-up 0.2s ease-in-out forwards;
`;
const slideDown = css`
  @keyframes slide-down {
    from {
      transform: translateY(0%);
    }
    to {
      transform: translateY(100%);
    }
  }
  animation: slide-down 0.2s ease-in-out forwards;
`;
