import type { Meta } from '@storybook/react';
import React from 'react';

import OpenCloseModal from '@/components/examples/OpenCloseModal';

const meta = {
  title: 'Components/OpenCloseModal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const OpenCloseModal_ = {
  render: () => <OpenCloseModal></OpenCloseModal>,
};
