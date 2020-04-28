import React, { useState } from 'react';

import Input from '../components/atoms/Input';

const withHooks = (StoryFn) => <StoryFn />;

export default {
  title: Input.displayName,
  component: Input,
  decorators: [withHooks],
};

export const Initial = () => {
  const [state, set] = useState('all-cats');

  return (
    <Input
      autoFocus
      value={state}
      onChange={(e) => {
        set(e.target.value);
      }}
    />
  );
};

Initial.story = {
  name: 'default',
};
