import React, { useRef, createRef } from 'react';

import { withKnobs, button } from '@storybook/addon-knobs';
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

  return (
    <RollableDice
      onClick={action('CLICK')}
      onPoints={action('points')}
      ref={ref}
    />
  );
};
