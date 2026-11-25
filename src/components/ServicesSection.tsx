import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceCard } from '../data/portfolioData';

interface ServicesSectionProps {
  services: ServiceCard[];
  onBookService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onBookService }) => {
  return (
    <section
      id="services"
      style={{
        padding: '12px 24px 68px',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '22px',
          }}
        >
          <div>
            <span
              className="font-hand"
              style={{ fontSize: '16px', color: '#52525b', display: 'block', marginBottom: '4px' }}
            >
              how we can work together!
            </span>
            <div
              className="font-sans-ui"
              style={{
                display: 'inline-block',
                border: '1.5px solid #27272a',
                backgroundColor: '#ffffff',
                padding: '4px 14px',
                fontSize: '17px',
                fontWeight: 700,
              }}
            >
              what i do
            </div>
          </div>

          <span className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.1em' }}>
            ◆ PICK A SERVICE TO START
          </span>
        </div>

        <div className="services-grid">
          {services.map((svc, idx) => (
            <article
              key={svc.id}
              className="service-index-card"
              style={{
                position: 'relative',
                backgroundColor: '#ffffff',
                border: '1.5px solid #18181b',
                padding: '22px 20px 18px',
                boxShadow: '4px 4px 0 #18181b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: '14px',
              }}
            >
              {/* Masking tape corner */}
              <span
                className="masking-tape"
                style={{
                  top: '-9px',
                  right: idx % 2 === 0 ? '18px' : 'auto',
                  left: idx % 2 === 1 ? '18px' : 'auto',
                  transform: idx % 2 === 0 ? 'rotate(12deg)' : 'rotate(-12deg)',
                }}
              />

              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span
                    className="font-mono-ui"
                    style={{
                      backgroundColor: svc.accentColor,
                      color: svc.accentColor === '#f5c52b' ? '#18181b' : '#ffffff',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '3px 8px',
                      border: '1px solid #18181b',
                    }}
                  >
                    {svc.number}
                  </span>

                  <button
                    type="button"
                    onClick={() => onBookService(svc.title)}
                    className="font-mono-ui"
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontSize: '9.5px',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      color: '#18181b',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '3px',
                      cursor: 'pointer',
                      borderBottom: '1px solid #18181b',
                    }}
                  >
                    <span>BOOK THIS</span>
                    <ArrowUpRight size={11} />
                  </button>
                </div>

                <h3
                  className="font-sans-ui"
                  style={{ margin: '0 0 8px', fontSize: '19px', fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  {svc.title}
                </h3>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.55, color: '#52525b' }}>
                  {svc.description}
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '6px' }}>
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono-ui"
                    style={{
                      fontSize: '9.5px',
                      fontWeight: 600,
                      padding: '3px 8px',
                      backgroundColor: '#f4f4f5',
                      border: '1px solid #d4d4d8',
                      color: '#27272a',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
