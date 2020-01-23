const nx = require('@feizheng/next-js-core2');
require('../src/next-doc2pdf');

describe('api.basic test', () => {
  test('nx.doc2pdf', function(done) {
    nx.doc2pdf({
      input: './__tests__/docs/zscqf_jc_whl_jy0101.doc',
      output: './__tests__/docs/zscqf_jc_whl_jy0101.pdf'
    }).then(() => {
      done();
    });
  });
});
