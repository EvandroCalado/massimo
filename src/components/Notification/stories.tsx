import { Meta } from '@storybook/react';
import Notification from '.';

export default {
  title: 'Components/Notification',
  component: Notification,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Notification />;
