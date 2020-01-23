(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var exec = require('child_process').exec;
  var DEFAULT_OPTIONS = {
    format: 'pdf'
  };

  nx.doc2pdf = function(inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    /* prettier-ignore */
    var clis = [
      'unoconv',
      '-f', options.format,
      '-o', options.output,
      options.input
    ].join(' ');

    return new Promise(function(resolve, reject) {
      exec(clis, function(err) {
        if (err) return reject(err);
        resolve();
      });
    });
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.doc2pdf;
  }
})();
