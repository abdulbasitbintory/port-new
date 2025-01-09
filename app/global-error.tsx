"use client";

import * as Sentry from "@sentry/nextjs";
import { useEffect } from "react";
import Error from "next/error";

// Define the type for the error parameter
interface GlobalErrorProps {
  error: {
    statusCode?: number;
    message?: string;
  };
}

export default function GlobalError({ error }: GlobalErrorProps) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  // Assuming `error` contains statusCode; fallback to 500 otherwise.
  const statusCode = error?.statusCode || 500;

  return (
    <div>
      <Error statusCode={statusCode} />
      <p>An unexpected error has occurred. Our team has been notified.</p>
    </div>
  );
}

