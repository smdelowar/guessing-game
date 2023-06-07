// GPA calcolator

let marks = prompt("Enter your number");

if (marks >= 80) {
   console.log("You got A+");
} else if (marks >= 70) {
   console.log("You got A-");
} else if (marks >= 60) {
   console.log("You got B");
} else if (marks >= 50) {
   console.log("You got C");
} else if (marks >= 40) {
   console.log("You got D ");
} else {
   console.log("You are Failed");
}

// Logical condition

let number = prompt(" Enter your number");
if (number > 100 || 0) {
   console.log("Number is invalid");
} else if (number > 80 && 100) {
   console.log(" You Got A +");
} else if (number > 70 && 79) {
   console.log(" You Got A -");
} else if (number > 60 && 69) {
   console.log(" You Got A ");
} else if (number > 50 && 59) {
   console.log(" You Got B ");
} else if (number > 40 && 49) {
   console.log(" You Got C ");
} else if (number > 33 && 39) {
   console.log(" You Got D ");
} else {
   console.log(" You are failed");
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
      console.log("letter is vowel");

   case "a":
      console.log("number is vowel");
      break;
   case "u":
      console.log("number is vowel");
      break;
   case "i":
      console.log("Number is vowel");
      break;
   case "o":
      console.log("Number is vowel");
      break;
   case "u":
      console.log("number is vowel");
      break;
   case "y":
      console.log("Number is vowel");
      break;
   default:
      console.log("consunant number");
}

// while loop
for (let i = 1; i <= 10; i++) {
   if (i == 5) {
      continue;
   }
   document.write(" " + i);
}

let a = 10;
while (a >= 1) {
   document.write(" " + a);
   a--;
}

let num = 5;
result = num * num;
{
   document.write(" Result " + result + " <br/>");
}

// Function hare

function square(num) {
   result = num * num;
   document.write(" result " + result + "<br/>");
}
square(5);
square(6);
square(7);
square(8);
square(9);

// array hare

let name = [5, 10, 20, 30, 40];
document.write(name[4]);

// create object
let student1 = {
   name: "Delowar hossain ",
   age: 26,
   gender: "Male",
   lang: ["Bangla", "English", "hindi"],
};
let student2 = {
   name: "shishir",
   age: 26,
   gender: "male",
   lang: ["bangla", "english", "hindi"],
};
console.log(student1.lang);

// easy to create object
function student(name, age, gender, lang) {
   this.name = name;
   this.age = age;
   this.gender = gender;
   this.lang = lang;
   this.display = function () {
      console.log(this.name);
      console.log(this.age);
      console.log(this.gender);
      console.log(this.lang);
   };
}

let student3 = new student(" D. hossain", 26, "male", [
   "Bangla",
   "English",
   "hindi",
]);
let student4 = new student(" Shishir  hossain", 27, "male", [
   "Bangla",
   "English",
   "hindi",
]);
let student5 = new student(" Sabbir  hossain", 27, "male", [
   "Bangla",
   "English",
   "hindi",
]);
student3.display();
student4.display();
student5.display();
