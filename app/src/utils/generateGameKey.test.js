import generateGameKey from './generateGameKey';

test('create a game key', () => {
  const key = generateGameKey(); //?
  expect(key.split('-')).toHaveLength(2);
});
