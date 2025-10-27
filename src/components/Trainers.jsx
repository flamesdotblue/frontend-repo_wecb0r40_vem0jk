import { User, Medal } from 'lucide-react';

const trainers = [
  {
    name: 'Sarah Johnson',
    role: 'Strength & Conditioning Specialist',
    bio: 'Personalised programs for performance, power, and injury prevention.',
  },
  {
    name: 'Mike Thompson',
    role: 'Cardio & HIIT Expert',
    bio: 'High-intensity classes and endurance coaching to push your limits safely.',
  },
  {
    name: 'Emma Roberts',
    role: 'Yoga & Wellness Coach',
    bio: 'Mindful movement, mobility, and breathwork for balance and recovery.',
  },
];

export default function Trainers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Meet our experts</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          15 certified trainers dedicated to your goals — from strength and cardio to yoga and
          recovery.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {trainers.map((t) => (
          <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky-50">
                <User className="h-6 w-6 text-sky-600" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
            <p className="text-sm text-slate-700">{t.bio}</p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              <Medal className="h-4 w-4 text-sky-600" /> Personal training • Nutrition planning • Recovery support
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
