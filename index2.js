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
function main(b) {
    const root = document.getElementById("root");
    
    //Create title for webpage
    const h1 = document.createElement("h1");
    h1.innerHTML = "FREELANCERS:";
    h1.style.textAlign = "center";
    h1.style.color = "blue";
    h1.style.fontFamily = "cursive";
    root.appendChild(h1);
    
    //print array to screen
    const ulList = document.createElement("ul");

    for(i = 0; i < b.length; i++){
        const list = document.createElement("li");
        list.innerHTML = `<li> Name: ${b[i].name}, Age: ${b[i].name}, Occupation: ${b[i].occupation} </li>`;
        list.style.fontFamily = "cursive";
        ulList.appendChild(list)
    }
    // remove comma's from array
    root.appendChild(ulList);
    };

    
    //call the main function
    main(users);