import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import context from '../context/diceBoard';
import { useCallback } from 'react';

const machine = Machine(
  {
    id: 'diceBoard',
    initial: 'idle',
    context,
    states: {
      idle: {
        on: {
          LOCK: {
            actions: ['lockSlot', 'onSlotLocked'],
          },
          THROW_DICES: 'throwing',
        },
      },
      throwing: {
        entry: ['throwUnlocked'],
        after: {
          2000: 'idle',
        },
      },
    },
  },
  {
    actions: {
      lockSlot: assign({
        slots: (c, e) => {
          const item = c.slots.find((x) => x.id === e.id);
          item.locked = !item.locked;
          const res = [...c.slots];
          res[item.id] = item;
          return res;
        },
      }),
    },
  }
);

export default machine;

export const useDiceBoard = (config = {}) => {
  const [current, send] = useMachine(machine, config);

  const x = useCallback(() => send('THROW_DICES'), [send]);

  const lock = useCallback(
    (id) => {
      return send({ type: 'LOCK', id });
    },
    [send]
  );

  return [
    current,
    {
      throwDices: x,
      lock,
    },
  ];
};
