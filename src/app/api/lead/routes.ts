import { NextResponse } from 'next/server'
import { z } from 'zod'
import { normalizePhone } from '@/lib/phone'
import { sendLeadToWhatsApp } from '@/lib/whatsapp'

const schema = z.object({
  name: z.string().min(2).max(80),
  phone: z.string().min(8).max(20),
})

export async function POST(req: Request) {
  try {
    const data = await req.json()
    const { name, phone } = schema.parse(data)
    const phoneE164 = normalizePhone(phone)

    await sendLeadToWhatsApp({ name, phoneE164 })

    return NextResponse.json({ ok: true })
  } catch (err: unknown) {
  console.error(err)

  let message = 'Erro'
  if (err instanceof Error) {
    message = err.message
  }

  return NextResponse.json({ ok: false, error: message }, { status: 400 })
}
}
