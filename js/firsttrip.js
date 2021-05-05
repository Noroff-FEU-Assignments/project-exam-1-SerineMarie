const firsttrip = document.querySelector(".firsttrip");
const firsttripTitle = document.querySelector (".firsttripTitle");
const titlefirsttrip = document.querySelector ("title");

const url = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";

async function getPost(){
    try{
       const response = await fetch (url);
    const result = await response.json();
    console.log(result);

    titlefirsttrip.innerHTML = `${result[4].title.rendered}`
    firsttripTitle.innerHTML = `<h1>${result[4].title.rendered}</h1>`
    firsttrip.innerHTML = `${result[4].content.rendered}`

    } catch(error){
        console.log(error)
    }
    
}
getPost();
