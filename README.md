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

## resources
- https://github.com/unoconv/unoconv
- http://macappstore.org/unoconv/
- http://dag.wiee.rs/home-made/unoconv/
- https://www.libreoffice.org/
