"use server";

import { getConvexClient } from "@/lib/convex";
import { currentUser } from "@clerk/nextjs/server";
import { togetherai, createTogetherAI } from '@ai-sdk/togetherai'; // using this for free image generation
import { experimental_generateImage as generateImage } from 'ai';
import { FeatureFlag, featureFlagEvents } from "@/features/flags";
import Together from 'together-ai';
import { api } from "@/convex/_generated/api";

const IMG_SIZE = "1792x1024" as const;

const convexClient = getConvexClient();

export const ImgGeneration= async (prompt:string,videoId:string) => {

  const user = await currentUser();
  const together = new Together();
  
  if (!user?.id) {
    throw new Error("User not found!");
  }
  
  // const togetherai = createTogetherAI({
    //   apiKey: process.env.TOGETHER_API_KEY,
    // });
    
    if(!prompt) {
      throw new Error("Failed to generate image prompt");
    }
    
    console.log("Generating image for prompt: ", prompt);
    
    //Generate the image using Together AI
    const imageResponse = await generateImage({
    model: togetherai.image("black-forest-labs/FLUX.1-schnell-Free"),
    prompt: prompt,
    size: IMG_SIZE,
    n: 1,
  });

  const imageUrl  = imageResponse.responses[0];

  if(!imageUrl) {
    throw new Error("Failed to generate image");
  }

  console.log("Getting upload URL........");
  const postUrl = await convexClient.mutation(api.images.generateUploadUrl);
  console.log("Got upload URL");

  console.log("Downloadubg Image from Together AI........");
  const image: Blob = await fetch(imageUrl).then((res) => res.blob());
  console.log("Downloaded Image from Together AI");

  console.log("Uploading Image to Convex........");
  const result = await fetch(postUrl, {
    method: "POST",
    headers: { "Content-Type": image!.type },
    body: image,
  });

  const { storageId } = await result.json();
  console.log("Uploaded Image to storage with ID: ", storageId);

  console.log("Storing Image in Convex........");
  await convexClient.mutation(api.images.storeImage, {
    storageId,
    videoId,
    userId: user.id,
  });
  // console.log("Stored Image in Convex with ID: ", imageId);
  console.log("Saved Image reference in database")

  const dbImageUrl = await convexClient.query(api.images.getImage, {
    userId: user.id,
    videoId,
  });

  await client.track({
    event: featureFlagEvents[FeatureFlag.IMG_GENERATION].event,
    company: {
      id: user.id,
    },
    user: {
      id: user.id,
    },
  });

  return (
    imageUrl: dbImageUrl,
  )
}
