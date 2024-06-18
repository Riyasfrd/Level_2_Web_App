/** @type { import('@storybook/react').Preview } */

import '../src/Styles/index.css'

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;


// Preview.js is used to configure the preview of your components in Storybook.
// such as font, colors layout of the screen
