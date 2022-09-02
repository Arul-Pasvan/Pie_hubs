import { object, string } from "yup";

const signupSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).max(12).required(),
});

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const userSchema = object().shape({
  first_name: string().min(3).required(),
  last_name: string().required(),
  mobile: string().matches(phoneRegExp, "Phone number is not valid").required(),
  school_name: string().min(3).required(),
});

export { signupSchema, userSchema };
