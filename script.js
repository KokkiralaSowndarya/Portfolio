console.log("Portfolio Loaded Successfully!");
// Typing Animation


let roles = [
    "Python Developer",
    "Machine Learning Enthusiast",
    "Software Developer"
];


let index = 0;


let typingElement = document.getElementById("typing");


function changeRole(){

    typingElement.textContent = roles[index];

    index++;

    if(index >= roles.length){

        index = 0;

    }

}


setInterval(changeRole,2000);

changeRole();




// Dark Mode


let themeButton = document.getElementById("theme-btn");


themeButton.onclick = function(){

    document.body.classList.toggle("dark");

};
const menu = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = function () {
    navbar.classList.toggle("active");
};



// Back To Top


let topButton = document.getElementById("top-btn");


window.onscroll = function(){

    if(window.scrollY > 300){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

};



topButton.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};