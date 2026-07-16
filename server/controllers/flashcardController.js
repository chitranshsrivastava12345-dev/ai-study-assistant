const generateFlashcards = (req, res) => {
  res.json({
    success: true,
    message: "Flashcard API working",
    data: [],
  });
};

module.exports = {
  generateFlashcards,
};