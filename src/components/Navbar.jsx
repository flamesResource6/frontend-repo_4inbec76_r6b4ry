import { Menu, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-to-tr from-blue-500 to-indigo-500 grid place-items-center text-white">
              <Sparkles className="size-4" />
            </div>
            <span className="font-semibold tracking-tight">FlowNote Finance</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-700">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#showcase" className="hover:text-slate-900">Preview</a>
            <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            <a href="#cta" className="hover:text-slate-900">Join waitlist</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#cta" className="inline-flex items-center rounded-md bg-slate-900 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-black transition">Get started</a>
          </div>
          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center size-10 rounded-md hover:bg-slate-100">
            <Menu className="size-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4">
            <div className="grid gap-2 text-sm">
              <a onClick={() => setOpen(false)} href="#features" className="px-2 py-2 rounded hover:bg-slate-100">Features</a>
              <a onClick={() => setOpen(false)} href="#showcase" className="px-2 py-2 rounded hover:bg-slate-100">Preview</a>
              <a onClick={() => setOpen(false)} href="#pricing" className="px-2 py-2 rounded hover:bg-slate-100">Pricing</a>
              <a onClick={() => setOpen(false)} href="#cta" className="px-2 py-2 rounded hover:bg-slate-100">Join waitlist</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
