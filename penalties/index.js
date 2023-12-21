const axios = require('axios');
const fs = require('fs');
const cheerio = require('cheerio');

// Function to sleep for a given milliseconds
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// Function to fetch and save NFL penalties data for a given year
async function fetchAndSaveNFLData(year) {
    try {
        const url = `https://www.nflpenalties.com/index.php?view=total&year=${year}`;
        const response = await axios.get(url);
        
        // Use cheerio to parse the HTML and extract table data
        const $ = cheerio.load(response.data);
        const table = $('.footable');
        const tableData = [];

        table.find('tr').each((i, elem) => {
            const row = {};
            $(elem).find('td').each((j, td) => {
                const key = $(table.find('th')[j]).text().trim();
                const value = $(td).text().trim();
                row[key] = value;
            });
            if (Object.keys(row).length > 0) {
                tableData.push(row);
            }
        });

        // Convert the table data to JSON format
        const json_data = JSON.stringify(tableData, null, 2);

        // Write JSON data to a file
        const file_name = `nfl_penalties_${year}.json`;
        fs.writeFileSync(file_name, json_data);

        console.log(`Data for year ${year} saved.`);
    } catch (error) {
        console.error(`Error fetching data for year ${year}: ${error}`);
    }
}

// Loop through the years 2023 to 2020
async function main() {
    for (let year = 2023; year >= 2020; year--) {
        await fetchAndSaveNFLData(year);
        await sleep(1000);
    }
}

main();
