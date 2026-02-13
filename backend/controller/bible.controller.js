import {
  fetchFromBibleApi,
  normalizeQuery,
} from "../services/bible.service.js";

export const searchVerse = async (req, res) => {
  try {
    const { q, translation = "web" } = req.query;

    if (!q) {
      return res.status(400).json({ message: "Query is required" });
    }

    const formatted = normalizeQuery(q);
    const url = `https://bible-api.com/${formatted}?translation=${translation}&single_chapter_book_matching=indifferent`;

    const data = await fetchFromBibleApi(url);
    res.json(data);
  } catch (err) {
    res.status(404).json({ message: "Verse not found or invalid format" });
  }
};

export const getTranslations = async (req, res) => {
  try {
    const data = await fetchFromBibleApi("https://bible-api.com/data");
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch translations" });
  }
};

export const getBooks = async (req, res) => {
  try {
    const { translation } = req.params;
    const url = `https://bible-api.com/data/${translation}`;
    const data = await fetchFromBibleApi(url);
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch books" });
  }
};

export const getChapters = async (req, res) => {
  try {
    const { translation, book } = req.params;
    const url = `https://bible-api.com/data/${translation}/${book}`;
    const data = await fetchFromBibleApi(url);
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch chapters" });
  }
};

export const getVerses = async (req, res) => {
  try {
    const { translation, book, chapter } = req.params;
    const url = `https://bible-api.com/data/${translation}/${book}/${chapter}`;
    const data = await fetchFromBibleApi(url);
    res.json(data);
  } catch {
    res.status(500).json({ message: "Failed to fetch verses" });
  }
};

export const getRandomVerse = async (req, res) => {
  try {
    const { translation = "web", scope } = req.query;

    let url = `https://bible-api.com/data/${translation}/random`;

    // Only add scope if provided
    if (scope) {
      url += `/${scope}`;
    }

    const data = await fetchFromBibleApi(url);
    res.json(data);
  } catch (error) {
    console.error("Random verse error:", error.message);
    res.status(500).json({ message: "Failed to fetch random verse" });
  }
};
