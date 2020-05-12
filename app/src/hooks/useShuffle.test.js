import { renderHook, act } from '@testing-library/react-hooks';
import useShuffle from './useShuffle';

it('should be 0 on start', () => {
  const { result } = renderHook(() => useShuffle());
  const [points] = result.current;

  expect(points).toBe(0);
});

it('should start and stop', () => {
  const { result } = renderHook(() => useShuffle());
  const [points] = result.current;

  act(() => {
    const [, start] = result.current;
    start();
  });

  act(() => {
    const [, , stop] = result.current;
    stop();
  });

  expect(points).toBe(0);
});
