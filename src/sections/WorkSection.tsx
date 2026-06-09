import { motion } from 'framer-motion'
import { BriefcaseBusiness, CheckCircle2, MapPin } from 'lucide-react'
import { workHistory } from '../data/landing'

const workTags = [
  ['Data Analyst Intern', ['Excel reporting', 'Power BI dashboards', 'SQL basics', 'KPI tracking']],
  ['IT Support Technician', ['Helpdesk support', 'Hardware setup', 'Network troubleshooting', 'User training']],
]

export function WorkSection() {
  return (
    <section id="work" className="section-band scroll-mt-24 border-t border-[var(--line)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 88, damping: 20 }}
          className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end"
        >
          <div>
            <p className="eyebrow">Professional Experience</p>
            <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[var(--heading)] text-balance sm:text-4xl lg:text-5xl">
              Practical IT support with a growing analytics portfolio.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--text)] text-pretty sm:text-lg">
            Foday has supported office users, maintained technical systems, and built early analytics experience through reporting, data cleaning, dashboards, and KPI-focused analysis.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-5">
          {workHistory.map((work, index) => {
            const tags = workTags.find(([role]) => role === work.role)?.[1] ?? []

            return (
              <motion.article
                key={`${work.role}-${work.company}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -3 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ type: 'spring', stiffness: 86, damping: 19, delay: index * 0.06 }}
                className="experience-card"
              >
                <div className="experience-date">
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--muted)]">{work.period}</span>
                  <span className="experience-dot" />
                </div>

                <div className="min-w-0">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <div className="mb-4 grid size-11 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
                        <BriefcaseBusiness />
                      </div>
                      <h3 className="text-2xl font-semibold tracking-tight text-[var(--heading)] sm:text-3xl">{work.role}</h3>
                      <p className="mt-2 font-semibold text-[var(--accent)]">{work.company}</p>
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--muted)]">
                        <MapPin size={15} />
                        {work.location}
                      </p>
                    </div>

                    <div className="flex max-w-xl flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[var(--line)] bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--heading)]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 grid gap-3 border-t border-[var(--line)] pt-6">
                    {work.points.map((point) => (
                      <div key={point} className="flex gap-3 text-base leading-7 text-[var(--text)]">
                        <CheckCircle2 className="mt-1 size-5 shrink-0 text-[var(--accent)]" />
                        <p>{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
