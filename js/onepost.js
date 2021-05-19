const post = document.querySelector(".post");
const title = document.querySelector(".title");
const date = document.querySelector(".date");
const webtitle = document.querySelector("title");

const modalImg = document.querySelector(".modalContainer");
const show = document.querySelector(".post");
const closebtn = document.querySelector(".closebtn");


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

        

        modalImg.style.display = "none";

        show.onclick = function(){
            closebtn.style.display = "block";
            modalImg.style.display = "block";
            modalImg.innerHTML = `
                                    <div class="modalContent">${result.content.rendered}</div>
                                `            
            
        }


        function closeModal(){
            modalImg.innerHTML= "";
            modalImg.style.display = "none";
        } modalImg.addEventListener("click", closeModal);

    } catch (error){
        console.log(error)
        post.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

posts();
