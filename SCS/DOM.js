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