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


// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove",function(dets){
//     abcd.style.top = -100 + dets.clientY + "px";
//     abcd.style.left = -100 + dets.clientX + "px";
    
// })


// document.getElementById("myForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // stops the page from reloading
//     alert("Form submitted! Data is still there."); 
// })

//event bubbling------------
//jispe event ayega agar uspar listner nhi hua toh humara event uske parent par listner dhudega aur aisa
//krte krte upar ki taraf move krega

// document.getElementById("parent").addEventListener("click", function() {
//     alert("Parent DIV clicked!");
// });

// document.getElementById("child").addEventListener("click", function() {
//     alert("Child DIV clicked!");
// });

// document.getElementById("btn").addEventListener("click", function() {
//     alert("Button clicked!");
// });


//Event Capturing (trickling): Event starts at the top (document) and goes
// downward to the target element (parent → child → target).
//by default its always off and only bubbling phase is active so to on this we just need to write true after the function


//jab bhi aap click krte ho ya koi bhi event raise krte ho toh aapka event flow do phase mei chalta hai
//PHASE 1:-> event top level element se neeche ki taraf ayega\
//PHASE:-> event raised element se parent ki taraf ayega
//aur phle phase 1 hoti haai
//NOTE:-> HUMESA PHLE PHASE 1 HI HOTI HAI PAR WO BY DEFAULT OFF REHTI HAI

//note ---- click hum child pr karenge to chahe child pr listner ho ya na ho parent ka listner chalega hi chalega

// let inpu = document.querySelector("input");
// let count = document.querySelector("#count");


// inpu.addEventListener("input" , function(){
//     let left = 20 - inpu.value.length;
    
//     if(left < 0){
//         count.textContent=left;
//         count.style.color ="red";
//     }else{
//         count.textContent=left;
//         count.style.color="black";
//     }
// })



let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit" , function(dets){
    dets.preventDefault();

    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";

    }else{
        document.querySelector("#hide").style.display = "none";

    }

})