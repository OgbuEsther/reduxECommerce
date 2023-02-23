import axios from "axios";

const endPoint = "https://localhost:4573/api";

interface userData {
  name: string;
  email: string;
  password: string;
}

export const createUser = async ({ name, email, password }: userData) => {
  await axios
    .post(`${endPoint}/register`, {
      name,
      email,
      password,
    })
    .then((res) => {
      console.log(res);
    });
};
