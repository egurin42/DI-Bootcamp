function hello(name){
    console.log(`Hello ${name}`);
}

function ages(myAge) {
    let ageMom = 2 * myAge;
    console.log(ageMom);
    return ageMom;
}

let ageMultiple = ages(19);
console.log(ageMultiple*2);

function name1() {
    let name = prompt("Please enter your first name:");
    return name;
}

function name2(){
    let name = prompt("Please enter your middle name: If you do not have a middle name, enter no middle name");
    return name;
}

function name3() {
    let name = prompt("Please enter your last name:");
    return name;
}

// let firstName = name1();
// let middleName = name2();
// let lastName = name3();

// if (middleName === "no middle name") {
//     console.log(`Hello ${firstName} ${lastName}`);
// }
// else {
//     console.log(`Hello ${firstName} ${middleName} ${lastName}`);
// }

// **Exercise 1**
function checkDriverAge(num){
    if (num < 18){
        console.log("Sorry, you are too young to drive this car. Powering off");
    }
    else if (num == 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else{
        console.log("You are old enough to drive, Powering On. Enjoy the ride!");
    }
}

// *Exercise 2**
function changeEnough(change, due){
    let quarter = change[0] * .25;
    let dime = change[1] * .10;
    let nickel = change[2] * .05;
    let penny = change[3] * .01;
    if (quarter + dime + nickel + penny >= due){
        return true;
    }
    else {
        return false;
    }
}

// Exercise 3
function multiple23(){
    let sum = 0;
    let elements = []
    for (i = 0; i < 500; i += 23){
        elements.push(i);
        sum = sum + i
    }
    console.log(`Elements: ${elements}`);
    console.log(`Sum: ${sum}`);
}

// Exercise 4
let amazonBasket = {
    glasses: 1,
    books: 2,
    floss: 100
}

function checkBasket(){
    let item = prompt("Tell me what you want:");
    console.log(item in amazonBasket);
}

// Exercise 5
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
let shoppingList = ["banana", "orange", "apple"];

function myBill(){
    let bill = 0;
    for (i = 0; i < shoppingList.length; i++){
        if (stock[shoppingList[i]] > 0) {
            let quantity = stock[shoppingList[i]] -1;
            stock[shoppingList[i]] = quantity;
            bill += prices[shoppingList[i]];
        }
    }
    console.log(bill);
    console.log(stock);
}

// Exercise 6
function tipCalculator(){
    let bill = prompt("How much were the three meals? Make sure to separate them by commas!");
    let billArray = bill.split(",");
    let tip = [];
    let total = [];
    for (amount of billArray){
        let bills = parseInt(amount);
        let num = 0;
        let round = 0;
        if (bills < 50){
            tip.push(bills * 0.2);
            num = bills * 1.2;
            n = num.toFixed(2);
            total.push(n);
        }
        else if (bills >= 50 && bills <= 200){
            tip.push(bills * 0.15);
            num = bills * 1.15;
            n = num.toFixed(2);
            total.push(n);
        }
        else{
            tip.push(bills * 0.1);
            num = bills * 1.1;
            n = num.toFixed(2);
            total.push(n);
        }
    }
    console.log(billArray);
    console.log(tip);
    console.log(total);
}

// Daily Challenge
function WordsInFrame(){
    let sentence = prompt("Give me several words separated by commas");
    let words = sentence.split(",");
    let frame = 0
    let longest = 0;
    for (word of words){
        if (word.length > longest){
            longest = word.length;
            frame = word.length + 4;
        }
    }

    let tbstar = ""
    for (i=0; i < frame; i++){
        tbstar += "*";
    }
    
    console.log(tbstar);
    for (word of words){
        let whiteSpace = "";
        let spaces = longest - word.length;
        for (i = 0; i < spaces; i++){
            whiteSpace += " ";
        }
        console.log(`* ${word}${whiteSpace} *`);
    }
    
    console.log(tbstar);
}

// Daily Challenge: 99 Bottles of Beer
function BeerSong(){
    let bottles = parseInt(prompt("Input a starting number of bottles of beer"))
    let count = 1;
    console.log(`${bottles} bottles of beer on the wall`);
    console.log(`${bottles} bottles of beer`);
    console.log(`Take ${count} down, pass it around`);

    for (i = bottles - 1; i > 0; i -= count){
        count++;
        let bottlesLeft = i - count;
        console.log(`${i} bottles of beer on the wall`);
        console.log(`${i} bottles of beer on the wall`);
        console.log(`Take ${count} down, pass it around`);

        if (bottlesLeft > 0){
            console.log(`${bottlesLeft} bottles of beer on the wall`);
        }
        else{
            console.log(`No more bottles of beer on the wall!`);
        }
    }

}

// Hangman
function Hangman(){
    let word = "";
    let secret = "";
    while(true){
        word = prompt("Player 1, enter ONE word at least 8 letters long:")
        if (!word.includes(" ")){
            break
        }
        else{
            alert("Error!! Word is too short or multiple words");
        }
    }

        word = word.toLowerCase();
        for (i = 0; i < word.length; i++){
            secret += "*";
        }
        console.log(secret);
        alert("Player 2, start guessing letters");

        let guess = "";
        let lettersGuessedCorrect = 0;
        let lettersGuessed = "";
        let tries = 0;

        game:
        while (lettersGuessedCorrect <= secret.length){
            guess = prompt(`Progress: ${secret}\nGuess any letter!`);
            guess = guess.toLowerCase();
            console.log(guess);

            if (word.includes(guess) && !lettersGuessed.includes(guess)){
                for (i = 0; i < word.length; i++){
                    if (word.charAt(i) === guess){
                        secret = setCharAt(secret,i,guess);
                        lettersGuessedCorrect++;
                        alert(`Great guess!!\nProgress: ${secret}`);
                        if (secret === word){
                            alert("You won!");
                            break game;
                        }
                    }
                }
                lettersGuessed += `${guess} `;
                console.log(lettersGuessed);
            }

            else if (lettersGuessed.includes(guess)){
                alert("You've already guessed this. Guess again!");
            }
            
            else if(!word.includes(guess) && !lettersGuessed.includes(guess)){
                lettersGuessed += `${guess} `;
                console.log(lettersGuessed);
                alert("Wrong. Letter not in word");
                tries++;
                alert(`You have ${10 - tries} incorrect guesses left`);
                console.log(`You have ${10 - tries} incorrect guesses left`);
                if (tries == 10){
                    alert(`You lost:( The word was ${word}`)
                    break game;
                }
            }
        }
}
// Part of Hangman
    function setCharAt(str,index,chr) {
        if(index > str.length-1) return str;
        return str.substring(0,index) + chr + str.substring(index+1);
    }


// Calculator
let selectedValues = [];
let selectedOperators = [];
let sum = 0;
let finalValues = [];

function number(num){
    selectedValues.push(num);
    console.log(`Values Selected: ${selectedValues}`);
}
function operator(op){
    let current = parseInt(selectedValues.join(""));
    finalValues.push(current);
    selectedValues = [];
    console.log(finalValues);
    selectedOperators.push(op);
    console.log(`Operators Selected: ${selectedOperators}`);
}

function equal(eq){
    let current = parseInt(selectedValues.join(""));
    finalValues.push(current);
    selectedValues = [];

    if (selectedOperators[0] == "+"){
        sum = finalValues[0] + finalValues[1];
    }
    else if (selectedOperators[0] == "-"){
        sum = finalValues[0] - finalValues[1];
    }
    else if (selectedOperators[0] == "/"){
        sum = finalValues[0] / finalValues[1];
    }
    else if (selectedOperators[0] == "*"){
        sum = finalValues[0] * finalValues[1];
    }
    
    for (i = 1; i < finalValues.length; i++){
        for (j = 1; i < selectedOperators.length; i++){
            if (selectedOperators[j] == "+"){
                sum += finalValues[i+1];
            }
            else if (selectedOperators[j] == "-"){
                sum -= finalValues[i+1];
            }
            else if (selectedOperators[j] == "/"){
                sum /= finalValues[i+1];
            }
            else if (selectedOperators[j] == "*"){
                sum *= finalValues[i+1];
            }
        }
    }
    console.log(`Total: ${sum}`);
    console.log(`Values: ${finalValues}`);
    console.log(`Operators: ${selectedOperators}`);
}