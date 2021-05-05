const memorylane = document.querySelector(".memorylane");
const memorylaneTitle = document.querySelector (".memorylaneTitle");
const titleMemorylane = document.querySelector("title");

const url = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

async function getPost(){
    try{
       const response = await fetch (url);
    const result = await response.json();
    console.log(result);

    titleMemorylane.innerHTML = `${result[10].title.rendered}`
    memorylaneTitle.innerHTML = `<h1>${result[10].title.rendered}</h1>`
    memorylane.innerHTML = `${result[10].content.rendered}`


    } catch(error){
        console.log(error)
    }
    
}

getPost();
