function SendMail(event) {
    event.preventDefault();
    const contactForm = document.getElementById("contact-form")
    const submitButton = document.querySelector('.btn.ask');
    const fromName = document.getElementById("fullName").value
    const emailId = document.getElementById("email_id").value
    const title = document.getElementById("title").value
    const message = document.getElementById("message").value

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!fromName || !emailId || !title || !message) {
        alert("Please fill in all fields.");
        return
    }

    if (!emailRegex.test(emailId)) {
        alert("Please enter a valid email address.");
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
                    alert("Message sent successfully!");
                    contactForm.reset();
                }
                else {
                    console.log("SENT N0 SUCCESS!");
                    alert("Failed to send message. Please try again.")
                }

                submitButton.disabled = false;
                submitButton.textContent = "Send";

            }, (error) => {
                console.log("FAILED...", error);
                alert("Failed to send message. Please try again.");
                submitButton.disabled = false;
                submitButton.textContent = "Send";
            })
}