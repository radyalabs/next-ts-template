import type { Meta, StoryObj } from '@storybook/react';

import { ModalProvider } from '@/contexts/ModalContext';

import Datatable from './index';

const meta = {
  title: 'UI/Datatable',
  args: {
    data: [],
    columns: [],
    uniqueRowKey: 'id',
  },
  component: Datatable,
  decorators: [
    (Story) => (
      <ModalProvider>
        <Story />
      </ModalProvider>
    ),
  ],
} satisfies Meta<typeof Datatable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <Datatable {...args} />,
};
