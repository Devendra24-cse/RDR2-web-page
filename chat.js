let userInput = document.getElementById("userInput");

let messagesWindow = document.getElementById("messagesWindow");

userInput.addEventListener("keypress", function(e){
    if(e.key ==="Enter" && userInput.value.trim() !== ""){

        const newMessage = document.createElement('div');
        const systemMessage = document.createElement('div');

        newMessage.classList.add('userMessage');
        systemMessage.classList.add('systemResponce')
    
        newMessage.textContent = userInput.value;
        systemMessage.textContent = "nikal , pahli fursat se nikal"

        messagesWindow.appendChild(newMessage);
        messagesWindow.appendChild(systemMessage);

        userInput.value = "";
        messagesWindow.scrollTop = messagesWindow.scrollHeight;

        
    }
})