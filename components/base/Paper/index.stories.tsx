import type { Meta, StoryObj } from '@storybook/react';

import Paper from './index';

const meta: Meta<typeof Paper> = {
  title: 'Base/Paper',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Paper,
  argTypes: {
    title: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Paper>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <Paper {...args} />,
};

Default.args = {
  title: 'Paper Title',
  className: 'p-6',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel euismod augue. Phasellus leo justo, interdum at scelerisque in, tristique a sem. Aenean sollicitudin urna risus, eu euismod sapien blandit nec. Nulla diam erat, interdum eu orci nec, bibendum venenatis tortor. Curabitur mattis scelerisque sollicitudin. Nulla tempor dictum justo, et placerat magna. Duis eget elementum tellus. Pellentesque orci augue, suscipit sed lorem a, luctus sodales elit. Proin ullamcorper dictum turpis eu ultricies. Curabitur quis ligula commodo enim tincidunt pulvinar mollis in justo. Praesent ex tellus, sodales a nibh non, porttitor commodo dui. Maecenas in dui ullamcorper, maximus tortor id, rutrum quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi leo metus, cursus eu aliquet nec, convallis nec lectus. In tempor, ligula nec fringilla volutpat, sapien sapien placerat felis, sed suscipit metus augue et eros.',
};
