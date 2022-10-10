import { Flex } from '@chakra-ui/react';
import CenteredFlex from '../styles/components/CenteredFlex';
import Footer from './Footer';
import Header from './Header';

const App = (props: any) => {
  return (
    <>
      <Header />
      <CenteredFlex
        as={'main'}
        minH="calc(100vh - 8rem)"
        backgroundImage={
          'linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("background.png")'
        }
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
        backgroundAttachment={'fixed'}
        backgroundSize="cover"
        justifyContent={'space-between'}
        {...props}
      />
      <Footer />
    </>
  );
};

export default App;
