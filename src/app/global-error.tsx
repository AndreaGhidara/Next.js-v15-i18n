"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Errore Critico</h1>
        <p className="mb-4 text-red-700">{error.message}</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded"
          onClick={() => reset()}
        >
          Riprova
        </button>
      </body>
    </html>
  );
}
