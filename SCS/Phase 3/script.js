//scope - functional scope ,global scope and block scope

//function scope - function ke andar hi use ho sakti hai
//global scope - poore code mei kahi bhi use ho sakti hai
//block scope - {} curly braces mei hi use ho sakti hai

/* =====================================================
   TYPES OF SCOPING IN PROGRAMMING
===================================================== */

/* 1. What is Scoping?
   - Scoping determines the region of a program where a variable is accessible.
*/

/* 2. Types of Scoping: */

/* a) Lexical (Static) Scoping
   - Scope is determined by position in the code.
   - Inner functions can access variables of outer functions.
   - Outer functions cannot access variables of inner functions.
   - Used in: Python, Java, C, C++, JavaScript.
   
   Example:
*/
function outer() {
  let x = 10;
  function inner() {
      console.log(x);  // inner can access x from outer
  }
  inner();
}
outer();  // Output: 10

/* b) Dynamic Scoping
 - Scope is determined by runtime call stack, not code position.
 - Variables are resolved by searching the calling functions.
 - Used in: Early Lisp, some shell scripts.
 
 Conceptual Example:
*/
function outer() {
  let x = 10;
  inner();
}

function inner() {
  console.log(x); // looks for x in the calling function
}

outer(); // Output: 10 (depends on call stack)

/* 3. Other Scopes Based on Visibility:
 - Global Scope: Accessible anywhere in the program.
 - Local Scope: Accessible only inside a function/block.
 - Nonlocal / Enclosing Scope: Accessible to nested functions but not global.
 - Block Scope: Accessible inside a specific block ({ } in C++/JS, let/const in JS).
*/

/* 4. Comparison Table:

 | Scope Type       | Determined By      | Accessible Where             | Example Language         |
 |-----------------|-----------------|-----------------------------|------------------------|
 | Lexical/Static  | Code position    | Inner functions see outer   | Python, JS, C          |
 | Dynamic         | Runtime call     | Functions in call chain     | Early Lisp, Bash       |
 | Global          | Anywhere         | Entire program              | C, Python, JS          |
 | Local           | Function/block  | Inside function/block only  | C, Python, JS          |
 | Nonlocal        | Enclosing func   | Nested functions            | Python (nonlocal)      |
 | Block           | Within block     | Inside { } only             | C++, JS (let/const)    |
*/



//EXECUTION CONTEXT

/*
=====================================================
  EXECUTION CONTEXT IN JAVASCRIPT
=====================================================

1. What is Execution Context?
   - An environment in which JavaScript code is evaluated and executed.
   - It tells the JS engine how to handle variables, functions, and `this`.

2. Types of Execution Context:
   a) Global Execution Context (GEC)
      - Created when JS program starts.
      - `this` → global object (browser = window, Node.js = global).
      - Only ONE GEC exists.
   
   b) Function Execution Context (FEC)
      - Created every time a function is called.
      - Manages arguments, variables, inner functions, and `this`.

   c) Eval Execution Context
      - Created when `eval()` is used (rare, not recommended).

3. Phases of Execution Context:
   a) Creation Phase (Memory Allocation / Hoisting)
      - Variables and functions are stored in memory.
      - Function declarations → hoisted (loaded fully).
      - Variables → hoisted but initialized as `undefined`.
      - `this` is determined.

   b) Execution Phase
      - Code runs line by line.
      - Variables get values.
      - Functions are executed when invoked.

4. Execution Stack (Call Stack)
   - JS is single-threaded → runs one thing at a time.
   - The call stack manages execution contexts:
       - GEC pushed first
       - Function calls → new FEC pushed
       - Function ends → context popped
       - Program ends → stack empty
*/

/* ================== Example ================== */
var x = 10;

function outer() {
    var y = 20;

    function inner() {
        var z = 30;
        console.log(x, y, z);
    }

    inner();
}

outer();

/*
================ Step by Step ===================

Global Execution Context (GEC):
  Memory: { x: undefined, outer: function }
  Execution: x = 10

outer() Execution Context:
  Memory: { y: undefined, inner: function }
  Execution: y = 20

inner() Execution Context:
  Memory: { z: undefined }
  Execution: z = 30 → console.log(10, 20, 30)

Stack flow:
  1. GEC pushed
  2. outer() pushed
  3. inner() pushed
  4. inner() popped
  5. outer() popped
  6. GEC popped → stack empty
*/


/*
=====================================================
  CLOSURES IN JAVASCRIPT
=====================================================
closures hote hai functions jo  ki kisi parent fnc ke andar ho aur andar wala function
return ho rha ho , and returning fnc use kare parent function ka koi variable

*/

function abcd(){
    let a = 12;
    return function defg(){
        console.log(a);
    }
}
let fnc = abcd();
fnc();

//ye sach hai fnc ke khtm hone par aapka function and uske variables bhi khtm ho jate hai 
// par jab bhi closure banta hai toh aapka function aur uske variables ka eak backlink bnaya jaata hai
//aur uska name hota hai [[environment]]

// humesa closures mei phli baar chalane par function milta hai

//COUNTERS--------
function countForMe(){
    let c =0 ;
    return function(){
        c++;
        console.log(c);
    }
}

let fnc1 = countForMe();
fnc1();  //1
fnc1();  //2
fnc1();  //3

let fnc2 = countForMe();
fnc2();  //1
fnc2();
fnc2();
fnc2();
fnc2();

//CLICK LIMITER---------------

function clickLimiter(){
    let click = 0 ;
    return function(){
        if(click < 5){
            click++;
            console.log(`clicked : ${click} times`);
        }else{
            console.error("LIMIT EXCEEDED , TRY AFTER SOME TIME");
        }
    }
}

let fnc3 = clickLimiter();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();
fnc3();