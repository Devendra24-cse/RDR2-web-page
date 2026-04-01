let signupWindow = document.getElementById("signup");
let loginWindow = document.getElementById("login");

const signBtn = document.getElementById("signupB");
const loginBtn = document.getElementById("loginB");








signBtn.addEventListener('click', ()=> {
    signupWindow.style.display = "flex";
    signBtn.style.backgroundColor = "#8a0303";
    signBtn.style.color = "#fff";
    loginBtn.style.backgroundColor = "#1a1a1a";
    loginBtn.style.color = "#d1b280";
    console.log("sign up window showing")
    loginWindow.style.display = "none";
})
loginBtn.addEventListener('click', ()=> {
    loginWindow.style.display = "flex";
    loginBtn.style.backgroundColor = "#8a0303";
    loginBtn.style.color = "#fff";
    signBtn.style.backgroundColor = "#1a1a1a";
    signBtn.style.color = "#d1b280";
    console.log("log in window showing")
    signupWindow.style.display = "none";
})


const submitBtn = document.getElementById("submit");
submitBtn.addEventListener('click', function(event){
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmpassword").value.trim();
    let errorText = document.getElementById("error");


    if(name === ""|| email ==="" || password ==="" || confirmPassword ===""){
        return errorText.textContent = "error 404";
    }

    if(!email.includes("@") || !email.includes(".") || email.indexOf("@")> email.indexOf(".")){
        return errorText.textContent = "error in email";
    }
    if(password.length < 6){
        return errorText.textContent = "error in password";
    }
    if(password !== confirmPassword){
        return errorText.textContent = "error in confirm password";
    }
    alert("wellcome " +" "+ name);
    console.log("user logined : ", {name  , email, password});
    window.location.href = "index.html";

})




let currentSlideIndex = 0;
showSlide();


function showSlide(index){
    const slides = document.querySelectorAll('.slide');


    slides.forEach(slide => slide.style.display = "none");

    currentSlideIndex++;

    if(currentSlideIndex > slides.length){
        currentSlideIndex =1;
    }
    slides[currentSlideIndex -1].style.display = "block";

    setTimeout(showSlide,4000)

    
}