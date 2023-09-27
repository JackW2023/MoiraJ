const headerEl = document.querySelector("#header")
const displayBlock = document.querySelector("#main-contents")
const signEl = document.querySelector(".selected-sign");
const signImg = document.querySelector(".right-section img")
const weeklyHoro = document.querySelector(".weekly-horo");
const nextPageBtn = document.querySelector(".nextpage-btn");
const userInput = document.querySelector("#userInput");
const pageTwo = document.querySelector("#kt-index");
const pageThree = document.querySelector("#jw-index");
const preSelected = document.querySelectorAll("option");
const insideContainer = document.querySelector(".inside-container");


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
	const clearBtn = document.createElement("button");
	clearBtn.textContent = "Delete Sign";
	clearBtn.addEventListener('click', () => {
		localStorage.clear();
		clearBtn.style.display = "none";

		// Reset the selected option after clearing local storage
		preSelected[0].selected = true;
	});
	insideContainer.prepend(clearBtn);

	console.log(storedItem);

}

// I am getting the data from the API 
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
	signImg.src = `../images/${capSunSign}.png`;

	// I am appending selected sign
	headerEl.append(signEl);
	displayBlock.appendChild(signImg);

	weeklyHoro.textContent = data.horoscope;
	displayBlock.appendChild(weeklyHoro);
}



// Testing
// const answer = "libra"
// inputAPI(answer)


userInput.addEventListener("submit", function (e) {
	e.preventDefault();
	// getting the value from user input
	const answer = new FormData(userInput).get("answers")
	localStorage.setItem('sunsign', answer);
	pageTwo.style.display = "none";
	pageThree.style.display = "block";
	inputAPI(answer);
})


checkStorage()