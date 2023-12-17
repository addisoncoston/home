const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

// Replace 'input.xml' with your XML file name
const xmlFileName = 'test_2.xml';
const baseName = path.basename(xmlFileName, path.extname(xmlFileName));
const outputFileName = baseName + "_rezipped" + '.prproj';

// Create a read stream for the XML file
const readStream = fs.createReadStream(xmlFileName);

// Create a write stream for the output file
const writeStream = fs.createWriteStream(outputFileName);

// Create a gzip transform stream
const gzip = zlib.createGzip();

// Pipe the read stream into the gzip stream and then into the write stream
readStream
  .pipe(gzip)
  .pipe(writeStream)
  .on('finish', () => {
    console.log(`File has been compressed and saved as ${outputFileName}`);
  })
  .on('error', (err) => {
    console.error('An error occurred:', err);
  });
