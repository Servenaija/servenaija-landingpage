import type { LucideIcon } from 'lucide-react'

export type Product = {
  id: string
  name: string
  category: string
  price: string
  oldPrice?: string
  emoji: string
  gradient: string
  badge?: string
  seller: string
  location: string
  rating: number
}

export type ServiceCategory = {
  name: string
  icon: LucideIcon
  from: string
  pros: string
}

export type ProviderTag = { label: string; tone: 'green' | 'gold' }

export type Provider = {
  id: string
  name: string
  trade: string
  category: string
  rating: number
  jobs: number
  location: string
  rate: string
  initials: string
  tags: ProviderTag[]
}

export type Business = {
  id: string
  name: string
  category: string
  emoji: string
  gradient: string
  location: string
  rating: number
  reviews: number
  isOpen: boolean
  tags: string[]
}

export type ContactPayload = {
  name: string
  email: string
  topic: string
  message: string
}

export type LeadType =
  | 'download_intent'
  | 'agent'
  | 'vendor'
  | 'provider'
  | 'business'
  | 'order'
  | 'booking'
  | 'contact'