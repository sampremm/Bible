import express from "express";
import {
  searchVerse,
  getTranslations,
  getBooks,
  getChapters,
  getVerses,
  getRandomVerse,
} from "../controller/bible.controller.js";

const router = express.Router();

router.get("/search", searchVerse);
router.get("/translations", getTranslations);
router.get("/books/:translation", getBooks);
router.get("/chapters/:translation/:book", getChapters);
router.get("/verses/:translation/:book/:chapter", getVerses);
router.get("/random", getRandomVerse);

export default router;
