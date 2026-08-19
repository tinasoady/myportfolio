import { motion } from 'framer-motion'
import { MapPin, FileText } from 'lucide-react'
import { profile } from '../data/content'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-3 text-sm font-medium text-accent">// à propos</p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Qui je suis</h2>
        <p className="mt-6 text-lg leading-relaxed text-muted">{profile.bio}</p>

        <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted">
          <span className="flex items-center gap-2 rounded-full border border-border px-4 py-2">
            <MapPin size={16} /> {profile.location}
          </span>
          <motion.a
            href={profile.cvUrl}
            download
            whileHover={{ scale: 1.04, borderColor: 'var(--color-accent)', color: 'var(--color-accent)' }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-full border border-border px-4 py-2"
          >
            <FileText size={16} /> Télécharger mon CV
          </motion.a>
        </div>
      </motion.div>
    </section>
  )
}
