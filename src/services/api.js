import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 10000,
});

export async function fetchProducts() {
  const response = await apiClient.get("/products");
  return response.data;
}

export async function fetchProduct(id) {
  const response = await apiClient.get(`/products/${id}`);
  return response.data;
}
