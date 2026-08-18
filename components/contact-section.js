'use client';

import { useState } from 'react';
import { SectionLabel } from './ui';

export default function ContactSection() {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

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

      if (!response.ok) throw new Error(data?.error || 'Impossible d’envoyer le message.');

      form.reset();
      setStatus('success');
      setMessage('Message envoyé. Je vous répondrai dès que possible.');
    } catch (error) {
      setStatus('error');
      setMessage(error.message || 'Une erreur est survenue.');
    }
  }

  return (
    <section id="contact" className="section shell contact contactEnhanced">
      <div className="contactIntro">
        <SectionLabel>CONTACT</SectionLabel>
        <h2>Construisons la prochaine étape.</h2>
        <p>Je recherche une alternance en cybersécurité dès septembre 2026 et je reste ouvert aux échanges autour de la sécurité des systèmes, des réseaux, du SOC, de l’embarqué et de la sûreté de fonctionnement.</p>
        <div className="contactQuickActions">
          <a className="button primary contactPhoneButton" href="tel:+33626294404"><span aria-hidden="true">☎</span>+33 6 26 29 44 04</a>
          <a className="button contactLinkedinButton" href="https://www.linkedin.com/in/oelayouchi/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <div className="contactFormPanel">
        <div className="contactFormHeading"><span>ME CONTACTER PAR E-MAIL</span><h3>Envoyez-moi un message</h3></div>
        <form className="contactForm" onSubmit={handleSubmit}>
          <label>Votre e-mail<input type="email" name="email" placeholder="nom@entreprise.com" autoComplete="email" required /></label>
          <label>Objet<input type="text" name="subject" placeholder="Proposition d’alternance, échange professionnel…" maxLength={160} required /></label>
          <label>Description<textarea name="description" placeholder="Écrivez votre message ici…" rows={6} maxLength={4000} required /></label>
          <button className="button primary contactSubmitButton" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Envoi en cours…' : 'Envoyer le message'}<span aria-hidden="true">↗</span></button>
          {message && <p className={`contactFormStatus ${status}`} role="status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
