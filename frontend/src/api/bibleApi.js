
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const searchVerse = (q) =>
  API.get("/search", { params: { q } });

export const getTranslations = () =>
  API.get("/translations");

export const getBooks = (translation) =>
  API.get(`/books/${translation}`);

export const getChapters = (translation, book) =>
  API.get(`/chapters/${translation}/${book}`);

export const getVerses = (translation, book, chapter) =>
  API.get(`/verses/${translation}/${book}/${chapter}`);

export const getRandomVerse = () =>
  API.get("/random");
