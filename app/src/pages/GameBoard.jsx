import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useMachine } from '@xstate/react';

import { find, create } from '../api/gameBoards';
import { Machine, assign } from 'xstate';

const machine = Machine({
  id: 'game-board-loader',
  initial: 'idle',
  context: {
    gameKey: null,
    data: null,
  },
  states: {
    idle: {
      on: {
        KEY: [
          {
            target: 'findBoard',
            cond: (_, e) => e.gameKey,
          },
          'idle',
        ],
      },
      exit: assign({ gameKey: (_, e) => e.gameKey }),
    },
    findBoard: {
      invoke: {
        src: 'find',
        id: 'find-game-board',
        onDone: 'ensureBoard',
        onError: 'error',
      },
      exit: assign({ data: (_, e) => e.data.data }),
    },
    error: {
      entry: () => {
        throw new Error('Loading Errro');
      },
      type: 'final',
    },
    loadBoard: {
      invoke: {
        src: 'create',
        id: 'create-game-board',
        onDone: 'findBoard',
        onError: 'error',
      },
    },
    ensureBoard: {
      on: {
        '': [
          { target: 'loaded', cond: (context) => context?.data?.total > 0 },
          { target: 'loadBoard' },
        ],
      },
    },
    loaded: {},
  },
});

const GameBoard = ({ gameKey }) => {
  const get = useCallback(async (context) => find(context.gameKey), []);
  const post = useCallback(async (context) => create(context.gameKey), []);

  const [current, send] = useMachine(machine, {
    services: {
      find: get,
      create: post,
    },
  });

  useEffect(() => {
    send({ type: 'KEY', gameKey });
  }, [gameKey, send]);

  return <div>{current.value}</div>;
};

GameBoard.displayName = 'GameBoard';

GameBoard.propTypes = {};

GameBoard.defaultProps = {};

export default GameBoard;
