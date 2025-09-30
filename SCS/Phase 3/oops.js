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


class CreatePencil {
    constructor(name , company , price ,color){
        this.name = name ;
        this.company = company;
        this.price = price ;
        this.color = color;

    }

    erase() {
        document.body.querySelectorAll("h1").forEach((elem) => {
            if(elem.style.color === this.color){
                elem.remove();
            }
        });
    }
    write(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }
}

let pencil1 = CreatePencil("natraj" , "natraj" , 10 , "black");
let pencil2 = CreatePencil("apsara" , "apsara" , 10 , "red");
