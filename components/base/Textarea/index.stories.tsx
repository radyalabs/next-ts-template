import type { Meta, StoryObj } from '@storybook/react';

import Textarea from './index';

const meta: Meta<typeof Textarea> = {
  title: 'Base/Textarea',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Textarea,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Textarea {...args} />,
};

Default.args = {
  value: '',
  placeholder: 'Enter text',
};
