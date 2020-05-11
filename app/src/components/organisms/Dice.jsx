import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nano'


const Dice = ({ points }) => {
  const dots = new Array(points).fill(nanoid(5));

  return (
    <RoundedSquare>
      {dots.map((dot) => {
        return <Dot />;
      })}
    </RoundedSquare>
  );
};

Dice.displayName = 'Dice';

Dice.propTypes = {};

Dice.defaultProps = {};

export default Dice;
