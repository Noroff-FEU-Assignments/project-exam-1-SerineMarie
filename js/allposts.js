const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");
const post4 = document.querySelector(".post4");
const post5 = document.querySelector(".post5");
const post6 = document.querySelector(".post6");
const post7 = document.querySelector(".post7");
const post8 = document.querySelector(".post8");
const post9 = document.querySelector(".post9");
const post10 = document.querySelector(".post10");
const post11 = document.querySelector(".post11");
const post12 = document.querySelector(".post12");



const url2 = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";


async function allposts(){

    try{
        const response = await fetch (url2);
        const result = await response.json();

        console.log(result);

        
        post1.innerHTML += `<a href="onepost.html?id=${result[0].id}">
                                <h1 class="heading">${result[0].title.rendered}</h1>
                                <div class="date">${result[0].date}</div>
                                <div class="short-txt">${result[0].excerpt.rendered}</div>
                                <div class="txt-content">${result[0].content.rendered}</div>
                            </a>`

        post2.innerHTML += `<a href="onepost.html?id=${result[1].id}">
                                <h1 class="heading">${result[1].title.rendered}</h1>
                                <div class="date">${result[1].date}</div>
                                <div class="short-txt">${result[1].excerpt.rendered}</div>
                                <div class="txt-content">${result[1].content.rendered}</div>
                            </a>`

        post3.innerHTML += `<a href="onepost.html?id=${result[2].id}">
                                <h1 class="heading">${result[2].title.rendered}</h1>
                                <div class="date">${result[2].date}</div>
                                <div class="short-txt">${result[2].excerpt.rendered}</div>
                                <div class="txt-content">${result[2].content.rendered}</div>
                            </a>`

        post4.innerHTML += `<a href="onepost.html?id=${result[3].id}">
                                <h1 class="heading">${result[3].title.rendered}</h1>
                                <div class="date">${result[3].date}</div>
                                <div class="short-txt">${result[3].excerpt.rendered}</div>
                                <div class="txt-content">${result[3].content.rendered}</div>
                            </a>`

        post5.innerHTML += `<a href="onepost.html?id=${result[4].id}">
                                <h1 class="heading">${result[4].title.rendered}</h1>
                                <div class="date">${result[4].date}</div>
                                <div class="short-txt">${result[4].excerpt.rendered}</div>
                                <div class="txt-content">${result[4].content.rendered}</div>
                            </a>`

        post6.innerHTML += `<a href="onepost.html?id=${result[5].id}">
                                <h1 class="heading">${result[5].title.rendered}</h1>
                                <div class="date">${result[5].date}</div>
                                <div class="short-txt">${result[5].excerpt.rendered}</div>
                                <div class="txt-content">${result[5].content.rendered}</div>
                            </a>`

        post7.innerHTML += `<a href="onepost.html?id=${result[6].id}">
                                <h1 class="heading">${result[6].title.rendered}</h1>
                                <div class="date">${result[6].date}</div>
                                <div class="short-txt">${result[6].excerpt.rendered}</div>
                                <div class="txt-content">${result[6].content.rendered}</div>
                            </a>`

        post8.innerHTML += `<a href="onepost.html?id=${result[7].id}">
                                <h1 class="heading">${result[7].title.rendered}</h1>
                                <div class="date">${result[7].date}</div>
                                <div class="short-txt">${result[7].excerpt.rendered}</div>
                                <div class="txt-content">${result[7].content.rendered}</div>
                            </a>`
        post9.innerHTML += `<a href="onepost.html?id=${result[8].id}">
                                <h1 class="heading">${result[8].title.rendered}</h1>
                                <div class="date">${result[8].date}</div>
                                <div class="short-txt">${result[8].excerpt.rendered}</div>
                                <div class="txt-content">${result[8].content.rendered}</div>
                            </a>`
        post10.innerHTML += `<a href="onepost.html?id=${result[9].id}">
                                <h1 class="heading">${result[9].title.rendered}</h1>
                                <div class="date">${result[9].date}</div>
                                <div class="short-txt">${result[9].excerpt.rendered}</div>
                                <div class="txt-content">${result[9].content.rendered}</div>
                            </a>`

        post11.innerHTML += `<a href="onepost.html?id=${result[10].id}">
                                <h1 class="heading">${result[10].title.rendered}</h1>
                                <div class="date">${result[10].date}</div>
                                <div class="short-txt">${result[10].excerpt.rendered}</div>
                                <div class="txt-content">${result[10].content.rendered}</div>
                            </a>`

        post12.innerHTML += `<a href="onepost.html?id=${result[11].id}">
                                <h1 class="heading">${result[11].title.rendered}</h1>
                                <div class="date">${result[11].date}</div>
                                <div class="short-txt">${result[11].excerpt.rendered}</div>
                                <div class="txt-content">${result[11].content.rendered}</div>
                            </a>`

        


    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

allposts();

const viewMore = document.querySelector(".viewMore");
const morebtn = document.querySelector(".morebtn")
const lessbtn = document.querySelector(".lessbtn")

viewMore.style.display = "none"
lessbtn.style.display = "none"

morebtn.onclick = function (){
    viewMore.style.display = ""
    morebtn.style.display = "none"
    lessbtn.style.display = "block"
} 

lessbtn.onclick = function (){
    viewMore.style.display = "none"
    morebtn.style.display = "block"
    lessbtn.style.display = "none"

}