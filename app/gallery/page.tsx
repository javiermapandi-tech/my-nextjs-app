export default function GalleryPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Gallery</h1>
        <p className="text-slate-400 mt-1">A showcase grid layout using Tailwind utility classes.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div
            key={item}
            className="h-36 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center font-medium text-slate-500 hover:border-blue-500 transition cursor-pointer"
          >
            Item #{item}
          </div>
        ))}
      </div>
    </section>
  );
}