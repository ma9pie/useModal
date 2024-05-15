import type { Preview } from '@storybook/react';
import ModalProvider from '../src/components/prodiver/ModalProvider';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ModalProvider duration={200}>
        <Story></Story>
      </ModalProvider>
    ),
  ],
};

export default preview;
