import { Flex } from '@chakra-ui/react';
import CenteredFlex from '../styles/components/CenteredFlex';
import Footer from './Footer';
import Header from './Header';

const Background = (props: any) => {
  return (
    <CenteredFlex
      as={'main'}
      minH="calc(100vh - 8rem)"
      w={'100%'}
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
  );
};

const App = (props: any) => {
  return (
    <Background>
      <Header />
      <Flex minH={'100vh'} w={'100%'} flexDir={'column'} mb={'6'} {...props} />
      <Footer />
    </Background>
  );
};

export default App;
