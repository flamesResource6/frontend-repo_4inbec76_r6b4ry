export default function Showcase() {
  return (
    <section id="showcase" className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">See it in action</h2>
            <p className="mt-3 text-slate-600">A quick walkthrough of adding a transaction like a note, instant AI parsing, and a live budget updating in real time.</p>
            <ul className="mt-6 space-y-3 text-slate-700 text-sm">
              <li className="flex gap-2"><span className="mt-1 size-2 rounded-full bg-slate-400"></span> Add an entry just by typing — no forms, no friction.</li>
              <li className="flex gap-2"><span className="mt-1 size-2 rounded-full bg-slate-400"></span> Auto categories, merchant, amount, and tags.</li>
              <li className="flex gap-2"><span className="mt-1 size-2 rounded-full bg-slate-400"></span> Swipe to archive, pin, or share with your partner.</li>
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-black">
            <div className="aspect-video">
              <video
                className="w-full h-full object-cover"
                controls
                poster="https://images.unsplash.com/photo-1554224155-3a589877462e?q=80&w=2069&auto=format&fit=crop"
              >
                <source src="https://cdn.coverr.co/videos/coverr-holding-a-smartphone-6977/1080p.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
