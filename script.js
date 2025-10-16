// Get the form and confirmation paragraph
const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");

// Add submit event listener
form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default form submission

  const formData = new FormData(form);
  const name = formData.get("name"); // get the name for confirmation message

  // Send the form data to Formspree
  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Success message
      confirmation.innerText = `✅ Thank you, ${name}! Your appointment has been received. We'll contact you soon 💙`;
      form.reset();
    } else {
      // Handle errors
      response.json().then(data => {
        if (data.errors) {
          confirmation.innerText = "❌ " + data.errors.map(error => error.message).join(", ");
        } else {
          confirmation.innerText = "❌ Something went wrong. Please try again later.";
        }
      });
    }
  }).catch(error => {
    confirmation.innerText = "❌ Submission failed. Check your internet connection.";
  });
});
