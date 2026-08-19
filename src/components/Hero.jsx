import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './icons'
import Typewriter from './Typewriter'
import { profile } from '../data/content'

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-grid relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 rounded-full border border-border bg-surface px-4 py-1.5 text-sm text-muted"
      >
        <span className="text-accent">$</span> {profile.role}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl text-4xl font-semibold tracking-tight text-balance md:text-6xl"
      >
        Salut, je suis <span className="text-accent">{profile.name}</span>
        <span className="cursor-blink text-accent">_</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-lg text-muted"
      >
        <Typewriter text={profile.tagline} startDelay={700} />
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-bg"
        >
          Voir mes projets
        </motion.a>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05, borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full border border-border px-6 py-3 text-sm font-medium text-text"
        >
          Me contacter
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex items-center gap-5 text-muted"
      >
        <motion.a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          whileHover={{ scale: 1.15, y: -2, color: 'var(--color-text)' }}
          whileTap={{ scale: 0.95 }}
        >
          <GithubIcon size={20} />
        </motion.a>
        {profile.linkedin && (
          <motion.a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            whileHover={{ scale: 1.15, y: -2, color: 'var(--color-text)' }}
            whileTap={{ scale: 0.95 }}
          >
            <LinkedinIcon size={20} />
          </motion.a>
        )}
        <motion.a
          href={`mailto:${profile.email}`}
          aria-label="Email"
          whileHover={{ scale: 1.15, y: -2, color: 'var(--color-text)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={20} />
        </motion.a>
      </motion.div>

      <a
        href="#about"
        aria-label="Défiler vers le bas"
        className="absolute bottom-10 text-muted transition-colors hover:text-text"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
