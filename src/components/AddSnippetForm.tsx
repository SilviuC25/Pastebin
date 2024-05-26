"use client";

import { useState } from "react";

const AddSnippetForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    // Logica de salvare a datelor
    console.log("Title:", title);
    console.log("Content:", content);
    // Resetare campuri
    setTitle("");
    setContent("");
  };

  return (
    <div className="w-3/4 max-w-lg bg-white rounded shadow p-8">
      <h2 className="text-center text-2xl py-4">Add New Snippet</h2>
      <div className="space-y-4">
        <input
          type="text"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          placeholder="Enter your text here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddSnippetForm;
