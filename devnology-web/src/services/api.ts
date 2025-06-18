import axios from 'axios';
import { type Order } from '../interfaces/interfaces';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

export const getProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const createOrder = async (orderData: any) => {
  const response = await api.post('/orders', orderData);
  return response.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const response = await api.get('/orders');
  return response.data;
};