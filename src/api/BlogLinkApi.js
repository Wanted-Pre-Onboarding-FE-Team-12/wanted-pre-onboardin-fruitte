import axios from 'axios';

export const getBlogLink = async () => {
  const url = 'http://localhost:3000/data/blog_link.json';
  const response = await axios.get(url);
  return response.data;
};

export const getProductList = async () => {
  const url = 'http://localhost:3000/data/product.json';
  const response = await axios.get(url);
  return response.data;
};
