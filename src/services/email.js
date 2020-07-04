import axios from "axios";

const urlBase = "/api/email";

export const sendEmail = async (fullname, email, message) => {
  try {
    axios.post(`${urlBase}/`, {
      fullname,
      email,
      message,
    });
  } catch (err) {
    console.log(err);
  }
};
