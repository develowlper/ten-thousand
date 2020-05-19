import { createRef } from 'react';

const slots = new Array(6)
  .fill(null)
  .map((_, index) => ({ id: index, locked: false, ref: createRef() }));

export default {
  slots,
};
