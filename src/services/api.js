import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api",
});

export const generateFlashcards = async (notes) => {
  const response = await API.post("/flashcards/generate", {
    notes,
  });

  return response.data;
};