# next-doc2pdf
> Covert doc/docx to pdf.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-doc2pdf
```

## usage
```js
import '@jswork/next-doc2pdf';

nx.doc2pdf({
  input: './__tests__/docs/zscqf_jc_whl_jy0101.doc',
  output: './__tests__/docs/zscqf_jc_whl_jy0101.pdf'
})
```

## doc2pdf + merge
```js
require("@jswork/next-doc2pdf");
require("@jswork/next-pdf-merge");

nx.doc2pdf({
  input: "./files/*.doc",
  output: `./pdfs`
}).then(res => {
  console.log("convert done!");
  nx.pdfMerge({
    input: "./pdfs/*.pdf"
  });
});

```

## resources
- https://github.com/unoconv/unoconv
- http://macappstore.org/unoconv/
- http://dag.wiee.rs/home-made/unoconv/
- https://www.libreoffice.org/

## license
Code released under [the MIT license](https://github.com/afeiship/next-doc2pdf/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-doc2pdf
[version-url]: https://npmjs.org/package/@jswork/next-doc2pdf

[license-image]: https://img.shields.io/npm/l/@jswork/next-doc2pdf
[license-url]: https://github.com/afeiship/next-doc2pdf/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-doc2pdf
[size-url]: https://github.com/afeiship/next-doc2pdf/blob/master/dist/next-doc2pdf.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-doc2pdf
[download-url]: https://www.npmjs.com/package/@jswork/next-doc2pdf
