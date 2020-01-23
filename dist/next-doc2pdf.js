/*!
 * name: @feizheng/next-doc2pdf
 * description: Covert doc/docx to pdf.
 * url: https://github.com/afeiship/next-doc2pdf
 * version: 1.0.0
 * date: 2020-01-23 17:09:11
 * license: MIT
 */

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

//# sourceMappingURL=next-doc2pdf.js.map
