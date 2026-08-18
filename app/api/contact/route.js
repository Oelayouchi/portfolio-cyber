const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'oelayouchi@gmail.com';
const RESEND_API_URL = 'https://api.resend.com/emails';

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  try {
    const { email, subject, description } = await request.json();
    if (!email || !subject || !description) return Response.json({ error: 'Tous les champs sont obligatoires.' }, { status: 400 });
    if (!isValidEmail(email)) return Response.json({ error: 'Adresse e-mail invalide.' }, { status: 400 });
    if (String(subject).length > 160 || String(description).length > 4000) return Response.json({ error: 'Le message est trop long.' }, { status: 400 });
    if (!process.env.RESEND_API_KEY) return Response.json({ error: 'Le service d’envoi d’e-mails n’est pas encore configuré.' }, { status: 503 });

    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeDescription = escapeHtml(description).replaceAll('\n', '<br />');
    const resendResponse = await fetch(RESEND_API_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL || 'Portfolio Oussama <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio Cyber] ${subject}`,
        html: `<div style="font-family:Arial,sans-serif;line-height:1.6;color:#102033"><h2>Nouveau message depuis le portfolio Cyber</h2><p><strong>Expéditeur :</strong> ${safeEmail}</p><p><strong>Objet :</strong> ${safeSubject}</p><p><strong>Message :</strong></p><div style="padding:16px;border-radius:10px;background:#f4f8ff;border:1px solid #d7e7f7">${safeDescription}</div></div>`,
      }),
    });
    if (!resendResponse.ok) return Response.json({ error: 'L’envoi du message a échoué.' }, { status: 502 });
    return Response.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json({ error: 'Une erreur serveur est survenue.' }, { status: 500 });
  }
}
