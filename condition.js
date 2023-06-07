const yourAge = 40;
const brotherAge = 40;

// if (yourAge >= brotherAge) {
//    console.log("You are elder");
// } else {
//    console.log("Your Bother is elder");
// }
if (yourAge > brotherAge) {
   console.log("You are elder");
} else if (brotherAge > yourAge) {
   console.log("Your Brother is elder");
} else {
   console.log("Your and your brother are same");
}
// switch statement
const day = 7;

switch (day) {
   case 0:
      console.log("Saturday");
      break;
   case 1:
      console.log("Sunday");
      break;
   case 2:
      console.log("Monday");
   case 3:
      console("Tuesday");
      break;
   case 4:
      console.log("Wednesday");
      break;
   case 5:
      console.log("Thursday");
      break;
   case 6:
      console.log("Friday");
      break;
   default:
      throw new Error("invalid day");
}
