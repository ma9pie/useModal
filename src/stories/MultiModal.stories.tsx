import type { Meta } from '@storybook/react';
import React from 'react';

import MultiModal from '@/components/examples/MultiModal';

const meta = {
  title: 'Components/MultiModal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const MultiModal_ = {
  render: () => <MultiModal></MultiModal>,
};
