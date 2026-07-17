import { useState } from "react";
import "./App.css";
import Flashcard from "./components/FlashCard";
import PDFUpload from "./components/PDFUpload";
import { generateFlashcards, generateSummary } from "./services/api";

function App() {
  const [notes, setNotes] = useState("");
  const [flashcards, setFlashcards] = useState([]);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  


  const handleGenerate = async () => {
    if (!notes.trim()) {
      alert("Please enter your notes.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateFlashcards(notes);

      if (data.success) {
        setFlashcards(data.flashcards);
      } else {
        setError("Unable to generate flashcards.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const clearNotes = () => {
    setNotes("");
    setFlashcards([]);
    setSummary("");
    setError("");
  };

  const handleGenerateSummary = async () => {
    if (!notes.trim()) {
      alert("Please enter your notes.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateSummary(notes);

      if (data.summary) {
        setSummary(data.summary);
      } else {
        setError("Unable to generate summary.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const copySummary = () => {
    if (!summary) return;
    navigator.clipboard.writeText(summary);
    alert("Summary copied!");
  };

  return (
    <div className="app-shell">
      <div className="panel">
        <header className="hero">
          <div>
            <p className="eyebrow">AI Study Assistant</p>
            <h1>Convert notes into smart study content.</h1>
          </div>
          <p className="intro">
            Paste your notes, generate a concise summary, and build flashcards in one simple workflow.
          </p>
        </header>

        <section className="input-panel">
          <PDFUpload setNotes={setNotes} />

          <label htmlFor="notes">Notes</label>
          <textarea
            id="notes"
            rows="10"
            placeholder="Paste your notes here..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <div className="button-row">
            <button className="primary" onClick={handleGenerate} disabled={loading}>
              {loading ? "Generating..." : "Generate Flashcards"}
            </button>
            <button className="secondary" onClick={handleGenerateSummary} disabled={loading}>
              {loading ? "Generating..." : "Generate Summary"}
            </button>
            <button className="secondary" onClick={clearNotes} disabled={loading}>
              Clear
            </button>
          </div>

          {loading && <p className="status">Generating...</p>}
          {error && (
            <div className="error">
              {error}
            </div>
          )}
        </section>

        {summary && (
          <section className="summary-card">
            <div className="summary-head">
              <h2>AI Summary</h2>
            </div>
            <pre>{summary}</pre>
            <button className="secondary copy-button" onClick={copySummary}>
              Copy Summary
            </button>
          </section>
        )}

        {flashcards.length === 0 && !loading && (
          <p className="empty-state">No flashcards generated yet.</p>
        )}

        {flashcards.length > 0 && (
          <section className="cards-grid">
            {flashcards.map((card, index) => (
              <Flashcard key={index} card={card} index={index} />
            ))}
          </section>
        )}
      </div>
    </div>
  );
}

export default App;