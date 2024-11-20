// Form submission handler
document.getElementById('applyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the form field values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const resume = document.getElementById('resume').files.length;

    // Simple validation
    if (firstName === "" || lastName === "" || email === "" || phone === "" || resume === 0) {
        displayMessage("Please fill out all fields and upload your resume.", "error");
    } else {
        displayMessage("Application submitted successfully!", "success");
        clearForm();
    }
});

// Display success or error messages
function displayMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = type;
}

// Clear the form after successful submission
function clearForm() {
    document.getElementById('applyForm').reset();
}
