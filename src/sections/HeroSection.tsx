import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Download, MapPin } from 'lucide-react'
import profileImage from '../assets/images/001.jpg'
import cvFile from '../assets/cv/MY CV.pdf?url'
import { metrics } from '../data/landing'

const heroContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 88, damping: 18 },
  },
}

export function HeroSection() {
  return (
    <>
      <section
        id="home"
        className="hero-grid mx-auto grid min-h-[calc(92dvh-81px)] max-w-7xl scroll-mt-24 items-center gap-12 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8"
      >
        <motion.div variants={heroContainer} initial="hidden" animate="visible">
          <motion.p variants={heroItem} className="eyebrow">
            Technical support specialist and data analyst
          </motion.p>
          <motion.h1 variants={heroItem} className="mt-5 text-5xl font-semibold leading-none tracking-tight text-[var(--heading)] text-balance sm:text-6xl lg:text-7xl">
            Foday Sheriff keeps systems dependable and turns operational data into decisions.
          </motion.h1>
          <motion.p variants={heroItem} className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text)] text-pretty">
            An Istanbul-based IT Support professional with more than five years of hands-on troubleshooting experience and active data analysis practice across Excel, SQL, and Power BI. He is ready for technical support, helpdesk, junior data analyst, or hybrid operations roles in international teams.
          </motion.p>
          <motion.div variants={heroItem} className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-[var(--muted)]">
            <motion.span
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
            >
              <MapPin size={15} />
              Istanbul, Turkiye
            </motion.span>
            <motion.span
              whileHover={{ y: -2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
            >
              <BadgeCheck size={15} />
              Immediate availability
            </motion.span>
          </motion.div>
          <motion.div variants={heroItem} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="primary-button">
              Contact Foday
              <ArrowRight size={18} />
            </a>
            <a href={cvFile} className="secondary-button" target="_blank" rel="noreferrer">
              View CV
              <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        <HeroPortrait />
      </section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ type: 'spring', stiffness: 86, damping: 19 }}
        className="border-y border-[var(--line)] bg-[var(--surface-soft)]"
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
          {metrics.map(([metric, label], index) => (
            <motion.div
              key={metric}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ type: 'spring', stiffness: 92, damping: 18, delay: index * 0.08 }}
            >
              <p className="font-mono text-3xl font-semibold tracking-tight text-[var(--heading)]">{metric}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  )
}

function HeroPortrait() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 90, damping: 18, delay: 0.08 }}
      className="relative lg:ml-auto"
    >
      <motion.div
        animate={{ rotate: [0, 1.6, -1.2, 0], scale: [1, 1.015, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-4 rounded-[2rem] border border-[var(--line)]"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-5 top-10 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 shadow-[var(--deep-shadow)] sm:block"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Core profile</p>
        <p className="mt-1 font-semibold text-[var(--heading)]">Helpdesk ready</p>
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        className="absolute -right-3 bottom-28 hidden rounded-xl border border-[var(--line)] bg-[var(--surface)] px-4 py-3 shadow-[var(--deep-shadow)] sm:block"
      >
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--muted)]">Analytics stack</p>
        <p className="mt-1 font-semibold text-[var(--heading)]">Excel, SQL, Power BI</p>
      </motion.div>
      <div className="relative overflow-hidden rounded-[1.5rem] border border-[var(--line)] bg-[var(--surface)] shadow-[var(--deep-shadow)]">
        <motion.img
          src={profileImage}
          alt="Foday Sheriff professional portrait"
          initial={{ scale: 1.08, filter: 'saturate(0.92)' }}
          animate={{ scale: 1, filter: 'saturate(1)' }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="aspect-[4/5] w-full object-cover object-center sm:max-h-[680px]"
        />
        <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-[#121411]/72 p-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">International candidate</p>
          <p className="mt-2 text-xl font-semibold tracking-tight">IT Support, Data Analysis, Helpdesk Operations</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <span className="rounded-lg bg-white/10 px-3 py-2">Excel</span>
            <span className="rounded-lg bg-white/10 px-3 py-2">SQL</span>
            <span className="rounded-lg bg-white/10 px-3 py-2">Power BI</span>
            <span className="rounded-lg bg-white/10 px-3 py-2">CompTIA A+</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
