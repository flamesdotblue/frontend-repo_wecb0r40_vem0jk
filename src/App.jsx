import Hero from './components/Hero';
import Facilities from './components/Facilities';
import Memberships from './components/Memberships';
import Trainers from './components/Trainers';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <Facilities />
      <Memberships />
      <Trainers />

      <section className="bg-slate-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-lg font-semibold">Visit us</h3>
              <p className="mt-2 text-sm text-white/80">123 Fitness Street, Cardiff CF10 1AA</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Opening hours</h3>
              <p className="mt-2 text-sm text-white/80">Mon–Fri: 5:00 AM – 11:00 PM</p>
              <p className="text-sm text-white/80">Weekends: 6:00 AM – 10:00 PM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Why members love us</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
                <li>50+ weekly classes and dedicated parking</li>
                <li>Vibrant community with workshops and events</li>
                <li>Holistic focus on strength, cardio, and mental wellbeing</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60">
            © {new Date().getFullYear()} Hydro Healing Cardiff. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
