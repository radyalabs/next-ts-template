import type { Meta, StoryObj } from '@storybook/react';

import Textfield from './index';
import type { TextFieldProps } from './index.types';

const meta: Meta<typeof Textfield> = {
  title: 'Base/Textfield',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Textfield,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textfield>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args: TextFieldProps) => <Textfield {...args} />,
};

Default.args = {
  value: '',
  placeholder: 'Enter text',
  type: 'text',
};
