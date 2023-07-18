(function () {
  if (window && !window.str) {
    window.str = {
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
  }
}());

(function () {
  window.globalMessage = 'Hello from the global object';
  window.getGlobalMessage = function() {
    return window.globalMessage;
  }
}());

(function () {
  if (!String.prototype.reverse) {
    String.prototype.reverse = function() {
      return this.split('').reverse().join('');
    }
  }
}());
