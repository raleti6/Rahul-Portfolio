import React from 'react'

export function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  )
}

export function Card({ children }) { return <div className="rounded-2xl border shadow-sm bg-white">{children}</div> }
export function CardHeader({ children }) { return <div className="px-6 pt-6">{children}</div> }
export function CardTitle({ children }) { return <h3 className="text-lg font-semibold leading-tight">{children}</h3> }
export function CardContent({ children }) { return <div className="px-6 pb-6 pt-4 text-slate-700">{children}</div> }
export function Pill({ children }) { return <span className="inline-flex items-center rounded-2xl border px-3 py-1 text-sm font-medium">{children}</span> }
