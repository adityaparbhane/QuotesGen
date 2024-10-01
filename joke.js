let joke = document.getElementById("joke");
let btn = document.getElementById("btn");


const url ="https://v2.jokeapi.dev/joke/Any";

let getJoke = () => {
    fetch(url)
     .then(data => data.json())
     .then(item => {
       Joke.innerText = item.delivery;
       category.innerText = item.category;
     });
};

window.addEventListener("load", getJoke);
btn.addEventListener("click",getJoke);
