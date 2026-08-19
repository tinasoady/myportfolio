import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface/40 px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <p className="mb-3 text-sm font-medium text-accent">// contact</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Discutons ensemble</h2>
        <p className="mt-4 text-lg text-muted">
          Ouvert aux stages, opportunités et collaborations sur des projets intéressants.
        </p>

        <motion.a
          href={`mailto:${profile.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="mt-8 inline-block rounded-full bg-accent px-8 py-3 text-sm font-semibold text-bg"
        >
          M'envoyer un e-mail
        </motion.a>

        <div className="mt-8 flex items-center justify-center gap-6 text-muted">
          <motion.a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, color: 'var(--color-text)' }}
            className="flex items-center gap-2"
          >
            <GithubIcon size={18} /> GitHub
          </motion.a>
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2, color: 'var(--color-text)' }}
            className="flex items-center gap-2"
          >
            <LinkedinIcon size={18} /> LinkedIn
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -2, color: 'var(--color-text)' }}
            className="flex items-center gap-2"
          >
            <Mail size={18} /> Email
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
