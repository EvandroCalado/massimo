import { Meta } from '@storybook/react';
import Offer from '.';

export default {
  title: 'Components/Offer',
  component: Offer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Offer />;
