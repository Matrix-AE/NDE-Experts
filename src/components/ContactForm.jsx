import { useRef, useState } from 'react';

/**
 * Recreates the "Contact form" block from main.js.
 * Not used on the Home page (the original contact.html wasn't part of this
 * upload) — drop this into your Contact page when you build it, e.g.:
 *
 *   <ContactForm onSubmit={(data) => api.send(data)}>
 *     <input name="name" className="form-input" placeholder="Name" required />
 *     <input name="email" type="email" className="form-input" placeholder="Email" required />
 *     <textarea name="message" className="form-input" placeholder="Message" required />
 *   </ContactForm>
 */
export default function ContactForm({ children, onSubmit }) {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      const data = Object.fromEntries(new FormData(formRef.current));
      onSubmit(data);
    }
    setSent(true);
    setDisabled(true);
    setTimeout(() => {
      setSent(false);
      setDisabled(false);
      formRef.current?.reset();
    }, 3500);
  };

  return (
    <form id="contact-form" ref={formRef} onSubmit={handleSubmit}>
      {children}
      <button
        type="submit"
        disabled={disabled}
        style={sent ? { background: 'linear-gradient(135deg,#00C850,#00A040)' } : undefined}
      >
        {sent ? '✓ \u00A0Message Sent' : 'Send Message'}
      </button>
    </form>
  );
}
