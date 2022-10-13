import { Container } from '@chakra-ui/react';

const Body = (props: any) => {
  return (
    <Container
      maxW={'1200px'}
      minH={'calc(100vh - 8rem)'}
      bg={'white'}
      boxShadow={'lg'}
      borderBottomRadius={'lg'}
      {...props}
    />
  );
};

export default Body;
