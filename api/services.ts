import type { IncomingMessage, ServerResponse } from 'node:http'
import { getServices } from './_lib/store'

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    await getServices(req, res)
  } catch (error) {
    console.error('[api/services]', error)
    res.statusCode = 500
    res.end(JSON.stringify({ ok: false, error: 'Internal server error' }))
  }
}