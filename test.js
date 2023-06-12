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
