import { createContext } from 'react'

export type DownloadAppContextValue = {
  isOpen: boolean
  contextLabel: string | null
  openDownloadApp: (contextLabel?: string) => void
  closeDownloadApp: () => void
}

export const DownloadAppContext = createContext<DownloadAppContextValue | undefined>(undefined)