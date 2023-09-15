import { renderToMjml } from '@faire/mjml-react/utils/renderToMjml';
import { namedEntityToHexCode } from '@faire/mjml-react/utils';
import mjml2html from 'mjml';
// import mjml2html from "mjml-browser";
import { MJMLParseResults } from 'mjml-core';
import { minify } from 'html-minifier-terser';
import React from 'react';
import fs from 'fs';
import pathlib from 'path';

function writeFile(path: string, data: string) {
  if (!fs.existsSync(pathlib.dirname(path))) {
    fs.mkdirSync(pathlib.dirname(path));
  }
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

export async function render(email: React.ReactElement) {
  const { html, errors } = mjml2html(renderToMjml(email));
  errors.forEach((err) => {
    console.error(err.formattedMessage);
    process.exit(1);
  });
  return await minify(namedEntityToHexCode(html), {
    collapseWhitespace: true,
    collapseBooleanAttributes: true,
    minifyCSS: true
  });
}

const templateDir = pathlib.join(__dirname, 'templates');
const outputDir = pathlib.join('public', 'emails');
fs.readdir(templateDir, async (err, files) => {
  if (err) {
    console.error(err.message);
    process.exit(1);
  }
  for (const file of files) {
    const p = pathlib.join(templateDir, file);
    import(p).then(async ({ default: mjml }) => {
      const html = await render(mjml);
      if (html) {
        writeFile(
          pathlib.format({
            dir: outputDir,
            name: pathlib.basename(file).split('.')[0],
            ext: '.html'
          }),
          html
        );
      }
    });
  }
});
