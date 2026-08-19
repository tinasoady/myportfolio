import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, profile } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-bg/80 border-b border-border backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#hero" className="font-semibold tracking-tight text-text">
          <span className="text-accent">~/</span>
          {profile.name}
        </a>

        <ul className="hidden gap-8 text-sm text-muted md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative py-1 transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:text-text hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
          whileTap={{ scale: 0.96 }}
          className="hidden rounded-full border border-border px-4 py-2 text-sm text-text md:inline-block"
        >
          Me contacter
        </motion.a>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col gap-1 overflow-hidden border-t border-border bg-bg px-6 py-4 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, delay: i * 0.05 }}
              >
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
