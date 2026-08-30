import type { IncomingMessage, ServerResponse } from 'node:http'
import { getBusinesses } from './_lib/store'

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    await getBusinesses(req, res)
  } catch (error) {
    console.error('[api/businesses]', error)
    res.statusCode = 500
    res.end(JSON.stringify({ ok: false, error: 'Internal server error' }))
  }
}