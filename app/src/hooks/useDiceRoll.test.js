import { renderHook, act } from '@testing-library/react-hooks';
import useDiceRoll from './useDiceRoll';

it('should get points on roll', () => {
  const { result } = renderHook(() => useDiceRoll());

  act(() => {
    const roll = result.current;
    const points = roll();
    expect(points).not.toEqual(0);
  });
});
