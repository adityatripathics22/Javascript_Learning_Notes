
/*
=====================================================
  THIS kEYWORD
=====================================================
this keyword special keyword hai ,kyunki jaise ki baki sare keyword ki value same rehti hai 
this ki value ya nature badal jata hai iss baaat se ki aap kaha usko use kar rhe ho
*/

// Global Scope
console.log(this);

//Function Scope
function abcd(){
    console.log(this);
}
abcd();

//method ke andar
let obj = {
    name : "ADITYA",
    age : 22 ,
    sayName : function(){
        console.log(this);
    }
}
obj.sayName();

/*
global - window 
function - window
method with es5 fnc - object 
methos with es6 arrow fnc - window 
es5 fnc inside es5 method = window 
es6 arrow fnc inside es5 function - object

kabhi bhi hume method ke function ko arrow function nhi banana hai warna wo apni value ko 
loose kar dega aur wo window ban jayega
*/

//event handler
let h1 = document.querySelector("h1")
h1.addEventListener("click", function(){
    alert();
    console.log(this.style.color = "red");
});