"use client";
import { SchematicEmbed as SchematicEmbedComponent } from "@schematichq/schematic-components";

// const SchematicEmbed = () => {
//   const token = " ... " 
//   const componentId = "cmpn_RRPvTY9FaA6"

//   return (
//     <SchematicEmbedComponent accessToken={token} id={componentId} />
//   )
// }

const SchematicEmbed = ({
  accessToken,
  componentId,
}: {
  accessToken: string;
  componentId: string;
}) => {
  return <SchematicEmbedComponent accessToken={accessToken} id={componentId} />;
};

export default SchematicEmbed;
