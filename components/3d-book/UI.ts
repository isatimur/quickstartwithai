import { atom } from 'jotai'

// Use our actual pages but represent them visually as a thicker book
export const pages = [
  {
    front: 'cover',
    back: 'page-1',
  },
  {
    front: 'page-2',
    back: 'page-3',
  },
  {
    front: 'page-4',
    back: 'page-5',
  },
  {
    front: 'page-6',
    back: 'back-cover',
  },
]

// Add visual-only pages for thickness
export const visualPages = Array.from({ length: 20 }).map(() => ({
  isFiller: true,
}))

export const pageAtom = atom(0)
