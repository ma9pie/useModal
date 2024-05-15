# React useModal hooks
Simple custom hooks for react modal management system.

[npm-url]: https://www.npmjs.com/package/@ma9pie/use-modal
[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[npm-version-image]: https://img.shields.io/npm/v/@ma9pie/use-modal.svg
[npm-downloads-image]: https://img.shields.io/npm/dt/@ma9pie/use-modal.svg

[![][license-image]][npm-url] [![][npm-version-image]][npm-url] [![][npm-downloads-image]][npm-url]

### 📦 Install
```bash
npm i @ma9pie/use-modal
```

### 🕹 Use
duration is the animation-duration prop when the modal opens and closes.
```javascript
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
