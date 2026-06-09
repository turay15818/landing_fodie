import { BarChart3, Database, FileSpreadsheet, Headphones, MonitorCog, Network, ShieldCheck, Users } from 'lucide-react'

export const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Work', id: 'work' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
]

export const metrics = [
  ['5+ yrs', 'technical support and systems troubleshooting experience'],
  ['6 mos', 'hands-on data analysis internship experience'],
  ['4 langs', 'English, Krio, Turkish, and beginner French'],
]

export const skillGroups = [
  {
    icon: <Headphones />,
    title: 'IT support',
    text: 'Hardware, software, email, printer, Microsoft Office, and end-user troubleshooting across office environments.',
  },
  {
    icon: <Network />,
    title: 'Systems and networks',
    text: 'Computer setup, network issue diagnosis, backups, system updates, preventive maintenance, and security compliance support.',
  },
  {
    icon: <BarChart3 />,
    title: 'Data analysis',
    text: 'Excel dashboards, Pivot Tables, KPI reports, Power BI visualizations, basic SQL queries, data cleaning, and trend analysis.',
  },
  {
    icon: <Users />,
    title: 'Professional strengths',
    text: 'Analytical thinking, problem solving, user training, teamwork, stakeholder communication, and clear reporting.',
  },
]

export const workHistory = [
  {
    role: 'Data Analyst Intern',
    company: 'Amdor Analytics',
    location: 'Nigeria, Remote',
    period: 'January - Present',
    points: [
      'Supports data collection, cleaning, and preprocessing for analytics projects.',
      'Uses Microsoft Excel, SQL, and Power BI to analyze datasets and generate reports.',
      'Assists in building dashboards that track KPIs and business performance metrics.',
    ],
  },
  {
    role: 'IT Support Technician',
    company: 'Ministry of Tourism and Culture Affairs',
    location: 'Freetown, Sierra Leone',
    period: 'October 2019 - December 2025',
    points: [
      'Troubleshot hardware, software, and network issues for staff and office systems.',
      'Installed, configured, and maintained computers, printers, backups, and system updates.',
      'Delivered user training on IT tools, technical best practices, and security compliance.',
    ],
  },
]

export const educationItems = [
  ['Bachelor of Science in Computer Science', 'University of the People, California, USA', 'In progress'],
  ['Data Analytics Training', 'Amdor Analytics, Lagos, Nigeria, Online', 'Expected 2026'],
  ['Higher Diploma in Quantity Surveying', 'Udemy, Online', 'June 2026'],
  ['High School Diploma', 'Milton Margai College, WACE', 'January 2018'],
]

export const certifications = [
  'Google IT Support Certificate, 2024',
  'CompTIA A+ Certification, 2019',
  'Office Assistant Certificate, Orange Digital Centre, 2022',
  'English Intermediate B1, Coursera, 2025',
  'IT Help Desk for Beginners, 2025',
]

export const projectHighlights = [
  {
    icon: <FileSpreadsheet />,
    title: 'HR Data Analysis Dashboard',
    text: 'Built an Excel dashboard analyzing employee performance and attrition with Pivot Tables, charts, and KPI views.',
  },
  {
    icon: <MonitorCog />,
    title: 'IT Support Simulation Project',
    text: 'Practiced hardware and software troubleshooting through a simulated helpdesk ticket resolution process.',
  },
  {
    icon: <Database />,
    title: 'Structured analytics reporting',
    text: 'Works with cleaned datasets to identify trends, patterns, anomalies, and stakeholder-ready visual summaries.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Operational IT reliability',
    text: 'Supports secure, updated, and well-maintained systems for staff productivity in professional environments.',
  },
]
