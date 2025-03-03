"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";
import Usage from "./Usage";
import { FeatureFlag } from "@/features/flags";
import Image from "next/image";
import { useSchematicEntitlement } from "@schematichq/schematic-react";
import { useQuery } from "convex/react";
import { api } from "./../convex/_generated/api";
import { Id } from "./../convex/_generated/dataModel";

interface Thumbnail{
    url: string | null;
    _id: Id<"images">;
    _creationTime: number;
    videoId: string;
    userId: string;
    storageId: Id<"_storage">;
}

const ThumbnailGeneration = ({ videoId }: { videoId: string }) => {
  const { user } = useUser();
  const images = useQuery(api.images.getImages, {
    videoId,
    userId: user?.id??"",
  });

  const { value: isImgGenerationEnabled } = useSchematicEntitlement(
    FeatureFlag.IMG_GENERATION
  );

  // Ensure images is always an array to prevent undefined issues
  const imageList:Thumbnail[] = images || [];

  return (
    <div className="flex flex-col dark:border-gray-600 rounded-xl p-4 border">
      <div className="min-w-52">
        <Usage
          featureFlag={FeatureFlag.IMG_GENERATION}
          title="Thumbnail Generation"
        />
      </div>

      {/* Thumbnails List */}
      {imageList.length > 0 ? (
        <div className="flex overflow-x-auto gap-4 mt-4">
          {imageList.map((img) => (
            <div
              key={img._id}
              className="flex-none w-[200px] h-[110px] rounded-lg overflow-hidden"
            >
              <Image
                src={img.url??""}
                alt="Generated thumbnail"
                width={200}
                height={110}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      ) : !isImgGenerationEnabled ? (
        <div className="text-center py-8 px-4 rounded-lg mt-4 border-2 border-dashed border-gray-200">
          <p className="text-gray-500">No thumbnails have been generated yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Generate thumbnails to see them appear here
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default ThumbnailGeneration;
