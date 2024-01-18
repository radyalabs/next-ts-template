import type { Meta, StoryObj } from '@storybook/react';

import Typography from './index';

const meta: Meta<typeof Typography> = {
  title: 'Base/Typography',
  tags: ['autodocs'],
  component: Typography,
  argTypes: {
    children: {
      control: 'text',
    },
    as: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => (<Typography {...args} />),
};

Primary.args = {
  children: 'This typography is for rendering predetermined style text',
  variant: 'body',
  size: 'large',
  type: 'primary',
};
export const Secondary: Story = {
  render: (args) => (<Typography {...args} />),
};

Secondary.args = {
  children: 'This typography is for rendering predetermined style text',
  variant: 'body',
  size: 'large',
  type: 'secondary',
};
