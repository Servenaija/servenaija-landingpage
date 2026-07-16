import React from 'react'
import './DownloadButton.css'

type Props = {
  children?: React.ReactNode
  className?: string
  onClick?: () => void
}

const DownloadButton: React.FC<Props> = ({ children = 'Download App', className = '', onClick }) => {
  return (
    <button className={`download-btn ${className}`} onClick={onClick}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 11l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 21H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span>{children}</span>
    </button>
  )
}

export default DownloadButton
