import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';

const machine = Machine({
  id: 'add-player',
  initial: 'adding_player',
  context: {
    player: [],
  },
  states: {
    adding_player: {
      on: {
        ADD: {
          actions: assign({
            player: (context, e) => [...context.player, e.data],
          }),
        },
        OK: 'validation',
      },
    },
    validation: {
      on: {
        '': [
          {
            target: 'adding_player',
            cond: (context) => context.player.length < 2,
          },
          'finish',
        ],
      },
    },
    finish: {
      type: 'final',
      data: {
        player: (context) => context.player,
      },
    },
  },
});

export default machine;

export const useAddPlayer = (config = {}) => {
  return useMachine(machine, config);
};
