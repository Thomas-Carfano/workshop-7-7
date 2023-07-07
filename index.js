const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];

//connect html & js files
function main(a) {
const root = document.getElementById("root");

//Create title for webpage
const h1 = document.createElement("h1");
h1.innerHTML = "FREELANCERS:";
h1.style.textAlign = "center";
h1.style.color = "blue";
h1.style.fontFamily = "cursive";
root.appendChild(h1);


//Create empty array to print to screen after looping through array of objects
let liNames = [];
a.forEach((person) => {
    liNames.push(`<li> ${person.name} </li>`);
});

//print array to screen
const h3 = document.createElement("ul");
// remove comma's from array
h3.innerHTML = liNames.join("");
h3.style.fontFamily = "cursive";
root.appendChild(h3);
};

//call the main function
main(users);