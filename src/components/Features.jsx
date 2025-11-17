import { CheckCircle2, NotebookText, Sparkles, Shield, Zap, BarChart3 } from 'lucide-react'

export default function Features() {
  const items = [
    {
      icon: NotebookText,
      title: 'Notion-like UI',
      desc: 'A clean, minimal canvas with pages, lists, and lightning-fast capture.'
    },
    {
      icon: Sparkles,
      title: 'AI Auto-categorization',
      desc: 'Drop a note like “Lunch 14.50 at Chipotle” — we parse and categorize instantly.'
    },
    {
      icon: BarChart3,
      title: 'Instant insights',
      desc: 'Beautiful charts and summaries give you clarity without clicks.'
    },
    {
      icon: Zap,
      title: 'Receipt to record',
      desc: 'Snap a receipt, we OCR and enrich with merchant data automatically.'
    },
    {
      icon: Shield,
      title: 'Private by design',
      desc: 'Your data is encrypted in transit and at rest. You control what’s shared.'
    },
    {
      icon: CheckCircle2,
      title: 'Works offline',
      desc: 'Capture anywhere. Syncs when you’re back online.'
    },
  ]

  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Designed for zero-friction tracking</h2>
          <p className="mt-3 text-slate-600">Every interaction is optimized to be as quick as writing a note.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm hover:shadow transition">
              <Icon className="size-6 text-slate-900" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
