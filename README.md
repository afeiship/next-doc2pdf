# next-doc2pdf
> Covert doc/docx to pdf.

## installation
```bash
# brew install unoconv
npm install -S @feizheng/next-doc2pdf
```

## usage
```js
import '@feizheng/next-doc2pdf';

nx.doc2pdf({
  input: './__tests__/docs/zscqf_jc_whl_jy0101.doc',
  output: './__tests__/docs/zscqf_jc_whl_jy0101.pdf'
})
```

## doc2pdf + merge
```js
require("@feizheng/next-doc2pdf");
require("@feizheng/next-pdf-merge");

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
