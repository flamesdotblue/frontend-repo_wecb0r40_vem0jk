import { Dumbbell, Heart, Leaf, Users, Calendar } from 'lucide-react';

export default function Facilities() {
  const features = [
    {
      icon: <Dumbbell className="h-6 w-6 text-sky-600" />,
      title: 'Strength Training',
      desc:
        'Modern equipment and dedicated zones for powerlifting, bodybuilding, and functional training.',
    },
    {
      icon: <Heart className="h-6 w-6 text-sky-600" />,
      title: 'Cardio Zones',
      desc: 'High-performance treadmills, bikes, and rowers with heart-rate and performance tracking.',
    },
    {
      icon: <Users className="h-6 w-6 text-sky-600" />,
      title: 'Group Classes',
      desc: '50+ weekly sessions including HIIT, yoga, spinning, and Pilates for all fitness levels.',
    },
    {
      icon: <Leaf className="h-6 w-6 text-sky-600" />,
      title: 'Recovery & Wellness',
      desc: 'Massage, cryotherapy, hydrotherapy, and sauna access to accelerate recovery and wellbeing.',
    },
    {
      icon: <Calendar className="h-6 w-6 text-sky-600" />,
      title: 'Community Events',
      desc: 'Summer challenges, nutrition workshops, and beach yoga that make fitness social and fun.',
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">State-of-the-art facilities</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Everything you need to train smart, recover better, and stay motivated — all under
          one roof.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, idx) => (
          <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-sky-50 p-3">
              {f.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
