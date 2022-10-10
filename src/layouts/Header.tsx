import CenteredFlex from '../styles/components/CenteredFlex';
import Image from 'next/image';

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
        Powered by{' '}
        <span>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>
    </CenteredFlex>
  );
};

export default Footer;
