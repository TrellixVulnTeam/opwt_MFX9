//document.getElementById('count-el').innerText = 5; 

// let firstBatch = 5
// let secondBatch = 230

// let count = firstBatch + secondBatch; 

// console.log(count);

// let myAge = 22; 
// let humanDogRatio = 1 / 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge); 

// let count = 5

// count = count + 1

// console.log(count)

let name = "Matteo"; 
let greetings = " Welcome back "; 
let welcomeEl = document.getElementById("welcome-el"); 

let incBtn = document.getElementById('increment-btn');
let countEl = document.getElementById('count-el');
let count = 0;
let countSave = 0;

let saveBtn = document.getElementById('save-btn');
let saveEl = document.getElementById("save-el"); 

welcomeEl.innerText = greetings + name + "!";
welcomeEl.innerText += " 🐾";


function increment() {
    count += 1;
    countEl.textContent = count;

    let message = "You have a new notifications";
    let messageToUser = message + "! Click and love " + count + " cats.";

    console.log(messageToUser); 
};


function save() {
    //let countSave = count + " - ";
    //saveEl.textContent += countSave; 
    if (countSave > 20) {
        saveEl.textContent = "OMG! Too much cats saved! Thank you! ❤️"; 
    } else {
        countSave += count
        saveEl.textContent = countSave; 
        count = 0;
        countEl.textContent = 0;
    }
}


incBtn.addEventListener('click', increment);

saveBtn.addEventListener('click', save);


let greeting = "Hi! My name is "; 

let myGreeting = greeting + name + "."; 

console.log(myGreeting); 



// HOW MANY CATS?

let num1 = 8; 
let num2 = 2;

document.getElementById('num1-el').textContent = num1; 
document.getElementById('num2-el').textContent = num2; 

let addBtn = document.getElementById('add-btn'); 
let subtractBtn = document.getElementById('subtract-btn'); 
let divideBtn = document.getElementById('divide-btn'); 
let multiplyBtn = document.getElementById('multiply-btn'); 

let saveResults = document.getElementById('results')

function add() {
    let results = num1 + num2;
    saveResults.textContent = results;
}

function subtract() {
    let results = num1 - num2;
    saveResults.textContent = results;
}

function divide() {
    let results = num1 / num2;
    saveResults.textContent = results;
}

function multiply() {
    let results = num1 * num2;
    saveResults.textContent = results;
}

addBtn.addEventListener('click', add);

subtractBtn.addEventListener('click', subtract);

divideBtn.addEventListener('click', divide);

multiplyBtn.addEventListener('click', multiply);


// BlackJacats Game

// let firstCard = getRandomCard(); 
// let secondCard = getRandomCard(); 

let cards = [];
let sum = 0; 
let hasBlackJacats = false; 
let isAlive = false; 
let message = ""; 

let playBtn = document.getElementById('play-btn'); 
let messageEl = document.getElementById('message-el'); 
let sumEl = document.getElementById('sum-el'); 
let cardEl = document.getElementById('card-el'); 
let newBtn = document.getElementById('new-btn'); 
let kibbleEl = document.getElementById('kibble-el'); 

let kibble = {
    text: "Kibble earned: ",
    amount: 300
}

kibbleEl.textContent = kibble.text + kibble.amount;

function getRandomCard () {
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber === 1) {
        return 11; 
    }else if (randomNumber >= 11) {
        return 10;
    } else {
        return randomNumber
    }    
}

function startGame () {
    isAlive = true;
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard(); 
    cards = [firstCard, secondCard]; 
    sum = firstCard + secondCard;
    renderGame(); 
}

function renderGame () {

    playBtn.classList.add('hidden');
    newBtn.classList.remove('hidden');

    cardEl.textContent = '';

for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
}

sumEl.textContent = '⭐ ' + sum + ' ⭐'; 
if (sum <= 20) {
    message = "Do you want to draw a new card?";
} else if (sum === 21) {
    message ="Meow! You've got BlackJacats!";
    hasBlackJacats = true; 
} else {
    message = "You're out of the game!";
    isAlive = false; 
}
messageEl.textContent = message; 

}

function newCard () {

    if ( isAlive && !hasBlackJacats) {
        let card = getRandomCard(); 
        sum += card; 
        cards.push(card);
        renderGame();
    }

}

playBtn.addEventListener('click', startGame);

newBtn.addEventListener('click', newCard);




// let age = 6;

// if (age < 3) {
//     console.log("You can not join the Cats Club!");
// } else {
//     console.log("Welcome!");
// }



// arrays

// let myList = [
//     "oddio",
//     "maria", 
//     "che cazzo farò della mia vita"
// ]

// console.log(myList[1]); 
// console.log(myList.length)

// let mySelf = [
//     "Matteo", 
//     22,
//     true
// ]

// let cardsArray = [7, 4];

// cardsArray.push(6); 

// console.log(cardsArray);

// cardsArray.pop();


// Counter

// for ( let count2 = 0; count2 < 21; count2 += 1) {
//     console.log(count2);
// }

// for (let count3 = 0; count3 < 101; count3 += 10 ) {
//     console.log(count3)
// }

// let mySelf = [
//     "Matteo", 
//     22,
//     true,
//     "green", 
//     false,
//     15,
//     33, 
//     "Charlestone"
// ]

// for (let i = 0; i < mySelf.length; i += 1) {
//     console.log(mySelf[i])
// }

// let crds = [6, 9, 7]; 

// for ( let i = 0; i < crds.length; i++ ) {
//     console.log(crds[i]); 
// }

// let sentences = ["hello ", "my ", "name ", "is ", "Matteo"]
// let greetEl = document.getElementById("greet-el"); 

// for (let e = 0; e < sentences.length; e += 1) {
//     greetEl.textContent += sentences[e]
// }


// let plt1 = 102; 
// let plt2 = 107; 

// function getFasterRaceTime() {
//     if (plt1 < plt2) {
//         return plt1
//     }  else if (plt1 > plt2) {
//         return plt2
//     } else {
//         return plt1
//     }
// }

// let fastesRace = getFasterRaceTime()

// console.log(fastesRace)

// let condition1 = true; 
// let condition2 = true; 

// if (condition1 && !condition2) {
//     operation();
// }

// function operation() {
//     console.log('bella');
// }

// let airbnbCastel = {
//     name: "Worthsword Castel",
//     availability: true,
//     rating: 4.5,
//     tags: ["Walles", "Castle", "United Kingdom"]
// }

// console.log(airbnbCastel.availability);
// console.log(airbnbCastel["tags"]);


// let person = {
//     name: "Matteo", 
//     age: 22,
//     country: "Italy"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData();

// let age = 15;

//     if (age < 6) {
//         console.log("free")
//     } else if (age >= 6 && age < 18) {
//         console.log("child discount")
//     } else if (age >= 18 && age < 27) {
//         console.log("student discount")
//     } else if (age >= 27 && age < 66) {
//         console.log("full price")
//     } else {
//         console.log("senior citizen discount")
//     } 

// let largeCountries = ['China', 'India', 'USA', 'Indonesia', 'Pakistan']

// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i]);
// }

// let largeCountries = ['Tuvalu', 'India', 'USA', 'Indonesia', 'Monaco']

// largeCountries.shift(); 
// largeCountries.unshift("China");

// largeCountries.pop(); 
// largeCountries.push("Pakistan"); 
// console.log(largeCountries)


// let dayOfMonth = 31; 
// let weekday = "Friday";

// if (weekday === "Friday" && dayOfMonth === 13) {
//     console.log("😱")
// }

// let hands = ["rock", "paper", "scissor"];

//     let randomNum = Math.floor(Math.random() * 3);
//     console.log(randomNum);
//     console.log(hands[randomNum]);


let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];

function sortFruit() {
    for (let f = 0; f < fruit.length; f++) {
        if (fruit[f] === "🍎") {
            appleShelf.textContent += "🍎"; 
        } else {
            orangeShelf.textContent  += "🍊";
        }
    }
}

sortFruit();