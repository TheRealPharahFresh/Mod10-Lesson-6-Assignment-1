function greet(name, callback) {
    const greetingMessage = document.getElementById("greetingMessage");
    greetingMessage.textContent = "Hello, " + name + "!";
    callback();
}

function farewell() {
    const farewellMessage = document.getElementById("farewellMessage");
    farewellMessage.textContent = "Goodbye!";

}

document.getElementById("greetBtn").addEventListener("click", function(){
    greet("Alice", farewell);
});