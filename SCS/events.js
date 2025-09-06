//kuch screen par ho aur apko reaction dena hp toh uss waqt apko event handle karna aana chayea
//event matlab hota hai koi action hua
//event listner ka matlab hai apne koi action ka reaction diya

//select the para first
let p = document.querySelector("p");

//click---------------------------------------------

// p.addEventListener("click" , function(){
//     p.style.color = "green";
// })

// p.addEventListener("dblclick" , function(){
//     p.style.color = "red";
// })


//but when we remove we have to pass the same function in the removeEventListner

// function doubleClick(){
//     p.style.color = "red";
// }
// p.addEventListener("dblclick" ,doubleClick );


// const text = document.getElementById("text");

// text.addEventListener("mouseover", () => {
// });

// text.addEventListener("mouseout", () => {
// console.log("Mouse left (mouseout)");
// });


//prints details of input--------------------------------------

let inp = document.querySelector("input"); 
// inp.addEventListener("input" , function (data){
//     console.log(data);
// });
// inp.addEventListener("input" , function (dets){
//     if(dets.data !== null){
//         console.log(dets.data);
//     }
// });

// let sel = document.querySelector("select");
// let device = document.querySelector("#device");

// sel.addEventListener("change" , function(deta){
//     console.log(deta);
//     console.log(deta.target.value);
//     device.textContent = `${deta.target.value} Device Selected`;
// });

// let h1 = document.querySelector("h1")
// window.addEventListener("keydown" , function(dets){
//     if(dets.key === " "){
//         h1.textContent="spc";
//     }else{
//         h1.textContent=dets.key;
//     }
// })

//change---------------------------------------------

// let btn = document.querySelector("#btn");
// let fileInput = document.querySelector("#fileInput");

// btn.addEventListener("click" , function(){
//     fileInput.click();
// })

// fileInput.addEventListener("change" , function(dets){
//     btn.textContent = dets.target?.files[0].name;
// })

 