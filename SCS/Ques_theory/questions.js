// let a = 45*2 -10;
// console.log(a);

// const newdate = new Date();
// console.log(newdate.getFullYear());

// var a = "aditya";
// var b = "tripathi"
// console.log(a + " " + b);

// console.error("something went wrong");

// var a = true;
// console.log(typeof a);

// var age = 22;
// if(age > 18){
//     console.log("yes");
// }else{
//     console.log("no")
// }

// console.log(100/0);

// let a = 15;
// a= 20;
// console.log(a);

// console.log(typeof null);

// var a = "25";
// console.log(typeof a);

// for (var a = 1 ; a<51 ; a++){
// console.log(a);
// }

// for (var i =1 ; i < 51 ; i++){
//     if(i%2 === 0){}
//     else{
//         console.log(i);
//     }
// }

// do{
//     console.log('a');
// }
// while(12>13)

// function double(val){
//     return val *2;

// }
// console.log(double(5)); // should return 10

//arrays------------------- 


let arr = ["apple", "nana", "cherry"];

// arr.push("dates"); // add "dates" to the end of the array
// arr.unshift("kiwi"); // add "kiwi" to the beginning of the array
// console.log(arr); // ["kiwi", "apple", "banana", "cherry",

// arr.splice(1 , 0 , "orange"); // add "orange" at index 1 without removing any elements
// arr.splice(3, 1); // remove the element at index 3 ("cherry
// console.log(arr); // ["kiwi", "orange", "apple", "banana", "

let num = [1, 2, 3, 4, 5];
num.slice(1,4); // returns a new array with elements from index 1 to 3
// console.log(num); // [2, 3, 4]

let alphabetical_sort= arr.sort(); // sorts the array in ascending order alphabetically
console.log(alphabetical_sort); // ["apple", "banana", "cherry", "dates", "kiwi", "orange"]
  