import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { GithubIcon } from './icons'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border bg-surface/40 px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-medium text-accent">// projets</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Ce que j'ai construit</h2>
        </motion.div>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const isLastOdd = i === projects.length - 1 && projects.length % 2 !== 0
            return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, borderColor: 'var(--color-accent)', boxShadow: '0 12px 30px -12px rgba(74, 222, 128, 0.25)' }}
              className={`group flex flex-col rounded-2xl border border-border bg-surface p-6 ${
                isLastOdd ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)]' : ''
              }`}
            >
              <span className="mb-3 w-fit rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                {project.type}
              </span>
              <h3 className="text-xl font-semibold text-text">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {(project.link || project.repo) && (
                <div className="mt-5 flex gap-4 border-t border-border pt-4 text-sm">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                    >
                      <ExternalLink size={15} /> Démo
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
                    >
                      <GithubIcon size={15} /> Code
                    </a>
                  )}
                </div>
              )}
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
