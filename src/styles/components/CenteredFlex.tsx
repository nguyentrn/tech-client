import { Flex } from '@chakra-ui/react';

const CenteredFlex = (props: any) => {
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDir={'column'}
      {...props}
    />
  );
};

export default CenteredFlex;
