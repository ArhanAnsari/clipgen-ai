"use client";

import { useToast } from "@/components/ui/use-toast";
import { useEffect } from "react";

interface ClerkToastProps {
  error?: string | null;
  success?: string | null;
}

export function ClerkToast({ error, success }: ClerkToastProps) {
  const { toast } = useToast();

  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error,
      });
    }
    if (success) {
      toast({
        title: "Success",
        description: success,
      });
    }
  }, [error, success, toast]);

  return null;
} 