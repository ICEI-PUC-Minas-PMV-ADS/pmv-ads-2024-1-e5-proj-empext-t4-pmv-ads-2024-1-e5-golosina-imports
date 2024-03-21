import type { Preview } from "@storybook/react";
import '../src/styles/main.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: '',
      values: [
        {
          name: 'dark-mode',
          value: '#000706',
        },
        {
          name: 'light-gray',
          value: '#f5f7fa',
        },
      ],
    },
  },
}

export default preview;
