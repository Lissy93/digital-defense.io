import { extendTheme } from '@chakra-ui/react';

import colors from '@/styles/colors';
import sizes from '@/styles/sizes';
import typography from '@/styles/typography';

const theme = extendTheme({
  colors, sizes, typography,
});

export default theme;
