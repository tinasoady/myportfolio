// Centralise tout le contenu du portfolio ici.
// Remplace les valeurs par les tiennes (nom, liens, description...).

export const profile = {
  name: 'Tinasoady Judès Edinand',
  role: 'Étudiant en Génie Informatique (L3)',
  tagline: "Je conçois des applications web et mobiles, du back-end à l'interface.",
  bio: "Étudiant en L3 Génie Informatique, passionné par le monde de l'informatique. J'aime construire des systèmes complets — de l'architecture back-end aux interfaces utilisateur — et j'apprends actuellement en stage à moderniser un système de gestion cloud.",
  location: 'Madagascar',
  email: 'jtinasoady@gmail.com',
  github: 'https://github.com/tinasoady',
  // Laisse vide tant que tu n'as pas d'URL LinkedIn réelle : l'icône ne s'affiche
  // pas si ce champ est vide, pour éviter un lien mort. Remplis-le dès que tu as un profil.
  linkedin: '',
  // Place ton CV en PDF dans le dossier public/ (ex: public/cv.pdf) puis mets le chemin ici.
  cvUrl: '/cv.pdf',
}

export const projects = [
  {
    title: "Système cloud de gestion d'inscriptions — IUGM",
    type: 'Stage en cours',
    description:
      "Modernisation cloud d'un système de gestion des inscriptions universitaires pour l'IUGM (l'institut où j'effectue mon stage) : migration vers une architecture cloud, conteneurisation et mise en place d'un pipeline d'intégration et de déploiement continu.",
    tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker', 'GitHub Actions', 'CI/CD'],
    link: 'https://iugm-portail.vercel.app',
    repo: 'https://github.com/tinasoady/iugm-portail',
  },
  {
    title: 'GoStudy — Application mobile de covoiturage étudiant',
    type: 'Projet personnel',
    description:
      "Application mobile permettant de mettre en relation conducteurs et passagers étudiants pour organiser des trajets partagés.",
    tags: ['Flutter', 'Dart', 'Firebase'],
    link: '',
    repo: 'https://github.com/tinasoady/First_appmobil',
  },
  {
    title: 'Gestionnaire de tâches',
    type: 'Projet en groupe (études)',
    description:
      'Application web de gestion de tâches (création, suivi, organisation) construite pour pratiquer React et la gestion d\'état côté front-end.',
    tags: ['React', 'JavaScript'],
    link: '',
    repo: 'https://github.com/tinasoady/framwork_group_javascript-GInfo3/tree/tnsd',
  },
  {
    title: 'Portfolio personnel',
    type: 'Projet personnel',
    description:
      "Mon portfolio personnel, construit pour présenter mes projets et compétences. Il est développé avec React et Tailwind CSS.",
    tags: ['React', 'Tailwind CSS'],
    link: '',
    repo: 'https://github.com/tinasoady/myportfolio',
  },
  {
    title: 'Cripto-service',
    type: 'Projet en groupe (études)',
    description:
      "Programme Python qui permet de crypter et décrypter des fichiers en utilisant des algorithmes de chiffrement symétrique et asymétrique.",
    tags: ['Python'],
    link: '',
    repo: 'https://github.com/tinasoady/cripto_service',
  },
]

export const skillGroups = [
  {
    label: 'Langages',
    items: ['JavaScript', 'Python', 'C++', 'Dart', 'SQL', 'HTML', 'CSS', 'TypeScript', 'PHP'],
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
