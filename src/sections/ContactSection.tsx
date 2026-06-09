import { useMemo, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BriefcaseBusiness, Mail, Phone } from 'lucide-react'
import { SectionShell } from '../components/SectionShell'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const helperText = useMemo(() => {
    if (status === 'loading') return 'Preparing your message.'
    if (status === 'success') return 'Message staged successfully. This form can be connected to email delivery next.'
    if (status === 'error') return 'Please add a project message before sending.'
    return 'Share the role details and preferred interview timeline.'
  }, [status])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const message = String(form.get('message') ?? '').trim()

    if (!message) {
      setStatus('error')
      return
    }

    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 650)
  }

  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Available immediately and open to relocation."
      intro="Foday is available for IT Support, Helpdesk, Junior Data Analyst, and hybrid technical operations opportunities. He is based in Istanbul and open to relocating for the right international role."
    >
      <div className="grid gap-8 xl:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 82, damping: 19 }}
          className="space-y-4"
        >
          <ContactLine icon={<Mail />} label="Email" value="sherifffoday273@gmail.com" />
          <ContactLine icon={<Phone />} label="Phone" value="+90 542 1288 341" />
          <ContactLine icon={<BriefcaseBusiness />} label="Availability" value="Immediate, open to relocation" />
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: 'spring', stiffness: 82, damping: 19, delay: 0.08 }}
          onSubmit={handleSubmit}
          className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[var(--soft-shadow)] sm:p-7"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Recruiter or company name" />
            <Field label="Email" name="email" placeholder="recruiter@company.com" type="email" />
          </div>
          <div className="mt-5">
            <Field label="Role type" name="role" placeholder="IT Support, Helpdesk, Junior Data Analyst" />
          </div>
          <label className="mt-5 block">
            <span className="field-label">Message</span>
            <textarea
              name="message"
              rows={6}
              className="field-input resize-none"
              placeholder="Share the role, location, work model, and interview timeline."
            />
          </label>
          <p className={`mt-3 text-sm ${status === 'error' ? 'text-[var(--danger)]' : 'text-[var(--muted)]'}`}>{helperText}</p>
          <button type="submit" className="primary-button mt-6 w-full justify-center sm:w-auto" disabled={status === 'loading'}>
            {status === 'loading' ? 'Sending' : 'Send message'}
            <ArrowRight size={18} />
          </button>
        </motion.form>
      </div>
    </SectionShell>
  )
}

function ContactLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className="flex gap-4 rounded-xl border border-[var(--line)] bg-[var(--surface)] p-5"
    >
      <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-[var(--accent-soft)] text-[var(--accent)]">{icon}</div>
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">{label}</p>
        <p className="mt-1 font-semibold text-[var(--heading)]">{value}</p>
      </div>
    </motion.div>
  )
}

function Field({ label, name, placeholder, type = 'text' }: { label: string; name: string; placeholder: string; type?: string }) {
  return (
    <label className="block">
      <span className="field-label">{label}</span>
      <input name={name} type={type} className="field-input" placeholder={placeholder} />
    </label>
  )
}
