import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Checkbox, Flex, Heading, Input, Text } from '@chakra-ui/react';

import User from './interfaces/User';
import Box from '../../styles/components/Card';
import {
  Form,
  FormControl,
  FormErrorMessage,
} from '../../styles/components/Form';

const LoginForm = ({ setUser }: FormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormValues>();
  const onSubmit = handleSubmit(({ username }) => {
    setUser({ name: username });
  });

  return (
    <Box w={96} px={10} py={16}>
      <Form onSubmit={onSubmit}>
        <Heading as={'h2'} fontSize="4xl" mb={8}>
          Đăng nhập
        </Heading>
        <FormControl isInvalid={!!errors.username}>
          <Input
            type="text"
            placeholder="Tên đăng nhập"
            {...register('username', {
              required: { value: true, message: 'Vui lòng nhập tên đăng nhập' },
              minLength: {
                value: 3,
                message: 'Tên đăng nhập tối thiểu bao gồm 3 ký tự',
              },
            })}
          />
          {errors.username && (
            <FormErrorMessage>{errors.username.message}</FormErrorMessage>
          )}
        </FormControl>
        <FormControl isInvalid={!!errors.password}>
          <Input
            type="password"
            placeholder="Mật khẩu"
            {...register('password', {
              required: {
                value: true,
                message: 'Vui lòng nhập mật khẩu',
              },
            })}
          />
          {errors.password && (
            <FormErrorMessage>{errors.password.message}</FormErrorMessage>
          )}
        </FormControl>

        <Flex alignSelf={'flex-start'} my={'2'}>
          <Checkbox type="checkbox" id="remember" {...register('remember')} />
          <Text as={'label'} htmlFor="remember" ml={'3'}>
            Lưu mật khẩu
          </Text>
        </Flex>
        <Button type="submit" size={'lg'} mt={'8'} w={'100%'}>
          Đăng nhập
        </Button>
      </Form>
    </Box>
  );
};

interface FormProps {
  setUser: Dispatch<SetStateAction<User>>;
}

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

export default LoginForm;
