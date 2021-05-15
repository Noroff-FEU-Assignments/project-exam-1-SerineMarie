const container = document.querySelector(".container");
const informasjon = document.querySelector(".info");

const url2 = "https://serinetj.com/wp-json/wp/v2/posts/?per_page=14";




async function allposts(){

    try{
        const response = await fetch (url2);
        const result = await response.json();
        content = result.map(function(content){
            console.log(content)
        });
        
        
        
        // for(let i = 0; i < 4; i++){
        result.forEach(function(one){
            container.innerHTML += `<a href="onepost.html?id=${one.id}">
                                            <div class="postcard">
                                                <p class="heading">${one.title.rendered}</p>                                                
                                                <div class="date">${one.date}</div>
                                                <p class="info">${one.excerpt.rendered}</p>
                                                <div class="allpostImg">${one.content.rendered}</div>
                                            </div>
                                        </div>
                                    </a>`

        })   


    } catch (error){
        console.log(error)
        homepage.innerHTML = errorMessage ("Ups! Something went wrong, please try again later");

    }
}

allposts();
