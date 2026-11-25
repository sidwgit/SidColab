import React from 'react';
import { PenTool, Film, Sparkles, Compass } from 'lucide-react';
import { PortfolioData, SkillStamp, PolaroidItem } from '../data/portfolioData';

interface AboutSectionProps {
  data: PortfolioData['about'];
}

export const AboutSection: React.FC<AboutSectionProps> = ({ data }) => {
  const renderStampIcon = (stamp: SkillStamp) => {
    switch (stamp.icon) {
      case 'pen':
        return <PenTool size={18} strokeWidth={2.2} color={stamp.textColor} />;
      case 'film':
        return <Film size={18} strokeWidth={2.2} color={stamp.textColor} />;
      case 'sparkles':
        return <Sparkles size={18} strokeWidth={2.2} color={stamp.textColor} />;
      case 'compass':
        return <Compass size={18} strokeWidth={2.2} color={stamp.textColor} />;
    }
  };

  const renderPolaroidArt = (item: PolaroidItem) => {
    if (item.imageUrl) {
      return (
        <img
          src={item.imageUrl}
          alt={item.caption}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      );
    }

    if (item.variant === 'portrait') {
      return (
        <svg viewBox="0 0 180 200" width="100%" height="100%" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="pSky" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="55%" stopColor="#cbd5e1" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
          </defs>
          <rect width="180" height="200" fill="url(#pSky)" />
          <path d="M0 160 Q45 130 95 150 T180 142 L180 200 L0 200 Z" fill="#64748b" opacity="0.35" />
          <path d="M36 200 C36 142, 144 142, 144 200 Z" fill="#1e293b" />
          <path d="M58 200 L86 142 L94 142 L116 200 Z" fill="#0f766e" />
          <path d="M78 145 L102 145 L95 162 L85 162 Z" fill="#ea580c" />
          <rect x="78" y="114" width="22" height="24" rx="8" fill="#eab696" />
          <circle cx="88" cy="92" r="26" fill="#f1c2a0" />
          <path d="M62 84 C64 60, 114 60, 116 84 Z" fill="#eab308" />
          <path d="M52 84 L112 81 L110 89 L52 89 Z" fill="#ca8a04" />
          <path d="M98 88 C108 92, 114 102, 108 112 L96 106 Z" fill="#292524" />
          <circle cx="77" cy="94" r="2.2" fill="#18181b" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 180 180" width="100%" height="100%" style={{ display: 'block' }}>
        <rect width="180" height="180" fill="#1c1917" />
        {/* Posters above edit desk */}
        <rect x="20" y="18" width="32" height="42" rx="2" fill="#ea580c" />
        <circle cx="36" cy="34" r="8" fill="#fef08a" />
        <rect x="62" y="18" width="32" height="42" rx="2" fill="#2563eb" />
        <rect x="68" y="28" width="20" height="14" fill="#93c5fd" />
        <rect x="104" y="18" width="32" height="42" rx="2" fill="#f5c52b" />
        <path d="M110 48 L120 28 L130 48 Z" fill="#18181b" />
        {/* Warm ambient bar */}
        <rect x="28" y="74" width="124" height="6" rx="3" fill="#f97316" opacity="0.6" />
        {/* Editing timeline monitor */}
        <rect x="38" y="84" width="104" height="56" rx="4" fill="#09090b" stroke="#3f3f46" strokeWidth="3" />
        <rect x="46" y="91" width="88" height="22" rx="2" fill="#1e293b" />
        {/* Timeline tracks */}
        <rect x="46" y="117" width="40" height="5" rx="1.5" fill="#ec4899" />
        <rect x="89" y="117" width="45" height="5" rx="1.5" fill="#2563eb" />
        <rect x="46" y="125" width="64" height="5" rx="1.5" fill="#10b981" />
        <rect x="113" y="125" width="21" height="5" rx="1.5" fill="#facc15" />
        {/* Desk */}
        <rect x="12" y="146" width="156" height="34" fill="#44403c" />
        <rect x="68" y="148" width="44" height="8" rx="2" fill="#d6d3d1" />
        <circle cx="146" cy="134" r="10" fill="#10b981" />
      </svg>
    );
  };

  const renderSkillRow = (skills: SkillStamp[]) => (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '16px',
      }}
    >
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="stamp-group"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', cursor: 'default' }}
        >
          <span
            className="stamp-ticket font-sans-ui"
            style={{
              backgroundColor: skill.color,
              color: skill.textColor,
            }}
          >
            {skill.label}
          </span>
          <span
            className="stamp-square"
            aria-hidden="true"
            style={{
              backgroundColor: skill.color,
              color: skill.textColor,
            }}
          >
            {renderStampIcon(skill)}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '12px 24px 86px',
      }}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 1000 32"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '28px', display: 'block' }}
      >
        <path
          d="M0 24 Q500 -4 1000 24"
          fill="none"
          stroke="#d6d5ce"
          strokeWidth="1.2"
        />
      </svg>

      <div style={{ maxWidth: '860px', margin: '8px auto 12px', paddingLeft: '16px' }}>
        <span
          className="font-hand"
          style={{
            fontSize: '16px',
            color: '#52525b',
            display: 'inline-block',
            transform: 'rotate(-2deg)',
          }}
        >
          {data.handwrittenLabel}
        </span>
      </div>

      <div className="about-grid">
        {data.polaroids[0] && (
          <div className="polaroid-left-wrap">
            <div
              className="polaroid-card"
              style={{
                transform: `rotate(${data.polaroids[0].tilt})`,
              }}
            >
              <span className="masking-tape" style={{ top: '-8px', left: '10px', transform: 'rotate(-24deg)' }} />
              <span className="masking-tape" style={{ top: '-8px', right: '10px', transform: 'rotate(24deg)' }} />
              <div className="polaroid-photo">{renderPolaroidArt(data.polaroids[0])}</div>
              <div className="font-hand polaroid-caption">{data.polaroids[0].caption}</div>
            </div>
          </div>
        )}

        <div style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto' }}>
          <div
            className="font-sans-ui"
            style={{
              display: 'inline-block',
              border: '1.5px solid #27272a',
              backgroundColor: '#ffffff',
              padding: '5px 16px',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '22px',
              boxShadow: '0 2px 0 rgba(24, 24, 27, 0.08)',
            }}
          >
            {data.boxTitle}
          </div>

          <p
            className="font-hand"
            style={{
              margin: '0 auto 30px',
              fontSize: 'clamp(19px, 2.3vw, 23px)',
              lineHeight: 1.52,
              color: '#1f2937',
              letterSpacing: '0.01em',
            }}
          >
            {data.bioParagraph}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            {renderSkillRow(data.skillsRow1)}
            {renderSkillRow(data.skillsRow2)}
          </div>
        </div>

        {data.polaroids[1] && (
          <div className="polaroid-right-wrap">
            <div
              className="polaroid-card"
              style={{
                transform: `rotate(${data.polaroids[1].tilt})`,
              }}
            >
              <span className="masking-tape" style={{ top: '-8px', left: '8px', transform: 'rotate(-26deg)' }} />
              <span className="masking-tape" style={{ top: '-8px', right: '8px', transform: 'rotate(22deg)' }} />
              <div className="polaroid-photo" style={{ aspectRatio: '1 / 1' }}>
                {renderPolaroidArt(data.polaroids[1])}
              </div>
              <div className="font-hand polaroid-caption">{data.polaroids[1].caption}</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
