// humein seekhna hai factories banana , matlab ki aap eak baar blueprint bana do ki haar object kaise dikhega
// and hum log naye objects with different  diffeerent values bana payenge , yahi uppar uppar se poora kama hai oops ka..

function CreatePencil(name, price ,color ,company){
    this.name = name ;
    this.price = price ;
    this.color = color;
    this.company=company;
    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    }
}


let pencil1 = new CreatePencil("aditya" , 20 , "red" , "apsara");
let pencil2 = new CreatePencil("saurabh" , 21 , "black" , "natraj");

pencil1.write("kiase ho");
pencil2.write("mai bhadiya tum btao");