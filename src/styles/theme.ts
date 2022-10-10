import { extendTheme } from '@chakra-ui/react';

import colors, { semanticColors } from './colors';
import breakpoints from './breakpoints';
import components from './components';
import fonts from './fonts';

const theme = extendTheme({
  semanticTokens: {
    colors: semanticColors,
    radii: {
      button: '12px',
    },
  },
  colors,
  fonts,
  breakpoints,
  components,
});

export default theme;
