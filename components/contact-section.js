'use client';

import { useState } from 'react';
import { SectionLabel } from './ui';
import { useLanguage } from './language-context';

const formCopy = {
  fr: {
    emailPlaceholder: 'nom@entreprise.com',
    subjectPlaceholder: 'Proposition d’alternance en cybersécurité, échange professionnel…',
    messagePlaceholder: 'Écrivez votre message ici…',
    success: 'Message envoyé. Je vous répondrai dès que possible.',
    error: 'Impossible d’envoyer le message.',
  },
  en: {
    emailPlaceholder: 'name@company.com',
    subjectPlaceholder: 'Cybersecurity apprenticeship opportunity, professional discussion…',
    messagePlaceholder: 'Write your message here…',
    success: 'Message sent. I will reply as soon as possible.',
    error: 'Unable to send the message.',
  },
  ar: {
    emailPlaceholder: 'name@company.com',
    subjectPlaceholder: 'فرصة تدريب بالتناوب في الأمن السيبراني، تواصل مهني…',
    messagePlaceholder: 'اكتب رسالتك هنا…',
    success: 'تم إرسال الرسالة. سأجيب في أقرب وقت ممكن.',
    error: 'تعذر إرسال الرسالة.',
  },
  es: {
    emailPlaceholder: 'nombre@empresa.com',
    subjectPlaceholder: 'Propuesta de alternancia en ciberseguridad, contacto profesional…',
    messagePlaceholder: 'Escribe tu mensaje aquí…',
    success: 'Mensaje enviado. Responderé lo antes posible.',
    error: 'No se ha podido enviar el mensaje.',
  },
  de: {
    emailPlaceholder: 'name@unternehmen.de',
    subjectPlaceholder: 'Cybersecurity-Ausbildung, beruflicher Austausch…',
    messagePlaceholder: 'Schreiben Sie Ihre Nachricht hier…',
    success: 'Nachricht gesendet. Ich antworte so bald wie möglich.',
    error: 'Die Nachricht konnte nicht gesendet werden.',
  },
};

export default function ContactSection() {
  const { language, t } = useLanguage();
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const copy = formCopy[language] || formCopy.fr;

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('sending');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      email: String(formData.get('email') || '').trim(),
      subject: String(formData.get('subject') || '').trim(),
      description: String(formData.get('description') || '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || copy.error);
      form.reset();
      setStatus('success');
      setMessage(copy.success);
    } catch (error) {
      setStatus('error');
      setMessage(error.message || copy.error);
    }
  }

  return (
    <section id="contact" className="section shell contact contactEnhanced">
      <div className="contactIntro">
        <SectionLabel>{t('contactLabel')}</SectionLabel>
        <h2>{t('contactTitle')}</h2>
        <p>{t('contactCopy')}</p>
        <div className="contactQuickActions">
          <a className="button primary contactPhoneButton" href="tel:+33626294404"><span aria-hidden="true">☎</span>+33 6 26 29 44 04</a>
          <a className="button contactLinkedinButton" href="https://www.linkedin.com/in/oelayouchi/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="contactFormPanel">
        <div className="contactFormHeading"><span>{t('emailLabel')}</span><h3>{t('sendMessage')}</h3></div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>{t('yourEmail')}<input type="email" name="email" placeholder={copy.emailPlaceholder} autoComplete="email" required /></label>
          <label>{t('subject')}<input type="text" name="subject" placeholder={copy.subjectPlaceholder} maxLength={160} required /></label>
          <label>{t('description')}<textarea name="description" placeholder={copy.messagePlaceholder} rows={6} maxLength={4000} required /></label>
          <button className="button primary contactSubmitButton" type="submit" disabled={status === 'sending'}>{status === 'sending' ? t('sending') : t('send')}<span aria-hidden="true">↗</span></button>
          {message && <p className={`contactFormStatus ${status}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
