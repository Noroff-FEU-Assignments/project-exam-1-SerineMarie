const post = document.querySelector(".post");
const title = document.querySelector(".title");
const date = document.querySelector(".date")
// const categories = document.querySelector(".categories")
const webtitle = document.querySelector("title")



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("id");

const url = "https://serinetj.com/wp-json/wp/v2/posts/" + id;

console.log(url)

async function posts(){

    try{
        const response = await fetch (url);
        const result = await response.json();
        console.log(result)
            webtitle.innerHTML = `${result.title.rendered}`
            title.innerHTML += `<h1>${result.title.rendered}</h1>`
            date.innerHTML += `<div class="date">${result.date}<div>`
            post.innerHTML += `<div class="post">${result.content.rendered}</div>`

    } catch(error){
        console.log(error)
    }
}

posts();
