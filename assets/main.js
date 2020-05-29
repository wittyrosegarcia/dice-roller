console.log("hi")

let numOfDiceRoll= document.querySelector("#numberOfDiceRoll");
let numTotalDiceRoll= document.querySelector("#Total-Roll");
let numRollButton= document.querySelector("#Roll-Button");
let numResetButton= document.querySelector("#Reset-Button");
let numShowAllResetButton= document.querySelector("#ShowAll-RollsButton");
let numListOfAllDieRoll= document.querySelector("#ListOfAll-DieRolls");

let numberRolled;
let dieRoll= [];

numRollButton.addEventListener("click",function(){
   let newNumOfDiceRoll = Number(numOfDiceRoll.value)
   let counter = 0 
   let sum = 0
   while (counter < newNumODiceRoll){
      numberRolled = Math.floor(Math.random()* 6) + 1
      dieRoll.push (numberRolled)
      counter++
      sum += numberRolled;
   }
   numTotalDiceRoll.innerHTML = sum;
})


