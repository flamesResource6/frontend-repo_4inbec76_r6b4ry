export default function CTA() {
  return (
    <section id="cta" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-2xl border border-slate-200 p-10 bg-white shadow-sm text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Be the first to try FlowNote Finance</h3>
          <p className="mt-3 text-slate-600">Drop your email and we’ll invite you to the beta as soon as it’s ready.</p>
          <form className="mt-6 mx-auto max-w-md flex gap-3">
            <input type="email" required placeholder="you@domain.com" className="w-full rounded-md border border-slate-200 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900/10" />
            <button type="submit" className="rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black transition">Join</button>
          </form>
          <p className="mt-3 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
