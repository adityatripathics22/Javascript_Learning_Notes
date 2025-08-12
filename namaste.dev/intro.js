console.log("welcome to the intro.js page")

getName();//prints function getName() { ... }
// this will work because function declaration is hoisted

console.log(x); // prints undefined
// this will work because variable declaration is hoisted but not the assignment

var x = 10;
console.log(getName());

function getName() {
    console.log("my name is aditya");
    return 10;
}

console.log(getName2()); // this will give error
 
var getname2 = function () {
    console.log("my name is aditya");
    return 10;
    
}
console.log(getname2()); // this will work because function expression is hoisted

console.log(getName3()); //TypeError: getName3 is not a function

var getName3 = () => {
    console.log("my name is aditya");
    return 10;
}

console.log(getName3()); // this will work because arrow function is hoisted
// for this arrow function js allocates undefined to the function bfore the execution of the code..because it behaves like a variable