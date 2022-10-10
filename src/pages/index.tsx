import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import App from '../layouts/App';
import { Flex, Heading, Text } from '@chakra-ui/react';
import Card, { AnimatedCard } from '../styles/components/Card';

const features = [
  { url: '', name: 'Homepage' },
  { url: 'react-hook-form', name: 'react-hook-form' },
  { url: 'redux-toolkit', name: 'redux-toolkit' },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Default Homepage" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <App>
        <AnimatedCard m={'auto'}>
          <Heading>
            Welcome to{' '}
            <Text
              as={'span'}
              fontWeight={'semibold'}
              fontFamily={'mono'}
              fontSize="3xl"
              bg={'primary.200'}
              color={'primary.900'}
            >
              nextjs-starter
            </Text>
            !
          </Heading>

          <p>Get started by editing</p>

          <Flex w={'100%'} justifyContent={'space-between'} my={'6'}>
            {features.map((feature) => (
              <Link key={feature.url} href={feature.url}>
                <Card
                  as={'a'}
                  cursor={'pointer'}
                  bg={'white'}
                  w={'32'}
                  h={'20'}
                  p={'0'}
                >
                  <Text>{feature.name}</Text>
                </Card>
              </Link>
            ))}
          </Flex>
        </AnimatedCard>
      </App>
    </>
  );
};

export default Home;
