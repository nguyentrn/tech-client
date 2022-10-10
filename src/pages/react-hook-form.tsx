import { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import App from '../layouts/App';
import LoginForm from '../domains/react-hook-form/LoginForm';
import User from '../domains/react-hook-form/interfaces/User';
import Welcoming from '../domains/react-hook-form/Welcoming';

const ReactHookFormPage = () => {
  const [user, setUser] = useState<User>();

  return (
    <App>
      <Flex m={'auto'}>
        {user ? (
          <Welcoming name={user.name} />
        ) : (
          <LoginForm setUser={setUser} />
        )}
      </Flex>
    </App>
  );
};

export default ReactHookFormPage;
