function Validation(values) {
  let error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.name.trim() === "") {
    error.name = "Name should not be empty";
  } else {
    error.name = "";
  }

  if (values.email.trim() === "") {
    error.email = "Email should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email format is incorrect";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password must be at least 8 characters long and include at least one digit, one lowercase letter, and one uppercase letter";
  } else {
    error.password = "";
  }

  return error;
}

export default Validation;
