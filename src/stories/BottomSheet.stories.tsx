import type { Meta } from '@storybook/react';
import React from 'react';

import BottomSheet from '@/components/examples/BottomSheet';

const meta = {
  title: 'Components/BottomSheet',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const BottomSheet_ = {
  render: () => <BottomSheet></BottomSheet>,
};
