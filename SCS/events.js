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