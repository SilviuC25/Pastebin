import Image from "next/image";
import AddSnippetForm from "../components/AddSnippetForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl py-5">Pastebin</h1>
        <AddSnippetForm />
      </div>
    </div>
  );
}
