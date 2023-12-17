const fs = require('fs');
const { parseString } = require('xml2js');
const { pipeline } = require('stream');
const zlib = require('zlib');
const util = require('util');

const pipelineAsync = util.promisify(pipeline);

main("melts.prproj")

async function main(input) {
    const file = input;//process.argv[2];
    if (!file) {
        console.error('Please provide a file path');
        return;
    }

    try {
        await copyRenameAndUnzip(file);
        await convertXmlToJson(file);
    } catch (error) {
        console.error('Error:', error);
    }
}


// Function to copy, rename, and unzip the file
async function copyRenameAndUnzip(originalPath) {
    const gzipPath = originalPath.replace(/\.prproj$/, '.gz');
    const copiedPath = originalPath.replace(/\.prproj$/, '_copy.prproj');

    // Copy the .prproj file
    try {
        await fs.promises.copyFile(originalPath, copiedPath);
        console.log(`Copied to ${copiedPath}`);

        // Rename the copied .prproj to .gz
        await fs.promises.rename(copiedPath, gzipPath);
        console.log(`Renamed to ${gzipPath}`);

        // Unzip the file using gzip
        const unzipPath = gzipPath.replace(/\.gz$/, '.xml');
        await pipelineAsync(
            fs.createReadStream(gzipPath),
            zlib.createGunzip(),
            fs.createWriteStream(unzipPath)
            
        );
        console.log(`Extracted to ${unzipPath}`);
        fs.unlinkSync(gzipPath)
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

// Replace 'path/to/your/file.prproj' with the actual file path

// Function to convert XML to JSON
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const parseStringAsync = util.promisify(parseString);

async function convertXmlToJson(filePath) {
    try {
        // Read the file
        const data = await readFileAsync(filePath);

        // Parse the XML
        const result = await parseStringAsync(data);

        // Output the JSON
        console.log('JSON output:', result);

        // Optionally, write the JSON to a file
        await writeFileAsync('output.json', JSON.stringify(result, null, 2));
        console.log('JSON file written successfully');
    } catch (err) {
        console.error('Error:', err);
    }
}

// Replace 'path/to/your/file.xml' with the actual file path
