import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PortfolioData } from '../data/portfolioData';

interface FooterProps {
  name: string;
  email: string;
  socials: PortfolioData['socials'];
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ name, email, socials, onOpenContact }) => {
  const shortLabels: Record<string, string> = {
    youtube: 'YOUTUBE',
    instagram: 'INSTAGRAM (@SIDISFIRE)',
    email: 'EMAIL',
  };

  return (
    <footer
      style={{
        borderTop: '1px solid #e6e5de',
        padding: '34px 24px 30px',
        backgroundColor: 'rgba(255, 255, 255, 0.55)',
      }}
    >
      <div
        style={{
          maxWidth: '880px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <div>
          <span className="font-hand" style={{ fontSize: '17px', color: '#52525b', display: 'block' }}>
            want to collab directly?
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenContact}
              className="font-sans-ui"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                fontSize: '21px',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#18181b',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                textDecoration: 'underline',
                textDecorationColor: '#f5c52b',
                textDecorationThickness: '3px',
                textUnderlineOffset: '5px',
              }}
            >
              <span>{email}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {socials.map((s) => (
            <a
              key={s.id}
              href={s.url}
              target={s.id === 'email' ? undefined : '_blank'}
              rel={s.id === 'email' ? undefined : 'noreferrer'}
              className="font-mono-ui"
              style={{
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.07em',
                color: '#18181b',
                textDecoration: 'none',
                padding: '5px 10px',
                backgroundColor: s.bgColor,
                border: '1px solid #18181b',
              }}
            >
              {shortLabels[s.id] || s.label.toUpperCase()}
            </a>
          ))}
          <span className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.08em' }}>
            © {new Date().getFullYear()} {name}
          </span>
        </div>
      </div>
    </footer>
  );
};
