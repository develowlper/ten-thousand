import context from '../context/diceBoard';
import { renderHook, act } from '@testing-library/react-hooks';
import { useDiceBoard } from './diceBoard';

it('should have correct initial context', () => {
  const { result } = renderHook(() => useDiceBoard());

  expect(result.current[0].context).toEqual(context);

  act(() => {
    result.current[1].throwDices();
  });

  expect(
    result.current[0].context.slots.filter((x) => x.points > 0).length
  ).toEqual(0);
});
