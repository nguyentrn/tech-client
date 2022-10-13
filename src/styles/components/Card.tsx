import { defineStyleConfig, useStyleConfig } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import CenteredFlex from './CenteredFlex';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const StyledCard = defineStyleConfig({
  baseStyle: {
    borderRadius: 'xl',
    p: 8,
  },
  variants: {
    outline: { border: `1px`, borderColor: 'blackAlpha.100' },
    fading: { bg: 'ffffffe0', boxShadow: 'md' },
    solid: { bg: 'white', boxShadow: 'md' },
  },
});

const Card = (props: any) => {
  const { variant, ...rest } = props;
  const styles = useStyleConfig('Card', { variant });

  if (variant === 'motion') {
    return (
      <AnimatePresence>
        <Card
          as={motion.div}
          variants={variants}
          initial={'hidden'}
          animate={'visible'}
          {...rest}
        />
      </AnimatePresence>
    );
  }

  return <CenteredFlex __css={styles} {...rest} />;
};

export default Card;
