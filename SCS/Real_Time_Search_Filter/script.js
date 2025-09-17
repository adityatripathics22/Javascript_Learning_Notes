const users = [
    {
        name:"aditya tripathi",
        pic: "https://images.unsplash.com/photo-1756877881650-55a53610f0ca?q=80&w=713&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "silent chaos in a loud world | not for everyone",
    },
    {
        name: "Aryan Mehta",
        pic: "https://images.unsplash.com/photo-1743179581016-54b610372a02?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "dreamer with deadlines | finding balance in chaos",
    },
    {
        name: "Kavya Sharma",
        pic: "https://plus.unsplash.com/premium_photo-1757344790406-3fadb5d47e8a?q=80&w=710&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "coffee and books over small talk | words are my escape",
    },
    {
        name: "Rohan Gupta",
        pic: "https://images.unsplash.com/photo-1746637084176-1ad97bb732af?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "lost in playlists | living one song at a time",
    },
    {
        name: "Simran Kaur",
        pic: "https://plus.unsplash.com/premium_photo-1721985803589-418d2d337acf?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "wanderlust in veins | collecting sunsets not things",
    },
    {
        name: "Ananya Verma",
        pic: "https://plus.unsplash.com/premium_photo-1726794010754-2d45dfaec661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "minimalist heart | messy soul | believer in vibes",
    },
    {
        name: "Arjun Nair",
        pic: "https://images.unsplash.com/photo-1744349136536-a4ee9646e15a?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        bio: "half introvert, half storyteller | entirely myself",
    }
    
]
function showUsers(arr){
    arr.forEach(function(user){
        // Create main card div
        const card = document.createElement("div");
        card.classList.add("card");

        // Create image
        const img = document.createElement("img");
        img.classList.add("bg-img");
        img.src = user.pic;

        // Create blurred layer
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage=`url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        // Create content div
        const content = document.createElement("div");
        content.classList.add("content");

        // Add h3
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        // Add paragraph
        const para = document.createElement("p");
        para.textContent = user.bio;

        // Append h3 and p to content
        content.appendChild(heading);
        content.appendChild(para);

        // Append all elements into card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        // Finally, append card to body (or any container)
        document.querySelector(".cards") .appendChild(card);

    })
}
showUsers(users);
let a = document.querySelector(".cards");
console.dir(a);

let inp = document.querySelector(".inp");
inp.addEventListener("input" , function(){
    let newusers = users.filter((users) => {
        return users.name.startsWith(inp.value);
    })
    
    const cards = document.querySelector(".cards");
    // while (cards.firstChild) {
    //     cards.removeChild(cards.firstChild);
    // }
    document.querySelector(".cards").innerHTML = "";


    showUsers(newusers);
});




// showUsers(["harsh"])



// sare users show karana 
//filter karna har baar input karne pe
//show krna filtered users

