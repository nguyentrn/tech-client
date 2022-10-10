import { Flex, Heading } from '@chakra-ui/react';

interface WelcomingProps {
  name: string;
}

const Welcoming = ({ name }: WelcomingProps) => {
  return (
    <Flex>
      <Heading as={'h1'} fontSize={'5xl'} color={'white'}>
        Xin chào, {name}!
      </Heading>
    </Flex>
  );
};

export default Welcoming;
