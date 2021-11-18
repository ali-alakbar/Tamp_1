

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



const button = document.querySelector("#sun");
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







// Start Scrolling Effect

const feat = document.querySelectorAll(".feat");

//Calling the image to appear 
const img = document.querySelector(".sec-col");

// Call the service columns inside service section
const cols = document.querySelectorAll(".col");

// Call the portfolio columns inside portfolio section 
const pro = document.querySelectorAll('.pro');

// Calling the vase image 
const vase = document.getElementById("img");

// Calling the paragraph element beside the vase
const paragraph = document.getElementById("info");



// Calling the elements in contact section as an array.
const sections = document.querySelectorAll(".section");




window.addEventListener('scroll',

() => {
    
        feat.forEach((e) => {
            if (window.pageYOffset >= 300) {
            
                e.classList.add("active");

            }
        });

            if (window.pageYOffset >= 1000) {
            
                img.classList.add("active");

            }

        cols.forEach((e) => {
            if (window.pageYOffset >= 1000) {
            
                e.classList.add("active");

            }
        });


        pro.forEach( (e) => {
            if (window.pageYOffset >= 2000) {
            
                e.classList.add("active");

            }
        });

            if (window.pageYOffset >= 2700) {
                vase.classList.add("active");
            }

            if (window.pageYOffset >= 2700) {
                paragraph.classList.add("activeForParagraph");
            }
        



        sections.forEach((e) => {
        if (window.pageYOffset >= 3200) {
            e.classList.add("active");
        }
        });


});
