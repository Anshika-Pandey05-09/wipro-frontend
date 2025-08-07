document.getElementById('registrationForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const course = document.getElementById('course').value;

  const userData = {
    name,
    email,
    phone,
    gender,
    course
  };

  // Set the thank you message
  document.getElementById('thankYouMessage').textContent =
    `Thank you ${name}, you have been successfully registered!`;

  // Set the JSON data
  document.getElementById('jsonOutput').textContent = JSON.stringify(userData, null, 2);

  // Show floating box with animation
  const box = document.getElementById('floatingBox');
  box.classList.remove('d-none');

  // Auto-hide after 6 seconds (optional)
  setTimeout(() => {
    box.classList.add('d-none');
  }, 6000);

  // Reset form
  this.reset();
});