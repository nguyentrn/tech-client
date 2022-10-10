import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  baseStyle: {
    fontWeight: 'normal',
  },
  variants: {
    h1: {
      fontSize: '4xl',
    },
  },
});

export default Heading;
