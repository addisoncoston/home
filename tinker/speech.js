const fs = require("fs");

async function query(filename) {
	const data = fs.readFileSync(filename);
	const response = await fetch(
		"https://api-inference.huggingface.co/models/harshit345/xlsr-wav2vec-speech-emotion-recognition",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: data,
		}
	);
	const result = await response.json();
	return result;
}

query("C:\\Users\\addison.coston\\Documents\\Projects\\_old\\nfl-fast-nagurski_old\\test\\schop_1min.wav").then((response) => {
	console.log(JSON.stringify(response));
});