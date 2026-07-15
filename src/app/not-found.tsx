import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-green-700">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-4 text-gray-600">
          Sorry, the page you are looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-700 px-6 py-3 text-white hover:bg-green-800"
        >
          <Home className="h-5 w-5" />
          Back Home
        </Link>
      </div>
    </main>
  );
}