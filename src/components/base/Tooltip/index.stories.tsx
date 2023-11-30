import type { Meta, StoryObj } from '@storybook/react';

import Button from '@/components/base/Button';

import Tooltip from './index';

const meta: Meta<typeof Tooltip> = {
  title: 'Base/Tooltip',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Tooltip,
  argTypes: {
    title: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => (
    <div style={{
      display: 'flex', width: '100%', minHeight: '400px', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <Tooltip {...args}>
        <Button color="primary">Tooltip on this Button</Button>
      </Tooltip>
    </div>
  ),
};

Default.args = {
  title: 'This tooltip will show information',
  open: true,
};
