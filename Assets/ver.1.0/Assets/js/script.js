const userInput = document.querySelector("#userInput");
const apiDisplay = document.querySelector("#api-result");
const horoscopeResult = document.querySelector("#display");


function inputAPI(answer) {
	
	
	const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=${answer}`;
	const apiKey = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';  // Replace with your actual API key

	fetch(url, {
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': apiKey,
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
		}
	})
	.then(response => {
		if (!response.ok) {
		throw new Error('Network response was not ok');
		}
		return response.json(); // Parse the response JSON
	})
	.then(data => {
		console.log(data);
		displayingResult(data); // Log the data to the console
	})
	.catch(error => {
		console.log("Error:", error); // Log any errors
	});
}


function displayingResult(apiResult) {
	userInput.style.display = "none"
	horoscopeResult.innerHTML = ""
	const resultTemplate = apiDisplay.content.cloneNode(true);
	const title = resultTemplate.querySelector(".selected-sign");
	title.textContent = apiResult.sunsign;

	const weeklyH = resultTemplate.querySelector(".weekly-horoscope");
	weeklyH.textContent = apiResult.horoscope;
	console.log(resultTemplate);
	horoscopeResult.append(resultTemplate);
}

// passing "e" for the event
userInput.addEventListener("submit",function(e) {
	e.preventDefault();
	const answer = new FormData(userInput).get("answers")
	inputAPI(answer);
})

