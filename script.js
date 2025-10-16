document.getElementById("appointmentForm").addEventListener("submit", function(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("confirmation").innerText =
    `Thank you, ${name}! Your appointment has been received. We'll contact you soon 💙`;
  this.reset();
});
