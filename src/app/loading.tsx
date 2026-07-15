export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />

        <h2 className="mt-6 text-2xl font-semibold text-gray-800">
          Loading...
        </h2>

        <p className="mt-2 text-gray-500">
          Preparing your renewable energy experience.
        </p>

      </div>
    </main>
  );
}