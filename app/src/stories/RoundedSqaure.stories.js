import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import RoundedSqaure from '../components/atoms/RoundedSquare';

export default {
  title: `atoms/${RoundedSqaure.displayName}`,
  component: RoundedSqaure,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <RoundedSqaure size={number('size', 64)} onClick={action('Click')} />;
};
