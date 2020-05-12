import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';

import Dice from '../components/molecules/Dice';

export default {
  title: `molecules/${Dice.displayName}`,
  component: Dice,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <Dice points={number('points', 1, { max: 6, min: 1 })} />;
};
