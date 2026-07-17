# AI Study Assistant

AI Study Assistant is a lightweight learning tool that converts user notes into summarized study content and flashcards using AI. The app supports PDF upload, notes extraction, and quick generation of study-ready output with a clean, responsive interface.

## Features
- AI-generated flashcards from notes
- AI summary extraction for quick review
- PDF upload and text extraction
- Responsive and polished user interface
- Copy summary directly to clipboard

## Tech Stack
- React
- Vite
- Express
- Node.js
- Groq API
- Axios
- pdf-parse
- multer

## Installation

### Frontend
```bash
npm install
npm run dev
```

### Backend
```bash
cd server
npm install
npm run dev
```

## Environment Variables
Create a `.env` file in the `server` folder and add:
```bash
GROQ_API_KEY=your_key
PORT=5001
```

## Usage
1. Start the backend server and frontend app.
2. Upload a PDF or paste notes into the editor.
3. Click **Generate Flashcards** to create Q&A flashcards.
4. Click **Generate Summary** to receive a concise AI summary.
5. Copy the generated summary using the **Copy Summary** button.
6. Use **Clear** to reset notes, flashcards, and summary.

## Deployment
- Frontend can be deployed on Vercel.
- Backend can be deployed on Render or any Node.js hosting platform.
- Ensure the backend URL is configured correctly in `src/services/api.js` for production.

## Notes
- The backend uses `pdf-parse` for extracting text from uploaded PDF files.
- The frontend uses Axios to call backend APIs for flashcard and summary generation.
- For local development, the backend should run on port `5001`.
