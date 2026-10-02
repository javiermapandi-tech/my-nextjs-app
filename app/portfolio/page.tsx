export default function PortfolioPage() {
  const projects = [
    { title: 'Project One', desc: 'A sleek web platform built with React and Tailwind.' },
    { title: 'Project Two', desc: 'A full-stack API integration using Next.js App Router.' },
    { title: 'Project Three', desc: 'A real-time dashboard featuring rich visual analytics.' },
  ];

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Portfolio</h1>
        <p className="text-slate-600 mt-1">Check out some of my featured work below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-white">{proj.title}</h2>
            <p className="text-slate-300 text-sm">{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}