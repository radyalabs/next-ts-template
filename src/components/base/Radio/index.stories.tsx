import type { Meta, StoryObj } from '@storybook/react';

import Radio from './index';

const meta: Meta<typeof Radio> = {
  title: 'Base/Radio',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Radio,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Radio {...args} />,
};

Default.args = {
  options: [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    },
  ],
  checkedValue: '1',
};
