import React, { useCallback, forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import { useDiceBoard } from '../../machines/diceBoard';
import DiceAtom from '../molecules/Dice';

const Dice = styled(DiceAtom)`
  margin: 8px;
`;

const Box = styled.div`
  display: flex;
`;

const DiceBoard = forwardRef(({ onSlotLocked }, ref) => {
  const [state, { throwDices, lock }] = useDiceBoard({
    actions: { onSlotLocked },
  });
  const { slots } = state.context;

  useImperativeHandle(
    ref,
    () => ({
      throwDices,
    }),
    [throwDices]
  );

  return (
    <Box>
      {slots.map((slot) => {
        const { id, points, locked } = slot;
        return (
          <Dice
            selected={locked}
            key={id}
            points={points}
            onSelect={() => lock(id)}
          />
        );
      })}
    </Box>
  );
});

DiceBoard.displayName = 'DiceBoard';

DiceBoard.propTypes = {};

DiceBoard.defaultProps = {
  onSlotLocked: () => {},
};

export default DiceBoard;
