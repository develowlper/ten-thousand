import React, {
  forwardRef,
  useState,
  useImperativeHandle,
  useCallback,
} from 'react';

import PropTypes from 'prop-types';

import useDiceRoll from '../../hooks/useDiceRoll';
import Dice from '../molecules/Dice';

const RollableDice = forwardRef(({ onPoints, ...diceProps }, ref) => {
  const [points, set] = useState(0);

  const roll = useDiceRoll();

  const rollTheDice = useCallback(() => {
    const newPoints = roll();
    set(newPoints);
    onPoints(newPoints);
  }, [roll, onPoints]);

  useImperativeHandle(
    ref,
    () => ({
      roll: rollTheDice,
    }),
    [rollTheDice]
  );

  return <Dice {...diceProps} points={points} />;
});

RollableDice.displayName = 'RollableDice';

RollableDice.propTypes = {
  onPoints: PropTypes.func,
};

RollableDice.defaultProps = {
  onPoints: () => {},
};

export default RollableDice;
