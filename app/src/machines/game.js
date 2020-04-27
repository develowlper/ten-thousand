import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

export const machine = Machine({
  id: 'game-machine',
  initial: 'no_player',
  context: {
    player: null,
  },
  states: {
    no_player: {
      invoke: {
        src: 'addPlayer',
        id: 'add_player',
        onDone: {
          target: 'ready',
          actions: assign({
            player: (_, e) => e.data.player,
          }),
        },
      },
    },
    ready: {},
  },
});

export const useGameMachine = (config = {}) => {
  return useMachine(machine, config);
};
