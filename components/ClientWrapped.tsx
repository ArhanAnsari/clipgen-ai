"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "@/components/SchematicWrapped";

export default function ClientWrapper({
    children,
}: Readonly<{
        children: React.ReactNode;
}>) {

    const schematicPublishableKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
    if(!schematicPublishableKey) {
        throw new Error("Missing NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY environment variable");
    }
    return (
    <ClerkProvider>
        <SchematicProvider publishableKey={schematicPublishableKey}>
            <SchematicWrapped>{children}</SchematicWrapped>
        </SchematicProvider>
    </ClerkProvider>
    );
}