import React, { createRef } from 'react';

import { withKnobs, button, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RollableDice from '../components/organisms/RollableDice';

export default {
  title: `organisms/${RollableDice.displayName}`,
  component: RollableDice,
  decorators: [withKnobs],
};

export const Initial = () => {
  const ref = createRef();

  button('roll', () => ref.current.roll());
  button('reset', () => ref.current.reset());
  return (
    <RollableDice
      points={number('initial points', 1)}
      runs={number('runs', 25)}
      onClick={action('CLICK')}
      onPoints={action('POINTS')}
      ref={ref}
    />
  );
};
