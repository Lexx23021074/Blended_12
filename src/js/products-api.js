import axios from 'axios';
import { BASE_URL, ENDPOINTS } from './constants';

axios.defaults.baseURL = BASE_URL;

export const fetchCategories = async () => {
  const res = await axios.get(ENDPOINTS.categories);
  return res.data;
};
