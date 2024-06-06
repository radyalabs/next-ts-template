import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from './index';

const meta: Meta<typeof Checkbox> = {
  title: 'Base/Checkbox',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Checkbox,
  argTypes: {
    box: {
      control: 'boolean',
    },
    checked: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Checkbox {...args} />,
};

Default.args = {
  label: 'Checkbox',
  checked: false,
};
