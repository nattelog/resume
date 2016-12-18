import fs from 'fs';
import path from 'path';
import pdf from 'html-pdf';

console.log('working...');

const source = 'dist/index.html';
const destination = './resume.pdf';
const html = fs.readFileSync(source, 'utf8');
var options = {
  // format: 'A4',
  height: '2600px',
  width: '750px',
  border: {
    top: '40px',
    left: '20px',
    right: '20px'
  },
  base: 'file://' + path.resolve(source)
};

pdf.create(html, options).toFile(destination, (err, res) => {
  if (err) {
    console.error(err);
  }
  else {
    console.log(`wrote ${res.filename}`);
  }
});
