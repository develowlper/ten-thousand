import { renderHook } from '@testing-library/react-hooks';
import { useDiceThrow } from './diceThrow';
import { act } from 'react-test-renderer';

it('should throw dice one time by default', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useDiceThrow());

  act(() => {
    result.current.start();
  });

  expect(result.current.state.matches('shake')).toEqual(true);
  await waitForNextUpdate();
  expect(result.current.state.matches('result')).toEqual(true);
  expect(result.current.context.points).toBeGreaterThan(0);
  expect(result.current.context.points).toBeLessThan(7);
  // expect(result.current.context.shakesCount).toEqual(1);
});

it('should be configurable ', async () => {
  const shakes = 3;

  const { result, waitForNextUpdate } = renderHook(() =>
    useDiceThrow({
      context: {
        shakes,
        shakeTime: 500,
      },
    })
  );

  act(() => {
    result.current.start();
  });
  expect(result.current.state.matches('shake')).toEqual(true);
  expect(result.current.context.shakesCount).toEqual(1);
  while (result.current.state.matches('shake')) {
    await waitForNextUpdate();
    expect(result.current.context.points).toBeGreaterThan(0);
    expect(result.current.context.points).toBeLessThan(7);
  }
  expect(result.current.state.matches('result')).toEqual(true);
  // expect(result.current.context.shakesCount).toEqual(shakes);
});
