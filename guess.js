/*
create a program that guesses a num between 1-10 then asks us to guess that num.
if it higher say "too high" and ask again.
if lower say "too low" and ask again.
if it's the right num say "congratulations' and exit".
*/

import readline from "readline-sync"

let userGuessedRight = false

//while(true){
    // guess a num bet 1-10 but with ceil-can be 10. with floor can be up tp 9
let numberChosen = Math.ceil(Math.random() * 10)//ask for a guess of our num.
//console.log(numberChosen)
//}
let guess = ""
while(numberChosen != guess) {
let guess = readline.question("What's your guess?")
if (guess == numberChosen)// is it equal to
{
    console.log("congratulations")
    userGuessedRight = true // get out
}
if (guess > numberChosen)
{
    console.log("Too High")
    //userGuessedRight = false 
}
if (guess < numberChosen)
{
    console.log("Too Low")
    //userGuessedRight = false
}
// console.log(guess)
//}
// while(!userGuessedRight){
// console.log("What is your guess?")
}
