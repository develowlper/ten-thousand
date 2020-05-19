import React, { forwardRef, useImperativeHandle, useCallback } from 'react';
import { random } from 'lodash';

import PropTypes from 'prop-types';

import Dice from '../molecules/Dice';
import { Machine, assign } from 'xstate';
import { useMachine } from '@xstate/react';
import timeout from '../../utils/timeout';

const machine = Machine(
  {
    id: 'rollableDice',
    initial: 'idle',
    context: {
      points: null,
      count: 0,
      runs: null,
    },
    states: {
      idle: {
        entry: assign({ count: () => 0 }),
        on: {
          THROW: 'throwing',
          RESET: { actions: ['resetPoints', 'onPoints'] },
        },
      },
      throwing: {
        invoke: {
          id: 'roller',
          src: 'roll',
          onDone: {
            target: 'evaluation',
            actions: ['setPoints', 'increaseCount'],
          },
        },
        on: {
          RESET: { target: 'idle', actions: ['resetPoints', 'onPoints'] },
        },
      },
      evaluation: {
        on: {
          '': [
            { target: 'idle', actions: 'onPoints', cond: 'isDone' },
            'throwing',
          ],
        },
      },
    },
  },
  {
    actions: {
      resetPoints: assign({ points: () => 0 }),
      setPoints: assign({
        points: (_, e) => {
          return e.data;
        },
      }),
      increaseCount: assign({
        count: (c) => c.count + 1,
      }),
    },
    services: {
      roll: async () => {
        await timeout(100);
        return random(1, 6);
      },
    },
    guards: {
      isDone: (c) => c.count >= c.runs,
    },
  }
);

const RollableDice = forwardRef(
  ({ points, onPoints, onRun, runs, ...diceProps }, ref) => {
    const [state, send] = useMachine(machine, {
      context: {
        runs,
        points,
      },
      actions: {
        onPoints: (c) => {
          onPoints(c.points);
        },
      },
    });

    const rollTheDice = useCallback(() => {
      send('THROW');
    }, [send]);

    const reset = useCallback(() => {
      send('RESET');
    }, [send]);

    useImperativeHandle(
      ref,
      () => ({
        roll: rollTheDice,
        reset,
      }),
      [rollTheDice, reset]
    );

    return <Dice {...diceProps} points={state.context.points} />;
  }
);

RollableDice.displayName = 'RollableDice';

RollableDice.propTypes = {
  points: PropTypes.number,
  runs: PropTypes.number,
  onPoints: PropTypes.func,
  onRun: PropTypes.func,
};

RollableDice.defaultProps = {
  points: 1,
  onPoints: () => {},
  onRun: () => {},
  runs: 10,
};

export default RollableDice;
