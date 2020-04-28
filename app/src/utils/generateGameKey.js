import randomWords from 'random-words';

export default () => {
  return randomWords({ exactly: 1, wordsPerString: 2, separator: '-' })[0];
};
