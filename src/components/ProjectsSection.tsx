import React from 'react';
import { ArrowUpRight, Play, Youtube, FolderOpen } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';

import { CategoryFilter } from './FreelancePage';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  freelanceCount: number;
  thumbnailCount: number;
  onSelectProject: (project: ProjectItem) => void;
  onOpenFreelanceFolder: (initialFilter?: CategoryFilter) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  freelanceCount,
  thumbnailCount,
  onSelectProject,
  onOpenFreelanceFolder,
}) => {
  const renderProjectMockup = (project: ProjectItem) => {
    if (project.mockupType === 'youtube') {
      return (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '245px',
            backgroundColor: '#111113',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.22), transparent 55%)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#ffffff',
          }}
        >
          {/* Channel Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: '#ef4444',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Youtube size={15} color="#ffffff" />
              </div>
              <div>
                <div style={{ fontSize: '11.5px', fontWeight: 700, lineHeight: 1.1 }}>@sidiswired</div>
                <div className="font-mono-ui" style={{ fontSize: '8.5px', color: '#a1a1aa' }}>
                  YOUTUBE CHANNEL
                </div>
              </div>
            </div>
            <span
              className="font-mono-ui"
              style={{
                backgroundColor: '#ef4444',
                color: '#ffffff',
                fontSize: '8.5px',
                fontWeight: 700,
                padding: '4px 8px',
                borderRadius: '2px',
              }}
            >
              WATCH VIDEOS
            </span>
          </div>

          {/* Center Video Frame Mockup */}
          <div
            style={{
              backgroundColor: '#1c1c20',
              border: '1px solid #2e2e36',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="font-mono-ui" style={{ fontSize: '8.5px', color: '#facc15', marginBottom: '4px' }}>
                FEATURED REEL &amp; EDITS
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1.25 }}>
                Motion Graphics, Storytelling &amp; Visual Cuts
              </div>
              <div style={{ fontSize: '10.5px', color: '#a1a1aa', marginTop: '4px' }}>
                youtube.com/@sidiswired
              </div>
            </div>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#facc15',
                color: '#18181b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(250, 204, 21, 0.35)',
              }}
            >
              <Play size={18} fill="#18181b" />
            </div>
          </div>

          {/* Bottom Premiere / After Effects Style Timeline Strip */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ height: '7px', flex: 2, backgroundColor: '#2563eb', borderRadius: '2px' }} />
              <div style={{ height: '7px', flex: 1.4, backgroundColor: '#ec4899', borderRadius: '2px' }} />
              <div style={{ height: '7px', flex: 2.2, backgroundColor: '#10b981', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ height: '6px', flex: 1.2, backgroundColor: '#facc15', borderRadius: '2px' }} />
              <div style={{ height: '6px', flex: 3, backgroundColor: '#3f3f46', borderRadius: '2px' }} />
              <div style={{ height: '6px', flex: 1, backgroundColor: '#facc15', borderRadius: '2px' }} />
            </div>
          </div>
        </div>
      );
    }

    if (project.mockupType === 'twitch') {
      return (
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '245px',
            backgroundColor: '#120f1a',
            backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(145, 70, 255, 0.32), transparent 58%)',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            color: '#ffffff',
          }}
        >
          {/* Channel Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '6px',
                  backgroundColor: '#9146FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
                  <path d="M4.265 3 3 6.236v13.223h4.502V21l2.531.001 2.39-1.542h3.658L21 14.539V3H4.265Zm15.05 10.691-2.813 2.814h-4.501l-2.391 1.542v-1.542H5.813V4.688h13.502v9.003Zm-3.657-5.908v4.782h-1.688V7.783h1.688Zm-4.5 0v4.782H9.47V7.783h1.688Z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '11.5px', fontWeight: 700, lineHeight: 1.1 }}>sidisfire</div>
                <div className="font-mono-ui" style={{ fontSize: '8.5px', color: '#c4b5fd' }}>
                  TWITCH CHANNEL
                </div>
              </div>
            </div>
            <span
              className="font-mono-ui"
              style={{
                backgroundColor: '#9146FF',
                color: '#ffffff',
                fontSize: '8.5px',
                fontWeight: 700,
                padding: '4px 8px',
                borderRadius: '2px',
              }}
            >
              LIVE &amp; VODS
            </span>
          </div>

          {/* Center Stream Card Mockup */}
          <div
            style={{
              backgroundColor: '#1b1626',
              border: '1px solid #3b2d59',
              borderRadius: '8px',
              padding: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
            }}
          >
            <div style={{ flex: 1 }}>
              <div className="font-mono-ui" style={{ fontSize: '8.5px', color: '#facc15', marginBottom: '4px' }}>
                CREATIVE &amp; GAMING STREAMS
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, lineHeight: 1.25 }}>
                Gaming, Live Design Sessions &amp; Chill Hangouts
              </div>
              <div style={{ fontSize: '10.5px', color: '#c4b5fd', marginTop: '4px' }}>
                twitch.tv/sidisfire
              </div>
            </div>
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#9146FF',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow: '0 4px 12px rgba(145, 70, 255, 0.4)',
              }}
            >
              <Play size={18} fill="#ffffff" />
            </div>
          </div>

          {/* Stream Category Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {['GAMING', 'GRAPHIC DESIGN', 'EDIT BREAKDOWNS'].map((tag) => (
              <span
                key={tag}
                className="font-mono-ui"
                style={{
                  fontSize: '8px',
                  fontWeight: 700,
                  padding: '4px 8px',
                  backgroundColor: '#241d33',
                  border: '1px solid #4c3b6e',
                  color: '#ede9fe',
                  borderRadius: '2px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      );
    }

    // Project 2: Freelance Folder Graphic Design & Posters Collage
    const posters = project.posters || [];
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '245px',
          backgroundColor: '#27272a',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#facc15' }}>
            <FolderOpen size={14} />
            <span className="font-mono-ui" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.1em' }}>
              /FREELANCE/POSTERS
            </span>
          </div>
          <span className="font-mono-ui" style={{ fontSize: '8.5px', color: '#a1a1aa' }}>
            {freelanceCount} PIECES
          </span>
        </div>

        {/* 3 Mini Poster Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', alignItems: 'stretch', height: '175px' }}>
          {posters.map((poster, i) => (
            <div
              key={poster.id}
              style={{
                backgroundColor: poster.bg,
                color: poster.textColor,
                border: '1.5px solid rgba(255,255,255,0.2)',
                padding: '10px 8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transform: i === 0 ? 'rotate(-1.5deg)' : i === 2 ? 'rotate(1.5deg)' : 'none',
                boxShadow: '0 6px 14px rgba(0,0,0,0.3)',
                overflow: 'hidden',
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
                    <span
                      style={{
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        backgroundColor: poster.accent,
                        display: 'inline-block',
                      }}
                    />
                    <span className="font-mono-ui" style={{ fontSize: '7px', opacity: 0.7 }}>
                      {poster.year}
                    </span>
                  </div>

                  {/* Abstract Graphic Poster Composition */}
                  <div style={{ margin: '6px 0' }}>
                    {i === 0 && (
                      <div style={{ height: '48px', border: `2px solid ${poster.accent}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: poster.accent }} />
                      </div>
                    )}
                    {i === 1 && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <div style={{ height: '14px', backgroundColor: poster.accent }} />
                        <div style={{ height: '10px', width: '70%', backgroundColor: '#ffffff', opacity: 0.85 }} />
                        <div style={{ height: '10px', width: '45%', backgroundColor: poster.accent }} />
                      </div>
                    )}
                    {i === 2 && (
                      <div style={{ height: '48px', backgroundColor: '#18181b', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span className="font-pixel" style={{ color: poster.accent, fontSize: '20px' }}>SID</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <div className="font-sans-ui" style={{ fontSize: '9.5px', fontWeight: 800, lineHeight: 1.15 }}>
                      {poster.title}
                    </div>
                    <div className="font-mono-ui" style={{ fontSize: '7px', opacity: 0.72, marginTop: '2px' }}>
                      {poster.category}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];

  return (
    <section
      id="case-study"
      style={{
        padding: '12px 24px 64px',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        {/* Top Tab for Project 01 */}
        {p1 && (
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <button
              type="button"
              onClick={() => onSelectProject(p1)}
              className="folder-tab-left font-mono-ui"
              style={{
                backgroundColor: p1.cardBg,
                color: p1.cardTextColor,
                border: 'none',
                padding: '10px 36px 10px 20px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#2563eb', display: 'inline-block' }} />
              <span>{p1.tabLabel}</span>
            </button>
          </div>
        )}

        {/* Project 01 Dark Folder — YouTube (@sidiswired) */}
        {p1 && (
          <div
            style={{
              backgroundColor: p1.cardBg,
              color: p1.cardTextColor,
              padding: '36px 34px 56px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 -2px 10px rgba(0,0,0,0.08)',
            }}
          >
            <div className="folder-card-grid">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                <div>
                  <div className="font-mono-ui" style={{ fontSize: '10px', letterSpacing: '0.12em', color: p1.mutedTextColor, marginBottom: '14px' }}>
                    ◆ {p1.date}
                  </div>
                  <h3 className="font-sans-ui" style={{ margin: '0 0 10px', fontSize: '36px', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                    {p1.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.55, color: p1.mutedTextColor, maxWidth: '320px' }}>
                    {p1.tagline}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                  {p1.liveUrl && (
                    <a
                      href={p1.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono-ui view-project-btn"
                      style={{
                        borderBottom: `1.5px solid #facc15`,
                        color: '#facc15',
                        padding: '0 0 4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        textDecoration: 'none',
                      }}
                    >
                      <span>{p1.liveCtaLabel || 'OPEN YOUTUBE'}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => onSelectProject(p1)}
                    className="font-mono-ui view-project-btn"
                    style={{
                      background: 'none',
                      border: 'none',
                      borderBottom: `1.5px solid ${p1.cardTextColor}`,
                      color: p1.cardTextColor,
                      padding: '0 0 4px',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    <span>PROJECT DETAILS</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>

              <div
                className="taped-preview-wrap"
                onClick={() => onSelectProject(p1)}
                onKeyDown={(e) => e.key === 'Enter' && onSelectProject(p1)}
                role="button"
                tabIndex={0}
              >
                <span className="masking-tape masking-tape-dark" style={{ top: '-8px', left: '-12px', transform: 'rotate(-36deg)' }} />
                <span className="masking-tape masking-tape-dark" style={{ top: '-8px', right: '-12px', transform: 'rotate(36deg)' }} />
                <div className="taped-preview-frame">{renderProjectMockup(p1)}</div>
              </div>
            </div>
          </div>
        )}

        {/* Project 02 Yellow Freelance Folder — Graphic Design & Posters */}
        {p2 && (
          <div style={{ position: 'relative', zIndex: 3, marginTop: '-28px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingRight: '40px' }}>
              <button
                type="button"
                onClick={() => onOpenFreelanceFolder('All')}
                className="folder-tab-both font-mono-ui"
                style={{
                  backgroundColor: p2.tabColor,
                  color: p2.tabTextColor,
                  border: 'none',
                  padding: '10px 38px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <span style={{ fontSize: '8px' }}>◆</span>
                <span>{p2.tabLabel}</span>
              </button>
            </div>

            <div
              style={{
                backgroundColor: p2.cardBg,
                color: p2.cardTextColor,
                padding: '36px 34px 58px',
                boxShadow: '0 -4px 14px rgba(0,0,0,0.12)',
              }}
            >
              <div className="folder-card-grid">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                  <div>
                    <div className="font-mono-ui" style={{ fontSize: '10px', letterSpacing: '0.12em', color: p2.mutedTextColor, marginBottom: '14px' }}>
                      ◆ {p2.date}
                    </div>
                    <h3 className="font-sans-ui" style={{ margin: '0 0 10px', fontSize: '36px', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                      {p2.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.55, color: p2.mutedTextColor, maxWidth: '320px' }}>
                      {p2.tagline}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={() => onOpenFreelanceFolder('All')}
                      className="font-mono-ui view-project-btn"
                      style={{
                        background: 'none',
                        border: 'none',
                        borderBottom: `1.5px solid ${p2.cardTextColor}`,
                        color: p2.cardTextColor,
                        padding: '0 0 4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      <span>OPEN FREELANCE FOLDER ({freelanceCount})</span>
                      <ArrowUpRight size={13} />
                    </button>

                    <button
                      type="button"
                      onClick={() => onOpenFreelanceFolder('Thumbnails')}
                      className="font-mono-ui view-project-btn"
                      style={{
                        backgroundColor: '#18181b',
                        border: 'none',
                        color: '#a7f3d0',
                        padding: '5px 10px',
                        fontSize: '9.5px',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                      }}
                    >
                      <span>THUMBNAILS ({thumbnailCount})</span>
                      <ArrowUpRight size={12} />
                    </button>
                  </div>
                </div>

                <div
                  className="taped-preview-wrap"
                  onClick={() => onOpenFreelanceFolder('All')}
                  onKeyDown={(e) => e.key === 'Enter' && onOpenFreelanceFolder('All')}
                  role="button"
                  tabIndex={0}
                >
                  <span className="masking-tape" style={{ top: '-8px', left: '-12px', transform: 'rotate(-36deg)' }} />
                  <span className="masking-tape" style={{ top: '-8px', right: '-12px', transform: 'rotate(36deg)' }} />
                  <div className="taped-preview-frame">{renderProjectMockup(p2)}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project 03 Twitch Purple Folder — Live Streams */}
        {p3 && (
          <div style={{ position: 'relative', zIndex: 4, marginTop: '-28px' }}>
            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '56px' }}>
              <button
                type="button"
                onClick={() => onSelectProject(p3)}
                className="folder-tab-both font-mono-ui"
                style={{
                  backgroundColor: p3.tabColor,
                  color: p3.tabTextColor,
                  border: 'none',
                  padding: '10px 38px',
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
              >
                <span style={{ fontSize: '8px' }}>◆</span>
                <span>{p3.tabLabel}</span>
              </button>
            </div>

            <div
              style={{
                backgroundColor: p3.cardBg,
                color: p3.cardTextColor,
                padding: '36px 34px 44px',
                boxShadow: '0 -4px 14px rgba(0,0,0,0.16)',
              }}
            >
              <div className="folder-card-grid">
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '20px' }}>
                  <div>
                    <div className="font-mono-ui" style={{ fontSize: '10px', letterSpacing: '0.12em', color: p3.mutedTextColor, marginBottom: '14px' }}>
                      ◆ {p3.date}
                    </div>
                    <h3 className="font-sans-ui" style={{ margin: '0 0 10px', fontSize: '36px', fontWeight: 800, letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                      {p3.title}
                    </h3>
                    <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.55, color: p3.mutedTextColor, maxWidth: '320px' }}>
                      {p3.tagline}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '18px', flexWrap: 'wrap' }}>
                    {p3.liveUrl && (
                      <a
                        href={p3.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-ui view-project-btn"
                        style={{
                          borderBottom: '1.5px solid #fef08a',
                          color: '#fef08a',
                          padding: '0 0 4px',
                          fontSize: '10px',
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '5px',
                          textDecoration: 'none',
                        }}
                      >
                        <span>{p3.liveCtaLabel || 'WATCH ON TWITCH'}</span>
                        <ArrowUpRight size={13} />
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => onSelectProject(p3)}
                      className="font-mono-ui view-project-btn"
                      style={{
                        background: 'none',
                        border: 'none',
                        borderBottom: `1.5px solid ${p3.cardTextColor}`,
                        color: p3.cardTextColor,
                        padding: '0 0 4px',
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        cursor: 'pointer',
                      }}
                    >
                      <span>PROJECT DETAILS</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>

                <div
                  className="taped-preview-wrap"
                  onClick={() => onSelectProject(p3)}
                  onKeyDown={(e) => e.key === 'Enter' && onSelectProject(p3)}
                  role="button"
                  tabIndex={0}
                >
                  <span className="masking-tape masking-tape-dark" style={{ top: '-8px', left: '-12px', transform: 'rotate(-36deg)' }} />
                  <span className="masking-tape masking-tape-dark" style={{ top: '-8px', right: '-12px', transform: 'rotate(36deg)' }} />
                  <div className="taped-preview-frame">{renderProjectMockup(p3)}</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
