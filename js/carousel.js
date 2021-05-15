const left = document.querySelector(".left");
const right = document.querySelector(".right");

const slider = document.querySelector (".slider")

let sliderIndex = 0;

right.addEventListener("click", function(){
   sliderIndex = (sliderIndex < 3) ? sliderIndex + 1 : 3;
   //  index = (index > 0) ? index -1 : 0;
    slider.style.transform = "translate("+ (sliderIndex) * -25 + "%)";
 });


 left.addEventListener("click", function(){
   sliderIndex = (sliderIndex > 0) ? sliderIndex - 1 : 0;

    // index = (index > 0) ? index -1 : 0;
    slider.style.transform = "translate("+ (sliderIndex) * -25 + "%)";

 });



//  const imgSlider = document.querySelector(".slider");
//  const ind1 = document.querySelector(".ind1");
//  const ind2 = document.querySelector(".ind2");

//  ind1.addEventListener("click", function(){
//      imgSlider.style.transform = "translate(0%)"
//  });

//  ind2.addEventListener("click", function(){
//     imgSlider.style.transform = "translate(-50%)"
//     ind2.classList.add("selected")
// });



//remove the orange cirlce 
