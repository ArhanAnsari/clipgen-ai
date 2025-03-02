import { NextResponse } from "next/server";
import { streamText, tool } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { currentUser } from "@clerk/nextjs/server";
import { getVideoDetails } from "@/actions/getVideoDetails";
import { fetchTranscript } from "@/lib/tools/fetchTranscript";
import { generateImage } from "@/lib/tools/generateImage";
import { z } from "zod";
import { getVideoIdFromUrl } from "@/lib/getVideoIdFromUrl";
import generateTitle from "@/lib/tools/generateTitle";

const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;

const google = createGoogleGenerativeAI({
  // custom settings
  apiKey
});

const model = google("gemini-2.0-flash");

export async function POST(req: Request) {
  const { messages, videoId } = await req.json();
//   const user = await currentUser();

//   if (!user) {
//     return NextResponse.json({ error: "Unauthorized!" }, { status: 401 });
//   }

  const videoDetails = await getVideoDetails(videoId);

  const SYSTEM_MESSAGE = `You are an AI agent ready to accept questions from the user about ONE specific video. The video ID in the question is ${videoId} but you'll refer to this as ${videoDetails?.title || "Selected Video"}. Use emojis to make the conversation more engaging. If an error occurs, explain it to the user and ask them to try again later. If the error suggest the user upgrade, explain that they must upgrade to use this feature, tell them to go to 'Manage Plan' in the header and upgrade. If any tool is used, analyse the response and if it contains a cache, exlain that the transcript is cached because they previously transcribed the video saving the user a token - use words like database instead of cache to make it more easy to understand. Format for notion.`;


  const result = streamText({
    model,
    messages: [{ role: "system", content: systemMessage }, ...messages],
    tools: {
      fetchTranscript: fetchTranscript,
      generateTitle: generateTitle,
      generateImage: generateImage(videoId, user.id),
      getVideoDetails: tool({
        description: "Get the details of a YouTube video",
        parameters: z.object({
          videoId: z.string().describe("The video ID to get the details for"),
        }),
        execute: async ({ videoId }) => {
          const videoDetails = await getVideoDetails(videoId);
          return { videoDetails };
        },
      }),
      extractVideoId: tool({
        description: "Extract the video ID from a URL",
        parameters: z.object({
          url: z.string().describe("The URL to extract the video ID from"),
        }),
        execute: async ({ url }) => {
          const videoId = await getVideoIdFromUrl(url);
          return { videoId };
        },
      }),
    },
  });

  return result.toDataStreamResponse();

  //   console.log(messages, videoId);
  // return result.toDataStreamResponse();
}
