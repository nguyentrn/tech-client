import type { NextPage } from 'next';
import Head from 'next/head';

import App from '../layouts/App';
import { Flex, Heading, Image, Text } from '@chakra-ui/react';
import post from '../db/posts';
import Banner from '../layouts/Banner';
import Body from '../layouts/Body';
import Card from '../styles/components/Card';

interface Product {
  url: string;
  name: string;
  pros: string[];
  cons: string[];
  content: string;
}

const Title = ({ title }: { title: string }) => {
  return (
    <Heading as={'h1'} my={6}>
      {title}
    </Heading>
  );
};

const Content = ({ products }: { products: Product[] }) => {
  return (
    <>
      {products.map((product, id) => (
        <Flex key={product.url} flexDir={'column'} my={'6'}>
          <Heading as={'h2'} fontSize={'2xl'}>
            {id + 1}. {product.name}
          </Heading>
          <Image
            src={
              'https://cdn.tgdd.vn/hoi-dap/1397058/top-7-man-hinh-may-tinh-duoi-7-trieu-chinh-hang-nen-mua-3-800x444.jpg'
            }
            mx={'auto'}
            my={'6'}
            maxW={'60%'}
            alt={'sx'}
          />
          <Flex w={'100%'} justifyContent={'center'}>
            <Card variant="outline" w={'40%'}>
              {product.pros.map((pro) => (
                <Text key={pro}>{pro}</Text>
              ))}
            </Card>
            <Card variant="outline" w={'40%'}>
              {product.cons.map((con) => (
                <Text key={con}>{con}</Text>
              ))}
            </Card>
          </Flex>
          <Text>{product.content}</Text>
        </Flex>
      ))}
    </>
  );
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Default Homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <App>
        <Banner>
          <Title title={post.title} />
        </Banner>
        <Body>
          <Content
            products={post.products.map((p) => ({ url: p.name, ...p }))}
          />
        </Body>
      </App>
    </>
  );
};

export default Home;
