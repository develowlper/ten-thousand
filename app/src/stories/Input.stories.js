import React from 'react';

import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Input from '../components/atoms/Input';

export default {
  title: Input.displayName,
  component: Input,
  decorators: [withKnobs],
};

export const Initial = () => {
  return <Input />;
};

Initial.story = {
  name: 'default',
};
