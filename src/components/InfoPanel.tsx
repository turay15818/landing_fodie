import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

export function InfoPanel({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: 'spring', stiffness: 88, damping: 18 }}
      className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--soft-shadow)]"
    >
      <div className="grid size-11 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">{icon}</div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--heading)]">{title}</h3>
      <p className="mt-3 leading-7 text-[var(--text)]">{children}</p>
    </motion.div>
  )
}
