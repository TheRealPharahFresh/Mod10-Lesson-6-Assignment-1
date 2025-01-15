let pizzaPromises = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Pizza delivered!");
    }, 3000);
});



pizzaPromises.then(function(message) {
    document.getElementById("deliveryStatus").textContent = message;

}).catch(function(error){
    console.log("Delivery failed:" , error);
});