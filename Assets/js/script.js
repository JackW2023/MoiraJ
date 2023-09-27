// Page elements
const page1 = document.querySelector("#page-1");
const page2 = document.querySelector("#page-2");
const page3 = document.querySelector("#page-3");
const page4 = document.querySelector("#page-4");

// Page 1 elements
const mainContentsP1 = document.querySelector("#pg1-main-contents");
const pg1H1 = document.querySelector(".pg1-h1");
const pagePortalP1 = document.querySelector("#pg1-button");


// Page 2 elements
const userInput = document.querySelector("#userInput")
const preSelected = document.querySelectorAll("option");
const insideContainer = document.querySelector(".inside-container");

// Page3 elements
const headerEl = document.querySelector("#header")
const displayBlock = document.querySelector("#main-contents")
const signEl = document.querySelector(".selected-sign");
const signImg = document.querySelector(".right-section img")
const weeklyHoro = document.querySelector(".weekly-horo");
const nextPageBtn = document.querySelector("#page4-btn");
const nextPageImg = document.querySelector("#page4-img");

// Page4 elements
const fortuneResult = document.querySelector("#fortune-api-result");
const homePagePortal = document.querySelector("#pg4-btn");


// This function set will hide all the pages at the beginning
function hidePages() {
	page1.style.display = "block";
	page2.style.display = "none";
	page3.style.display = "none";
	page4.style.display = "none";
}


// This function checks all if there are any storage at the beginning 
function checkStorage() {
	console.log(preSelected);

	const storedItem = localStorage.getItem("sunsign");
	if (storedItem) {
		for (let i = 0; i < preSelected.length; i++) {
			const sign = preSelected[i].value;
			if (sign === storedItem) {
				// preSelected[i].setAttribute('selected',true);
				preSelected[i].selected = true;
			}

		}

	}

	// Create the delete button
	// const clearBtn = document.createElement("button");
	// clearBtn.textContent = "Delete Sign";
	// clearBtn.addEventListener('click', () => {
	// 	localStorage.clear();
	// 	clearBtn.style.display = "none";

	// 	// Reset the selected option after clearing local storage
	// 	preSelected[0].selected = true;
	// });
	// insideContainer.prepend(clearBtn);

	// console.log(storedItem);

}

// I am getting the data from the  Horoscope API 
function inputAPI(answer) {
	const url = `https://horoscope-astrology.p.rapidapi.com/horoscope?day=week&sunsign=${answer}`;
	// My API Key
	const apiKey = '4a562791d8msh9b0c56728383034p1b1e0djsn0aa015a10bfb';
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


// This function is for capitalization
function capitalize(sign) {
	return sign.charAt(0).toUpperCase() + sign.slice(1).toLowerCase();
}

// This function display API results
function displayingResult(data) {
	headerEl.innerHTML = "";
	displayBlock.innerHTML = "";
	// capitalizing the first letter of the selected sign
	let capSunSign = capitalize(data.sunsign);
	// setting capped sign to signEL
	signEl.textContent = capSunSign;
	// getting images
	signImg.src = `./Assets/images/${capSunSign}.png`;

	// I am appending selected sign
	headerEl.append(signEl);
	displayBlock.appendChild(signImg);

	weeklyHoro.textContent = data.horoscope;
	displayBlock.appendChild(weeklyHoro);
}






// KW Script Getting Fortune Cookies API
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
        fortuneResult.textContent = data.data.message;
    })
    .catch(function (error) {
        console.error("There was an error:", error);
    });









// This event listener is for the button on page 1
	// when it click it will move on to page 2 and hide page 1
pagePortalP1.addEventListener("click", function(){
	page1.style.display = "none"
	page2.style.display = "block"
})





// Testing
// const answer = "libra"
// inputAPI(answer)



//  This event listener is for page 2
userInput.addEventListener("submit", function (e) {
	e.preventDefault();
	// getting the value from user input
	const answer = new FormData(userInput).get("answers")
	localStorage.setItem('sunsign', answer);
	page2.style.display = "none";
	page3.style.display = "block";
	inputAPI(answer);
})


// This event Listener is for page 3
nextPageBtn.addEventListener("click", function(){
	page3.style.display = "none";
	page4.style.display = "block";
})
nextPageImg.addEventListener("click", function(){
	page3.style.display = "none";
	page4.style.display = "block";
})



// This event Listener is for page 4 returning to page 1
homePagePortal.addEventListener("click", function(){
	page4.style.display = "none";
	page1.style.display = "block";
})

hidePages()
checkStorage()