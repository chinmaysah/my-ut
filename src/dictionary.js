
module.exports = function dictionary(words) {
  const wordList = splitWords(words) || [];

  return wordList.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = accumulator[currentValue] + 1 || 1;
    return accumulator;
  }, {});
}

function splitWords(words) {
  return words.match(/[^\s]+/g);
}
