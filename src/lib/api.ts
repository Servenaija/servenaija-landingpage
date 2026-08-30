import {
  Zap, SprayCan, Wrench, Hammer, Paintbrush, Snowflake, Truck, Sparkles, Scissors, Shirt,
  GraduationCap, Scale, Receipt, ShieldCheck, House, HardHat, Sofa, Laptop, Camera,
  PartyPopper, UtensilsCrossed, HeartPulse, Dumbbell, Wheat, Car, Smartphone, Lock, Baby,
  PawPrint, Music, Plane, BatteryCharging, TrendingUp, Printer, Briefcase, Languages,
  PenLine, Ship, Bus, Building2, Leaf, Mic, ShoppingBag, Droplets, Cog, Blinds, Wifi,
  Fuel, FileText, ClipboardList, Package, ChefHat, Hotel, Search, FlaskConical, KeyRound,
  CreditCard, Recycle, Bath, Waves, Heart, Star, Flame, Award, Crown, Gem, LayoutGrid,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Business, ContactPayload, LeadType, Product, Provider, ServiceCategory } from '../types'

// Base URL of the API:
//   - default: same origin ("/api") — Vite middleware proxies to backend in dev,
//   - override with VITE_API_URL to point at a remote backend (e.g. http://localhost:5000/v1)
const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? '/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${BASE_URL}${path}`, {
      headers: { 'Content-Type': 'application/json' },
      ...init,
    })
  } catch {
    throw new Error('Network error — could not reach the API')
  }

  if (!response.ok) {
    throw new Error(`API error ${response.status}`)
  }

  return (await response.json()) as T
}

// ─── Backend response shapes ───────────────────────────────────────────
interface BackendProduct {
  _id: string
  name: string
  price: number
  originalPrice?: number
  category?: string
  description?: string
  images?: string[]
  rating?: number
  store?: { name: string; logo?: string }
}

interface BackendStore {
  _id: string
  name: string
  description?: string
  category?: string
  logo?: string
  coverImage?: string
  isActive?: boolean
  rating?: number
  reviewCount?: number
}

interface BackendCategory {
  _id: string
  name: string
  description?: string
  icon?: string
  color?: string
}

interface BackendProvider {
  _id: string
  firstName: string
  lastName: string
  fullName: string
  service?: { category?: string; businessName?: string; description?: string }
  location?: { city?: string; state?: string; area?: string }
  isVerifiedPro?: boolean
  avgRating?: number
  reviewCount?: number
}

// ─── Transform helpers ─────────────────────────────────────────────────
function transformProduct(p: BackendProduct): Product {
  const image = p.images?.[0] || p.store?.logo || ''
  return {
    id: p._id,
    name: p.name,
    category: p.category ?? 'Other',
    price: `₦${p.price.toLocaleString('en-NG')}`,
    oldPrice: p.originalPrice ? `₦${p.originalPrice.toLocaleString('en-NG')}` : undefined,
    emoji: image || '🛍️',
    gradient: 'linear-gradient(135deg, #eaf7ee, #cdebd7)',
    seller: p.store?.name ?? 'ServeNaija Seller',
    location: 'Nigeria',
    rating: p.rating ?? 0,
  }
}

// The backend sends the same lucide icon (e.g. "Zap") for most categories,
// so derive a meaningful icon from the category name instead.
const nameIconRules: Array<[RegExp, LucideIcon]> = [
  [/electric|rewire|wiring/i, Zap],
  [/clean|housekeep|maid|fumigat|pest|waste/i, SprayCan],
  [/plumb|pipe|drain|water/i, Wrench],
  [/carpenter|carpentry|wood|furniture|joinery/i, Hammer],
  [/paint|decorat/i, Paintbrush],
  [/air ?cond|ac |hvac|fridge|refrigerat|appliance|freezer/i, Snowflake],
  [/movers?|moving|haulage|logistic|transport|delivery|courier|dispatch|relocation/i, Truck],
  [/beauty|spa|salon|hair|barber|nail|manicure|pedicure|makeup|massage|wellness|wig|braids|tattoo|pierc|facial|eyebrow|eyelash|body/i, Sparkles],
  [/tailor|tailoring|sew|fashion|cloth|laundry|ironing|dry ?clean|wardrobe|wear|boutique|styling/i, Scissors],
  [/tutor|teach|lesson|training|educat|school|academ|exam|study/i, GraduationCap],
  [/legal|lawyer|\blaw\b|attorney|affidavit|notar|documentation|compliance/i, Scale],
  [/account|tax|audit|bookkeep|financ|payroll/i, Receipt],
  [/insurance|risk/i, ShieldCheck],
  [/real ?estate|property|rent|estate|land|tenant/i, House],
  [/architect|building|construction|engineer|weld|metal|fabricat|mason/i, HardHat],
  [/interior|furnishing/i, Sofa],
  [/software|web|website|app |app-|develop|program|cod(e|ing)|it |tech|computer|ai |api|data|cloud|cyber|network|seo|digital|graphic|brand|design/i, Laptop],
  [/photo|video|film|camera|media|animation/i, Camera],
  [/event|wedding|party|planner|planning|birthday|decor/i, PartyPopper],
  [/cater|food|restaurant|chef|bak(e|ery)|cake|drink/i, UtensilsCrossed],
  [/health|medical|doctor|nurse|nursing|clinic|dental|dentist|pharmac|care|therapy|therapist|physio/i, HeartPulse],
  [/fitness|gym|personal train|yoga|nutrition|diet/i, Dumbbell],
  [/agricultur|farm|agro|livestock|poultry|fish|crop|fertili|seed|tractor/i, Wheat],
  [/auto|car |mechanic|vehicle|driv(e|ing)|tyre|panel beat/i, Car],
  [/phone|gadget|laptop|computer repair|electronics/i, Smartphone],
  [/secur|guard|safety|cctv|alarm/i, Lock],
  [/babysit|child ?care|nanny|elder|disab/i, Baby],
  [/pet|vet|dog|animal/i, PawPrint],
  [/music|entertain|dj|instrument|sound/i, Music],
  [/travel|visa|tour|immigration|ticket|vacation/i, Plane],
  [/energy|solar|power|inverter|battery|generator/i, BatteryCharging],
  [/market|advertis|advert|social media|promot/i, TrendingUp],
  [/print|sign|publish|stationery/i, Printer],
  [/consult|business|advisory|strateg|manag(i?ng)?|recruit|hr |human resource|staff/i, Briefcase],
  [/translat|interpret|language/i, Languages],
  [/write|content|copy|editor|ghostwrit/i, PenLine],
  [/boat|marine|vessel|seafarer|ship|diving|port services/i, Ship],
  [/airport transfer|chauffeur|bus hire|car hire|taxi|cab|shuttle|rental/i, Bus],
  [/tiling|tiler|roof|flooring|plaster|screed|concrete|block |moulding|demolition|excavat|foundation|scaffold|aluminium|pop |ceiling|wall|structural|surveying/i, Building2],
  [/garden|grass|tree|landscap|irrigat|lawn/i, Leaf],
  [/audio|podcast|voice|danc|band|mc /i, Mic],
  [/bag|shoe|leather|embroider|upholster/i, ShoppingBag],
  [/borehole|drill/i, Droplets],
  [/brake|engine|steering|suspension|transmission|vulcaniz|wheel|tyre/i, Cog],
  [/curtain|blind|window|door |glass|kitchen|cabinet|lighting/i, Blinds],
  [/internet|wifi|broadband/i, Wifi],
  [/cold room|gas|lpg|diesel|fuel/i, Fuel],
  [/contract|patent|trademark/i, FileText],
  [/errand|assistance|assistant|grocery|organization|house hunt|sourcing|procure|handyman/i, ClipboardList],
  [/freight|warehouse|storage|import|export|supply|wholesale|retail/i, Package],
  [/cooking|confection|pastr|snack/i, ChefHat],
  [/hospitality|apartment|short-let|hotel|lodg/i, Hotel],
  [/inspect/i, Search],
  [/laborator/i, FlaskConical],
  [/locksmith|lock/i, KeyRound],
  [/pos |payment|fintech/i, CreditCard],
  [/recycl/i, Recycle],
  [/septic|tank/i, Bath],
  [/pool/i, Waves],
]

// Fallback map for categories where the backend sends a meaningful lucide icon
// name (e.g. "Wrench", "Palette"). "Zap" is the backend's generic default, so
// it is ignored here to avoid everything rendering as a flash bolt.
const backendIconMap: Record<string, LucideIcon> = {
  Briefcase: Briefcase,
  Wrench: Wrench,
  Sparkles: Sparkles,
  Heart: Heart,
  Star: Star,
  Home: House,
  Car: Car,
  Shirt: Shirt,
  ShoppingBag: ShoppingBag,
  Utensils: UtensilsCrossed,
  Palette: Paintbrush,
  Scissors: Scissors,
  Droplet: Droplets,
  Flame: Flame,
  Shield: ShieldCheck,
  Award: Award,
  Crown: Crown,
  Gem: Gem,
  Tool: Hammer,
}

function categoryIcon(c: BackendCategory): LucideIcon {
  for (const [pattern, icon] of nameIconRules) {
    if (pattern.test(c.name)) return icon
  }
  const backendIcon = backendIconMap[c.icon || '']
  if (c.icon !== 'Zap' && backendIcon) return backendIcon
  return LayoutGrid
}

function transformCategory(c: BackendCategory): ServiceCategory {
  return {
    name: c.name,
    icon: categoryIcon(c),
    from: '',
    pros: '',
  }
}

function transformProvider(p: BackendProvider): Provider {
  const name = p.fullName || `${p.firstName ?? ''} ${p.lastName ?? ''}`.trim()
  return {
    id: p._id,
    name,
    trade: p.service?.category ?? p.service?.businessName ?? 'Professional',
    category: p.service?.category ?? 'General',
    rating: p.avgRating ?? 0,
    jobs: p.reviewCount ?? 0,
    location: p.location?.city ?? p.location?.state ?? 'Nigeria',
    rate: '',
    initials: name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase(),
    tags: p.isVerifiedPro ? [{ label: 'Verified Pro', tone: 'gold' as const }] : [],
  }
}

function transformStore(s: BackendStore): Business {
  const image = s.logo || s.coverImage || ''
  return {
    id: s._id,
    name: s.name,
    category: s.category ?? 'Other',
    emoji: image || '🏪',
    gradient: 'linear-gradient(135deg, #f0f9f4, #d3ecdf)',
    location: s.category ?? 'Nigeria',
    rating: s.rating ?? 0,
    reviews: s.reviewCount ?? 0,
    isOpen: s.isActive ?? true,
    tags: s.category ? [s.category] : [],
  }
}

export const api = {
  // ── Marketplace: Products ─────────────────────────────────────────
  // Uses featured (no category) or trending (with category) to avoid
  // the invalid store reference error that .populate() throws on bad IDs
  getProducts(category: string): Promise<Product[]> {
    const params = new URLSearchParams()
    if (category && category !== 'All') {
      params.set('category', category)
      const query = params.toString() ? `?${params.toString()}` : ''
      return request<{ products: BackendProduct[] }>(`/marketplace/trending${query}`).then(
        (data) => data.products.map(transformProduct),
      )
    }
    return request<{ products: BackendProduct[] }>('/marketplace/featured').then((data) =>
      data.products.map(transformProduct),
    )
  },

  // ── Services: Categories + Providers ──────────────────────────────
  // Categories are fetched in a single request. Providers are NOT fetched
  // upfront — they are loaded on demand per category (20 per page) via
  // getProvidersByCategory() to avoid hundreds of parallel requests.
  async getCategories(): Promise<ServiceCategory[]> {
    const catData = await request<{
      success: boolean
      data: BackendCategory[]
    }>('/public/categories')

    return catData.data.map(transformCategory)
  },

  // Fetch providers for ONE category, paginated (default 20 per page).
  async getProvidersByCategory(
    category: string,
    page = 0,
    limit = 20,
  ): Promise<{ providers: Provider[]; total: number; pages: number; page: number }> {
    const data = await request<{
      success: boolean
      data: {
        providers: BackendProvider[]
        pagination: { page: number; limit: number; total: number; pages: number }
      }
    }>(`/public/categories/${encodeURIComponent(category)}?limit=${limit}&page=${page}`)

    return {
      providers: (data.data?.providers ?? []).map(transformProvider),
      total: data.data?.pagination?.total ?? 0,
      pages: data.data?.pagination?.pages ?? 0,
      page: data.data?.pagination?.page ?? page,
    }
  },

  // ── Businesses: Stores ────────────────────────────────────────────
  getBusinesses(): Promise<Business[]> {
    return request<{ stores: BackendStore[] }>('/marketplace/stores').then((data) =>
      data.stores.map(transformStore),
    )
  },

  // ── Contact ───────────────────────────────────────────────────────
  async submitContact(payload: ContactPayload): Promise<void> {
    await request<{ ok: boolean }>('/contact', {
      method: 'POST',
      body: JSON.stringify(payload),
    })
  },

  // ── Lead tracking ─────────────────────────────────────────────────
  trackLead(type: LeadType, label?: string | null): void {
    void request('/leads', {
      method: 'POST',
      body: JSON.stringify({ type, label: label ?? null }),
    }).catch(() => {
      // ignored on purpose
    })
  },

  // ── Auth: Send Magic Link (Forgot Password) ───────────────────────
  sendMagicLink(email: string): Promise<{ status: boolean; message: string }> {
    return request<{ status: boolean; message: string }>('/auth/send-magic-link', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  },

  // ── Auth: Reset Password (via magic link token) ───────────────────
  resetPassword(
    email: string,
    token: string,
    password: string,
    type: string,
  ): Promise<{ status: boolean; message: string }> {
    return request<{ status: boolean; message: string }>('/auth/reset-password', {
      method: 'POST',
      body: JSON.stringify({ email, token, password, type }),
    })
  },
}