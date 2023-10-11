import { Meta, StoryFn } from '@storybook/react';
import Price, { PriceProps } from '.';

export default {
  title: 'Components/Price',
  component: Price,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<PriceProps> = () => <Price />;
