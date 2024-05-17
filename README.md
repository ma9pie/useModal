# React useModal hooks
Simple custom hooks for react modal management.

[npm-url]: https://www.npmjs.com/package/@ma9pie/use-modal
[license-image]: https://img.shields.io/badge/license-MIT-red.svg
[npm-version-image]: https://img.shields.io/npm/v/@ma9pie/use-modal.svg
[npm-downloads-image]: https://img.shields.io/npm/dt/@ma9pie/use-modal.svg

[![license-image]][npm-url] [![npm-version-image]][npm-url] [![npm-downloads-image]][npm-url]

### 📦 Install
```bash
npm i @ma9pie/use-modal
```

### 👨‍💻 Usage
##### Wrap the root with a ModalProvider.
```javascript
// index.tsx
import { ModalProvider } from '@ma9pie/use-modal';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ModalProvider duration={200}>
      <App />
    </ModalProvider>
  </React.StrictMode>
);
```
duration is the animation-duration prop when the modal opens and closes.

##### Create Modal component.
```javascript
// Modal.tsx
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
```

##### 1. Open & Close modal example.
```javascript
// App.tsx
import { useModal } from '@ma9pie/use-modal';
import React from 'react';

import Modal from './components/Modal';

const MODAL_ID = 'test';

const App = () => {
  const { isOpen, openModal, closeModal } = useModal();

  const openTestModal = () => {
    openModal({
      id: MODAL_ID,
      component: () => <Modal close={closeTestModal}>TestModa</Modal>,
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
    <div>
      <button onClick={openTestModal}>openTestModal</button>
      <p>{String(isOpen[MODAL_ID])}</p>
    </div>
  );
};

export default App;
```

##### 2. Mutil modal example.
```javascript
// App.tsx
import { useModal } from '@ma9pie/use-modal';
import React from 'react';

import Modal from './components/Modal';

const FIRST_MODAL_ID = 'first-modal';
const SECOND_MODAL_ID = 'second-modal';

const App = () => {
  const { openModal, closeModal } = useModal();

  const openFirstModal = () => {
    openModal({
      id: FIRST_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: FIRST_MODAL_ID,
            });
          }}
        >
          <p>FirstModal</p>
          <button onClick={openSecondModal}>openSecondModal</button>
        </Modal>
      ),
    });
  };

  const openSecondModal = () => {
    openModal({
      id: SECOND_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: SECOND_MODAL_ID,
            });
          }}
        >
          <p>SecondModal</p>
        </Modal>
      ),
    });
  };

  return (
    <div>
      <button onClick={openFirstModal}>openFirstModal</button>
    </div>
  );
};

export default App;
```

##### 3. Change modal example.
```javascript
// App.tsx
import { useModal } from '@ma9pie/use-modal';
import React from 'react';

import Modal from './components/Modal';

const FIRST_MODAL_ID = 'first-modal';
const SECOND_MODAL_ID = 'second-modal';

const App = () => {
  const { openModal, closeModal, changeModal } = useModal();

  const openFirstModal = () => {
    openModal({
      id: FIRST_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: FIRST_MODAL_ID,
            });
          }}
        >
          <p>FirstModal</p>
          <button onClick={changeToSecondModal}>changeToSecondModal</button>
        </Modal>
      ),
    });
  };

  const changeToSecondModal = () => {
    changeModal({
      id: SECOND_MODAL_ID,
      closeId: FIRST_MODAL_ID,
      component: () => (
        <Modal
          close={() => {
            closeModal({
              id: SECOND_MODAL_ID,
            });
          }}
        >
          <p>SecondModal</p>
        </Modal>
      ),
    });
  };

  return (
    <div>
      <button onClick={openFirstModal}>openFirstModal</button>
    </div>
  );
};

export default App;
```

### Types
```javascript
export interface IsOpen {
  [key: string]: boolean;
}
export interface OpenModalProps {
  id: string;
  component?: () => JSX.Element;
  onAfterOpen?: () => void;
}
export interface CloseModalProps {
  id: string;
  onAfterClose?: () => void;
}
export interface changeModalProps extends OpenModalProps {
  closeId: string;
}
```

### 📖 StroyBook
```bash
npm run storybook
```

### 🤝 Contributing 
Thank you for your interest in the Lite UI project. Your contributions are always welcome.

### 📜 License
[MIT](https://choosealicense.com/licenses/mit/)