# ScriptureCloud – Bible SaaS Platform

A full-stack Bible platform that allows users to search, explore, and discover scripture through a modern SaaS-style interface.

---

## Features

### Core Features
- Search verses (e.g., John 3:16)
- Browse Bible by:
  - Translations
  - Books
  - Chapters
  - Verses
- Random verse generator
- Translation selection
- Responsive SaaS dashboard UI

---

## Advanced Features
- Proxy backend for Bible API
- In-memory LRU caching
- Query normalization
- Rate-limit protection (external API safe)
- Modular REST architecture
- Modern Tailwind + Vite frontend

---

## Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS (SaaS UI)
- React Router
- Axios

### Backend
- Node.js
- Express
- LRU Cache
- External API: https://bible-api.com

---

## API Endpoints

| Endpoint | Description |
|---|---|
GET /api/search?q=John 3:16 | Search verse |
GET /api/translations | List translations |
GET /api/books/:translation | List books |
GET /api/chapters/:translation/:book | List chapters |
GET /api/verses/:translation/:book/:chapter | List verses |
GET /api/random | Random verse |

---

## UX Highlights

- Easy search with examples
- Translation selector on homepage
- Random scripture displayed in background
- Clean SaaS dashboard layout
- Responsive design

---

## Project Structure

backend/
controllers/
routes/
services/
frontend/
components/
pages/
api/


---

## Getting Started

### Backend



cd backend
npm install
npm run dev


### Frontend



cd frontend
npm install
npm run dev


Frontend: http://localhost:5173  
Backend: http://localhost:3000

---

## Future Improvements

- User authentication
- Bookmarks
- Search history
- Dark mode
- Redis caching
- Deployment (Render / Vercel)

---
