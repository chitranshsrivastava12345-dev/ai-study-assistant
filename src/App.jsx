import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>AI Study Assistant</h1>

      <p>Paste your notes or topic below.</p>

      <textarea
        placeholder="Example: Explain JavaScript Arrays..."
        rows="10"
      ></textarea>

      <button>Generate Flashcards</button>
    </div>
  );
}

export default App;