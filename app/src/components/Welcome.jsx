import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Paper';
import theme from '../theme';
import { animated, useSpring, config } from 'react-spring';

import styled from 'styled-components';
import randomwords from 'random-words';

const AnimatedPaper = animated(Paper);

const Button = styled.button`
  background: ${theme.pink};
  text-transform: uppercase;
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  font-size: inherit;
  border: 1px transparent;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048);
`;

const Welcome = ({}) => {
  const animation = useSpring({
    transform: 'scale(1)',
    opacity: 1,
    from: { transform: 'scale(0)' },
    config: config.wobbly,
  });

  return (
    <AnimatedPaper style={animation}>
      <h1>Welcome to ten-thousand!</h1>
      <p>
        Please enter a name for your game. You can use it later, to continue
        your game.
      </p>
      <input></input>
      <Button>submit</Button>
      <p>Alternatively you can choose from one of the follwoing:</p>
      <ul>
        {randomwords({ exactly: 5, wordsPerString: 3, separator: '-' }).map(
          (word) => (
            <li key={word}>{word}</li>
          )
        )}
      </ul>
    </AnimatedPaper>
  );
};

Welcome.displayName = 'Welcome';

Welcome.propTypes = {};

Welcome.defaultProps = {};

export default Welcome;
