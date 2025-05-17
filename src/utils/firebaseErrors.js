export const getFriendlyError = (error) => {
    // Prefer error.code, fallback to error.message
    
    switch (error) {
      case "auth/email-already-in-use":
        return "This email is already registered. Try logging in instead.";
      case "auth/invalid-email":
        return "Please enter a valid email address.";
      case "auth/user-not-found":
      case "auth/wrong-password":
      case "auth/invalid-credential": 
        return "Invalid email or password. Please try again.";
      case "auth/weak-password":
        return "Password should be at least 6 characters.";
      case "auth/missing-password":
        return "Please enter your password.";
      default:
        return "Something went wrong. Please try again.";
    }
  };
  