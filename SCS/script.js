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
//let and const are not hoisted, they are in temporal dead zone
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

//-----------> data types

// let a = 12;

// let b = a;
// a = a+2;

// primitives -> aisi sari values jinko copy karne par tumhe eak real value mil jaye
// reference or non-primitives -> aisi values jinko copy karne par tumhe eak reference milta hai, wo value nahi milti

