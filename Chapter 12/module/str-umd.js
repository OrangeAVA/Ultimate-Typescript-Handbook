(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
      define([], factory);
  } else if (typeof module === 'object' && module.exports) {
      module.exports = factory();
  } else {
      root.str = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  return {
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
}));
