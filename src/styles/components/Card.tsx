import CenteredFlex from './CenteredFlex';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const Card = (props: any) => {
  return (
    <CenteredFlex
      bg="#ffffffe0"
      p={'8'}
      borderRadius={'xl'}
      boxShadow="md"
      {...props}
    />
  );
};

export const AnimatedCard = (props: any) => {
  return (
    <AnimatePresence>
      <Card
        as={motion.div}
        variants={variants}
        initial={'hidden'}
        animate={'visible'}
        {...props}
      />
    </AnimatePresence>
  );
};

export default Card;
