const btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
    const name = prompt("What is your name?");

    document.getElementById("WelcomeMessage").innerHTML="Welcome " + name +"!! :)";
    document.getElementById("WelcomeMessage").style.color="blue";
    
});