import axios from 'axios';

export const loginUserApi = (request) => {
  return fetch(" http://localhost:5000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request.user),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    })
    .then((error) => {
      return error;
    });
};

export const loadUsersApi=async()=>
await axios.get('http://localhost:5000/users');

export const loadProductsApi=async()=>
await axios.get('http://localhost:5000/products');

export const createOrderApi=async(order)=>
await axios.post('http://localhost:5000/orders',order);

export const loadOrdersApi=async()=>
await axios.get('http://localhost:5000/orders');


