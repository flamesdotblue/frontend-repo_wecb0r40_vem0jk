import { Check } from 'lucide-react';

function Tier({ name, price, period, features, highlight }) {
  return (
    <div
      className={`flex flex-col rounded-2xl border p-6 shadow-sm ${
        highlight ? 'border-sky-500 bg-sky-50' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-xl font-semibold text-slate-900">{name}</h3>
        <div className="text-slate-900">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-sm text-slate-500">/{period}</span>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-sky-600" />
            <span className="text-slate-700">{f}</span>
          </li>
        ))}
      </ul>
      <button
        className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
          highlight
            ? 'bg-sky-600 text-white hover:bg-sky-700'
            : 'bg-slate-900 text-white hover:bg-slate-800'
        }`}
      >
        Join now
      </button>
    </div>
  );
}

export default function Memberships() {
  const tiers = [
    {
      name: 'Basic',
      price: '£29',
      period: 'month',
      features: ['Full gym access', 'Strength & cardio zones', 'Locker & parking access'],
    },
    {
      name: 'Premium',
      price: '£49',
      period: 'month',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Sauna & wellness lounge',
      ],
      highlight: true,
    },
    {
      name: 'Elite',
      price: '£79',
      period: 'month',
      features: [
        'Everything in Premium',
        'Unlimited personal training',
        'Priority booking & events',
      ],
    },
  ];

  const programs = [
    { name: 'Weight Management', price: '£199', duration: '12 weeks' },
    { name: 'Strength Building', price: '£249', duration: '8 weeks' },
    { name: 'Mindfulness & Stress Relief', price: '£149', duration: '6 weeks' },
  ];

  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Memberships</h2>
          <p className="mt-2 text-slate-600">Choose a plan that fits your goals and lifestyle.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <Tier key={t.name} {...t} />
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-slate-900">Specialised Wellness Programs</h3>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {programs.map((p) => (
              <div key={p.name} className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-slate-900">{p.name}</p>
                <p className="text-sm text-slate-600">{p.duration}</p>
                <p className="mt-2 font-semibold text-slate-900">{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
