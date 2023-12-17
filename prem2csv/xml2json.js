const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ explicitArray: false, trim: true });

// Function to read XML and convert it to JSON
function convertXmlToJson(fileName) {
    fs.readFile(fileName, (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }

        parser.parseString(data, (err, result) => {
            if (err) {
                console.error("Error parsing XML:", err);
                return;
            }

            const json = JSON.stringify(result, null, 2);
            const outputFileName = fileName.replace('.xml', '.json');

            fs.writeFile(outputFileName, json, (err) => {
                if (err) {
                    console.error("Error writing JSON file:", err);
                    return;
                }
                console.log(`Converted XML to JSON. Output file: ${outputFileName}`);
            });
        });
    });
}

// Replace 'yourfile.xml' with the path to your XML file
convertXmlToJson('test_2.xml');
