import axios from "axios";

const endPoint = "http://localhost:4573/api";

interface userData {
  name: string;
  email: string;
  password: string;
}

interface productsData {
  title: string;
  desc: string;
  price: number;
  quantity: number;
  category: string;
  status: boolean;
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

export const allProduct = async () => {
  await axios.get(`${endPoint}/products`).then((res) => res.data);
};
