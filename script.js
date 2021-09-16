

const myUl = document.getElementById("myUl");
const links = document.querySelector(".links");
const container = document.querySelector(".container");

links.addEventListener("click",

(eo) => {

    myUl.classList.toggle("ulBlock");
    // myUl.style.transition= "all 0.3";

}




);







// Enable DarkMode



const button = document.querySelector("button");
const body = document.getElementById("body");
const myh3 = document.querySelectorAll("h3");
const myh2 = document.querySelectorAll("h2");
const feature = document.querySelector("#features");
const PforDark = document.querySelectorAll("p");
const header = document.querySelector(".header");
const project = document.querySelectorAll(".project");
// console.log(project);

button.addEventListener(
    "click",

    (eo) => {
    
 
    body.classList.toggle("dark3");
   
    



    myh3.forEach(   
        item => {
    item.classList.toggle("darkModeScriptColor");
        
    });



    PforDark.forEach(item2 => {
    item2.classList.toggle("darkModeColor");
    
    });


}
);



// Start Scroll up

const scrolling = document.getElementById("scrolling");
const pic = document.getElementById(".pic");
window.addEventListener("scroll",
() => {
    if (window.pageYOffset >= 100) {
        scrolling.classList.add("active");
    }
    else{

                scrolling.classList.remove("active");


    }
    
});


// End Scroll up

