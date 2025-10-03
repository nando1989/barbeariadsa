const TOKEN = process.env.WHATSAPP_TOKEN!
const PHONE_ID = process.env.WHATSAPP_PHONE_ID!
const RECIPIENTS = (process.env.WHATSAPP_RECIPIENTS ?? '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean)

type LeadPayload = { name: string; phoneE164: string }

export async function sendLeadToWhatsApp({ name, phoneE164 }: LeadPayload) {
  if (!TOKEN || !PHONE_ID || RECIPIENTS.length === 0) {
    throw new Error('Config WhatsApp ausente')
  }

  const text =
    `🚀 Novo lead!\n` +
    `Nome: ${name}\n` +
    `Telefone: +${phoneE164}\n` +
    `Origem: Landingpage`

  // envia para N admins (não grupo)
  const results = await Promise.all(
    RECIPIENTS.map(to =>
      fetch(`https://graph.facebook.com/v20.0/${PHONE_ID}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to, // E.164 sem '+'
          type: 'text',
          text: { body: text },
        }),
      })
      .then(async r => ({ ok: r.ok, status: r.status, body: await r.text() }))
    )
  )

  const failed = results.filter(r => !r.ok)
  if (failed.length) {
    console.error('Falhas WhatsApp:', failed)
    throw new Error('Falha ao enviar WhatsApp para algum admin')
  }
}
