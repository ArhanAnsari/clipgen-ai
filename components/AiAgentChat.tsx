"use client";

import { useChat } from "@ai-sdk/react";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
apiKey: process.env.GEMINI_API_KEY,
});

function AiAgentChat(){
  const model = google("gemini-2.0-flash");
  return <div>AiAgentChat</div>
}

export default AiAgentChat;
