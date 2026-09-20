// Start Learning button

function startLearning() {

    document.getElementById("console").scrollIntoView({
        behavior: "smooth"
    });

}


// Interactive output

function showOutput() {

    let name =
        document.getElementById("nameInput").value;

    let output =
        document.getElementById("output");

    if (name.trim() === "") {

        output.innerHTML =
            "⚠️ Please enter your name.";

        return;
    }

    output.innerHTML =
        "Hello " + name +
        "! Welcome to Java Console I/O. ☕";

}


// Dark Mode

function toggleDarkMode() {

    document.body.classList.toggle("dark-mode");

}