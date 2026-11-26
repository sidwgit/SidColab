import React, { useState, useEffect } from 'react';
import { Send, Copy, Check, Mail, AlertCircle } from 'lucide-react';
import { sendInquiryEmail, buildMailtoUrl } from '../utils/sendInquiry';
import { ContactSocial } from '../data/portfolioData';
import { SocialLinksGrid } from './SocialLinksGrid';

interface ContactSectionProps {
  email: string;
  availabilityLabel: string;
  socials: ContactSocial[];
  selectedService?: string;
}

const projectTypes = [
  'YouTube & Video Editing',
  'Motion Graphics',
  'Posters & Graphic Design',
  'Creative Direction',
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  email,
  availabilityLabel,
  socials,
  selectedService,
}) => {
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setProjectType(selectedService);
    }
  }, [selectedService]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard unavailability
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setErrorMsg(null);
    try {
      await sendInquiryEmail({
        name,
        email: senderEmail,
        projectType,
        message,
        recipientEmail: email,
      });
      setSent(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not send directly. You can use the email app button below.'
      );
    } finally {
      setSending(false);
    }
  };

  const handleReset = () => {
    setSent(false);
    setErrorMsg(null);
    setName('');
    setSenderEmail('');
    setMessage('');
  };

  return (
    <section
      id="contact"
      style={{
        padding: '10px 24px 72px',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        {/* Airmail Postcard Container */}
        <div
          className="airmail-frame"
          style={{
            position: 'relative',
            padding: '10px',
            boxShadow: '6px 6px 0 #18181b',
            border: '2px solid #18181b',
          }}
        >
          <span
            className="masking-tape"
            style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-1.5deg)' }}
          />

          <div
            className="notebook-paper"
            style={{
              border: '1.5px solid #18181b',
              padding: '28px 26px',
            }}
          >
            {/* Postcard Header Row */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '16px',
                flexWrap: 'wrap',
                marginBottom: '22px',
              }}
            >
              <div>
                <span className="font-hand" style={{ fontSize: '18px', color: '#52525b', display: 'block' }}>
                  drop a note directly to my inbox!
                </span>
                <h2
                  className="font-sans-ui"
                  style={{
                    margin: '2px 0 8px',
                    fontSize: 'clamp(26px, 3.2vw, 34px)',
                    fontWeight: 800,
                    letterSpacing: '-0.025em',
                  }}
                >
                  Send a project inquiry
                </h2>
                <div
                  className="font-mono-ui"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    fontSize: '10px',
                    color: '#2563eb',
                    letterSpacing: '0.07em',
                  }}
                >
                  <span
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      display: 'inline-block',
                    }}
                  />
                  <span>{availabilityLabel.toUpperCase()}</span>
                </div>
              </div>

              {/* Postage Stamp Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    backgroundColor: '#fef08a',
                    border: '1.5px solid #18181b',
                    padding: '6px 10px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span className="font-mono-ui" style={{ fontSize: '11px', fontWeight: 700 }}>
                    {email}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="font-mono-ui"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: '#18181b',
                      color: '#ffffff',
                      border: 'none',
                      padding: '4px 8px',
                      fontSize: '9px',
                      fontWeight: 700,
                      cursor: 'pointer',
                    }}
                  >
                    {copied ? <Check size={10} /> : <Copy size={10} />}
                    <span>{copied ? 'COPIED' : 'COPY'}</span>
                  </button>
                </div>

                <div
                  className="stamp-square"
                  aria-hidden="true"
                  style={{
                    width: '54px',
                    height: '62px',
                    backgroundColor: '#ec4899',
                    color: '#ffffff',
                    flexDirection: 'column',
                    gap: '2px',
                  }}
                >
                  <span className="font-pixel" style={{ fontSize: '20px', lineHeight: 1 }}>
                    SID
                  </span>
                  <span className="font-mono-ui" style={{ fontSize: '8px', fontWeight: 700 }}>
                    2026
                  </span>
                </div>
              </div>
            </div>

            {/* Social Handles Strip */}
            <div style={{ marginBottom: '20px' }}>
              <SocialLinksGrid socials={socials} />
            </div>

            {sent ? (
              <div
                style={{
                  backgroundColor: '#a7f3d0',
                  border: '1.5px solid #18181b',
                  padding: '24px',
                  textAlign: 'center',
                }}
              >
                <div className="font-pixel" style={{ fontSize: '32px', color: '#18181b', marginBottom: '6px' }}>
                  SENT TO SID!
                </div>
                <p style={{ margin: '0 auto 16px', maxWidth: '460px', fontSize: '14px', color: '#14532d', lineHeight: 1.55 }}>
                  Thanks{name ? `, ${name}` : ''}! Your message was submitted directly to <strong>{email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="font-mono-ui"
                  style={{
                    backgroundColor: '#18181b',
                    color: '#ffffff',
                    border: 'none',
                    padding: '9px 18px',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.09em',
                    cursor: 'pointer',
                  }}
                >
                  SEND ANOTHER NOTE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Project Type Chips */}
                <div>
                  <div className="font-mono-ui" style={{ fontSize: '10px', fontWeight: 700, marginBottom: '8px', letterSpacing: '0.07em' }}>
                    WHAT ARE WE WORKING ON?
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {projectTypes.map((type) => {
                      const active = projectType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className="font-mono-ui"
                          style={{
                            padding: '6px 11px',
                            fontSize: '10px',
                            fontWeight: 700,
                            border: '1.5px solid #18181b',
                            backgroundColor: active ? '#f5c52b' : '#ffffff',
                            color: '#18181b',
                            cursor: 'pointer',
                            boxShadow: active ? '2px 2px 0 #18181b' : 'none',
                          }}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Row */}
                <div className="contact-form-row">
                  <div>
                    <label
                      htmlFor="inline-name"
                      className="font-mono-ui"
                      style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}
                    >
                      YOUR NAME *
                    </label>
                    <input
                      id="inline-name"
                      name="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex Rivera"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1.5px solid #18181b',
                        backgroundColor: '#ffffff',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="inline-email"
                      className="font-mono-ui"
                      style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="inline-email"
                      name="email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="you@domain.com"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1.5px solid #18181b',
                        backgroundColor: '#ffffff',
                        fontSize: '14px',
                        fontFamily: 'inherit',
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="inline-message"
                    className="font-mono-ui"
                    style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}
                  >
                    PROJECT DETAILS / MESSAGE *
                  </label>
                  <textarea
                    id="inline-message"
                    name="message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell Sid what you need (video links, poster size, deadline, vibe)..."
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      border: '1.5px solid #18181b',
                      backgroundColor: '#ffffff',
                      fontSize: '14px',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  />
                </div>

                {errorMsg && (
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '10px',
                      flexWrap: 'wrap',
                      backgroundColor: '#fee2e2',
                      border: '1.5px solid #dc2626',
                      padding: '10px 12px',
                      fontSize: '13px',
                      color: '#991b1b',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <AlertCircle size={15} />
                      <span>{errorMsg}</span>
                    </span>
                    <a
                      href={buildMailtoUrl({
                        name,
                        email: senderEmail,
                        projectType,
                        message,
                        recipientEmail: email,
                      })}
                      className="font-mono-ui"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '10px',
                        fontWeight: 700,
                        color: '#18181b',
                        backgroundColor: '#ffffff',
                        border: '1px solid #18181b',
                        padding: '5px 9px',
                        textDecoration: 'none',
                      }}
                    >
                      <Mail size={12} />
                      <span>OPEN MAIL APP</span>
                    </a>
                  </div>
                )}

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <span className="font-mono-ui" style={{ fontSize: '10px', color: '#52525b' }}>
                    DELIVERS DIRECTLY TO {email.toUpperCase()}
                  </span>

                  <button
                    type="submit"
                    disabled={sending}
                    className="font-mono-ui"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      backgroundColor: sending ? '#52525b' : '#18181b',
                      color: '#ffffff',
                      border: 'none',
                      padding: '12px 20px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      cursor: sending ? 'wait' : 'pointer',
                      boxShadow: '3px 3px 0 #2563eb',
                    }}
                  >
                    <Send size={13} />
                    <span>{sending ? 'SENDING...' : 'SEND MESSAGE'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
