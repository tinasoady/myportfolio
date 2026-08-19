// Centralise tout le contenu du portfolio ici.
// Remplace les valeurs par les tiennes (nom, liens, description...).


export const profile = {
  name: 'Tinasoady Judès edi',
  role: 'Étudiant en Génie Informatique (L3)',
  tagline: "Je conçois des applications web et mobiles, du back-end à l'interface.",
  bio: "Étudiant en L3 Génie Informatique, passionné par le monde de l'informatique. J'aime construire des systèmes complets — de l'architecture back-end aux interfaces utilisateur — et j'apprends actuellement en stage à moderniser un système de gestion cloud.",
  location: 'Madagascar',
  email: 'jtinasoady@gmail.com',
  github: 'https://github.com/tinasoady',
  linkedin: 'https://linkedin.com/in/ton-profil',
  // Place ton CV en PDF dans le dossier public/ (ex: public/cv.pdf) puis mets le chemin ici.
  cvUrl: '/cv.pdf',
}

export const projects = [
  {
    title: "Système cloud de gestion d'inscriptions — IUGM",
    type: 'Stage en cours',
    description:
      "Modernisation d'un système de gestion des inscriptions pour l'IUGM : migration vers une architecture cloud, conteneurisation et mise en place d'un pipeline d'intégration et de déploiement continu.",
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'GitHub Actions', 'CI/CD'],
    link: '',
    repo: '',
  },
  {
    title: 'Application mobile de covoiturage',
    type: 'Projet personnel',
    description:
      "Application mobile permettant de mettre en relation conducteurs et passagers pour organiser des trajets partagés.",
    tags: ['Flutter', 'Dart'],
    link: '',
    repo: '',
  },
  {
    title: 'Gestionnaire de tâches',
    type: 'Projet en groupe (études)',
    description:
      'Application web de gestion de tâches (création, suivi, organisation) construite pour pratiquer React et la gestion d\'état côté front-end.',
    tags: ['React', 'JavaScript'],
    link: '',
    repo: '',
  },
  {
    title: 'Portfolio personnel',
    type: 'Projet personnel',
    description:
      "Mon portfolio personnel, construit pour présenter mes projets et compétences. Il est développé avec React et Tailwind CSS.",
    tags: ['React', 'Tailwind CSS'],
    link: '',
    repo: '',
  },
  {
    title: 'cripto-service',
    type: 'Projet en groupe (études)',
    description:
      "programme python qui permet de crypter et décrypter des fichiers en utilisant des algorithmes de chiffrement symétrique et asymétrique.",
    tags: ['Python'],
    link: '',
    repo: '', 
  }
]

export const skillGroups = [
  {
    label: 'Langages',
    items: ['JavaScript', 'Python', 'C++', 'Dart', 'SQL', 'HTML', 'CSS', 'TypeScript','php'],
  },
  {
    label: 'Front-end',
    items: ['React', 'Next.js', 'Tailwind CSS'],
  },
  {
    label: 'Back-end & data',
    items: ['Prisma', 'PostgreSQL'],
  },
  {
    label: 'Outils & DevOps',
    items: ['Docker', 'GitHub Actions', 'CI/CD', 'Git'],
  },
  {
    label: 'Mobile',
    items: ['Flutter'],
  },
]

export const navLinks = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
