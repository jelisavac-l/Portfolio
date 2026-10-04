// All text on the site lives in this file.

export const name = 'Luka Jelisavac'

export const tagline = 'software engineer, backend and systems'

// Shown in the top corners, like a man page title.
export const pageTitle = 'JELISAVAC(1)'

export const updated = 'October 2026'

export const copyright = '© 2026 Luka Jelisavac'

// I hope people will get the joke.
export const synopsis = 'luka [--backend] [--systems] [--web]'

// One string per paragraph.
export const description = [
  'Based in Belgrade. I write backend and systems tools for both living and fun, mostly in Go and Java, and sometimes in C# or even C/C++ when the problem calls for it.',
  'I enjoy solving tricky problems and figuring out how things really work under the hood.',
  'You can guess which operating system I use, btw :)',
]

// `link` is optional.
// `team` is optional.
// `note` is optional.
export const projects = [
  {
    name: 'Secure Distributed Statistics System',
    desc: 'Distributed system for medical research, using secret sharing and SMPC to ensure data privacy.',
    note: 'Graduate thesis project.',
    tech: ['java', 'go', 'postgresql'],
  },
  {
    name: 'JERP',
    desc: 'Reverse proxy and load balancer. Course project.',
    tech: ['c#', '.net'],
    link: 'https://github.com/jelisavac-l/JERP',
  },
  {
    name: 'Civisight',
    desc: 'Civic monitoring application with AI-based analysis.',
    note: 'Unihack 7, top 5.',
    tech: ['java', 'spring boot', 'postgresql'],
    link: 'https://github.com/Abelova-Grupa/Civisight',
    team: true,
  },
  {
    name: 'DBee Admin',
    desc: 'Desktop administration tool for MySQL and MariaDB.',
    tech: ['java', 'javafx', 'jdbc'],
    link: 'https://github.com/Abelova-Grupa/DBee-Admin',
    team: true,
  },
  {
    name: 'Mercypher',
    desc: 'End-to-end encrypted chat. Go backend over gRPC and WebSockets.',
    tech: ['go', 'grpc', 'websockets', 'react'],
    link: 'https://github.com/Abelova-Grupa/Mercypher-Backend',
    team: true,
  },
  {
    name: 'Chord Repository',
    desc: 'Web platform for sharing chord transcriptions. Course project.',
    tech: ['spring boot', 'jwt', 'vue', 'postgresql'],
    link: 'https://github.com/jelisavac-l/NJT-Backend',
  },
  {
    name: 'Battleships',
    desc: 'Multiplayer battleship game with a Go server and a Vue client. Course project.',
    tech: ['go', 'vue'],
    link: 'https://github.com/jelisavac-l/GBattleships-Backend',
    team: true,
  },
  {
    name: 'Athlete Tracker',
    desc: 'Desktop application for tracking athlete progress. Course project.',
    tech: ['java', 'swing', 'jdbc', 'mysql'],
    link: 'https://github.com/jelisavac-l/Projektovanje-Softvera-2',
  },
  {
    name: 'IPC with message queues',
    desc: 'Inter-process communication between C programs using message queues. Course project.',
    tech: ['c', 'linux'],
    link: 'https://github.com/jelisavac-l/aros-projekat',
  },
]

export const experience = [
  {
    period: '2026 - now',
    title: 'Software Engineering Intern',
    place: 'BlackRock',
  },
  {
    period: '2026 - now',
    title: 'DevOps Team Lead',
    place: 'GDG Belgrade',
  },
  {
    period: ' 2025 - 2026',
    title: 'Web Development Associate',
    place: 'GDG Belgrade',
  },
]

export const education = [
  {
    period: '2022 - 2026',
    title: 'B.Sc. Information Systems Engineering',
    place: 'University of Belgrade',
  },
]

export const links = [
  { label: 'github', href: 'https://github.com/jelisavac-l', text: 'github.com/jelisavac-l' },
  { label: 'team', href: 'https://github.com/Abelova-Grupa', text: 'github.com/Abelova-Grupa' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/luka-jelisavac', text: 'linkedin.com/in/luka-jelisavac' },
  { label: 'email', href: 'mailto:jelisavacluka03@gmail.com', text: 'jelisavacluka03@gmail.com' },
  // TODO: One day, I'll put my CV at public/cv.pdf.
  // { label: 'cv', href: '/cv.pdf', text: 'cv.pdf' },
]
