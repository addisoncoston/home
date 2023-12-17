const axios = require('axios');
var CryptoJS = require("crypto-js");
const moment = require("moment-timezone");

const baseUrl = 'https://api.ngs.nfl.com'; // Replace with the actual base URL of the API
const searchTerm = 'Patrick Mahomes';
const season = 2022;


var dateToday = moment().tz("America/Los_Angeles").format("MMDDYYYY");
console.log(dateToday)
// var apiId = "nflnetwork_api" + "Q35vXdvJ4TYX0CkK" + "AKIAIS26IC4ROU7OM74A" + dateToday
var apiId = "nflnetwork_api" + "Q35vXdvJ4TYX0CkK" + "AKIAIS26IC4ROU7OM74A" + dateToday

var hash = CryptoJS.HmacSHA1(apiId, "+Y+JUvlk28Oy9tpBy+hOeqYtVrgnSOD3j8/PJ4sz");
var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
authKey = "NGS AKIAIS26IC4ROU7OM74A:" + hashInBase64
console.log(authKey)

// Function to fetch player ID
function fetchPlayerId(name) {
    return axios.get(`${baseUrl}/league/player/search`, {
        params: {
            term: name
        },
        headers: {
            Authorization: authKey
        }
    })
    .then(response => {
        const players = response.data; // The response should be an array of players matching the search term
        const player = players.find(p => p.name === name); // Adjust the condition based on the actual structure of the response
        return player.id; // Assuming 'id' is the field containing the player ID
    });
}

// Function to fetch touchdowns using player ID
function fetchTouchdowns(playerId) {
    return axios.get(`${baseUrl}/player/stats/grouping/season`, {
        params: {
            nflId: playerId,
            season: season
        },
        headers: {
            Authorization: authKey
        }
    })
    .then(response => {
        const touchdowns = response.data; // Process the response to extract touchdown data
        console.log(touchdowns);
    })
    .catch(error => {
        console.error('Error fetching touchdown data:', error);
    });
}

// Fetch Patrick Mahomes' player ID and then his touchdown statistics
// fetchPlayerId(searchTerm)
//     .then(playerId => {
//         if (playerId) {
//             fetchTouchdowns(playerId);
//         } else {
//             console.error('Player not found');
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching player ID:', error);
//     });
