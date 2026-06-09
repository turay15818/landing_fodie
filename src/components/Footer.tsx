import { navItems } from '../data/landing'

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[var(--muted)] sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>Foday Sheriff. Technical Support and Data Analysis portfolio.</p>
        <div className="flex flex-wrap gap-4">
          {navItems.slice(2).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="footer-link">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
