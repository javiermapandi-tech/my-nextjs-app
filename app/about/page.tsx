export default function AboutPage() {
  return (
    <section className="space-y-6 max-w-3xl">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p className="text-slate-300 leading-relaxed">
        Hello! I am a modern web developer crafting responsive, user-friendly applications using React, Next.js, and Tailwind CSS.
      </p>
      <div className="p-6 bg-slate-900 border border-slate-800 rounded-xl space-y-3">
        <h2 className="text-xl font-semibold text-blue-400">Core Tech Stack</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li>Framework: Next.js (App Router)</li>
          <li>Styling: Tailwind CSS</li>
          <li>Language: TypeScript / JavaScript</li>
        </ul>
      </div>
    </section>
  );
}