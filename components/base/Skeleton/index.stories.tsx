import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button';

import Skeleton from './index';

const meta: Meta<typeof Skeleton> = {
  title: 'Base/Skeleton',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Skeleton,
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => (
    <Skeleton {...args}>
      <Button>Loading Button</Button>
    </Skeleton>
  ),
};
