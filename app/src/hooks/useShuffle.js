import { useState, useCallback, useEffect } from 'react';
import { Machine } from 'xstate';
import { useMachine } from '@xstate/react';

const shuffle = Machine({
  id: 'shuffle',
  context: {
    points: 0,
  },
  initial: 'idle',
  states: {
    idle: {
      on: {
        START: 'shuffle',
      },
    },
    shuffle: {
      on: {
        STOP: 'idle',
      },
      after: {
        5000: 'idle',
      },
    },
  },
});

export default () => {
  const [state, send] = useMachine(shuffle);

  return [state.context.points, () => send('START'), () => send('STOP')];
};
