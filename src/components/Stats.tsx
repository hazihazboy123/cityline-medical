const stats = [
  { value: '90%', label: 'Recordables Prevented', sublabel: 'On-Site Medical Protocols' },
  { value: '24/7', label: 'Nationwide Coverage', sublabel: 'Coast to Coast Service' },
  { value: '150+', label: 'Jobs Completed', sublabel: 'Across All Industries' },
  { value: '<2min', label: 'Response Time', sublabel: 'Average On-Site' },
]

export default function Stats() {
  return (
    <section id="safety" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-900 rounded-3xl p-10 sm:p-14 relative overflow-hidden">
          {/* Background accents */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_100%_0%,rgba(224,36,36,0.08),transparent)]" />
          <div className="absolute top-0 right-0 w-64 h-64 border border-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display font-800 text-5xl sm:text-6xl text-red-500 mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="font-display font-semibold text-white text-base mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-navy-400 uppercase tracking-wider">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
