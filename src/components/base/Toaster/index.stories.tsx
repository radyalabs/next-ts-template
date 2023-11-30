import type { Meta, StoryObj } from '@storybook/react';

import Toaster from './index';

const meta: Meta<typeof Toaster> = {
  title: 'Base/Toaster',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Toaster,
  argTypes: {
    message: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toaster>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => (
    <div style={{
      display: 'flex',
      width: '100%',
      minHeight: '100px',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Toaster {...args} />
    </div>
  ),
};

Default.args = {
  message: 'This toaster will show information',
};
