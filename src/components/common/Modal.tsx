import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  close: () => void;
}

const Modal = ({ children, close }: Props) => {
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
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          width: 240,
          padding: 16,
          borderRadius: 8,
          backgroundColor: 'white',
          transform: 'translate(-50%, -50%)',
          overflow: 'hidden',
          zIndex: 1000,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
