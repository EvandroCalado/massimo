import { Meta } from '@storybook/react';
import Footer from '.';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Footer />;
