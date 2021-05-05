const covid19 = document.querySelector(".covid19");
const covid19Title = document.querySelector (".covid19Title");
const titlecovid19 = document.querySelector("title");

const url = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

async function getPost(){
    try{
       const response = await fetch (url);
    const result = await response.json();
    console.log(result);

    titlecovid19.innerHTML = `${result[2].title.rendered}`
    covid19Title.innerHTML = `<h1>${result[2].title.rendered}</h1>`
    covid19.innerHTML = `${result[2].content.rendered}`


    } catch(error){
        console.log(error)
    }
    
}

getPost();