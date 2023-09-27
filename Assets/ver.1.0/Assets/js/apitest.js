
// Anime gif working api
const settings2 = {
	async: true,
	crossDomain: true,
	url: 'https://any-anime.p.rapidapi.com/anime/gif',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
	}
};



$.ajax(settings2).done(function (response) {
	console.log(response);
});


// Getting API method using jQuery
const settings3 = {
	async: true,
	crossDomain: true,
	url: 'https://fortune-cookie4.p.rapidapi.com/',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb',
		'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
	}
};

$.ajax(settings3).done(function (response) {
	console.log(response);
});


// Getting API method using fetch with arrow function
const url4 = 'https://fortune-cookie4.p.rapidapi.com/';
const apiKey = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';  // Replace this with your actual API key

fetch(url4, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'fortune-cookie4.p.rapidapi.com'
  }
})
.then(response => response.json())  // Parse the response JSON
.then(data => {
  console.log(data);  // Log the data to the console
})
.catch(err => {
  console.log("Error:", err);  // Log any errors
});




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
	.then(function(response) {
		return response.json()
	})
	.then(function(data){
		console.log(data);
	})