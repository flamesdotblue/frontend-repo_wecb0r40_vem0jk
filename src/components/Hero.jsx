import { MapPin, Clock, Phone, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-900 via-sky-800 to-sky-700 text-white">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-400/60 via-sky-400/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
              Cardiff's premier fitness & wellness destination
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Hydro Healing Cardiff
            </h1>
            <p className="mt-4 max-w-xl text-white/90">
              A holistic approach to health since 2015. 5,000+ success stories through
              modern strength and cardio zones, diverse classes, and expert coaching that
              nurtures both body and mind.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <Star className="h-4 w-4 text-yellow-300" /> 8+ years of expertise
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1">
                <Star className="h-4 w-4 text-yellow-300" /> 5,000+ happy members
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <MapPin className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm font-semibold">Central Location</p>
                  <p className="text-xs text-white/80">123 Fitness St, Cardiff CF10 1AA</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <Clock className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm font-semibold">Open Everyday</p>
                  <p className="text-xs text-white/80">Mon–Fri 5:00–23:00 • Weekends 6:00–22:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/5 p-4">
                <Phone className="h-5 w-5 text-cyan-300" />
                <div>
                  <p className="text-sm font-semibold">Talk to Us</p>
                  <p className="text-xs text-white/80">Dedicated support & bookings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative mx-auto h-72 w-full max-w-md rounded-2xl bg-white/5 p-2 backdrop-blur md:h-full md:max-w-none">
              <div className="grid h-full grid-rows-2 gap-2 md:grid-cols-2 md:grid-rows-1">
                <img
                  src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=1200&auto=format&fit=crop"
                  alt="Strength training area"
                  className="h-full w-full rounded-xl object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1518459031867-a89b944bffe0?q=80&w=1200&auto=format&fit=crop"
                  alt="Yoga and wellness class"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
