import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { Meta, StoryObj } from '@storybook/react';
import { id } from 'date-fns/locale';

import TimePicker from './index';

const meta: Meta<typeof TimePicker> = {
  title: 'Base/TimePicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: TimePicker,
  argTypes: {
    label: {
      control: 'text',
    },
  },
  decorators: [
    (Story) => (
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={id}>
        <Story />
      </LocalizationProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <TimePicker {...args} />,
};
