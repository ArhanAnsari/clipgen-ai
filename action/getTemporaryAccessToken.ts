'use server';

import { currentUser } from "@clerk/nextjs/server";

export default async function getTemporaryAccessToken() {
    const user = await currentUser();

    if (!user) {
        return null;
    }
}