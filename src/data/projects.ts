export type Project = {
  id: string
  title: string
  href?: string
  span: 'large' | 'wide' | 'tall' | 'small'
}

export const projects: Project[] = [
  {
    id: 'poly-web',
    title: 'Poly Web',
    href: '#',
    span: 'large',
  },
  {
    id: 'project-alpha',
    title: 'Project Alpha',
    href: '#',
    span: 'wide',
  },
  {
    id: 'project-beta',
    title: 'CLI Toolkit',
    href: '#',
    span: 'small',
  },
  {
    id: 'project-gamma',
    title: 'Data Viz',
    href: '#',
    span: 'tall',
  },
  {
    id: 'project-delta',
    title: 'Mobile App',
    href: '#',
    span: 'small',
  },
  {
    id: 'project-epsilon',
    title: 'Open Source',
    href: '#',
    span: 'small',
  },
]
