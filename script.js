//your JS code here. If required.
// Display message when page loads

window.onload = function(){

    console.log("Welcome to Accio Jobs Blog Page");

};



// Add click interaction to article links

const articleLinks = document.querySelectorAll("article h2 a");


articleLinks.forEach(function(link){

    link.addEventListener("click",function(){

        alert("Opening Accio Jobs Article");

    });

});