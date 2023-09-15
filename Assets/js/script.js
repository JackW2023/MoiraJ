const userInput = document.querySelector("#userInput");


const settings = {
	async: true,
	crossDomain: true,
	url: 'https://horoscope-astrology.p.rapidapi.com/dailyphrase',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'horoscope-astrology.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});



const url5 = 'https://fortune-cookie4.p.rapidapi.com/';
const apiKey2 = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';
const option1 = {
	method: 'Get',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
	  }
}

fetch(url5, option1)
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data);
	})




function inputAPI(answer){
	
	
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
		console.log(data); // Log the data to the console
	})
	.catch(error => {
		console.log("Error:", error); // Log any errors
	});
}



userInput.addEventListener("submit",function(e) {
	e.preventDefault();
	const answer = new FormData(userInput).get("answers")
	inputAPI(answer);
})

