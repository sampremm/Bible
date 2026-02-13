import axios from "axios";
import { getcashe,setcash } from "../utils/cache.js";

export const normalizeQuery = (q) => {
  return q.trim().replace(/\s+/g, "+");
};

export const fetchFromBibleApi = async (url) => {
  const cached = getcashe(url);
  if (cached) {
    return cached;
  }

  const response = await axios.get(url);
    setcash(url, response.data);
  return response.data;
};