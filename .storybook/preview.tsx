import type { Preview } from '@storybook/react';
import { Open_Sans } from 'next/font/google';
import React from 'react';
import '../src/styles/globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

import { withThemeByClassName } from '@storybook/addon-styling';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <div className={openSans.className}>
      <Story />
    </div>
  ),

  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
  }),
];
