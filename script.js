function togglePassword(id) {
  let input = document.getElementById(id);
  input.type = input.type === "password" ? "text" : "password";
}

// LOGIN VALIDATION
function loginValidate() {
  let email = document.getElementById("loginEmail").value;
  let pass = document.getElementById("loginPassword").value;

  if (email === "" || pass === "") {
    alert("All fields required");
    return false;
  }

  // Dummy AJAX simulation
  setTimeout(() => {
    document.getElementById("loginMsg").innerText =
      "Login successful (Dummy AJAX)";
  }, 1000);

  return false; // prevent page reload
}

// REGISTER VALIDATION
function registerValidate() {
  let name = document.getElementById("regName").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPassword").value;
  let confirm = document.getElementById("regConfirm").value;

  if (name === "" || email === "" || pass === "") {
    alert("All fields required");
    return false;
  }

  if (pass.length < 6) {
    alert("Password must be at least 6 characters");
    return false;
  }

  if (pass !== confirm) {
    alert("Passwords do not match");
    return false;
  }





  // Dummy AJAX
  setTimeout(() => {
    document.getElementById("registerMsg").innerText =
      "Registration successful (Dummy AJAX)";
  }, 1000);
  

  return false;
}




