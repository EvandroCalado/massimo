import { Meta } from '@storybook/react';
import Featured from '.';

export default {
  title: 'Components/Featured',
  component: Featured,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Featured />;
