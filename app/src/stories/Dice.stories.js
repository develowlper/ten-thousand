import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';

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

export const Initial = () => {
  return (
    <Box>
      <Dice points={1} />
      <Dice points={2} style={{ marginLeft: '8px' }} />
      <Dice points={3} style={{ marginLeft: '8px' }} />
      <Dice points={4} style={{ marginLeft: '8px' }} />
      <Dice points={5} style={{ marginLeft: '8px' }} />
      <Dice points={6} style={{ marginLeft: '8px' }} />
    </Box>
  );
};
