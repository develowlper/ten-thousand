import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dice from '../components/organisms/Dice';

export default {
  title: `organisms/${Dice.displayName}`,
  component: Dice,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <Dice points={number('points', 1, { max: 6, min: 1 })} />;
};
