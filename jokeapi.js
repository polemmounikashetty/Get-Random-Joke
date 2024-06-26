const jokecontainer=document.getElementById("joke");
const btn=document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political&type=single";

let getjoke=()=>{
    jokecontainer.classList.remove("fade");
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{

        jokecontainer.textContent=`${data.joke}`;
        jokecontainer.classList.add("fade");
    });
}
btn.addEventListener("click",getjoke);
getjoke();