import type { IncomingMessage, ServerResponse } from 'node:http'

// ============================================================
// ServeNaija API — shared handlers
// One module powers both environments:
//   - local dev: mounted as Vite middleware in vite.config.ts
// Storage is in-memory (demo grade) — swap for a real database
// by replacing the exports below with DB queries.
// ============================================================

export type ApiRequest = IncomingMessage
export type ApiResponse = ServerResponse

// ---------- Domain types ----------
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
  emoji: string
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

export type ContactMessage = {
  id: string
  name: string
  email: string
  topic: string
  message: string
  receivedAt: string
}

export type Lead = {
  id: string
  type: string
  label: string | null
  receivedAt: string
}

// ---------- Seed data ----------
export const products: Product[] = [
  { id: 'ankara', name: 'Ankara Fabric Bundle (6 Yards)', category: 'Fashion', price: '₦12,500', oldPrice: '₦15,000', emoji: '🧵', gradient: 'linear-gradient(135deg, #fdf3e7, #fbe0c3)', badge: 'Hot deal', seller: 'Aso Oke Hub', location: 'Ibadan', rating: 4.8 },
  { id: 'rice', name: 'Premium Local Rice 50kg', category: 'Groceries', price: '₦58,000', emoji: '🌾', gradient: 'linear-gradient(135deg, #eaf7ee, #cdebd7)', badge: 'Best seller', seller: 'GreenFields Farms', location: 'Benue', rating: 4.9 },
  { id: 'earbuds', name: 'Wireless Earbuds Pro', category: 'Electronics', price: '₦24,999', oldPrice: '₦32,000', emoji: '🎧', gradient: 'linear-gradient(135deg, #eef1fb, #d8ddf5)', seller: 'TechHub NG', location: 'Lagos', rating: 4.6 },
  { id: 'blender', name: 'Heavy Duty Blender 2.5L', category: 'Home & Living', price: '₦31,500', emoji: '🫙', gradient: 'linear-gradient(135deg, #f0f9f4, #d3ecdf)', seller: 'HomeEssence', location: 'Abuja', rating: 4.7 },
  { id: 'shea', name: 'Raw Shea Butter 500g', category: 'Beauty', price: '₦4,200', emoji: '🧴', gradient: 'linear-gradient(135deg, #fdf0f3, #f7d7e0)', badge: 'Trending', seller: 'NaijaGlow', location: 'Kano', rating: 4.9 },
  { id: 'spices', name: 'Family Spice Pack (12 items)', category: 'Groceries', price: '₦9,800', emoji: '🌶️', gradient: 'linear-gradient(135deg, #fdefe8, #f8dcc8)', seller: 'Mama Tee Stores', location: 'Enugu', rating: 4.8 },
  { id: 'sneakers', name: 'Limited Edition Sneakers', category: 'Fashion', price: '₦45,000', emoji: '👟', gradient: 'linear-gradient(135deg, #eef7fb, #d5eaf4)', seller: 'SoleNaija', location: 'Lagos', rating: 4.5 },
  { id: 'solar', name: 'Portable Solar Power Bank 40W', category: 'Electronics', price: '₦38,700', oldPrice: '₦45,000', emoji: '🔋', gradient: 'linear-gradient(135deg, #f4f9ee, #e2f0cf)', badge: 'Eco pick', seller: 'SolarLife NG', location: 'Port Harcourt', rating: 4.7 },
]

export const serviceCategories: ServiceCategory[] = [
  { name: 'Home Cleaning', emoji: '🧹', from: '₦8,000', pros: '420+ pros' },
  { name: 'Plumbing', emoji: '🔧', from: '₦5,000', pros: '310+ pros' },
  { name: 'Electrical', emoji: '⚡', from: '₦6,500', pros: '280+ pros' },
  { name: 'Carpentry', emoji: '🪚', from: '₦7,000', pros: '190+ pros' },
  { name: 'Painting', emoji: '🎨', from: '₦9,000', pros: '150+ pros' },
  { name: 'AC & Appliance Repair', emoji: '❄️', from: '₦10,000', pros: '240+ pros' },
  { name: 'Moving & Haulage', emoji: '🚚', from: '₦15,000', pros: '120+ pros' },
  { name: 'Beauty & Wellness', emoji: '💅', from: '₦6,000', pros: '350+ pros' },
]

export const providers: Provider[] = [
  { id: 'chuka', name: 'Chuka O.', trade: 'Master Electrician', category: 'Electrical', rating: 4.9, jobs: 312, location: 'Lekki, Lagos', rate: '₦6,500/hr', initials: 'CO', tags: [{ label: 'Verified', tone: 'green' }, { label: 'Top rated', tone: 'gold' }] },
  { id: 'amaka', name: 'Amaka D.', trade: 'Deep-Cleaning Specialist', category: 'Home Cleaning', rating: 5.0, jobs: 208, location: 'Wuse, Abuja', rate: '₦8,000/visit', initials: 'AD', tags: [{ label: 'Verified', tone: 'green' }] },
  { id: 'ibrahim', name: 'Ibrahim S.', trade: 'Certified Plumber', category: 'Plumbing', rating: 4.8, jobs: 421, location: 'Kano', rate: '₦5,000/hr', initials: 'IS', tags: [{ label: 'Verified', tone: 'green' }, { label: 'Fast response', tone: 'gold' }] },
  { id: 'tunde', name: 'Tunde A.', trade: 'Furniture Carpenter', category: 'Carpentry', rating: 4.7, jobs: 156, location: 'Ibadan', rate: '₦7,000/hr', initials: 'TA', tags: [{ label: 'Verified', tone: 'green' }] },
  { id: 'grace', name: 'Grace E.', trade: 'AC & Fridge Technician', category: 'AC & Appliance Repair', rating: 4.9, jobs: 289, location: 'Port Harcourt', rate: '₦10,000/visit', initials: 'GE', tags: [{ label: 'Verified', tone: 'green' }, { label: 'Top rated', tone: 'gold' }] },
  { id: 'zainab', name: 'Zainab M.', trade: 'Mobile Beautician', category: 'Beauty & Wellness', rating: 4.8, jobs: 342, location: 'Kaduna', rate: '₦6,000/visit', initials: 'ZM', tags: [{ label: 'Verified', tone: 'green' }] },
]

export const businesses: Business[] = [
  { id: 'mamatee', name: 'Mama Tee Home Kitchen', category: 'Food & Dining', emoji: '🍲', gradient: 'linear-gradient(135deg, #fdefe8, #f8dcc8)', location: 'Ogui Road, Enugu', rating: 4.8, reviews: 214, isOpen: true, tags: ['Delivery', 'Dine-in'] },
  { id: 'sole', name: 'SoleNaija Sneakers', category: 'Fashion', emoji: '👟', gradient: 'linear-gradient(135deg, #eef7fb, #d5eaf4)', location: 'Ikeja, Lagos', rating: 4.5, reviews: 98, isOpen: true, tags: ['Verified'] },
  { id: 'greenfields', name: 'GreenFields Farms Mart', category: 'Groceries', emoji: '🥬', gradient: 'linear-gradient(135deg, #eaf7ee, #cdebd7)', location: 'Makurdi, Benue', rating: 4.9, reviews: 176, isOpen: true, tags: ['Farm fresh', 'Delivery'] },
  { id: 'glow', name: 'NaijaGlow Spa & Beauty', category: 'Beauty & Spa', emoji: '💆', gradient: 'linear-gradient(135deg, #fdf0f3, #f7d7e0)', location: 'Nassarawa GRA, Kano', rating: 4.9, reviews: 143, isOpen: false, tags: ['Booking required'] },
  { id: 'fixit', name: 'FixIt Home Services', category: 'Home Services', emoji: '🛠️', gradient: 'linear-gradient(135deg, #f0f9f4, #d3ecdf)', location: 'Garki, Abuja', rating: 4.7, reviews: 121, isOpen: true, tags: ['24/7', 'Verified'] },
  { id: 'brightcare', name: 'BrightCare Pharmacy', category: 'Health', emoji: '💊', gradient: 'linear-gradient(135deg, #eef1fb, #d8ddf5)', location: 'Dugbe, Ibadan', rating: 4.6, reviews: 87, isOpen: true, tags: ['Verified', 'Open late'] },
]

// ---------- In-memory submissions ----------
export const contactMessages: ContactMessage[] = []
export const leads: Lead[] = []

// ---------- HTTP helpers ----------
export function respond(res: ApiResponse, status: number, data: unknown): void {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.end(JSON.stringify(data))
}

export function respondError(res: ApiResponse, status: number, message: string): void {
  respond(res, status, { ok: false, error: message })
}

function handlePreflight(req: ApiRequest, res: ApiResponse): boolean {
  if (req.method !== 'OPTIONS') return false
  res.statusCode = 204
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.end()
  return true
}

function requireMethod(req: ApiRequest, res: ApiResponse, method: 'GET' | 'POST'): boolean {
  const allowed = req.method === method || (method === 'GET' && req.method === 'HEAD')
  if (!allowed) respondError(res, 405, 'Method not allowed')
  return allowed
}

async function readJsonBody(req: ApiRequest): Promise<Record<string, unknown>> {
  const chunks: Buffer[] = []
  let size = 0
  for await (const chunk of req) {
    size += (chunk as Buffer).length
    if (size > 100_000) throw new Error('Payload too large')
    chunks.push(chunk as Buffer)
  }
  const raw = Buffer.concat(chunks).toString('utf8')
  if (!raw) return {}
  return JSON.parse(raw) as Record<string, unknown>
}

function asString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

// ---------- Route handlers ----------
export async function getProducts(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (handlePreflight(req, res)) return
  if (!requireMethod(req, res, 'GET')) return

  const url = new URL(req.url ?? '/products', 'http://localhost')
  const category = url.searchParams.get('category')
  const filtered =
    !category || category === 'All'
      ? products
      : products.filter((product) => product.category === category)

  respond(res, 200, { products: filtered, total: filtered.length })
}

export async function getServices(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (handlePreflight(req, res)) return
  if (!requireMethod(req, res, 'GET')) return

  respond(res, 200, { categories: serviceCategories, providers })
}

export async function getBusinesses(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (handlePreflight(req, res)) return
  if (!requireMethod(req, res, 'GET')) return

  respond(res, 200, { businesses })
}

export async function postContact(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (handlePreflight(req, res)) return
  if (!requireMethod(req, res, 'POST')) return

  let body: Record<string, unknown>
  try {
    body = await readJsonBody(req)
  } catch {
    respondError(res, 400, 'Invalid JSON body')
    return
  }

  const name = asString(body.name)
  const email = asString(body.email)
  const topic = asString(body.topic) || 'General enquiry'
  const message = asString(body.message)

  if (!name || !message || !email.includes('@')) {
    respondError(res, 400, 'name, a valid email and message are required')
    return
  }

  const record: ContactMessage = {
    id: crypto.randomUUID(),
    name,
    email,
    topic,
    message,
    receivedAt: new Date().toISOString(),
  }
  contactMessages.push(record)
  console.log(`[contact] saved message ${record.id} from ${record.email}`)

  respond(res, 201, { ok: true, id: record.id })
}

export async function postLeads(req: ApiRequest, res: ApiResponse): Promise<void> {
  if (handlePreflight(req, res)) return
  if (!requireMethod(req, res, 'POST')) return

  let body: Record<string, unknown>
  try {
    body = await readJsonBody(req)
  } catch {
    respondError(res, 400, 'Invalid JSON body')
    return
  }

  const type = asString(body.type)
  if (!type) {
    respondError(res, 400, 'type is required')
    return
  }

  const label = typeof body.label === 'string' ? body.label.slice(0, 200) : null
  const record: Lead = { id: crypto.randomUUID(), type, label, receivedAt: new Date().toISOString() }
  leads.push(record)
  console.log(`[lead] ${record.type}${record.label ? ` — ${record.label}` : ''}`)

  respond(res, 201, { ok: true, id: record.id })
}