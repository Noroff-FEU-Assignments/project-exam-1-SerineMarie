const carryon = document.querySelector(".carryon");
const carryonTitle = document.querySelector (".carryonTitle");
const titleCarryon = document.querySelector ("title");

const url = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

async function getPost(){
    try{
       const response = await fetch (url);
    const result = await response.json();
    console.log(result);

    titleCarryon.innerHTML = `${result[11].title.rendered}`
    carryonTitle.innerHTML = `<h1>${result[11].title.rendered}</h1>`
    carryon.innerHTML = `${result[11].content.rendered}`

    } catch(error){
        console.log(error)
    }
    
}
getPost();
