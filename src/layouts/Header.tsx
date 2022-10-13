import { Flex, Text } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Text px={'4'} fontWeight={'bold'}>
      TechReview
    </Text>
  );
};

const Header = () => {
  return (
    <Flex
      as="header"
      justifyContent={'space-between'}
      alignItems={'center'}
      bg={'primary.800'}
      w={'100%'}
      color={'white'}
      h={'4rem'}
    >
      <Logo />
    </Flex>
  );
};

export default Header;
