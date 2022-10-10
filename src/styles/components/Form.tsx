import {
  createMultiStyleConfigHelpers,
  useMultiStyleConfig,
  createStylesContext,
} from '@chakra-ui/react';
import {
  FormErrorMessage as ChakraFormErrorMessage,
  FormControl as ChakraFormControl,
} from '@chakra-ui/react';

import CenteredFlex from './CenteredFlex';

const [StylesProvider, useStyles] = createStylesContext('Dropdown');

const helpers = createMultiStyleConfigHelpers([
  'form',
  'errorMessage',
  'control',
]);
const { defineMultiStyleConfig } = helpers;

const StyledForm = defineMultiStyleConfig({
  baseStyle: {
    form: {
      as: 'form',
      w: '100%',
    },
    control: {
      my: 2,
    },
    errorMessage: {
      fontWeight: 'semibold',
      color: 'red.500',
    },
  },
});

export const Form = (props: any) => {
  const { size, variant, children, ...rest } = props;
  const styles = useMultiStyleConfig('Form', { size, variant });
  return (
    <CenteredFlex {...styles.form} {...rest}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </CenteredFlex>
  );
};

export const FormControl = (props: any) => {
  const styles = useStyles();
  return <ChakraFormControl {...styles.control} {...props} />;
};

export const FormErrorMessage = (props: any) => {
  const styles = useStyles();
  return <ChakraFormErrorMessage {...styles.errorMessage} {...props} />;
};

export default StyledForm;
