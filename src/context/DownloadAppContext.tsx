import { useCallback, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { DownloadAppContext } from './download-app-context'

export function DownloadAppProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [contextLabel, setContextLabel] = useState<string | null>(null)

  const openDownloadApp = useCallback((label?: string) => {
    setContextLabel(label ?? null)
    setIsOpen(true)
  }, [])

  const closeDownloadApp = useCallback(() => setIsOpen(false), [])

  const value = useMemo(
    () => ({ isOpen, contextLabel, openDownloadApp, closeDownloadApp }),
    [isOpen, contextLabel, openDownloadApp, closeDownloadApp],
  )

  return <DownloadAppContext.Provider value={value}>{children}</DownloadAppContext.Provider>
}