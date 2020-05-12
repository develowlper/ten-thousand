import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

import RoundedSquare from '../atoms/RoundedSquare';
import DotAtom from '../atoms/Dot';
import styled from 'styled-components';

const Dot = styled(DotAtom)`
  position: absolute;
  left: ${({ left }) => left}%;
  top: ${({ top }) => top}%;
  transform: translate(-50%, -50%);
  display: ${({ display }) => display};
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const getStylePropsForDot = (count, points) => {
  const defaultPos = { top: 50, left: 50 };
  const hidden = { display: 'none', ...defaultPos };

  switch (count) {
    case 1:
      return points < 2 ? defaultPos : { left: 25, top: 75 };
    case 2:
      return points < 2 ? defaultPos : { left: 75, top: 25 };
    case 3:
      switch (true) {
        case points < 3:
          return hidden;
        case points > 3:
          return { left: 25, top: 25 };
        default:
          return defaultPos;
      }
    case 4:
      switch (true) {
        case points < 3:
          return hidden;
        case points > 3:
          return { left: 75, top: 75 };
        default:
          return defaultPos;
      }
    case 5:
      switch (true) {
        case points < 5:
          return hidden;
        case points > 5:
          return { left: 25, top: 50 };
        default:
          return defaultPos;
      }
    case 6:
      switch (true) {
        case points < 5:
          return hidden;
        case points > 5:
          return { left: 75, top: 50 };
        default:
          return defaultPos;
      }
    default:
      return hidden;
  }
};

const dots = new Array(6).fill(null).map(() => nanoid(5));

const Dice = ({ points, ...squareProps }) => {
  return (
    <RoundedSquare {...squareProps} outline={3}>
      <Box>
        {dots.map((key, index) => {
          return <Dot {...getStylePropsForDot(index + 1, points)} key={key} />;
        })}
      </Box>
    </RoundedSquare>
  );
};

Dice.displayName = 'Dice';

Dice.propTypes = {
  points: PropTypes.number.isRequired,
};

Dice.defaultProps = {
  points: 1,
};

export default Dice;
