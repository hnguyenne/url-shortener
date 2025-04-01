import axios from 'axios';

const API_URL = "http://localhost:5000/api/url";

export const shortenUrl = async (longUrl) => {
  const response = await axios.post(`${API_URL}/shorten`, { longUrl });
  return response.data;
};
