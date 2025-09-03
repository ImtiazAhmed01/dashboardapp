import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to DashClone 🚀</h1>
      <p className="text-lg text-slate-600 mb-6">
        Browse the user directory with search, pagination, and animations.
      </p>
      <Link href="/users" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
        Go to Users →
      </Link>
    </main>
  );
}
