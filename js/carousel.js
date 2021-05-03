const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector (".slider2")



right.addEventListener("click", function(){
    // index = (index > 0) ? index -1 : 0;
    slider.style.transform = "translate(-50%)";
 });

 left.addEventListener("click", function(){
    // index = (index > 0) ? index -1 : 0;
    slider.style.transform = "translate(0%)";
 });

 const imgSlider = document.querySelector(".slider");
 const ind1 = document.querySelector(".ind1");
 const ind2 = document.querySelector(".ind2");
 const ind3 = document.querySelector(".ind3");

 ind1.addEventListener("click", function(){
     imgSlider.style.transform = "translate(0%)"
 });

 ind2.addEventListener("click", function(){
    imgSlider.style.transform = "translate(-33%)"
    ind2.classList.add("selected")
});

ind3.addEventListener("click", function(){
    imgSlider.style.transform = "translate(-75%)"
    ind3.classList.add("selected")
});

//remove the orange cirlce 

