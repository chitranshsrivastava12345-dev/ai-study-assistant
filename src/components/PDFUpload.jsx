import { useState } from "react";
import axios from "axios";

function PDFUpload({ setNotes }) {
  const [file, setFile] = useState(null);

  const uploadPDF = async () => {
    if (!file) {
      alert("Please select a PDF");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", file);

    try {
      const res = await axios.post(
        "http://localhost:5001/api/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setNotes(res.data.text || "");
      setFile(null);
      alert("PDF uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={uploadPDF}>
        Upload PDF
      </button>
    </div>
  );
}

export default PDFUpload;