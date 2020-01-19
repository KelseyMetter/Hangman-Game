let dictionary = {
	Sports: {
		hint: 'Choose a sport',
		words: [
			'soccer',
			'footbal',
			'basketball',
			'rugby',
			'baseball',
			'bowling',
			'boxing',
			'tennis',
			'skateboarding',
			'surfing',
			'archery',
			'badminton',
			'gymnastics',
			'boxing',
			'karate',
			'volleyball',
			'wrestling',
			'golf',
			'running',
			'fishing'
		]
	},
	States: {
		hint: 'Choose a state in the U.S.A.',
		words: [
			'Alabama',
			'Alaska',
			'Arizona',
			'Arkansas',
			'California',
			'Colorado',
			'Connecticut',
			'Deleware',
			'Florida',
			'Georgia',
			'Hawaii',
			'Idaho',
			'Illinois',
			'Indiana',
			'Iowa',
			'Kanses',
			'Kentucky',
			'Louisiana',
			'Maine',
			'Maryland',
			'Massachussets',
			'Maine',
			'Michigan',
			'Minnesota',
			'Mississippi',
			'Missouri',
			'Montana',
			'Nebraska',
			'Nevada',
			'New Hampshire',
			'New Jersey',
			'New Mexico',
			'New York',
			'North Carolina',
			'North Dakota',
			'Ohio',
			'Oklahoma',
			'Oregon',
			'Pennsylvania',
			'Rhode Island',
			'South Carolina',
			'South Dakota',
			'Tennessee',
			'Texas',
			'Utah',
			'Vermont',
			'Virginia',
			'Washington',
			'West Virginia',
			'Wisconsin',
			'Wyoming'
		]
	},
	Names: {
		hint: "Choose a person's name",
		words: [
			'Kelsey',
			'Miranda',
			'Jhonatan',
			'Tansel',
			'Vahid',
			'Scott',
			'Besik',
			'Innocent',
			'Steve',
			'Alan',
			'Ammar',
			'Anthony',
			'Chan',
			'Chelsea',
			'Chris',
			'David',
			'Declan',
			'Fritz',
			'Joshua',
			'Lara',
			'Louis',
			'Rob',
			'Todd',
			'Tritsen',
			'William',
			'Sarajean',
			'Jinsung',
			'Chuck',
			'Matthew',
			'Anika',
			'Abraham',
			'Alec',
			'Anna',
			'Beverly',
			'Jen',
			'Justin',
			'Tyler',
			'Rudo',
			'Tammy',
			'Jimmy',
			'Joju',
			'Jackie',
			'Anvar',
			'Nasser',
			'Tai'
		]
	}
};

// function to get random number
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// function to start game
function start() {
	let groupKeys = Object.keys(dictionary);
	let groupCount = groupKeys.length;
	let randomGroupIndex = getRandomInt(groupCount);
	let selectGroupKey = groupKeys[randomGroupIndex];
	let selectGroup = dictionary[selectGroupKey];
	let wordCount = selectGroup.words.length;

	wordIndex = getRandomInt(wordCount - 1);

	let hint = selectGroup.hint;
	let word = selectGroup.words[wordIndex];

	console.log("Let's play Hangman!\n");
	console.log('Hint:', hint);

	// let answerArr = [];
	// for (let i = 0; i < word.length; i++) {
	// answerArr[i] = "_";
	// }
	// create a variable to store the word length
	let emptyWord = word.length;

	// while (emptyWord > 0) {
	//    console.log(answerArr.join(" "));
	// }
	console.log('_ '.repeat(emptyWord));

	// create a variable for number of guesses allowed
	let guesses = 8;

	while (guesses > 0) {
		// store letter from prompt
		let chosenLetter = prompt('\nType a letter ', '');

		if (word.indexOf(chosenLetter) > -1) {
			// console log it's a match
			console.log("\nIt's a match!");
			console.log(`You have ${guesses} more guesses.`);
			//add the letter match to the blanks
			// const newWord = word.map(x => x === chosenLetter ? chosenLetter: "_")
			//     return newWord;
			let newWord = function(word) {
				let emptyArr = [];
				for (let x in word) {
					if (x === chosenLetter) x = chosenLetter;
					x.push(emptyArr);
				}
				if (x != chosenLetter) {
					x = '_';
					x.push(emptyArr);
				}
				return newArr;
			};
			// for (let j = 0; j < word.length; j++) {
			//   if (word[j] === chosenLetter) {
			//       answerArr[j] = chosenLetter;
			//       emptyWord--;
			//   }
			// }
		} else {
			// console log it's not a match
			console.log("\nIt's not a match. Please try again.");
			//guesses--;
			guesses -= 1;
			console.log(`You have ${guesses} more guesses.`);
		}
	}
}

start();

// we randomly select a group, these group should not be the same as previous ones
// we randomly select a word inside the group

// a fixed number of tries = 8

// 3. drawing depending on current state of the game
// initially will be all spaces
// we draw the spaces equals to the word length

// 4. promt and find match or not, and follow the game logic
// prompt for a letter of the alphabet
// if letter is a match to one letter of the selected word
// we print the missing spaces and the matching letters

// if letter is not a match
// we decrement the number of tries by 1
// we check if there are remaining tries meaning tries != 0
// promt for a letter
// if tries is 0, then game over
