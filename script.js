let leftBar = document.getElementById("leftbar");

let resizeBtn = document.getElementById("resizebutton");

let alltext = document.querySelectorAll("#leftbar p")

let postFeed = document.getElementById("postfeed");

let followingBtn = document.getElementById("followingbutton");

let followingList = document.getElementById("followinglist");

let communitiesBtn = document.getElementById("communitiesbutton");

let communitiesList = document.getElementById("communitieslist");

let clearBtn = document.getElementById("clearbutton");

let recentPost = document.querySelectorAll(".recentpost")

let ghayab = document.getElementById("onlyheadline");

let chatBtn = document.getElementById("chatbutton");





chatBtn.addEventListener('click' , () => {
    window.location.href = "chat.html";
})

clearBtn.addEventListener('click',() =>{
    recentPost.forEach(post =>post.style.display = "none")
    ghayab.style.display = "none";
})

let isCollapsed = false;

resizeBtn.addEventListener('click',()=> {
    if(isCollapsed){
        alltext.forEach(text => text.style.display = "inline");
        leftBar.style.width = "15%";
        followingBtn.textContent = "Following"
        communitiesBtn.textContent = "communities"
        resizeBtn.style.left = "calc(15% - 15px)";
    isCollapsed = false;
    } else {
        alltext.forEach(text => text.style.display = "none");
        leftBar.style.width = "100px";   
        followingBtn.textContent = "F"
        communitiesBtn.textContent = "C"
        resizeBtn.style.left = "85px";
        isCollapsed = true;

    }
    
})
let iscommunitieslistCollapsed = false;
let isfollowingistCollapsed = false;
followingBtn.addEventListener('click', () => {
    if(!isfollowingistCollapsed){
        followingList.style.display = "none";
        isfollowingistCollapsed = true;
    }else {
        followingList.style.display = "flex";
        isfollowingistCollapsed =false;
    }

})

communitiesBtn.addEventListener('click', () => {
    if(!iscommunitieslistCollapsed){
        communitiesList.style.display = "none";
        iscommunitieslistCollapsed = true;
    }else {
        communitiesList.style.display = "flex";
        iscommunitieslistCollapsed =false;
    }

})




