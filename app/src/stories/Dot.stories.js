import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Dot from '../components/atoms/Dot';

export default {
  title: `atoms/${Dot.displayName}`,
  component: Dot,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <Dot />;
};
