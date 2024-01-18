import type { Meta, StoryObj } from '@storybook/react';

import Tabs from './index';

const meta: Meta<typeof Tabs> = {
  title: 'Base/Tabs',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Tabs,
  argTypes: {
    labels: {
      control: 'object',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.TabPanel index={0} value={Number(args.value)}>
        Panel 1
      </Tabs.TabPanel>
      <Tabs.TabPanel index={1} value={Number(args.value)}>
        Panel 2
      </Tabs.TabPanel>
    </Tabs>
  ),
};

Default.args = {
  labels: ['Tabs 1', 'Tabs 2'],
  value: 0,
};
