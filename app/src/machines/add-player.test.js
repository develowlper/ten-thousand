import { renderHook, act } from '@testing-library/react-hooks';

import { useAddPlayer } from './add-player';

it('should be possble to finish if more than 1 player', () => {
  const { result } = renderHook(() => useAddPlayer());

  const playerOne = { name: 'Player One' };
  const playerTwo = { name: 'Player Two' };

  act(() => {
    const [, send] = result.current;
    send({ type: 'ADD', data: playerOne });
    send({ type: 'ADD', data: playerTwo });
    send('OK');
  });

  const [state] = result.current;
  expect(state.matches('finish')).toBe(true);
  expect(state.done).toBe(true);
  expect(state.context.player[0]).toBe(playerOne);
  expect(state.context.player[1]).toBe(playerTwo);
});

it('should not be possble to finish if only than 1 player', () => {
  const { result } = renderHook(() => useAddPlayer());

  const playerOne = { name: 'Player One' };

  act(() => {
    const [, send] = result.current;
    send({ type: 'ADD', data: playerOne });
    send('OK');
  });

  const [state] = result.current;
  expect(state.matches('finish')).toBe(false);
  expect(state.done).toBe(false);
  expect(state.matches('adding_player'));
  expect(state.context.player[0]).toBe(playerOne);
});
