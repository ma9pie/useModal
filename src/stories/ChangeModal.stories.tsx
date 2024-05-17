import type { Meta } from '@storybook/react';
import React from 'react';

import ChangeModal from '@/components/examples/ChangeModal';

const meta = {
  title: 'Components/ChangeModal',
  parameters: {},
  argTypes: {},
} satisfies Meta;

export default meta;

export const ChangeModal_ = {
  render: () => <ChangeModal></ChangeModal>,
};
