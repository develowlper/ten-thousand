import { useCallback } from 'react';
import { random } from 'lodash';

export default () => {
  const rollDice = useCallback(() => {
    return random(1, 6);
  }, []);

  return rollDice;
};
