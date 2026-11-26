import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Send, AlertCircle, Mail } from 'lucide-react';
import { sendInquiryEmail, buildMailtoUrl } from '../utils/sendInquiry';
import { ContactSocial } from '../data/portfolioData';
import { SocialLinksGrid } from './SocialLinksGrid';

interface ContactModalProps {
  isOpen: boolean;
  email: string;
  availabilityLabel: string;
  socials: ContactSocial[];
  initialService?: string;
  onClose: () => void;
}

const projectTypes = [
  'YouTube & Video Editing',
  'Motion Graphics',
  'Posters & Graphic Design',
  'Creative Direction',
];

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  email,
  availabilityLabel,
  socials,
  initialService,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectType, setProjectType] = useState(initialService || projectTypes[0]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (initialService) {
      setProjectType(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard unavailable
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
      setSubmitted(true);
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Could not send directly. You can open your email app instead.'
      );
    } finally {
      setSending(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setName('');
    setSenderEmail('');
    setMessage('');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      onClick={handleResetAndClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 60,
        backgroundColor: 'rgba(24, 24, 27, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="notebook-paper"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '520px',
          maxHeight: '90vh',
          overflowY: 'auto',
          border: '2px solid #18181b',
          boxShadow: '8px 8px 0 #18181b',
          padding: '26px',
          position: 'relative',
        }}
      >
        <span className="masking-tape" style={{ top: '-10px', left: '50%', transform: 'translateX(-50%) rotate(-1.5deg)' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
          <div>
            <span className="font-hand" style={{ fontSize: '17px', color: '#52525b' }}>
              say hello!
            </span>
            <h2 className="font-sans-ui" style={{ margin: '2px 0 6px', fontSize: '26px', fontWeight: 800, letterSpacing: '-0.02em' }}>
              Let&apos;s work together
            </h2>
            <p className="font-mono-ui" style={{ margin: 0, fontSize: '10px', color: '#2563eb', letterSpacing: '0.07em' }}>
              ● {availabilityLabel.toUpperCase()}
            </p>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            aria-label="Close contact modal"
            style={{
              width: '30px',
              height: '30px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <X size={15} />
          </button>
        </div>

        {/* Direct Email Pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
            backgroundColor: '#fef08a',
            border: '1.5px solid #18181b',
            padding: '10px 12px',
            marginBottom: '16px',
          }}
        >
          <span className="font-mono-ui" style={{ fontSize: '12px', fontWeight: 700 }}>
            {email}
          </span>
          <button
            type="button"
            onClick={handleCopy}
            className="font-mono-ui"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              backgroundColor: '#18181b',
              color: '#ffffff',
              border: 'none',
              padding: '5px 10px',
              fontSize: '9.5px',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            {copied ? <Check size={11} /> : <Copy size={11} />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>

        {/* Social Handles Strip */}
        <div style={{ marginBottom: '16px' }}>
          <SocialLinksGrid socials={socials} compact />
        </div>

        {submitted ? (
          <div
            style={{
              backgroundColor: '#a7f3d0',
              border: '1.5px solid #18181b',
              padding: '20px',
              textAlign: 'center',
            }}
          >
            <div className="font-pixel" style={{ fontSize: '28px', marginBottom: '6px' }}>
              SENT TO SID!
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '13.5px', color: '#14532d', lineHeight: 1.5 }}>
              Thanks{name ? `, ${name}` : ''}! Your message was sent directly to <strong>{email}</strong>.
            </p>
            <button
              type="button"
              onClick={handleResetAndClose}
              className="font-mono-ui"
              style={{
                backgroundColor: '#18181b',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              DONE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div>
              <div className="font-mono-ui" style={{ fontSize: '10px', fontWeight: 700, marginBottom: '6px' }}>
                PROJECT TYPE
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {projectTypes.map((type) => {
                  const active = projectType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      className="font-mono-ui"
                      style={{
                        padding: '5px 9px',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        border: '1.5px solid #18181b',
                        backgroundColor: active ? '#f5c52b' : '#ffffff',
                        color: '#18181b',
                        cursor: 'pointer',
                      }}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="font-mono-ui" style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}>
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Rivera"
                style={{
                  width: '100%',
                  padding: '9px 11px',
                  border: '1.5px solid #18181b',
                  backgroundColor: '#ffffff',
                  fontSize: '13.5px',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div>
              <label className="font-mono-ui" style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}>
                YOUR EMAIL *
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="alex@company.com"
                style={{
                  width: '100%',
                  padding: '9px 11px',
                  border: '1.5px solid #18181b',
                  backgroundColor: '#ffffff',
                  fontSize: '13.5px',
                  fontFamily: 'inherit',
                }}
              />
            </div>

            <div>
              <label className="font-mono-ui" style={{ display: 'block', fontSize: '10px', fontWeight: 700, marginBottom: '5px' }}>
                WHAT ARE WE MAKING? *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your idea, timeline, or links..."
                style={{
                  width: '100%',
                  padding: '9px 11px',
                  border: '1.5px solid #18181b',
                  backgroundColor: '#ffffff',
                  fontSize: '13.5px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                }}
              />
            </div>

            {errorMsg && (
              <div
                style={{
                  backgroundColor: '#fee2e2',
                  border: '1.5px solid #dc2626',
                  padding: '9px 11px',
                  fontSize: '12.5px',
                  color: '#991b1b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  flexWrap: 'wrap',
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                  <AlertCircle size={14} />
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
                    gap: '4px',
                    fontSize: '9.5px',
                    fontWeight: 700,
                    color: '#18181b',
                    backgroundColor: '#ffffff',
                    border: '1px solid #18181b',
                    padding: '4px 8px',
                    textDecoration: 'none',
                  }}
                >
                  <Mail size={11} />
                  <span>MAIL APP</span>
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={sending}
              className="font-mono-ui"
              style={{
                marginTop: '4px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: sending ? '#52525b' : '#18181b',
                color: '#ffffff',
                border: 'none',
                padding: '11px 18px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                cursor: sending ? 'wait' : 'pointer',
              }}
            >
              <Send size={13} />
              <span>{sending ? 'SENDING...' : 'SEND TO SID'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
