import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import { useCallback } from 'react';
import useDiceRoll from '../hooks/useDiceRoll';

const machine = Machine(
  {
    id: 'diceThrow',
    context: {
      points: 0,
      shakeTime: 500,
      shakesCount: 0,
      shakes: 1,
    },
    initial: 'idle',
    states: {
      idle: {
        entry: assign({
          shakesCount: 0,
        }),
        on: {
          START: 'shake',
        },
      },
      shake: {
        entry: assign({
          shakesCount: (context) => context.shakesCount + 1,
        }),
        invoke: {
          src: (context) => (cb) => {
            const interval = setInterval(() => {
              cb('THROW');
            }, context.shakeTime);

            return () => {
              clearInterval(interval);
            };
          },
        },
        on: {
          THROW: {
            target: 'evaluate',
          },
        },
        exit: 'diceRoll',
      },
      evaluate: {
        on: {
          '': [
            {
              target: 'shake',
              cond: (context) => context.shakesCount < context.shakes,
            },
            { target: 'result' },
          ],
        },
      },
      result: {
        type: 'final',
      },
    },
  },
  {}
);

export default machine;

export const useDiceThrow = (config) => {
  const { delay, ...machineConfig } = { delay: 0, ...config };
  const rollDice = useDiceRoll();
  const [current, send] = useMachine(machine, {
    actions: {
      diceRoll: assign({
        points: () => rollDice(),
        shakesCount: (context) => context.shakesCount + 1,
      }),
    },
    ...machineConfig,
  });
  const { context, value, matches } = current;

  const start = useCallback(() => {
    send('START');
  }, [send]);

  return {
    state: {
      value,
      matches,
    },
    context,
    start,
  };
};
