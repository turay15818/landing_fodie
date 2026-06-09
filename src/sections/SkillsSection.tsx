import { motion } from 'framer-motion'
import { SectionShell } from '../components/SectionShell'
import { projectHighlights, skillGroups } from '../data/landing'

export function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A practical skill set for modern support and operations teams."
      intro="His strengths sit at the intersection of service delivery and data clarity: resolving user issues, keeping systems stable, cleaning data, building dashboards, and explaining technical information in a way colleagues can act on."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 85, damping: 18, delay: index * 0.06 }}
            className="group rounded-xl border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[var(--soft-shadow)]"
          >
            <div className="grid size-11 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">
              {skill.icon}
            </div>
            <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[var(--heading)]">{skill.title}</h3>
            <p className="mt-3 leading-7 text-[var(--text)]">{skill.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {projectHighlights.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -3 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: 'spring', stiffness: 90, damping: 18, delay: index * 0.05 }}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface-soft)] p-6"
          >
            <div className="grid size-10 place-items-center rounded-lg bg-[var(--surface)] text-[var(--accent)]">
              {project.icon}
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--heading)]">{project.title}</h3>
            <p className="mt-3 leading-7 text-[var(--text)]">{project.text}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  )
}
