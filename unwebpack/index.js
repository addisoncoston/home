const fs = require('fs');
const beautify = require('js-beautify').js;

const filePath = 'main.js'; // Replace with your file path
const outputFilePath = 'main-new.js';  // Replace with desired output file path

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Beautify the webpacked JavaScript code
    const beautifiedCode = beautify(data, { indent_size: 2, space_in_empty_paren: true });

    // Write the beautified code to a new file
    fs.writeFile(outputFilePath, beautifiedCode, 'utf8', (err) => {
        if (err) {
            console.error('Error writing the file:', err);
            return;
        }
        console.log('File has been beautified and saved to:', outputFilePath);
    });
});
