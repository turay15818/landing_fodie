import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { SectionShell } from '../components/SectionShell'
import { certifications, educationItems } from '../data/landing'

export function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Formal study, applied analytics training, and job-ready certifications."
      intro="Foday's academic path connects computer science foundations with practical data analytics training and recognized IT support credentials. That mix gives him a credible base for technical roles across support, helpdesk, and junior analytics teams."
    >
      <div className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 82, damping: 19 }}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--soft-shadow)]"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <GraduationCap />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">Education</h3>
          </div>

          <div className="mt-7 divide-y divide-[var(--line)]">
            {educationItems.map(([title, school, date], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 90, damping: 18, delay: index * 0.05 }}
                className="grid gap-2 py-5 first:pt-0 last:pb-0 sm:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-semibold text-[var(--heading)]">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{school}</p>
                </div>
                <p className="font-mono text-sm text-[var(--accent)]">{date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 82, damping: 19, delay: 0.08 }}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--soft-shadow)]"
        >
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              <Award />
            </div>
            <h3 className="text-2xl font-semibold tracking-tight text-[var(--heading)]">Certifications</h3>
          </div>

          <ul className="mt-7 space-y-3">
            {certifications.map((certification, index) => (
              <motion.li
                key={certification}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ type: 'spring', stiffness: 95, damping: 18, delay: index * 0.045 }}
                className="rounded-lg border border-[var(--line)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--heading)]"
              >
                {certification}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </SectionShell>
  )
}
