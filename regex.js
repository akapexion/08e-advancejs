const form = document.getElementById("form");

form.addEventListener("submit", (a) => {
    a.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.]+.[a-zA-Z]{2,}$/;
    const emailField = document.getElementById("emailField");

    if (!emailRegex.test(emailField.value)) {
        console.log("Incorrect Email Address");
        document.getElementById("emailErr").innerHTML = "Incorrect Email Address";
        document.getElementById("emailErr").style.color = "red";
        emailField.style.borderColor = "red";
    }
    else {
        console.log("Correct Format");
        document.getElementById("emailErr").innerHTML = "";
        emailField.style.borderColor = "green";
        emailField.value = "";
    }
})

