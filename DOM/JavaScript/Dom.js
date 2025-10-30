
// Dom - Document Object Model

// console.log(window.innerHeight,window.innerWidth);

// window.open("https://www.google.com");

// window.close();

// window.print();

// window.moveTo(500, 100);
// window.resizeTo(500, 500);



// Bom - Browser Object Model===============================(Location)==================================================================================

// console.log(screen.width,screen.height);

// console.log(location);

// setInterval(() => {

//       location.href="https://www.google.com";

// },5000);


// setInterval(() => {

//     // document.body.style.background="red";
//     // document.body.style.background=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
//     // // document.body.style.background=`hsl(${Math.random()*360},100%,50%)`;
//     // document.body.style.background=`#${Math.floor(Math.random()*16777215).toString(16)}`;
//     // document.title=`Time : ${new Date().toLocaleTimeString()}`;

// },1000);



// History=================================================================================================================

// console.log(history);

// history.back();
// history.forward();
// history.go(-1);
// history.pushState({name:"sachin"},"","?name=sachin");
// history.replaceState({name:"sachin"},"","?name=sachin");



const person = {
    name: "selvin",
    place: "chennai", // property 

    greetUser(){
        return `Hello my name is ${this.name} and coming from ${this.place}`;
    },

};

// person.name = "selvin";
// person.place = "Bangalore";

// const personone = person.greetUser();

// console.log(personone);

// // print the document 

// // document.writeln(personone);


// document.body.innerHTML = `<h1>${personone}</h1>`;


// const userinput = prompt("Enter your name : ");
// const userplace = prompt("Enter your place : ");

// person.name = userinput;
// person.place = userplace;

// document.body.innerHTML =  person.greetUser();

document.body.style.backgroundColor="lightblue";

  document.body.innerHTML += "<h2>Welcome, Darling!</h2>";


  const newoara = document.createElement("p");

  newoara.textContent ="this is a new paragraph created using js"

  document.body.appendChild(newoara);


    document.body.style.color = "purple";

    //  document.body.innerHTML = "";


//     document.body.onclick = function() {
//     alert("You clicked on the body!");
//   }


//   document.body.className = "dark"; 


// Object.assign(document.body.style, {
//     backgroundColor: "green",
//     color: "white",
//     fontFamily: "Arial",
//     textAlign: "center"
//   });


  document.body.addEventListener("mousemove", (e) => {
    document.body.style.backgroundColor = `rgb(${e.clientX % 255}, ${e.clientY % 255}, 150)`;
  });

//   const allElements = document.body.children;
//   console.log(allElements);

  console.log(document.body.getElementsByTagName("*").length);