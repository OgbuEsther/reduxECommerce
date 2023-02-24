import axios from "axios";

const endPoint = "http://localhost:4573/api";

interface userData {
  name: string;
  email: string;
  password: string;
}

// interface productsData {
//   title: string;
//   desc: string;
//   price: number;
//   quantity: number;
//   category: string;
//   status: boolean;
// }

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
  await axios
    .get(`http://localhost:4573/api/allproducts`)
    .then((res) => console.log(res.data));
};

// console.log("this is all products", allProduct);
