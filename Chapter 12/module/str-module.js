export const str = {
  version: '1.0.0',
  lastChar: function(word) {
    return word.slice(-1);
  },
  ordinalize: function(dayOfMonth) {
    const d = '' + dayOfMonth;

    if (!d) return '';
    if (!parseInt(d, 10)) return '';

    return str.lastChar(d) === '1'
      ? `${dayOfMonth}st`
      : str.lastChar(d) === '2'
        ? `${dayOfMonth}nd`
        : str.lastChar(d) === '3'
          ? `${dayOfMonth}rd`
          : `${dayOfMonth}th`;
  },
};

export default reverse = function(word) {
  if (!word) return '';
  return word.split('').reverse().join('');
}

export class Word {
  count(sentence) {
    return sentence.split(' ').length;
  }
}
