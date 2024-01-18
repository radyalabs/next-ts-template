import type { Meta, StoryObj } from '@storybook/react';

import type ButtonProps from '@/components/base/Button/index.types';

import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Base/Button',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  component: Button,
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      options: ['default', 'primary', 'secondary', 'danger'],
      control: { type: 'radio' },
    },
    loading: {
      control: 'boolean',
    },
    type: {
      options: ['submit', 'button'],
      control: { type: 'radio' },
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature
 * to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  render: (args: Omit<ButtonProps, 'onClick'>) => <Button className="normal-case" {...args}>{args.children}</Button>,
};

Default.args = {
  children: 'Button',
  color: 'primary',
};

export const Outlined: Story = {
  render: (args: Omit<ButtonProps, 'onClick'>) => <Button className="normal-case" {...args}>{args.children}</Button>,
};

Outlined.args = {
  children: 'Button',
  color: 'primary',
  variant: 'outline',
};

export const Dashed: Story = {
  render: (args: Omit<ButtonProps, 'onClick'>) => <Button className="normal-case" {...args}>{args.children}</Button>,
};

Dashed.args = {
  children: 'Button',
  color: 'primary',
  variant: 'dashed',
};
export const Text: Story = {
  render: (args: Omit<ButtonProps, 'onClick'>) => <Button className="normal-case" {...args}>{args.children}</Button>,
};

Text.args = {
  children: 'Button',
  color: 'primary',
  variant: 'text',
};
