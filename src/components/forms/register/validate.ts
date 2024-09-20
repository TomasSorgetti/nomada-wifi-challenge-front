interface IData {
  email: string;
  password: string;
  confirm: string;
}

export function validateRegister(data: IData) {
  const errors = {
    email: "",
    password: "",
    confirm: "",
  };

  //* Email validation
  if (data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  //* Password validation
  if (data.password.trim() === "") {
    errors.password = "Password is required";
  } else if (data.password.length < 5) {
    errors.password = "Password must be at least 5 characters";
  }

  //* Confirm password validation
  if (data.confirm.trim() === "") {
    errors.confirm = "Please confirm your password";
  } else if (data.confirm !== data.password) {
    errors.confirm = "Passwords do not match";
  }

  return errors;
}
