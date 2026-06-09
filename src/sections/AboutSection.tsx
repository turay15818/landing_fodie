import { Compass, PanelTop } from 'lucide-react'
import { InfoPanel } from '../components/InfoPanel'
import { SectionShell } from '../components/SectionShell'

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="A support professional who understands both people and systems."
      intro="Foday brings the patience required for frontline technical support and the analytical discipline needed to interpret operational data. His background fits organizations that value dependable troubleshooting, clear communication, and practical reporting."
    >
      <div className="grid gap-5 md:grid-cols-2">
        <InfoPanel icon={<Compass />} title="Support mindset">
          He has supported staff across hardware, software, network access, Microsoft Office, email setup, printer configuration, backups, and preventive maintenance in a formal office environment.
        </InfoPanel>
        <InfoPanel icon={<PanelTop />} title="Analysis mindset">
          His analytics work focuses on preparing datasets, building performance dashboards, tracking KPIs, and presenting business findings through Excel, SQL, and Power BI.
        </InfoPanel>
      </div>
    </SectionShell>
  )
}
