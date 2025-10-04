fetch("https://randomuser.me/api/?results=3")
.then((raw) => raw.json())
.then((data) => {
    console.log(data.results[0]);
    data.results.forEach(function (user) {
        // Create main container div
        const card = document.createElement("div");
        card.className = "bg-white rounded-lg shadow-lg p-6 max-w-xs w-full flex flex-col items-center";

        // Create image element
        const img = document.createElement("img");
        img.className = "w-24 h-24 rounded-full mb-4";
        img.src = user.picture.large;
        img.alt = "User Avatar";

        // Create heading element
        const name = document.createElement("h2");
        name.className = "text-xl font-semibold mb-1";
        name.textContent = user.name.first;

        // Create paragraph element
        const job = document.createElement("p");
        job.className = "text-gray-500 mb-3";
        job.textContent = "Web Developer";

        // Append child elements to the card
        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(job);

        // Finally, add the card to the page (e.g. inside body)
        document.querySelector(".users").appendChild(card);

    })
})
/*
Category	Range	Meaning
1xx	100–199	Informational
2xx	200–299	Success
3xx	300–399	Redirection
4xx	400–499	Client error
5xx	500–599	Server error
*/