import React, { forwardRef, useImperativeHandle } from 'react';

import styled from 'styled-components';

import { useDiceBoard } from '../../machines/diceBoard';
import RollableDice from './RollableDice';

const Dice = styled(RollableDice)`
  margin: 8px;
`;

const Box = styled.div`
  display: flex;
`;

const DiceBoard = forwardRef(({ onSlotLocked }, ref) => {
  const [state, { throwDices, lock }] = useDiceBoard({
    actions: {
      onSlotLocked,
      throwUnlocked: (c) => {
        c.slots
          .filter((x) => !x.locked)
          .forEach((slot) => slot.ref.current.roll());
      },
    },
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
        const { id, points, locked, ref } = slot;
        return (
          <Dice
            ref={ref}
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
