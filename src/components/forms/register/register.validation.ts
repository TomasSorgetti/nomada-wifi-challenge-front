export const registerValidation = (data: {
  email: string;
  password: string;
  confirm: string;
}) => {
  const errors = {
    email: "",
    password: "",
    confirm: "",
  };
  // Email validation
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  } else {
    errors.email = "";
  }

  // Password validation
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 5) {
    errors.password = "Password must be at least 6 characters";
  } else {
    errors.password = "";
  }

  // Confirm password validation
  if (!data.confirm) {
    errors.confirm = "Please confirm your password";
  } else if (data.confirm !== data.password) {
    errors.confirm = "Passwords do not match";
  } else {
    errors.confirm = "";
  }
  return errors;
};
