//localstorage -> aapke browser ke andar data store krta jo ki browser band hone ke baad bhi delete nhi hoga
//store aur update kaise kare----
//localStorage.setItem("name ", "harsh");
//data fetch kaise krte hai----
//let val = localStorage.getItem("name ");
//remove kaise krte hai----
//localStorage.removeItemItem("name ");


//sessionstorage -> ye aapka data temporarily store karta hai matlab ki tab band hua aur data gyab

//cookies -> ye bhi data store karta hai aur aapka data browser ke 
// cookies naam ki property mei save hota hai and ye cookie concept kam data ya light data ke liye hota hai

//NOTE-> localstorage mei array wagera store nhi kr skte hai toh hum ky karenge ki JSON.stringigy() 
//       ka use krenge aur phir usko use krna ho ttoh JSON.parse() ka use krenge
// Select the button and body
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  // Save current theme to localStorage
  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

