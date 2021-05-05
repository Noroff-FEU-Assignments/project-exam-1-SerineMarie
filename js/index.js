const homepage = document.querySelector (".homepage");
const title = document.querySelector ("title");
const url = "https://serinetj.com/wp-json/wp/v2/pages"

async function index(){
    try{
        const response = await fetch(url)
        const result = await response.json();
        console.log(result)
        title.innerHTML = `${result[3].title.rendered}`


        homepage.innerHTML =`<h1>${result[3].title.rendered}</h1>
                            <h2 class"content">${result[3].content.rendered}</h2>`; 

        
    } catch (error){
        console.log(error)

    }
}


index();

const imgURL = "https://serinetj.com/wp-json/wp/v2/media/?per_page=55";
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

const post1 = document.querySelector(".post1");
const post2 = document.querySelector(".post2");
const post3 = document.querySelector(".post3");
const post4 = document.querySelector(".post4");
const post5 = document.querySelector(".post5");
const post6 = document.querySelector(".post6");
const post7 = document.querySelector(".post7");
const post8 = document.querySelector(".post8");

async function images(){
    try{
        const response = await fetch (imgURL)
        const result = await response.json();
        console.log(result)
        img1.innerHTML = `${result[3].description.rendered}`
        img2.innerHTML = `${result[48].description.rendered}`
        img3.innerHTML = `${result[21].description.rendered}`

        post1.innerHTML = `${result[16].description.rendered}`
        post2.innerHTML = `${result[11].description.rendered}`
        post3.innerHTML = `${result[9].description.rendered}`
        post4.innerHTML = `${result[8].description.rendered}`
        post5.innerHTML = `${result[7].description.rendered}`
        post6.innerHTML = `${result[34].description.rendered}`
        post7.innerHTML = `${result[0].description.rendered}`
        post8.innerHTML = `${result[1].description.rendered}`

    }catch(error){
        console.log(error)
    }
}

images();



// async function latestPost(){
//     try{
//         const response = await fetch(postURL);
//         const result = await response.json();
//         console.log(result)

//     } catch (error){
//         console.log(error)
//     }
// }

// latestPost();