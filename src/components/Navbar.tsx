import React, { useState } from 'react';
import {
  Star,
  User,
  Briefcase,
  LayoutGrid,
  Diamond,
  Heart,
  Menu,
  X,
  Youtube,
  Instagram,
  Mail,
} from 'lucide-react';
import { SocialLink } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  scrollProgress: number;
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  socials: SocialLink[];
}

const navItems = [
  { id: 'home', label: 'HOME', icon: Star },
  { id: 'about', label: 'ABOUT', icon: User },
  { id: 'services', label: 'SERVICES', icon: Briefcase },
  { id: 'case-study', label: 'PROJECTS', icon: LayoutGrid },
  { id: 'playground', label: 'PLAYGROUND', icon: Diamond },
];

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  scrollProgress,
  onNavigate,
  onOpenContact,
  socials,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderSocialIcon = (id: SocialLink['id']) => {
    switch (id) {
      case 'youtube':
        return <Youtube size={13} strokeWidth={2.3} />;
      case 'instagram':
        return <Instagram size={12} strokeWidth={2.4} />;
      case 'email':
        return <Mail size={12} strokeWidth={2.4} />;
      default:
        return null;
    }
  };

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backgroundColor: 'rgba(253, 253, 251, 0.94)',
        backdropFilter: 'blur(8px)',
        borderBottom: '1px solid #e6e5de',
      }}
    >
      {/* Top Scroll Progress Bar */}
      <div style={{ height: '3px', width: '100%', backgroundColor: '#ecebe4', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${Math.min(100, Math.max(0, scrollProgress))}%`,
            background: 'linear-gradient(90deg, #f5c52b 0%, #ec4899 55%, #2563eb 100%)',
            transition: 'width 80ms linear',
          }}
        />
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            aria-label="Scroll to top"
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              backgroundColor: '#ec4899',
              border: 'none',
              color: '#ffffff',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: '0 1px 2px rgba(236, 72, 153, 0.3)',
            }}
          >
            <span className="font-pixel" style={{ fontSize: '14px', lineHeight: 1 }}>S</span>
          </button>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className="font-mono-ui"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '6px 9px',
                    borderRadius: '2px',
                    border: 'none',
                    backgroundColor: isActive ? '#f5c52b' : 'transparent',
                    color: '#18181b',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    cursor: 'pointer',
                    transition: 'background-color 150ms ease, transform 150ms ease',
                  }}
                >
                  <Icon
                    size={11}
                    strokeWidth={2.3}
                    fill={isActive && item.id === 'home' ? '#18181b' : 'none'}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="desktop-socials" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target={social.id === 'email' ? undefined : '_blank'}
                rel={social.id === 'email' ? undefined : 'noreferrer'}
                aria-label={social.label}
                title={social.label}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: social.bgColor,
                  color: '#18181b',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  transition: 'transform 150ms ease',
                }}
              >
                {renderSocialIcon(social.id)}
              </a>
            ))}
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="font-mono-ui"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              borderRadius: '2px',
              color: '#18181b',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.07em',
              cursor: 'pointer',
              boxShadow: '2px 2px 0px #18181b',
              transition: 'transform 120ms ease, box-shadow 120ms ease',
            }}
          >
            <Heart size={11} strokeWidth={2.3} fill="#18181b" />
            <span>CONTACT</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            style={{
              padding: '6px',
              background: 'transparent',
              border: '1px solid #d4d4d8',
              borderRadius: '4px',
              cursor: 'pointer',
              color: '#18181b',
            }}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="mobile-nav-drawer"
          style={{
            padding: '10px 20px 14px',
            borderTop: '1px solid #ecebe4',
            backgroundColor: '#fdfdfb',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className="font-mono-ui"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: '2px',
                  border: 'none',
                  backgroundColor: isActive ? '#f5c52b' : 'transparent',
                  color: '#18181b',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
              >
                <Icon size={13} strokeWidth={2.2} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
