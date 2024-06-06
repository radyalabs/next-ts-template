import type { Meta, StoryObj } from '@storybook/react';

import Select from './index';

const meta: Meta<typeof Select> = {
  title: 'Base/Select',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Select,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Select {...args} />,
};

Default.args = {
  block: true,
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ],
  value: '',
  placeholder: 'Choose Value',
};
