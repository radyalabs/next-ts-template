import type { Meta, StoryObj } from '@storybook/react';

import Ticker from './index';

const meta: Meta<typeof Ticker> = {
  title: 'Base/Ticker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Ticker,
  argTypes: {
    text: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Ticker>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Ticker {...args} />,
};

Default.args = {
  type: 'info',
  text: 'This ticker is for showing information',
};
