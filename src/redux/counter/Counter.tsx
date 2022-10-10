import { ReactElement, useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

import { Flex, IconButton, Text } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';

interface NumberStepProps {
  func: () => { type: string };
  ariaLabel: string;
  icon: ReactElement;
}

const NumberStep = ({ func, ariaLabel, icon }: NumberStepProps) => {
  const dispatch = useAppDispatch();
  return (
    <IconButton
      variant={'outline'}
      aria-label={ariaLabel}
      icon={icon}
      onClick={() => dispatch(func())}
    />
  );
};

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <Flex flexDir={'column'} alignItems={'center'}>
      <Flex fontSize={'4xl'} alignItems={'center'}>
        <NumberStep
          ariaLabel={'Decrement value'}
          icon={<AiOutlinePlus />}
          func={decrement}
        />
        <Text fontSize={'6xl'} mx="4">
          {count}
        </Text>
        <NumberStep
          ariaLabel={'Increment value'}
          icon={<AiOutlinePlus />}
          func={increment}
        />
      </Flex>
      <div>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(incrementValue))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(incrementAsync(incrementValue))}>
          Add Async
        </button>
        <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>
          Add If Odd
        </button>
      </div>
    </Flex>
  );
}

export default Counter;
