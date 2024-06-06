import type { Meta, StoryObj } from '@storybook/react';

import Autocomplete from './index';

const meta: Meta<typeof Autocomplete> = {
  title: 'Base/Autocomplete',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Autocomplete,
  argTypes: {
    label: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Autocomplete>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Autocomplete {...args} />,
};

Default.args = {
  options: [
    {
      label: 'Option 1',
      value: 1,
    },
    {
      label: 'Option 2',
      value: 2,
    },
  ],
  value: '',
  placeholder: 'Choose Value',
};
