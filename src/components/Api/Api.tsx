import axios from "axios";

const endPoint = "http://localhost:4573/api";

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
    .then((res) => res.data);
};

export const getAllProduct = async () => {
  return await axios
    .get(`http://localhost:4573/api/allproducts`)
    .then((res) => res.data);
};

export const SingleProduct = async (id: any) => {
  return await axios
    .get(`${endPoint}/allproducts/${id}`)
    .then((res) => res.data);
};
