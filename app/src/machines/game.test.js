import { renderHook } from '@testing-library/react-hooks';

import { useGameMachine } from './game';

describe('game-machine', () => {
  test('should invoke add player on beginning', () => {
    const { result } = renderHook(() => useGameMachine());
    const [state] = result.current;
    expect(state.value).toBe('no_player');
    expect(state.children.add_player).toBeDefined();
  });
});
