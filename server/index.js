const express = require("express");
const cors = require("cors");
require("dotenv").config();

const flashcardRoutes = require("./routes/flashcardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/flashcards", flashcardRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "AI Study Assistant Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});