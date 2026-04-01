let likeBtn = document.getElementById("likeBtn");
let shareBtn = document.getElementById("shareBtn");
let repostBtn = document.getElementById("repostBtn");


let likeCnt = document.getElementById("likeCnt");
let shareCnt = document.getElementById("shareCnt");
let repostCnt = document.getElementById("repostCnt");


let likecount = 25;
let sharecount = 5;
let repostcount = 11;

likeBtn.addEventListener('click',()=>{
    likecount = likecount + 1;
    likeCnt.innerHTML= likecount;
    likeBtn.style.color = "#e0245e";

})
shareBtn.addEventListener('click',()=>{
    sharecount = sharecount + 1;
    shareCnt.innerHTML= sharecount;

})
repostBtn.addEventListener('click',()=>{
    repostcount = repostcount + 1;
    repostCnt.innerHTML= repostcount;
    repostBtn.style.color = "#17bf63";

})



let themeBtn = document.getElementById("themeChanger");

let postWindow = document.querySelectorAll(".postWindow");

themeBtn.addEventListener('click',()=>{
    postWindow.forEach(post =>{
    post.classList.toggle("light");        
    });

})