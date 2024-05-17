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

duration is the animation-duration prop when the modal opens and closes.
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

```javascript
// Modal.tsx
import React from 'react';

interface Props {
  close: () => void;
}

const Modal = ({ close }: Props) => {
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
        TestModal
      </div>
    </div>
  );
};

export default Modal;
```

```javascript
// App.tsx
import { useModal } from '@ma9pie/use-modal';
import React from 'react';

import Modal from './components/Modal';

const MODAL_ID = 'test';

const App = () => {
  const { openModal, closeModal } = useModal();

  const openTestModal = () => {
    openModal({
      id: MODAL_ID,
      component: () => <TestModal close={closeTestModal}></TestModal>,
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
    <Container>
      <Button onClick={openTestModal}>openTestModal</Button>
    </Container>
  );
};

export default App;
```

### 🤝 Contributing 
Thank you for your interest in the Lite UI project. Your contributions are always welcome.

### 📜 License
[MIT](https://choosealicense.com/licenses/mit/)