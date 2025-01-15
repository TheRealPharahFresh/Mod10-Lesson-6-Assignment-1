let startTime = 20;
let Count = 1;

const button = document.getElementById("countDownBTN");
const timerMessage = document.getElementById("timerMessage"); 

button.addEventListener("click", function() {
    const intervalId = setInterval(function() {
        const countDown = startTime - Count;
        timerMessage.textContent = "CountDown Has Started, Count Down: " + countDown;
        console.log("CountDown Has Started, Count Down: " + countDown);
        
        
        Count++;

        
        if (countDown <= 0) {
            clearInterval(intervalId);
            console.log("Countdown Finished!");
        }
    }, 1000);

    
    button.disabled = true;
});


