import { extendTheme } from '@chakra-ui/react';

import colors from '@/styles/colors';
import sizes from '@/styles/sizes';
import typography from '@/styles/typography';

const components = {
  Box: {
    baseStyle: {
      background: 'red',
      border: '2px dashed blue',
      color: 'blue',
    },
  },
};

const theme = extendTheme({
  colors, sizes, typography, components,
});

export default theme;
