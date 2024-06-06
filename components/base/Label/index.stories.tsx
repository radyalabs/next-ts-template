import type { Meta, StoryObj } from '@storybook/react';

import Label from './index';

const meta: Meta<typeof Label> = {
  title: 'Base/Label',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Label,
  argTypes: {
    value: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Label {...args} />,
};

Default.args = {
  value: 'Form Label',
};
