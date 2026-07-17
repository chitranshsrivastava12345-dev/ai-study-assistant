const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

const generateFlashcards = async (req, res) => {
  try {
    const { notes } = req.body;

    if (!notes) {
      return res.status(400).json({
        success: false,
        message: "Notes are required",
      });
    }

    const prompt = `
Create exactly 5 flashcards from the following notes.

Return ONLY a valid JSON array.

Example:
[
  {
    "question":"What is React?",
    "answer":"A JavaScript library for building user interfaces."
  }
]

Notes:
${notes}
`;

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
    });

    const text = completion.choices[0].message.content;

    const parseJson = (value) => {
      try {
        return JSON.parse(value);
      } catch (parseError) {
        const jsonMatch = value.match(/\[[\s\S]*\]/m);
        if (jsonMatch) {
          return JSON.parse(jsonMatch[0]);
        }
        throw parseError;
      }
    };

    const flashcards = parseJson(text);

    res.json({
      success: true,
      flashcards,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  generateFlashcards,
};