import { Meta } from '@storybook/react';
import Slider from '.';

export default {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Slider />;
