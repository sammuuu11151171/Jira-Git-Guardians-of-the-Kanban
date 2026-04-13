function showMessage() {
    document.getElementById("msg").innerText = "Hello Team! Guardians of the Sprint....This is Samruddhi this side :)";
}


// New Feature (User Input Message)
function showCustomMessage() {
    let name = document.getElementById("userInput").value;

    if (name.trim() === "") {
        document.getElementById("msg").innerText = "Please enter your name!";
    } else {
        document.getElementById("msg").innerText =
            "Hello " + name + "! Welcome to Guardians of the Sprint 🚀";
    }
}