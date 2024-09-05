import type { Meta, StoryObj } from '@storybook/react';

import Chip from './index';

const meta: Meta<typeof Chip> = {
  title: 'Base/Chip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Chip,
};

export default meta;
type Story = StoryObj<typeof Chip>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Chip {...args} />,
};

Default.args = {
  label: 'Chip',
};
