export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Simple, fair pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you need more automation and collaboration.</p>
        </div>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Free</h3>
            <p className="mt-2 text-slate-600 text-sm">For individuals just getting started.</p>
            <div className="mt-6 text-4xl font-bold">$0</div>
            <ul className="mt-6 space-y-2 text-sm text-slate-700">
              <li>• Unlimited notes</li>
              <li>• Basic categories</li>
              <li>• Monthly insights</li>
            </ul>
            <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow-sm hover:bg-slate-50 transition">Get started</a>
          </div>
          <div className="rounded-2xl border border-slate-900 p-[2px] bg-gradient-to-b from-slate-900 to-slate-700 shadow-xl">
            <div className="h-full w-full rounded-2xl bg-white p-8">
              <h3 className="text-lg font-semibold text-slate-900">Pro</h3>
              <p className="mt-2 text-slate-600 text-sm">For power users and small teams.</p>
              <div className="mt-6 text-4xl font-bold">$6<span className="text-base font-medium text-slate-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                <li>• AI auto-categorization</li>
                <li>• Shared spaces</li>
                <li>• Smart budgets</li>
                <li>• Priority support</li>
              </ul>
              <a href="#cta" className="mt-6 inline-flex items-center justify-center rounded-md bg-slate-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black transition">Start free trial</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
