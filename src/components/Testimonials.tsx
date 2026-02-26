const testimonials = [
  {
    quote:
      "We've used CityLine on three productions at Steiner Studios. They show up early, handle everything from set bumps to real emergencies, and never slow us down. That's all I care about.",
    name: 'James M.',
    title: 'Line Producer',
  },
  {
    quote:
      "On a 60-day shoot with 200 crew, you can't afford medical delays. Their team integrated with our ADs on day one. We didn't lose a single hour to medical downtime.",
    name: 'Rachel T.',
    title: 'Production Manager',
  },
  {
    quote:
      'We brought them onto the Hudson Yards project. Recordables dropped by half in the first quarter. Their medics actually understand construction sites — not just first aid.',
    name: 'Michael B.',
    title: 'Safety Director',
  },
  {
    quote:
      "From 50-person corporate dinners to 2,000-guest galas at The Plaza — CityLine scales without missing a beat. Our event insurance providers specifically request them.",
    name: 'Sarah K.',
    title: 'Events Director',
  },
  {
    quote:
      "Having CityLine on-site means our productions stay insured and our crews stay safe. They've been our go-to for every shoot since 2019.",
    name: 'David O.',
    title: 'VP Operations',
  },
  {
    quote:
      "Most medical providers don't understand OSHA 1926. CityLine does. Their documentation alone saved us from two potential citations last year.",
    name: 'Nicole R.',
    title: 'Site Safety Manager',
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-navy-900 tracking-tight mb-12">
          What our clients say
        </h2>

        <div className="columns-1 md:columns-2 gap-8 [column-fill:balance]">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid mb-8 border-l-2 border-red-500 pl-6 py-1"
            >
              <p className="text-[15px] text-slate-600 leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="font-semibold text-navy-900 text-sm">{t.name}</p>
              <p className="text-xs text-slate-400">
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
