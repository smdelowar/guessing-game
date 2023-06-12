// Guessing Game
let numOfOwn = 0;
let numOfLost = 0;

for (let i = 1; i <= 10; i++) {
   let guessNumber = parseInt(prompt(" Enter your Guess Number from 1 to 10 "));

   let random = Math.floor(Math.random() * 10) + 1;
   if (guessNumber == random) {
      console.log(" you have won");
      numOfOwn++;
   } else {
      console.log("You have lost");
      numOfLost++;
   }
}
document.write(" Total number of Won    " + numOfOwn + "<br/>");
document.write(" Total number of Won  " + numOfLost + "<br/>");
