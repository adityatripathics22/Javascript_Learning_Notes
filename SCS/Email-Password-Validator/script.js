// Get form and inputs
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Email regex for validation
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Password regex: 
// - at least 6 chars
// - 1 uppercase, 1 lowercase, 1 digit, 1 special char
function isValidPassword(password) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  return regex.test(password);
}

// Form submit event
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form refresh

  let valid = true;

  // Validate email
  if (!isValidEmail(email.value.trim())) {
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate password
  if (!isValidPassword(password.value.trim())) {
    passwordError.textContent =
      "Password must have 1 uppercase, 1 lowercase, 1 number, 1 special char, min 6 chars";
    passwordError.style.display = "block";
    valid = false;
  } else {
    passwordError.style.display = "none";
  }

  // If both valid
  if (valid) {
    alert("✅ Login successful!");
  }
});
