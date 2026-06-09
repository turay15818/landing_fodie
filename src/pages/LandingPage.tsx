import { motion } from 'framer-motion'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { EducationSection } from '../sections/EducationSection'
import { HeroSection } from '../sections/HeroSection'
import { SkillsSection } from '../sections/SkillsSection'
import { WorkSection } from '../sections/WorkSection'

export function LandingPage() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 95, damping: 22 }}
    >
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
    </motion.main>
  )
}
