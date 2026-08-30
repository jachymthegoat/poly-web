export type Project = {
  id: string
  title: string
  span: 'large' | 'wide' | 'tall' | 'small'
  image?: string
  video?: string
  tags?: string[]
  description?: string
  liveUrl?: string
  githubUrl?: string
  gallery?: string[]
}

export const projects: Project[] = [
  {
    id: 'bigint-calculator',
    title: 'Bigint Calculator',
    span: 'small',
    video: '/projects/bigint-calculator.mp4',
    tags: ['C', 'Algorithms', 'CLI'],
    description:
      'Konzolová aplikace pro práci s libovolně velkými celými čísly — různé číselné soustavy a vyhodnocování aritmetických výrazů v infixovém zápisu.',
    githubUrl: 'https://github.com/jachymthegoat/Bigint-Calculator',
    gallery: ['/projects/bigint-calculator-2.jpg'],
  },
  {
    id: 'infernal',
    title: 'Infernal',
    span: 'tall',
    video: '/projects/infernal.mp4',
    tags: ['Python', 'Pygame', 'Game Jam'],
    description:
      '2D hra vytvořená tříčlenným týmem za 3 dny na Ludum Dare. Průchod levely, boj s nepřáteli a progresivní obtížnost v pixel-art stylu.',
    githubUrl: 'https://github.com/jachymthegoat/Infernal',
    gallery: ['/projects/infernal-2.jpg'],
  },
  {
    id: 'army-tabor',
    title: 'Army Tábor',
    span: 'small',
    video: '/projects/army-tabor.mp4',
    tags: ['React', 'TypeScript', 'Vite'],
    description:
      'Web pro letní army tábor — program, přihlášky a informace pro rodiče. Aktuálně ve vývoji, plánované nasazení na army-tabor.cz.',
    liveUrl: 'https://army-tabor.cz',
    gallery: ['/projects/army-tabor-2.jpg'],
  },
  {
    id: 'kominictvi-web',
    title: 'Kominictví Nácovský',
    span: 'large',
    image: '/projects/kominictvi-web.jpg',
    tags: ['React', 'TypeScript', 'Vite'],
    description:
      'Firemní web pro rodinnou kominickou firmu — prezentace služeb, galerie realizací a kontaktní formulář. Responzivní layout, nasazení na Vercel.',
    liveUrl: 'https://kominictvi-web.vercel.app',
    gallery: ['/projects/kominictvi-web-2.jpg'],
  },
  {
    id: 'finance-tracker',
    title: 'Finance Tracker',
    span: 'wide',
    image: '/projects/finance-tracker.jpg',
    tags: ['Electron', 'JavaScript', 'Desktop'],
    description:
      'Minimalistická desktopová aplikace pro lokální sledování majetku, dluhů a čistého jmění v reálném čase. Data zůstávají na disku, bez cloudu.',
    githubUrl: 'https://github.com/jachymthegoat/Finance-Tracker',
    gallery: ['/projects/finance-tracker-2.jpg'],
  },
  {
    id: 'ufc-review-website',
    title: 'UFC Review',
    span: 'wide',
    image: '/projects/ufc-review-website.jpg',
    tags: ['PHP', 'MVC', 'MySQL'],
    description:
      'Recenzní portál UFC zápasů s vlastním MVC frameworkem v PHP — správa rolí, hodnocení zápasníků a AJAX hlasování bez reloadu stránky.',
    githubUrl: 'https://github.com/jachymthegoat/UFC-Review-Website',
    gallery: ['/projects/ufc-review-website-2.jpg'],
  },
]
