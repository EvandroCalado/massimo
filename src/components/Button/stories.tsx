import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '.';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta;

export const Default: StoryFn<ButtonProps> = (args) => <Button {...args} />;
