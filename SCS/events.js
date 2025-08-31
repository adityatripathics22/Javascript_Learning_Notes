//kuch screen par ho aur apko reaction dena hp toh uss waqt apko event handle karna aana chayea
//event matlab hota hai koi action hua
//event listner ka matlab hai apne koi action ka reaction diya

//select the para first
let p = document.querySelector("p");

// p.addEventListener("click" , function(){
//     p.style.color = "green";
// })

// p.addEventListener("dblclick" , function(){
//     p.style.color = "red";
// })


//but when we remove we have to pass the same function in the removeEventListner

function doubleClick(){
    p.style.color = "red";
}
p.addEventListener("dblclick" ,doubleClick );


const text = document.getElementById("text");

text.addEventListener("mouseover", () => {
console.log("Mouse entered (mouseover)");
});

text.addEventListener("mouseout", () => {
console.log("Mouse left (mouseout)");
});


let sel = document.querySelector("select");
let device = document.querySelector("#device");

sel.addEventListener("change" , function(deta){
    console.log(deta);
    console.log(deta.target.value);
    device.textContent = "Device Selected";
});