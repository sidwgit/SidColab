import React from 'react';
import { PortfolioData } from '../data/portfolioData';

interface HeroSectionProps {
  data: PortfolioData['hero'];
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ data, onOpenContact }) => {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        padding: '44px 24px 68px',
        textAlign: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Top floating pills & "my name is" row */}
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto 14px',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '12px',
          padding: '0 8px',
        }}
      >
        <span
          className="font-mono-ui"
          style={{
            display: 'inline-block',
            backgroundColor: '#a7f3d0',
            color: '#14532d',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.09em',
            padding: '5px 12px',
            borderRadius: '999px',
            transform: 'rotate(-2deg)',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
          }}
        >
          {data.leftPill}
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span
            className="font-hand"
            style={{
              fontSize: '18px',
              color: '#3f3f46',
              lineHeight: 1.1,
            }}
          >
            {data.eyebrowHandwritten}
          </span>
          {/* Hand-drawn double underline */}
          <svg width="64" height="10" viewBox="0 0 64 10" fill="none" aria-hidden="true">
            <path d="M6 4C22 2.5 42 2.5 58 4.2" stroke="#52525b" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 7.5C26 6.5 40 6.5 52 7.8" stroke="#71717a" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>

        <span
          className="font-mono-ui"
          style={{
            display: 'inline-block',
            backgroundColor: '#fef08a',
            color: '#713f12',
            fontSize: '9px',
            fontWeight: 700,
            letterSpacing: '0.09em',
            padding: '5px 12px',
            borderRadius: '999px',
            transform: 'rotate(2deg)',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
          }}
        >
          {data.rightPill}
        </span>
      </div>

      {/* Centerpiece Name Box + Side Annotations */}
      <div
        style={{
          position: 'relative',
          maxWidth: '560px',
          margin: '0 auto 38px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Hand-drawn Coral Border Box */}
        <div
          style={{
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 38px',
          }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 320 116"
            preserveAspectRatio="none"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
            }}
          >
            <path
              d="M6 9 C90 4, 230 5, 314 8 C316 42, 315 76, 313 108 C225 112, 92 110, 7 109 C4 74, 5 40, 6 9 Z"
              fill="rgba(255, 255, 255, 0.55)"
              stroke="#ea6a47"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <h1
            className="font-pixel"
            style={{
              margin: 0,
              position: 'relative',
              fontSize: 'clamp(64px, 9vw, 94px)',
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: '0.04em',
              color: '#141416',
              userSelect: 'none',
            }}
          >
            {data.name}
          </h1>
        </div>

        {/* Sticky Tags + Arrows + Status Row */}
        <div
          className="hero-annotations-row"
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '10px',
            gap: '12px',
          }}
        >
          {/* Left Sticky Tag + Arrow */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <span
              className="font-hand"
              style={{
                backgroundColor: '#f5c52b',
                color: '#18181b',
                fontSize: '13.5px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '2px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.09)',
                transform: 'rotate(-1.5deg)',
                whiteSpace: 'nowrap',
              }}
            >
              {data.roleTag}
            </span>
            <svg
              aria-hidden="true"
              width="38"
              height="26"
              viewBox="0 0 38 26"
              fill="none"
              className="hero-arrow"
              style={{ marginTop: '-22px', marginLeft: '-2px' }}
            >
              <path
                d="M3 20 C16 20, 26 14, 33 4"
                stroke="#3f3f46"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M27 5 L34 3.5 L34 10.5"
                stroke="#3f3f46"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Center Status */}
          <div
            className="font-mono-ui"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.13em',
              color: '#52525b',
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: '#2563eb',
                display: 'inline-block',
                flexShrink: 0,
              }}
            />
            <span>{data.statusText}</span>
          </div>

          {/* Right Sticky Tag + Arrow */}
          <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
            <svg
              aria-hidden="true"
              width="38"
              height="26"
              viewBox="0 0 38 26"
              fill="none"
              className="hero-arrow"
              style={{ marginTop: '-22px', marginRight: '-2px' }}
            >
              <path
                d="M35 20 C22 20, 12 14, 5 4"
                stroke="#3f3f46"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
              <path
                d="M11 5 L4 3.5 L4 10.5"
                stroke="#3f3f46"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="font-hand"
              style={{
                backgroundColor: '#a7f3d0',
                color: '#14532d',
                fontSize: '13.5px',
                fontWeight: 600,
                padding: '4px 12px',
                borderRadius: '2px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.09)',
                transform: 'rotate(1.5deg)',
                whiteSpace: 'nowrap',
              }}
            >
              {data.locationTag}
            </span>
          </div>
        </div>
      </div>

      {/* Floating Circular Avatar Stickers */}
      <div
        className="hero-sticker-left float-sticker"
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: '10%',
          top: '55%',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: '2px solid #ea6a47',
          backgroundColor: '#ffffff',
          padding: '2px',
          boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
          overflow: 'hidden',
        }}
      >
        <svg viewBox="0 0 64 64" width="100%" height="100%" style={{ borderRadius: '50%' }}>
          <defs>
            <linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93c5fd" />
              <stop offset="100%" stopColor="#dbeafe" />
            </linearGradient>
          </defs>
          <rect width="64" height="64" fill="url(#sky1)" />
          <path d="M0 48 Q20 38 38 45 T64 44 L64 64 L0 64 Z" fill="#1e3a5f" />
          <circle cx="32" cy="28" r="10" fill="#f3c6a5" />
          <path d="M22 25 Q32 14 42 25 L41 20 Q32 12 23 20 Z" fill="#3b2f2f" />
          <path d="M18 60 C18 44, 46 44, 46 60 Z" fill="#0f766e" />
        </svg>
      </div>

      <div
        className="hero-sticker-right float-sticker"
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: '11%',
          top: '61%',
          width: '46px',
          height: '46px',
          borderRadius: '50%',
          border: '2px solid #ea6a47',
          backgroundColor: '#ffffff',
          padding: '2px',
          boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
          animationDelay: '1.4s',
          overflow: 'hidden',
        }}
      >
        <svg viewBox="0 0 64 64" width="100%" height="100%" style={{ borderRadius: '50%' }}>
          <rect width="64" height="64" fill="#d6d3d1" />
          <path d="M0 44 L64 38 L64 64 L0 64 Z" fill="#57534e" />
          <circle cx="32" cy="29" r="9.5" fill="#eab696" />
          <path d="M21 24 Q32 16 44 24 L47 26 L20 26 Z" fill="#ca8a04" />
          <path d="M17 62 C17 44, 47 44, 47 62 Z" fill="#1f2937" />
        </svg>
      </div>

      {/* Main Value Proposition Headline */}
      <h2
        className="font-sans-ui"
        style={{
          maxWidth: '580px',
          margin: '0 auto 28px',
          fontSize: 'clamp(25px, 3.6vw, 37px)',
          fontWeight: 800,
          lineHeight: 1.24,
          letterSpacing: '-0.025em',
          color: '#18181b',
        }}
      >
        <span>{data.headlineLine1} </span>
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            verticalAlign: 'middle',
            marginLeft: '4px',
            marginTop: '-4px',
          }}
        >
          {/* Green target bullseye icon */}
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="12" fill="#10b981" />
            <circle cx="14" cy="14" r="7.5" fill="#ffffff" />
            <circle cx="14" cy="14" r="4" fill="#10b981" />
          </svg>
        </span>
        <br />
        <span>{data.headlineLine2} </span>
        <span
          aria-hidden="true"
          style={{
            display: 'inline-flex',
            verticalAlign: 'middle',
            marginLeft: '4px',
            marginTop: '-4px',
          }}
        >
          {/* Pink 8-petal flower icon */}
          <svg width="26" height="26" viewBox="0 0 28 28" fill="none">
            <g fill="#f472b6">
              <circle cx="14" cy="5.5" r="3.4" />
              <circle cx="14" cy="22.5" r="3.4" />
              <circle cx="5.5" cy="14" r="3.4" />
              <circle cx="22.5" cy="14" r="3.4" />
              <circle cx="8" cy="8" r="3.2" />
              <circle cx="20" cy="8" r="3.2" />
              <circle cx="8" cy="20" r="3.2" />
              <circle cx="20" cy="20" r="3.2" />
            </g>
            <circle cx="14" cy="14" r="4" fill="#fef08a" />
          </svg>
        </span>
      </h2>

      {/* CTA Button */}
      <button
        type="button"
        onClick={onOpenContact}
        className="font-mono-ui cta-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: '#18181b',
          color: '#ffffff',
          border: 'none',
          borderRadius: '2px',
          padding: '10px 20px 10px 12px',
          fontSize: '10.5px',
          fontWeight: 700,
          letterSpacing: '0.13em',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(24, 24, 27, 0.16)',
          transition: 'transform 140ms ease, box-shadow 140ms ease',
        }}
      >
        <span
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: '#2563eb',
            borderRadius: '2px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.6">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
        <span>{data.ctaLabel}</span>
      </button>
    </section>
  );
};
