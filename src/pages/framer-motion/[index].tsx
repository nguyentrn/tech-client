import * as React from 'react';
import { InferGetStaticPropsType, GetStaticProps, GetStaticPaths } from 'next';

import SingleImage from '../../domains/framer-motion/SingleImage';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

interface pageProps {
  index: string;
}

const images = [
  'photo-1520517601640-32ec514e4a15',
  'photo-1518780535463-bc357fa46e64',
  'photo-1555068178-89125fb6356d',
  'photo-1553503359-d4ff2537a6ea',
  'photo-1585211751845-37663b4ab614',
  'photo-1496467115032-c504ef76521b',
];

const Page = ({}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <SingleImage index={1} />;
};

export const getStaticProps: GetStaticProps = async (context) => {
  const params = context.params as Params;
  return {
    props: {
      index: parseInt(params.index),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: images.map((_id, index) => {
      return {
        params: {
          index: `${index}`,
        },
      };
    }),
    fallback: false,
  };
};

export default Page;
