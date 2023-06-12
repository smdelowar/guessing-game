let poorCountry = ["Bangladesh", "SriLanka", "nepal"];
let richCountry = [...poorCountry, "Bangladesh", "SriLanka", "nepal"];
let developCountry = ["India", "Pakistan"];

richCountry.push(developCountry);

console.log(richCountry);

function summation(...numbers) {
   let sum = 0;
   for (let i of numbers) {
      sum = sum + i;
   }
   console.log(sum);
}
let total = summation(1, 2, 3, 5, 6, 10, 15);

// Dynamic Function
function name(fullName, name2) {
   return fullName;
}
let fullName = name(" Delowa hossain", "S m Shishir");
console.log(fullName);

let info = function (nameValue) {
   return nameValue;
};
let nameValue = info("S m Shishir");
console.log(nameValue);
