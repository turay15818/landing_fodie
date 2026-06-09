import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionShellProps = {
  id: string
  eyebrow: string
  title: string
  intro: string
  children: ReactNode
}

export function SectionShell({ id, eyebrow, title, intro, children }: SectionShellProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ type: 'spring', stiffness: 86, damping: 20 }}
      className="section-band scroll-mt-24 border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ type: 'spring', stiffness: 86, damping: 20 }}
          className="grid gap-6 lg:grid-cols-[0.45fr_0.55fr] lg:items-end"
        >
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--heading)] text-balance sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text)] text-pretty sm:text-lg">{intro}</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.14 }}
          transition={{ type: 'spring', stiffness: 86, damping: 20, delay: 0.05 }}
          className="section-content mt-9 min-w-0"
        >
          {children}
        </motion.div>
      </div>
    </motion.section>
  )
}
