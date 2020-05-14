import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dice from '../components/molecules/Dice';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
`;

export default {
  title: `molecules/${Dice.displayName}`,
  component: Dice,
  decorators: [withKnobs],
};

export const Numbers = () => {
  return (
    <Box>
      <Dice onClick={action('CLICK')} points={1} />
      <Dice
        onClick={action('CLICK')}
        points={2}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        points={3}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        points={4}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        points={5}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        points={6}
        style={{ marginLeft: '8px' }}
      />
    </Box>
  );
};

export const NoNumbers = () => {
  return (
    <Box>
      <Dice onClick={action('CLICK')} points={0} />
      <Dice
        onClick={action('CLICK')}
        points={7}
        style={{ marginLeft: '8px' }}
      />
    </Box>
  );
};

export const Selected = () => {
  return (
    <Box>
      <Dice onClick={action('CLICK')} selected points={1} />
      <Dice
        onClick={action('CLICK')}
        selected
        points={2}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        selected
        points={3}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        selected
        points={4}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        selected
        points={5}
        style={{ marginLeft: '8px' }}
      />
      <Dice
        onClick={action('CLICK')}
        selected
        points={6}
        style={{ marginLeft: '8px' }}
      />
    </Box>
  );
};
