const clients = [
  'St. Regis Hotel',
  'Mondrian',
  'Hilton',
  'American Red Cross',
  'Disney',
  'Silvercup Studios',
  'Cipriani',
  'Broadway Stages',
  'Lendlease',
]

export default function Clients() {
  return (
    <section className="py-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          <span className="text-[11px] text-slate-400 uppercase tracking-widest font-medium shrink-0">
            Trusted by
          </span>
          {clients.map((name, i) => (
            <span key={name} className="text-[13px] text-slate-400 font-medium">
              {name}
              {i < clients.length - 1 && (
                <span className="ml-8 text-slate-200 hidden sm:inline" aria-hidden="true">
                  /
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
