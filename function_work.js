var x = 1;
a();
b();
console.log(x);


function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
 }

 // regardless of the first variable declaration, the function a() and b() will print their own local x values
 //beacuse of function scope in JavaScript and execution context are imdependent of each other
// the global variable x remains unchanged and retains its value of 1
// 