// humein seekhna hai factories banana , matlab ki aap eak baar blueprint bana do ki haar object kaise dikhega
// and hum log naye objects with different  diffeerent values bana payenge , yahi uppar uppar se poora kama hai oops ka..

const { setDriver } = require("mongoose");

// function CreatePencil(name, price ,color ,company){
//     this.name = name ;
//     this.price = price ;
//     this.color = color;
//     this.company=company;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = color;
//         document.body.append(h1);
//     }
// }


// let pencil1 = new CreatePencil("aditya" , 20 , "red" , "apsara");
// let pencil2 = new CreatePencil("saurabh" , 21 , "black" , "natraj");

// pencil1.write("kiase ho");
// pencil2.write("mai bhadiya tum btao");


// class CreatePencil {
//     constructor(name , company , price ,color){
//         this.name = name ;
//         this.company = company;
//         this.price = price ;
//         this.color = color;

//     }

//     erase() {
//         document.body.querySelectorAll("h1").forEach((elem) => {
//             if(elem.style.color === this.color){
//                 elem.remove();
//             }
//         });
//     }
//     write(text){
//         let h1 = document.createElement("h1");
//         h1.textContent = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }
// }

// let p1 = new CreatePencil("natraj" , "natraj" , 10 , "black");
// let p2 = new CreatePencil("apsara" , "apsara" , 10 , "red");

/*
class CreatePencil {
    constructor(name, company, price, color, length = 10) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
        this.length = length; // represents pencil length or durability
    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        });
    }

    write(text) {
        if (this.length > 0) {
            let h1 = document.createElement("h1");
            h1.textContent = text;
            h1.style.color = this.color;
            document.body.appendChild(h1);
        } else {
            console.log(`${this.name} is too short to write! Sharpen or get a new pencil ✏️`);
        }
    }

    sharpen() {
        if (this.length < 10) {
            this.length++;
            console.log(`${this.name} has been sharpened. Current length: ${this.length}`);
        } else {
            console.log(`${this.name} is already at maximum length! ✨`);
        }
    }

    use() {
        if (this.length > 0) {
            this.length--;
            console.log(`${this.name} was used. Remaining length: ${this.length}`);
        } else {
            console.log(`${this.name} is finished! You can’t use it anymore ❌`);
        }
    }
}

// ✅ Example usage
let p1 = new CreatePencil("Natraj", "Natraj", 10, "black");
let p2 = new CreatePencil("Apsara", "Apsara", 10, "red");

p1.write("Hello from Natraj!");  // Writes in black
p1.use();  // Decreases pencil length

p1.sharpen();  // Increases pencil length back
p2.write("Hello from Apsara!"); // Writes in red


*/

class User {
    constructor( name , address ,username , email){
        this.name = name ;
        this.address = address;
        this.username = username ;
        this.email = email;
        this.role = "user";

    }
    checkRole(){
        console.log(`you are a ${this.role}`);
    }

    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        document.body.appendChild(h1);

    }
}

class Admin extends User {
    constructor(name , address , username , email){
        super(name , address , username , email);
        this.role = "admin";
    }
    remove() {
        document.querySelectorAll("h1").forEach(function (elem){
            elem.remove();
        });
    }

}

let u1 = new User("aditya" , "mathura" , "adi.xp" , "adityatripathics22@gmail.com")
let a1 = new Admin("saurabh" , "noida" , "sau.xp" , "cc@gmail.com");

//classical inheritance - classes banana aur unhe extend kar dena 
//prototypal inheritance - object object se inherit karta hai 

let coffee = {
    color : "dark",
    drink : function() {
        console.log("gut gut gut");
    },
};

let arabiataCoffee = Object.create(coffee);
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink(); 

//sync - aesa code jo line by line chale 
//async - aesa code jo jab chalne ke liye ready ho jaye tab chale
/*

🔹 1. Synchronous (Sync) JavaScript

    Code runs line by line (blocking).

    Each statement must finish before the next one starts.

    If a line takes a long time (e.g., a heavy loop or file read), it blocks the entire program.

🔹 2. Asynchronous (Async) JavaScript

    Code does not block execution.

    Long tasks (like fetching data from an API, timers, reading files) can run in the background.

    JS uses the event loop + callback queue to handle async tasks.
*/


// callback - A callback is simply a function passed as an argument to another function, so that it can be executed later.

    function greet(name, callback) {
        console.log("Hello " + name);
        callback(); // call the function passed in
    }
    
    function sayBye() {
        console.log("Goodbye!");
    }
    
    greet("Aditya", sayBye);

/* 
🔹 Callbacks with Asynchronous Code

    Callbacks are very common in async operations like timers, file reads, or API requests.
    */
    console.log("Start");

    setTimeout(() => {
        console.log("This runs after 2 seconds");
    }, 2000);

    console.log("End");

/*
Callback = a function you pass to another function, to be executed later.

Used in sync and async code.

Too many callbacks → “callback hell” → use Promises / async-await instead. 
*/

//ye part of code kahi likha hai duniya mei
function profileLekarAao( username , callback){
    console.log("fetching profile data...");
    setTimeout(() => {
        callback({username , age : 22 , email : "aditya@gmail.com"});
    }, 2000);
}

function saarePostLekarAao(id , callback){
    console.log("fetching post data...")
    setTimeout(() => {
        callback({id : "adityaaa.xd", post : "post1" , post2 : "post2"});
    }, 2000);
}

function savedPostsLekarAao( id , callback){
    console.log("fetching saved posts data...");
    setTimeout(() => {
        callback({id : "adityaaa.xd", savedPosts : [1,2,3,4,5,6,7,8,9] });
    })
}
//hum bss ye line of ocde hi likhte hai , and ye callback function ko call karta hai
profileLekarAao("aditya" , function(data){
    console.log(data);
    saarePostLekarAao(data.id , function(posts){
        console.log(posts);
        savedPostsLekarAao(data.id , function(savedPosts){
            console.log(savedPosts);
        });
    });
});

// this is called callback hell

//PROMISES------------------------------------------------
 