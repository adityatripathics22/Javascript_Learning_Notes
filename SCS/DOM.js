// dom manipulation
// html se element select karna
// text badalna
// html badalna
// css badalna
// attribute badalna
// event listener lagana

//there are 3 ways to select elements before we manipulate them
// 1. getElementById
// let element = document.getElementById("myId");
// console.log(element); // <div id="myId">Hello World</div>

// sometimes if console.log prints as a tag and not in opening format 
// then use console.dir(element) to see all properties of the element

//2. getElementsByClassName
// let elements = document.getElementsByClassName("myClass");
// console.log(elements); // HTMLCollection of elements with class "myClass"
// HTMLCollection is similar to array but not exactly an array

// 3. querySelector
//let element = document.querySelector(".myClass"); // selects the first element with class "myClass"
// let element = document.querySelector("#myId"); // selects the element with id "myId"
// let elements = document.querySelectorAll(".myClass"); // selects all elements with class "myClass"

/*
let h1 = document.querySelector("h1");
console.dir(h1);
h1.innerText = "harsh hu mai"; // changes the inner HTML of the h1 element
// h1.style.color = "red"; // changes the text color to red
h1.innerHTML = "<i>harsh hu mai</i>"; // changes the inner HTML to italicized text

let img = document.querySelector("img" );
//img.setAttribute("what to change" , "change to what" );
img.setAttribute(
    "src" ,
    "https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
);

console.log(img.getAttribute("src"));

// let h2 = document.querySelector("h1");
// console.log(h2);


//create element
let newh1 = document.createElement("h1");
newh1.innerText = "yeh naya h1 hai";
newh1.style.color = "blue";
//document.body.prepend(newh1);//to attach the element to the body at the start
// document.body.append(newh1);//to attach the element to the body at the end
 

document.querySelector("div").append(newh1);//to attach the element to a specific div at the end


let div =document.querySelector("div");
console.dir(div);
div.textContent = "yeh text content hai "; // ye puri div ke andar ka text content hata dega aur isse replace kar dega

let h1s = document.querySelector("h1");
//console.dir(h1s);
h1s.classList.add("hulu");
h1s.classList.remove("hulu");
h1s.classList.toggle("hulu");


let h2s = document.querySelector(".abcd");
console.dir(h2s);
h2s.classList.add("hulu");
*/

let div = document.querySelector("div");
console.dir(div.childNodes);

let div2 = document.querySelector("div");
div2.title = "yeh mera title hai"; // ye title attribute add kar dega
