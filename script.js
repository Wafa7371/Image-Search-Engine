const accessKey = "9SmX9B__9KzxMzb9HsvJT545Co4XsTWCin3P4pqvS2Y";

const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-box");
const searchResults = document.querySelector(".search-result");
const showMore = document.querySelector(".show-more-button");

let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}&per_page=24`;

    const response = await fetch(url);
    const data = await response.json(); 

    if(page ===1){
        searchResults.innerHTML = "";
    }

    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResults.appendChild(imageLink);


    });

    showMore.style.display = "block";
    
}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    page++;
    searchImages();
});



