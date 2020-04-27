import { renderHook, act } from '@testing-library/react-hooks';

import { useTextInput } from './text-input';

it('should be possible to finish on valid text input', () => {
  const onDone = jest.fn();

  const { result } = renderHook(() =>
    useTextInput({
      actions: {
        onDone,
      },
    })
  );
  act(() => {
    const [, send] = result.current;
    send({ type: 'INPUT', data: { value: 'Player 1' } });
    send('OK');
  });

  const [state] = result.current;
  expect(state.matches('finish')).toBe(true);
  expect(state.done).toBe(true);
  expect(onDone).toBeCalled();
});

it('should not be possible to finish on empty text', () => {
  const { result } = renderHook(() => useTextInput());
  act(() => {
    const [, send] = result.current;
    send({ type: 'INPUT', data: { value: '' } });
    send('OK');
  });

  const [state] = result.current;
  expect(state.matches('finish')).toBe(false);
  expect(state.done).toBe(false);
  expect(state.matches('typing')).toBe(true);
});
