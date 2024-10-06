function SendMail(event) {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form")
    const submitButton = document.querySelector('.btn.ask');
    const fromName = document.getElementById("fullName").value
    const emailId = document.getElementById("email_id").value
    const title = document.getElementById("title").value
    const message = document.getElementById("message").value
    const formMessage = document.getElementById("form-message");

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    formMessage.style.display = "none";
    formMessage.textContent = "";
    formMessage.classList.remove("success", "error");

    if (!fromName || !emailId || !title || !message) {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.classList.add("error");
        formMessage.style.display = "block";
        return
    }

    if (!emailRegex.test(emailId)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.classList.add("error");
        formMessage.style.display = "block";
        return;
    }

    var params = {
        from_name: fromName,
        email_id: emailId,
        title: title,
        message: message,
    }

    submitButton.disabled = true;
    submitButton.textContent = "Sending...";

    emailjs.send("service_ygmwgqr", "template_6splm8f", params)
        .then(
            (res) => {
                if (res.status === 200) {
                    console.log("SENT SUCCESS!");
                    formMessage.textContent = "Message sent successfully!";
                    formMessage.classList.add("success");
                    formMessage.style.display = "block";
                    contactForm.reset();
                }
                else {
                    console.log("SENT N0 SUCCESS!");
                    formMessage.textContent = "Failed to send message. Please try again.";
                    formMessage.classList.add("error");
                    formMessage.style.display = "block";
                }

                submitButton.disabled = false;
                submitButton.textContent = "Send";

            }, (error) => {
                console.log("FAILED...", error);
                formMessage.textContent = "Failed to send message. Please try again.";
                formMessage.classList.add("error");
                formMessage.style.display = "block";
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            })
}