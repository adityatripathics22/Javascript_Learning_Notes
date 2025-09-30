// humein seekhna hai factories banana , matlab ki aap eak baar blueprint bana do ki haar object kaise dikhega
// and hum log naye objects with different  diffeerent values bana payenge , yahi uppar uppar se poora kama hai oops ka..

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
