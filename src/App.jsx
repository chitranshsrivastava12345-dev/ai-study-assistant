import { useState } from "react";
import "./App.css";

function App() {
  const [notes, setNotes] = useState("");

  return (
    <div className="container">
      <h1>AI Study Assistant</h1>

      <p>Paste your notes or topic below.</p>

      <textarea
        placeholder="Example: Explain JavaScript Arrays..."
        rows="10"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>

      <button onClick={() => console.log(notes)}>
        Generate Flashcards
      </button>
    </div>
  );
}

export default App;