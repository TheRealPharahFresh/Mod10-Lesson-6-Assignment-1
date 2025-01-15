let intervalID;

function notification() {
    const notificationElement = document.getElementById("notification");
    notificationElement.style.display = "block"; 

    
    intervalID = setInterval(() => {
        notificationElement.style.display = "block"; 
    }, 3000);
}

notification(); 

const dismissBTN = document.getElementById("dismissBTN");
dismissBTN.addEventListener("click", function() {
    const notificationElement = document.getElementById('notification');
    notificationElement.style.display = 'none'; 
    clearInterval(intervalID); 

    
    intervalID = null;
});
