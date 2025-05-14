// src/utils/validation.js

export function validateLoginForm({ name, email, password }, isSignup = false) {
    const errors = {};
  
    // Name validation (only if it's sign-up mode)
    if (isSignup) {
      if (!name || name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters long.";
      }
    }
  
    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address.";
    }
  
    // Password regex: at least 8 chars, 1 letter, 1 number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!password || !passwordRegex.test(password)) {
      errors.password =
        "Password must be at least 8 characters long and include at least one letter and one number.";
    }
  
    return errors;
  }
  