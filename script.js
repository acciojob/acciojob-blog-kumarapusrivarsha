console.log("Accio Jobs Blog Loaded Successfully");


// Article click interaction

let articles = document.querySelectorAll("article h2 a");

articles.forEach(function(article){

    article.addEventListener("click",function(){

        alert("Opening Accio Jobs Article");

    });

});