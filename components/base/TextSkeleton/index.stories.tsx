import type { Meta, StoryObj } from '@storybook/react';

import TextSkeleton from './index';

const meta: Meta<typeof TextSkeleton> = {
  title: 'Base/TextSkeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: TextSkeleton,
};

export default meta;
type Story = StoryObj<typeof TextSkeleton>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <TextSkeleton {...args} />,
};

Default.args = {
  width: 'lg',
};
