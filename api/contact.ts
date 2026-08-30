import type { IncomingMessage, ServerResponse } from 'node:http'
import { postContact } from './_lib/store'

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  try {
    await postContact(req, res)
  } catch (error) {
    console.error('[api/contact]', error)
    res.statusCode = 500
    res.end(JSON.stringify({ ok: false, error: 'Internal server error' }))
  }
}