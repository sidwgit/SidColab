import React, { useState } from 'react';
import { Instagram, Mail, Check, Copy, ArrowUpRight } from 'lucide-react';
import { ContactSocial } from '../data/portfolioData';

interface SocialLinksGridProps {
  socials: ContactSocial[];
  compact?: boolean;
}

export const SocialLinksGrid: React.FC<SocialLinksGridProps> = ({ socials, compact = false }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1800);
    } catch {
      // Ignore clipboard failures
    }
  };

  const renderIcon = (id: ContactSocial['id']) => {
    switch (id) {
      case 'instagram':
        return <Instagram size={13} strokeWidth={2.3} />;
      case 'email':
        return <Mail size={13} strokeWidth={2.3} />;
      case 'discord':
        return (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.32 4.37a19.8 19.8 0 0 0-4.89-1.52.07.07 0 0 0-.08.04c-.21.38-.45.87-.61 1.25a18.27 18.27 0 0 0-5.48 0c-.17-.39-.41-.87-.62-1.25a.08.08 0 0 0-.08-.04A19.74 19.74 0 0 0 3.67 4.37a.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 5.99 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.22-2a.08.08 0 0 0-.04-.11 13.1 13.1 0 0 1-1.87-.89.08.08 0 0 1-.01-.13c.13-.09.25-.19.37-.29a.08.08 0 0 1 .08-.01c3.93 1.79 8.18 1.79 12.06 0a.08.08 0 0 1 .08.01c.12.1.24.2.37.29a.08.08 0 0 1-.01.13c-.6.35-1.22.65-1.87.89a.08.08 0 0 0-.04.11c.36.7.77 1.37 1.22 2a.08.08 0 0 0 .08.03 19.83 19.83 0 0 0 6-3.03.08.08 0 0 0 .03-.06c.5-5.18-.84-9.67-3.55-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.95 2.42-2.16 2.42Z" />
          </svg>
        );
      case 'twitter':
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        );
      case 'twitch':
        return (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.001 2.39-1.542h3.658L21 14.539V3H4.265Zm15.05 10.691-2.813 2.814h-4.501l-2.391 1.542v-1.542H5.813V4.688h13.502v9.003Zm-3.657-5.908v4.782h-1.688V7.783h1.688Zm-4.5 0v4.782H9.47V7.783h1.688Z" />
          </svg>
        );
    }
  };

  return (
    <div>
      <div
        className="font-mono-ui"
        style={{
          fontSize: '9.5px',
          fontWeight: 700,
          letterSpacing: '0.09em',
          color: '#52525b',
          marginBottom: '7px',
        }}
      >
        SOCIALS &amp; DIRECT LINKS
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: compact ? '6px' : '8px',
        }}
      >
        {socials.map((item) => {
          const isCopied = copiedId === item.id;
          const commonStyle: React.CSSProperties = {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: compact ? '6px 9px' : '7px 11px',
            backgroundColor: item.bgColor,
            color: '#18181b',
            border: '1.5px solid #18181b',
            boxShadow: '2px 2px 0 #18181b',
            textDecoration: 'none',
            fontSize: compact ? '10px' : '10.5px',
            fontWeight: 700,
            cursor: 'pointer',
          };

          if (!item.url) {
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleCopy(item.id, item.handle)}
                title={`Copy ${item.label}: ${item.handle}`}
                className="font-mono-ui"
                style={commonStyle}
              >
                {renderIcon(item.id)}
                <span>{item.label}: {isCopied ? 'COPIED!' : item.handle}</span>
                {isCopied ? <Check size={11} /> : <Copy size={11} />}
              </button>
            );
          }

          return (
            <a
              key={item.id}
              href={item.url}
              target={item.id === 'email' ? undefined : '_blank'}
              rel={item.id === 'email' ? undefined : 'noreferrer'}
              title={`${item.label}: ${item.handle}`}
              className="font-mono-ui"
              style={commonStyle}
            >
              {renderIcon(item.id)}
              <span>{item.label}: {item.handle}</span>
              <ArrowUpRight size={11} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
