import type { Meta, StoryObj } from '@storybook/react';

import Switch from './index';

const meta: Meta<typeof Switch> = {
  title: 'Base/Switch',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Switch {...args} />,
};
