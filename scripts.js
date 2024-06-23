document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let formMessage = document.getElementById("form-message");

    formMessage.innerHTML = "Thank you, " + name + "! Your message has been sent.";
    formMessage.style.color = "green";

    // Clear the form
    document.getElementById("contact-form").reset();
});
