function SendMail(event) {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form");
    const submitButton = document.querySelector('.btn.ask');
    const fromName = document.getElementById("fullName").value;
    const emailId = document.getElementById("email_id").value;
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;
    const formMessage = document.getElementById("form-message");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    formMessage.style.display = "none";
    formMessage.textContent = "";
    formMessage.classList.remove("success", "error");

    function showMessage(content, type) {
        formMessage.textContent = content;
        formMessage.classList.add(type);
        formMessage.style.display = "block";
        
        setTimeout(() => {
            formMessage.style.display = "none";
        }, 3000);
    }

    if (!fromName || !emailId || !title || !message) {
        showMessage("Please fill in all fields.", "error");
        return;
    }

    if (!emailRegex.test(emailId)) {
        showMessage("Please enter a valid email address.", "error");
        return;
    }

    var params = {
        from_name: fromName,
        email_id: emailId,
        title: title,
        message: message,
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.send("service_ygmwgqr", "template_6splm8f", params)
        .then(
            (res) => {
                if (res.status === 200) {
                    console.log("SENT SUCCESS!");
                    showMessage("Message sent successfully!", "success");
                    contactForm.reset();
                } else {
                    console.log("SENT NO SUCCESS!");
                    showMessage("Failed to send message. Please try again.", "error");
                }

                submitButton.disabled = false;
                submitButton.textContent = "Send";
            }, (error) => {
                console.log("FAILED...", error);
                showMessage("Failed to send message. Please try again.", "error");
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            });
}
