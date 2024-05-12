require(["message", "welcome"], function(message, greeter) {
    let index = 0;
    let data = "WAIT...";
    document.getElementById("btn1").addEventListener("click", () => {
        index = 0;
        callWelcome(index);
    });
    document.getElementById("btn2").addEventListener("click", () => {
        index = 1;
        callWelcome(index);
    });
    document.getElementById("btn3").addEventListener("click", () => {
        index = 2;
        callWelcome(index);
    });

    function callWelcome(index) {
        const data = message[index];
        document.getElementById('div_welcome').innerHTML = greeter(data);
    }
})