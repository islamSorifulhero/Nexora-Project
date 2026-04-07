export default function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <div className="bg-white border border-ink-900/8 rounded-2xl p-7 flex flex-col justify-between gap-6 hover:shadow-lg transition-shadow duration-300">
      <p className="text-ink-700 text-sm leading-relaxed font-body">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-ink-900 flex items-center justify-center text-cream-50 text-xs font-mono font-medium">
          {avatar}
        </div>
        <div>
          <p className="text-ink-900 font-semibold text-sm">{name}</p>
          <p className="text-ink-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
