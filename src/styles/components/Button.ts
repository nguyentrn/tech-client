import { defineStyleConfig } from '@chakra-ui/react';

const Button = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    borderRadius: 'base',
  },
  variants: {
    outline: {
      border: '2px solid',
    },
  },
  defaultProps: {
    colorScheme: 'primary',
  },
});

export default Button;
