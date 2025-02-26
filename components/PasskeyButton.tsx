"use client";

import { useSignIn } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Fingerprint } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function PasskeyButton() {
  const { signIn, setActive } = useSignIn();
  const router = useRouter();

  const signInWithPasskey = async () => {
    try {
      if (!signIn) return;

      const signInAttempt = await signIn.authenticateWithPasskey({
        flow: 'discoverable',
      });

      if (signInAttempt?.status === 'complete' && signInAttempt.createdSessionId) {
        await setActive({ session: signInAttempt.createdSessionId });
        toast.success("Successfully signed in with passkey!");
        router.push('/dashboard');
      } else {
        toast.error("Failed to sign in with passkey. Please try again.");
      }
    } catch (err) {
      console.error('Error:', JSON.stringify(err, null, 2));
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Button
      variant="link"
      onClick={signInWithPasskey}
      className="text-rose-600"
    >
      <Fingerprint className="h-4 w-4" />
      Continue with Passkey
    </Button>
  );
}
