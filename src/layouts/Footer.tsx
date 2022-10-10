import CenteredFlex from '../styles/components/CenteredFlex';
import Image from 'next/image';
import { Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <CenteredFlex
      as="footer"
      bg={'primary.800'}
      w={'100%'}
      color={'white'}
      h={'4rem'}
    >
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Text fontSize={'sm'}>
          Made by{' '}
          <Text as={'span'} fontWeight={'bold'}>
            nguyentrn
          </Text>{' '}
          with ❤️
        </Text>
      </a>
    </CenteredFlex>
  );
};

export default Footer;
