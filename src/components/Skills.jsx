import { motion } from 'framer-motion'
import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium text-accent">// compétences</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Outils & technologies</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="mb-4 text-sm font-medium tracking-wide text-muted uppercase">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.08, borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm text-text"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
