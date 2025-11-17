import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative pt-28 sm:pt-32">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-24 sm:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            <span className="inline-block size-2 rounded-full bg-emerald-500"></span>
            Now accepting early access signups
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-slate-900">
            AI finance tracking that feels as simple as taking a note
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Meet the mobile app that looks like your favorite doc tool and works like magic. Capture spends in seconds, let AI categorize automatically, and see your money with clarity.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black transition">
              Join the waitlist
            </a>
            <a href="#showcase" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-50 transition">
              Watch a quick preview
            </a>
          </div>
          <div className="mt-8 text-xs text-slate-500">Available on iOS and Android at launch</div>
        </div>
      </div>
    </section>
  )
}
