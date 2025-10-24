// Login validation
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const error = document.getElementById('loginError');
    error.textContent = "";
    if (username.length < 3) {
      error.textContent = "Username must be at least 3 characters.";
      return;
    }
    if (password.length < 6) {
      error.textContent = "Password must be at least 6 characters.";
      return;
    }
    // Redirect to portfolio page
    location.href = "portfolio.html";
  });
}

// Registration validation
if (document.getElementById('registerForm')) {
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirm').value;
    const error = document.getElementById('registerError');
    error.textContent = "";
    if (name.length < 3) {
      error.textContent = "Name must be at least 3 characters.";
      return;
    }
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
      error.textContent = "Enter a valid email address.";
      return;
    }
    if (password.length < 8) {
      error.textContent = "Password must be at least 8 characters.";
      return;
    }
    if (password !== confirmPassword) {
      error.textContent = "Passwords do not match.";
      return;
    }
    // Redirect to login page
    location.href = "index.html";
  });
}
