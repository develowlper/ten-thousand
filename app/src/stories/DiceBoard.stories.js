import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DiceBoard from '../components/organisms/DiceBoard';

export default {
  title: `organisms/${DiceBoard.displayName}`,
  component: DiceBoard,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <DiceBoard />;
};
