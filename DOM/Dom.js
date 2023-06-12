let head1 = document.getElementById("heading1");
let head2 = document.getElementById("heading2");
let head3 = document.getElementById("heading3");
let head4 = document.getElementById("heading4");
head1.innerHTML = "How are you";
head2.innerHTML = "How are you";
head3.innerHTML = "How are you";
head4.innerHTML = "How are you";

let first = document.getElementsByTagName("h2")[1];
first.innerHTML = "Are you hare";

let firstClass = document.getElementsByClassName("head2")[1];
firstClass.innerHTML = "Can you Hare me";

let nameSelector1 = document.querySelector(" a");
let nameSelector2 = document.querySelector(".my a");
let nameSelector4 = document.querySelector("li a");
let nameSelector3 = document.querySelector("#name");
nameSelector1.innerHTML = "Bla Bla Bla Bla";
nameSelector2.innerHTML = "Bla Bla Bla Bla";
nameSelector3.innerHTML = "Bla Bla Bla Bla";
nameSelector4.innerHTML = "Bla Bla Bla Bla";
nameSelector1.style.backgroundColor = "red";
nameSelector1.style.textDecoration = "none";
nameSelector2.style.textDecoration = "none";
nameSelector4.style.textDecoration = "none";
nameSelector1.style.fontSize = "1.5rem";
let selectorAll = document.querySelectorAll("p")[1];
selectorAll.innerHTML = " Nothing Happened Hare";

let peralog = document.querySelector("#peralog");
function login() {
   peralog.innerHTML = "Login hare";
}

function logout() {
   peralog.innerHTML = "Logout hare";
}

let newCreate = document.createElement("h1");
let text = document.createTextNode(" Welcome to my home");

newCreate.appendChild(text);
let newAdd = document.getElementById("newId");
newAdd.appendChild(newCreate);

newElement = document.createElement("p");
let pText = document.createTextNode(
   "hi , how are you ? What's  doing everything."
);

newElement.appendChild(pText);
let nAdd = document.getElementById("newId");
nAdd.appendChild(newElement);
let heading = document.createElement("h2");
let text1 = document.createTextNode("who the hell are you");

heading.appendChild(text1);
let addHeading = document.getElementById("newId");
addHeading.appendChild(heading);
let heading1 = document.getElementsByTagName("h3")[0];
newId.removeChild(heading1);
