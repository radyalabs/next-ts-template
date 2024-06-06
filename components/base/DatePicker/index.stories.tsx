import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import type { Meta, StoryObj } from '@storybook/react';
import id from 'date-fns/locale/id';

import DatePicker from './index';

const meta: Meta<typeof DatePicker> = {
  title: 'Base/DatePicker',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: DatePicker,
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
type Story = StoryObj<typeof DatePicker>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args) => <DatePicker {...args} />,
};

export const Month: Story = {
  render: (args) => <DatePicker {...args} />,
};

Month.args = {
  views: ['month', 'year'],
};

export const Year: Story = {
  render: (args) => <DatePicker {...args} />,
};

Year.args = {
  views: ['year'],
};
