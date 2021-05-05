const cambodia = document.querySelector(".cambodia");
const cambodiaTitle = document.querySelector (".cambodiaTitle");
const titlecambodia = document.querySelector ("title");

const url = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

async function getPost(){
    try{
       const response = await fetch (url);
    const result = await response.json();
    console.log(result);

    titlecambodia.innerHTML = `${result[6].title.rendered}`
    cambodiaTitle.innerHTML = `<h1>${result[6].title.rendered}</h1>`
    cambodia.innerHTML = `${result[6].content.rendered}`

    } catch(error){
        console.log(error)
    }
    
}
getPost();
