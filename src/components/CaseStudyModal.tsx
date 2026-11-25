import React, { useEffect } from 'react';
import { X, ArrowLeft, ArrowRight, ExternalLink, Youtube, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

interface CaseStudyModalProps {
  project: ProjectItem | null;
  projects: ProjectItem[];
  onClose: () => void;
  onSelectProject: (project: ProjectItem) => void;
  onOpenContact: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  projects,
  onClose,
  onSelectProject,
  onOpenContact,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [project, onClose]);

  if (!project) return null;

  const currentIdx = projects.findIndex((p) => p.id === project.id);
  const prevProject = projects[(currentIdx - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIdx + 1) % projects.length];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} showcase`}
      onClick={onClose}
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
          maxWidth: '760px',
          maxHeight: '88vh',
          overflowY: 'auto',
          border: '2px solid #18181b',
          boxShadow: '8px 8px 0 #18181b',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: project.cardBg,
            color: project.cardTextColor,
            padding: '26px 28px',
            borderBottom: '2px solid #18181b',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
          }}
        >
          <div>
            <div className="font-mono-ui" style={{ fontSize: '10px', letterSpacing: '0.12em', color: project.mutedTextColor, marginBottom: '8px' }}>
              ◆ {project.tabLabel} — {project.date}
            </div>
            <h2 className="font-sans-ui" style={{ margin: '0 0 8px', fontSize: '32px', fontWeight: 800, letterSpacing: '-0.025em' }}>
              {project.title}
            </h2>
            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.5, color: project.mutedTextColor, maxWidth: '540px' }}>
              {project.tagline}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#ffffff',
              color: '#18181b',
              border: '1.5px solid #18181b',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Metadata Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '14px',
            padding: '18px 28px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #e4e4e7',
          }}
        >
          <div>
            <div className="font-mono-ui" style={{ fontSize: '9px', color: '#71717a', letterSpacing: '0.1em' }}>SOURCE / CLIENT</div>
            <div style={{ fontSize: '13px', fontWeight: 700, marginTop: '3px' }}>{project.client}</div>
          </div>
          <div>
            <div className="font-mono-ui" style={{ fontSize: '9px', color: '#71717a', letterSpacing: '0.1em' }}>ROLE</div>
            <div style={{ fontSize: '13px', fontWeight: 700, marginTop: '3px' }}>{project.role}</div>
          </div>
          <div>
            <div className="font-mono-ui" style={{ fontSize: '9px', color: '#71717a', letterSpacing: '0.1em' }}>SCOPE</div>
            <div style={{ fontSize: '13px', fontWeight: 700, marginTop: '3px' }}>{project.timeline}</div>
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '26px 28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Direct YouTube CTA Banner if available */}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                backgroundColor: '#18181b',
                color: '#ffffff',
                padding: '16px 20px',
                border: '1.5px solid #18181b',
                textDecoration: 'none',
                boxShadow: '4px 4px 0 #ef4444',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Youtube size={18} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800 }}>Watch Sid&apos;s YouTube Videos</div>
                  <div className="font-mono-ui" style={{ fontSize: '10px', color: '#a1a1aa' }}>
                    {project.liveUrl}
                  </div>
                </div>
              </div>
              <span className="font-mono-ui" style={{ fontSize: '10.5px', fontWeight: 700, color: '#facc15', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <span>OPEN CHANNEL</span>
                <ExternalLink size={13} />
              </span>
            </a>
          )}

          {/* Posters Grid for Freelance Folder */}
          {project.posters && project.posters.length > 0 && (
            <div>
              <div className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.1em', marginBottom: '10px' }}>
                POSTER &amp; VISUAL GALLERY (SWAP IMAGES IN PORTFOLIODATA.TS)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px' }}>
                {project.posters.map((poster, i) => (
                  <div
                    key={poster.id}
                    style={{
                      backgroundColor: poster.bg,
                      color: poster.textColor,
                      border: '1.5px solid #18181b',
                      padding: '16px',
                      minHeight: '190px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '4px 4px 0 #18181b',
                      position: 'relative',
                    }}
                  >
                    {poster.imageUrl ? (
                      <img
                        src={poster.imageUrl}
                        alt={poster.title}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      <>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: poster.accent }} />
                          <span className="font-mono-ui" style={{ fontSize: '9px', opacity: 0.75 }}>{poster.year}</span>
                        </div>
                        <div style={{ margin: '12px 0' }}>
                          {i === 0 && (
                            <div style={{ height: '64px', border: `2px solid ${poster.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: poster.accent }} />
                            </div>
                          )}
                          {i === 1 && (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                              <div style={{ height: '18px', backgroundColor: poster.accent }} />
                              <div style={{ height: '12px', width: '72%', backgroundColor: '#ffffff', opacity: 0.85 }} />
                              <div style={{ height: '12px', width: '48%', backgroundColor: poster.accent }} />
                            </div>
                          )}
                          {i === 2 && (
                            <div style={{ height: '64px', backgroundColor: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <span className="font-pixel" style={{ color: poster.accent, fontSize: '28px' }}>SID</span>
                            </div>
                          )}
                        </div>
                        <div>
                          <div style={{ fontSize: '14px', fontWeight: 800 }}>{poster.title}</div>
                          <div className="font-mono-ui" style={{ fontSize: '9.5px', opacity: 0.75 }}>{poster.category}</div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.88)', border: '1px solid #e4e4e7', padding: '18px 20px' }}>
            <h3 className="font-mono-ui" style={{ margin: '0 0 8px', fontSize: '11px', letterSpacing: '0.1em', color: '#2563eb' }}>
              01 / ABOUT THIS WORK
            </h3>
            <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.65, color: '#27272a' }}>{project.overview}</p>
          </div>

          {/* Highlights */}
          <div style={{ backgroundColor: 'rgba(255,255,255,0.88)', border: '1px solid #e4e4e7', padding: '18px 20px' }}>
            <h3 className="font-mono-ui" style={{ margin: '0 0 10px', fontSize: '11px', letterSpacing: '0.1em', color: '#10b981' }}>
              02 / CRAFT &amp; FOCUS
            </h3>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.highlights.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', lineHeight: 1.5, color: '#27272a' }}>
                  <CheckCircle2 size={15} color="#10b981" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div>
            <div className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.1em', marginBottom: '10px' }}>
              CAPABILITIES &amp; DELIVERABLES
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.deliverables.map((item) => (
                <span
                  key={item}
                  className="font-mono-ui"
                  style={{
                    fontSize: '10.5px',
                    fontWeight: 600,
                    backgroundColor: '#fef08a',
                    border: '1px solid #18181b',
                    padding: '4px 10px',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              paddingTop: '14px',
              borderTop: '1px solid #e4e4e7',
            }}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => onSelectProject(prevProject)}
                className="font-mono-ui"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 12px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #18181b',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <ArrowLeft size={12} />
                <span>{prevProject.title.toUpperCase()}</span>
              </button>
              <button
                type="button"
                onClick={() => onSelectProject(nextProject)}
                className="font-mono-ui"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '7px 12px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #18181b',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span>{nextProject.title.toUpperCase()}</span>
                <ArrowRight size={12} />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="font-mono-ui"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                backgroundColor: '#18181b',
                color: '#ffffff',
                border: 'none',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.09em',
                cursor: 'pointer',
              }}
            >
              <span>HIRE SID FOR A PROJECT</span>
              <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
