import React, { createRef } from 'react';

import { withKnobs, button } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import DiceBoard from '../components/organisms/DiceBoard';

export default {
  title: `organisms/${DiceBoard.displayName}`,
  component: DiceBoard,
  decorators: [withKnobs],
};

export const Initial = () => {
  const ref = createRef();

  button('throw', () => ref.current.throwDices());

  return <DiceBoard ref={ref} onSlotLocked={action('onSlotLocked')} />;
};
