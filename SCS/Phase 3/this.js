
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
THIS KI VALUE

global - window 
function - window
method with es5 fnc - object 
methos with es6 arrow fnc - window 
es5 fnc inside es5 method = window 
es6 arrow fnc inside es5 function - object
event handler - element 
class - blank obj

kabhi bhi hume method ke function ko arrow function nhi banana hai warna wo apni value ko 
loose kar dega aur wo window ban jayega

arrow fnc humesa apni value parent se lete hai
*/

//event handler
let h1 = document.querySelector("h1")
h1.addEventListener("click", function(){
    alert();
    console.log(this.style.color = "red");
});

//THIS CALL APPLY BIND
//function ko call krte waqt aap set kar skte ho ki uski this ki value ky hogi

let aditya = {
    name: "harsh",
}

function abcde(){
    console.log(this.name);
}

abcde.call(aditya);

//apply- ye kehta hai ki aap sirf 2 hi parameters bhej skte ho
let adityaa = {
    name: "harsh",
}

function abcdef(a , b  ,c){
    console.log(this , a , b , c);
}

abcdef.apply(adityaa ,[ "a" , 2 , 3]);

//bind - ye function ko chalata nhi hai balki eak naya copy bana deta hai 
//function ki jisme this ki valur object hoti hai
let adityaaa = {
    name: "harsh",
}

function abcdefg(a , b  ,c){
    console.log(this , a , b , c);
}

let me = abcdefg.bind(adityaaa ,"b" , 2 , 3);

me();