//words vs keywords
// js mei jinse kuch ho skta hai wo sab keywords hai 
// and jinse kuch nahi ho skta wo sab words hai
//words are just identifiers, they can be used as variable names
//keywords are reserved words, they cannot be used as variable names
// var, let, const, function, if, else, switch, case, break, default, return, for, while, do, try, catch, finally, throw, class, extends, super, import, export

// var a = 12;
// var a = 13;
//no error, var can be redeclared
//also var is function scoped

// let a = 12;
// let a = 1;
// gives error  
//let can be used in the same curly braces only where they are defined

//let is more secure than var

// global  , function , block scope
// var is function scoped, let and const are block scoped

//reassignment , redeclaration
// var can be reassigned and redeclared
// let can be reassigned but not redeclared
// const cannot be reassigned or redeclared

// var is hoisted, let and const are not hoisted

//temporal dead zone
//const is not hoisted, they are in temporal dead zone
//if we try to access them before they are declared, we will get a reference error
// var is hoisted, but it is initialized with undefined
// so if we try to access it before it is declared, we will get undefined


//hoisting -> eak variable ko jab js mei bnate hai to wo do hisso mei toot jata hai 
//`=> declaration and initialization
//declaration is hoisted to the top of the scope, initialization is not hoisted
//mtlb declaration ko top pr le aate hai aur initialization ko wahi pr rakhte hai


//IMP NOTE------> hoisting let aur const dono mei hoti hai tbhi jab hum let ko phle access krte hai to 
//                hume cannot access before initialization error milta hai mtlb declareation ho chuki hai aur wo part uppar ja chuki hai
//                but initialization nahi hui hai isliye error milta hai (reference error)

// let a = 10 ;
// {
//     let a= 20;
//     console.log("inside" , a); // 20   
// }
// console.log("outside" , a); // 10

//-----------------------------> data types

// let a = 12;

// let b = a;
// a = a+2;

// primitives -> aisi sari values jinko copy karne par tumhe eak real value mil jaye
// reference or non-primitives -> aisi values jinko copy karne par tumhe eak reference milta hai, wo value nahi milti

let a = [1 ,2 ,3];
a.pop();
let b = a;


//string , number ,boolean , null ,undefined, symbol, bigint
//arrays ,objects, functions

//reference data types mei agar tum kisi aur variable mei dusre variable ki values di hai tohagar tum eak 
// variable mei chnge kroge toh dusra bhi change hoga 


//dynamic typing --> aap data ko chnage kr skte ho

// quirks--->NaN +NaN gives false , 
//           .1 +.2 gives .300000000000004
//           [] + [] gives ''
//           1 +'1' gives 11

//type coercion-------->1 type automaticallly conbverted to another

// "5" + 1 // "51" → number converted to string
// "5" - 1 // 4 → string converted to number
// true + 1 // 2
// null + 1 // 1
// undefined + 1 // NaN

//truthy vs falsy values
// to check ---> !!

//typeof NaN === 'number'  gives true
//its because NaN failed number numerical operation....eg 2* 'harsh' gives NaN

//operators------------------->phase 3

// arithmetic 
// + - / * % **

// comparison
// == === != !== >= <= > <

// logical
// && || !

// assignment
// = += -= *= %= /=

// unary 
// ++ --  + - typeof !
// \
// ternary
// ? : 

// quirks ---> typeof null gives object but its null
//             typeof [] gives object but its Array
//             typeof NaN GIVES Number

// instanceof works only with reference valus like [] {} ()


// function print(x){
//     console.log(x + " nach rha hai");
// }

// function print2(x){
//     console.log(`$ {x} nach rha hai `);
// }
// //by using backtick we can use dynamic values in strings
// print("gadha");
// print2("ghoda");

//parameters vs arguments
// parameters are the variables that are used in the function definition
// arguments are the values that are passed to the function when it is called

//rest/spread --> ...
//they make a array of values
//rest is used in function definition to accept multiple arguments as an array

//jab arguments kai sare ho to humein utne hi parameter banane padenge , issey bachne ke liye hum rest ka use krte hai...
//rest ka use function definition mei hota hai
//spread ka use function call mei hota hai

// function add(...args) 

//return ka mtlb jaha se aaye ho wahi daal denge


//first class functions
// function abcd(val){
    
//     console.log("aditys");
//     val();

// }
// abcd(function(){
//     console.log("hello");
// });

// 159 -> 153 -> 155 -> 156 -> 160

//higher order functions

// functions that take other functions as arguments or return functions as values
// function abcd(val){
//     console.log(val)
//     return function(value){
//         console.log("aditya");
//         console.log(value)
//     }

// }
// abcd(2)(3);

//pure vs impure functions
// aese functions jo kisi bhi external state ko change nahi karte unhe pure functions kehte hai
// aese functions jo kisi bhi external state ko change karte hai unhe impure functions kehte hai

// let a =12;

// function abcd() {
//     console.log("aditya"); //not changing external state
//     a = 13; // changing external state
// }

// closures--------------->

// eak function jo return kare eak aur function aur return hone function use krega 
// parent function ka koi variable ya state

// function outer() {
//     let a = 10;
//     return function inner() {
//         console.log(a);
//     }
// }

// outer()(); // 10

// lexical scope
// eak function ke andar jo bhi variable define hote hai wo us function ke andar hi accessible hote hai
// ya keh skte hai ki wo area jaha tha wo cheez accessiblle ho skti hai

// lexical scope is the scope that is defined by the location of the function in the source code


//ARRAYS---------------------->

// in js arrays can hold any type of data
// in js if you access an index that is not defined, it will return undefined
// in js arrays are zero indexed
// in js arrays are mutable, you can change the values of the array

let arr = [23 , 12, 34, 56, 78, 90];
let arrr = arr.sort(function(a,b){
    return a-b;
})
//let arrr =arr.sort((a, b) => a - b); // sort the array in ascending order
console.log(arrr); // [12, 23, 34, 56, 78

let rev =arrr.reverse();
console.log(rev); // [90, 78, 56, 34, 23, 12]

let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map(function(value) {
    return value * 2; // multiply each element by 2
});
console.log(arr3); // [2, 4, 6, 8, 10]

let arr4 = arr2.filter(function(value) {
    return value % 2 === 0; // filter even numbers on true and false condition
});
console.log(arr4); // [2, 4]

let arr5 = arr2.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue; // sum of all elements
}, 0); // initial value is 0
console.log(arr5); // 15

let arr6 = arr2.find(function(value) {
    return value > 3; // find the first element greater than 3
});
console.log(arr6); // 4

let arr7 = arr2.findIndex(function(value) {
    return value > 3; // find the index of the first element greater than 3
}   );
console.log(arr7); // 3

let arr8 = arr2.includes(3); // check if the array includes the value 3
console.log(arr8); // true  

let arr9 = arr2.indexOf(3); // find the index of the value 3
console.log(arr9); // 2 

let arr10 = arr2.lastIndexOf(3); // find the last index of the value 3
console.log(arr10); // 2    

let arr11 = arr2.join(", "); // join the array elements into a string
console.log(arr11); // "1, 2, 3, 4, 5"

let arr12 = arr2.slice(1, 4); // slice the array from index 1 to 4 (not inclusive)
console.log(arr12); // [2, 3, 4]

let arr13 = arr2.splice(1, 2, 6, 7); // remove 2 elements from index 1 and add 6 and 7
console.log(arr2); // [1, 6, 7, 4, 5]
console.log(arr13); // [2, 3]

let arr14 = arr2.concat([8, 9]); // concatenate two arrays
console.log(arr14); // [1, 6, 7, 4, 5, 8, 9]    

let arr15 = arr2.sort(); // sort the array in ascending order
console.log(arr15); // [1, 4, 5, 6, 7]

let arr16 = arr2.reverse(); // reverse the array
console.log(arr16); // [7, 6, 5, 4, 1]





