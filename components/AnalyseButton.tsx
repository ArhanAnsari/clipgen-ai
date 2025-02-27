"use client";
import { useFormStatus } from "react-dom";

function AnalyseButton() {
  const {pending} = useFormStatus();
  return (
    <button
      type="submit"
      className="p-2 px-6 rounded-lg bg-blue-600 text-white hover:bg-blue-700
      focus:outline-none transition-all focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
      disabled:opacity-50 disabled:cursor-not-allowed duration-200 font-medium"
      disabled={pending}
    >
      {pending ? "Analysing..." : "Analyse"}
    </button>
  )
}

export default AnalyseButton
