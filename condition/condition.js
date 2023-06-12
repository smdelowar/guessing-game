const yourAge = 40;
const brotherAge = 40;

if (yourAge >= brotherAge) {
   document.write("You are elder  <br/> ");
} else {
   document.write("Your Bother is elder <br/> ");
}
if (yourAge > brotherAge) {
   document.write("You are elder  <br/> ");
} else if (brotherAge > yourAge) {
   document.write("Your Brother is elder   <br/>");
} else {
   document.write("Your and your brother are same  <br/>");
}
// switch statement
const day = prompt("Enter your day");

switch (day) {
   case "0":
      document.write("Saturday <br/>");
      break;
   case "1":
      document.write("Sunday <br/>");
      break;
   case "2":
      document.write("Monday <br/>");
   case "3":
      document.write("Tuesday <br/>");
      break;
   case "4":
      document.write("Wednesday <br/>");
      break;
   case "5":
      document.write("Thursday <br/>");
      break;
   case "6":
      document.write("Friday <br/>");
      break;
   default:
      document.write("invalid day <br/>");
}
// GPA calcolator

let marks = prompt("Enter your number");

if (marks >= 80) {
   document.write("You got A+ <br/>");
} else if (marks >= 70) {
   document.write("You got A- <br/>");
} else if (marks >= 60) {
   document.write("You got B <br/>");
} else if (marks >= 50) {
   document.write("You got C <br/>");
} else if (marks >= 40) {
   document.write("You got D <br/>");
} else {
   document.write("You are Failed <br/>");
}

// Logical condition

let number = prompt(" Enter your number");
if (number > 100 || 0) {
   document.write("Number is invalid");
} else if (number > 80 && 100) {
   document.write(" You Got A+ <br/>");
} else if (number > 70 && 79) {
   document.write(" You Got A-<br/>");
} else if (number > 60 && 69) {
   document.write(" You Got A <br/>");
} else if (number > 50 && 59) {
   document.write(" You Got B <br/>");
} else if (number > 40 && 49) {
   document.write(" You Got C<br/> ");
} else if (number > 33 && 39) {
   document.write(" You Got D  <br/>");
} else {
   document.write(" You are failed <br/>");
}

// Srting metnod

let str = "bangladesh";

// console.log(test.slice(2, 5));
console.log(str.replace("bangladesh", "World"));

let letter = prompt("enter your letter");
letter = letter.toLowerCase();

switch (letter) {
   case "a":
   case "e":
   case "i":
   case "o":
   case "u":
      document.write("letter is vowel <br/>");

   case "a":
      document.write("number is vowel <br/>");
      break;
   case "u":
      document.write("number is vowel <br/> ");
      break;
   case "i":
      document.write("Number is vowel  <br/>");
      break;
   case "o":
      document.write("Number is vowel <br/> ");
      break;
   case "u":
      document.write("number is vowel <br/> ");
      break;
   case "y":
      document.write("Number is vowel  <br/>");
      break;
   default:
      document.write("Consonant number <br/>");
}
