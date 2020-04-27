import { Machine, assign } from 'xstate';

import { useMachine } from '@xstate/react';

const machine = Machine({
  id: 'text-input',
  initial: 'typing',
  context: {
    value: '',
    error: null,
  },
  states: {
    typing: {
      on: {
        INPUT: {
          actions: assign({ value: (_, e) => e.data.value }),
        },
        OK: 'validate',
      },
    },
    validate: {
      on: {
        '': [
          { target: 'finish', cond: (context) => context.value.length > 1 },
          'typing',
        ],
      },
    },
    finish: {
      entry: 'onDone',
      type: 'final',
      data: {
        value: (context) => context.value,
      },
    },
  },
});

export default machine;

export const useTextInput = (config = {}) => {
  return useMachine(machine, config);
};
