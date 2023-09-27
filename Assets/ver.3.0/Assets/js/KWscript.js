const displayApi = document.querySelector(".Api-Return");

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
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);
        displayApi.textContent = data.data.message;
    })
    .catch(function (error) {
        console.error("There was an error:", error);
    });