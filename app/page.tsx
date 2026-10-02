export default function HomePage() {
  return (
    <section className="py-12 space-y-6 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
        Welcome to My Next.js Web App
      </h1>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        This application features dynamic route navigation, responsive layout components, and clean modern styling with Tailwind CSS.
      </p>
      <div className="pt-4 flex justify-center gap-4">
        <a
          href="/portfolio"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 font-semibold rounded-lg shadow-md transition"
        >
          View Portfolio
        </a>
      </div>
    </section>
  );
}