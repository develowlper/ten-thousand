const slots = new Array(6)
  .fill(null)
  .map((_, index) => ({ id: index, locked: false }));

export default {
  slots,
};
