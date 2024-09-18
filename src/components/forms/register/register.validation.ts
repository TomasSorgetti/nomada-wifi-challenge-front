interface IData {
  email: string;
  password: string;
  confirm: string;
}

interface IRegisterErrors {
  data: IData;
  dataErrors: IData;
  setDataErrors: React.Dispatch<React.SetStateAction<IData>>;
}

export const registerValidation = ({
  data,
  dataErrors,
  setDataErrors,
}: IRegisterErrors) => {
  let hasErrors = false;
  const newErrors: IData = { ...dataErrors };

  //* Email validation
  if (data.email.trim() === "") {
    newErrors.email = "Email is required";
    hasErrors = true;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    newErrors.email = "Email is invalid";
    hasErrors = true;
  } else {
    newErrors.email = "";
  }

  //* Password validation
  if (data.password.trim() === "") {
    newErrors.password = "Password is required";
    hasErrors = true;
  } else if (data.password.length < 5) {
    newErrors.password = "Password must be at least 5 characters";
    hasErrors = true;
  } else {
    newErrors.password = "";
  }

  //* Confirm password validation
  if (data.confirm.trim() === "") {
    newErrors.confirm = "Please confirm your password";
    hasErrors = true;
  } else if (data.confirm !== data.password) {
    newErrors.confirm = "Passwords do not match";
    hasErrors = true;
  } else {
    newErrors.confirm = "";
  }

  if (hasErrors) {
    setDataErrors(newErrors);
  } else {
    setDataErrors({
      email: "",
      password: "",
      confirm: "",
    });
  }
};
