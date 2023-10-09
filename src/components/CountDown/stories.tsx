import { Meta } from '@storybook/react';
import CountDown from '.';

export default {
  title: 'Components/CountDown',
  component: CountDown,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <CountDown />;
