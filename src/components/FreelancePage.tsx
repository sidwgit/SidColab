import React, { useState, useMemo, useEffect } from 'react';
import { ArrowLeft, Search, X, ChevronLeft, ChevronRight, ArrowUpRight, Layers } from 'lucide-react';
import { FreelancePosterItem } from '../data/freelanceGallery';

interface FreelancePageProps {
  items: FreelancePosterItem[];
  onBack: () => void;
  onRequestDesign: () => void;
}

type CategoryFilter = 'All' | 'Posters' | 'Visiting Cards';

export const FreelancePage: React.FC<FreelancePageProps> = ({
  items,
  onBack,
  onRequestDesign,
}) => {
  const [filter, setFilter] = useState<CategoryFilter>('All');
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const posterCount = useMemo(
    () => items.filter((item) => item.category === 'Posters').length,
    [items]
  );
  const cardCount = useMemo(
    () => items.filter((item) => item.category === 'Visiting Cards').length,
    [items]
  );

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCat = filter === 'All' || item.category === filter;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.filename.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [items, filter, query]);

  const activeItem = activeIndex !== null ? filteredItems[activeIndex] ?? null : null;

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeIndex, filteredItems.length]);

  const filterTabs: { id: CategoryFilter; label: string; count: number; color: string; textColor: string }[] = [
    { id: 'All', label: 'ALL WORK', count: items.length, color: '#f5c52b', textColor: '#18181b' },
    { id: 'Posters', label: 'POSTERS & KEY VISUALS', count: posterCount, color: '#2563eb', textColor: '#ffffff' },
    { id: 'Visiting Cards', label: 'VISITING CARDS', count: cardCount, color: '#ec4899', textColor: '#ffffff' },
  ];

  return (
    <div style={{ padding: '28px 24px 72px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Top Breadcrumb & Back Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '26px',
          }}
        >
          <button
            type="button"
            onClick={onBack}
            className="font-mono-ui"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 14px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              color: '#18181b',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #18181b',
            }}
          >
            <ArrowLeft size={13} />
            <span>BACK TO PORTFOLIO</span>
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              className="font-mono-ui"
              style={{
                backgroundColor: '#a7f3d0',
                color: '#14532d',
                border: '1px solid #18181b',
                padding: '5px 10px',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.09em',
              }}
            >
              ◆ /FREELANCE FOLDER
            </span>
            <span
              className="font-mono-ui"
              style={{
                backgroundColor: '#18181b',
                color: '#f5c52b',
                padding: '5px 10px',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.09em',
              }}
            >
              {items.length} DESIGNS
            </span>
          </div>
        </div>

        {/* Hero Folder Banner */}
        <div style={{ marginBottom: '34px' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <div
              className="folder-tab-left font-mono-ui"
              style={{
                backgroundColor: '#f5c52b',
                color: '#18181b',
                padding: '9px 34px 9px 18px',
                fontSize: '10px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
              }}
            >
              <Layers size={12} />
              <span>GRAPHIC DESIGN ARCHIVE</span>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#f5c52b',
              border: '2px solid #18181b',
              boxShadow: '6px 6px 0 #18181b',
              padding: '28px 28px 30px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div style={{ maxWidth: '580px' }}>
              <span className="font-hand" style={{ fontSize: '18px', color: '#42360c', display: 'block', marginBottom: '4px' }}>
                all posters &amp; print works from the freelance folder!
              </span>
              <h1
                className="font-pixel"
                style={{
                  margin: '0 0 10px',
                  fontSize: 'clamp(36px, 5vw, 56px)',
                  lineHeight: 0.95,
                  color: '#18181b',
                  letterSpacing: '0.02em',
                }}
              >
                FREELANCE POSTERS
              </h1>
              <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.55, color: '#27272a' }}>
                Every poster, key visual, typography exploration, and visiting card design in my collection. Click any piece to inspect it full-screen.
              </p>
            </div>

            <button
              type="button"
              onClick={onRequestDesign}
              className="font-mono-ui"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#18181b',
                color: '#ffffff',
                border: 'none',
                padding: '12px 18px',
                fontSize: '10.5px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                cursor: 'pointer',
                boxShadow: '3px 3px 0 #2563eb',
              }}
            >
              <span>COMMISSION A POSTER</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </div>

        {/* Filter Bar + Search */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px',
            marginBottom: '28px',
            padding: '14px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            border: '1.5px solid #18181b',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {filterTabs.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    setFilter(tab.id);
                    setActiveIndex(null);
                  }}
                  className="font-mono-ui"
                  style={{
                    padding: '7px 12px',
                    fontSize: '10px',
                    fontWeight: 700,
                    letterSpacing: '0.07em',
                    border: '1.5px solid #18181b',
                    backgroundColor: isActive ? tab.color : '#ffffff',
                    color: isActive ? tab.textColor : '#18181b',
                    cursor: 'pointer',
                    boxShadow: isActive ? '2px 2px 0 #18181b' : 'none',
                  }}
                >
                  {tab.label} ({tab.count})
                </button>
              );
            })}
          </div>

          <div style={{ position: 'relative', minWidth: '220px', flex: '0 1 260px' }}>
            <Search
              size={14}
              color="#52525b"
              style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}
            />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActiveIndex(null);
              }}
              placeholder="Search poster title..."
              className="font-mono-ui"
              style={{
                width: '100%',
                padding: '8px 28px 8px 32px',
                border: '1.5px solid #18181b',
                backgroundColor: '#ffffff',
                fontSize: '11px',
                color: '#18181b',
              }}
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setActiveIndex(null);
                }}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '6px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'transparent',
                  border: 'none',
                  padding: '2px',
                  cursor: 'pointer',
                  color: '#52525b',
                  display: 'inline-flex',
                }}
              >
                <X size={13} />
              </button>
            )}
          </div>
        </div>

        {/* Masonry Gallery */}
        {filteredItems.length === 0 ? (
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              padding: '40px 24px',
              textAlign: 'center',
            }}
          >
            <div className="font-pixel" style={{ fontSize: '26px', marginBottom: '6px' }}>
              NO MATCHES FOUND
            </div>
            <p style={{ margin: '0 0 14px', fontSize: '14px', color: '#52525b' }}>
              Try clearing your search filter to see all {items.length} designs.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('All');
                setQuery('');
              }}
              className="font-mono-ui"
              style={{
                backgroundColor: '#18181b',
                color: '#ffffff',
                border: 'none',
                padding: '8px 16px',
                fontSize: '10px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              RESET FILTERS
            </button>
          </div>
        ) : (
          <div className="poster-masonry">
            {filteredItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className="poster-masonry-card"
                style={{
                  textAlign: 'left',
                  padding: '10px 10px 12px',
                  backgroundColor: '#ffffff',
                  border: '1.5px solid #18181b',
                  boxShadow: '4px 4px 0 #18181b',
                  cursor: 'pointer',
                  position: 'relative',
                  width: '100%',
                }}
              >
                <span
                  className="masking-tape"
                  style={{
                    top: '-8px',
                    left: '50%',
                    transform: `translateX(-50%) rotate(${idx % 2 === 0 ? '-3deg' : '3deg'})`,
                  }}
                />

                <div
                  style={{
                    backgroundColor: item.category === 'Visiting Cards' ? '#f6f5f0' : '#18181b',
                    overflow: 'hidden',
                    border: '1px solid #e4e4e7',
                  }}
                >
                  <img
                    src={item.thumbUrl}
                    alt={item.title}
                    loading="lazy"
                    width={item.width}
                    height={item.height}
                    style={{
                      width: '100%',
                      height: 'auto',
                      display: 'block',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginTop: '10px',
                  }}
                >
                  <div>
                    <div
                      className="font-sans-ui"
                      style={{ fontSize: '13.5px', fontWeight: 800, color: '#18181b', lineHeight: 1.25 }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="font-mono-ui"
                      style={{ fontSize: '9px', color: '#71717a', marginTop: '3px' }}
                    >
                      {item.width}×{item.height}
                    </div>
                  </div>

                  <span
                    className="font-mono-ui"
                    style={{
                      fontSize: '8.5px',
                      fontWeight: 700,
                      padding: '3px 6px',
                      backgroundColor: item.category === 'Visiting Cards' ? '#fbcfe8' : '#fef08a',
                      border: '1px solid #18181b',
                      color: '#18181b',
                      flexShrink: 0,
                    }}
                  >
                    {item.category === 'Visiting Cards' ? 'CARD' : 'POSTER'}
                  </span>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Bottom Back Bar */}
        <div
          style={{
            marginTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <button
            type="button"
            onClick={onBack}
            className="font-mono-ui"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '7px',
              padding: '8px 14px',
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              color: '#18181b',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: 'pointer',
              boxShadow: '3px 3px 0 #18181b',
            }}
          >
            <ArrowLeft size={13} />
            <span>BACK TO PORTFOLIO</span>
          </button>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono-ui"
            style={{
              padding: '8px 14px',
              backgroundColor: '#f5c52b',
              border: '1.5px solid #18181b',
              color: '#18181b',
              fontSize: '10.5px',
              fontWeight: 700,
              letterSpacing: '0.08em',
              cursor: 'pointer',
            }}
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>

      {/* Fullscreen Poster Lightbox */}
      {activeItem && activeIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          onClick={() => setActiveIndex(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 70,
            backgroundColor: 'rgba(24, 24, 27, 0.85)',
            backdropFilter: 'blur(5px)',
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
              maxWidth: '920px',
              maxHeight: '92vh',
              display: 'flex',
              flexDirection: 'column',
              border: '2px solid #18181b',
              boxShadow: '8px 8px 0 #f5c52b',
              overflow: 'hidden',
            }}
          >
            {/* Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '12px 18px',
                backgroundColor: '#18181b',
                color: '#ffffff',
              }}
            >
              <div>
                <div className="font-mono-ui" style={{ fontSize: '9px', color: '#f5c52b', letterSpacing: '0.1em' }}>
                  {activeItem.category.toUpperCase()} · {activeIndex + 1} OF {filteredItems.length}
                </div>
                <div className="font-sans-ui" style={{ fontSize: '16px', fontWeight: 800 }}>
                  {activeItem.title}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                aria-label="Close lightbox"
                style={{
                  width: '30px',
                  height: '30px',
                  backgroundColor: '#ffffff',
                  color: '#18181b',
                  border: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={16} />
              </button>
            </div>

            {/* Image Stage */}
            <div
              style={{
                flex: 1,
                minHeight: 0,
                backgroundColor: activeItem.category === 'Visiting Cards' ? '#f6f5f0' : '#111113',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px',
                position: 'relative',
                overflow: 'auto',
              }}
            >
              <img
                src={activeItem.fullUrl}
                alt={activeItem.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '64vh',
                  objectFit: 'contain',
                  boxShadow: '0 12px 32px rgba(0, 0, 0, 0.5)',
                }}
              />
            </div>

            {/* Bottom Controls */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '10px',
                padding: '12px 18px',
                backgroundColor: '#fdfdfb',
                borderTop: '1.5px solid #18181b',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
                    )
                  }
                  className="font-mono-ui"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '7px 11px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #18181b',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <ChevronLeft size={13} />
                  <span>PREV</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((prev) =>
                      prev === null ? null : (prev + 1) % filteredItems.length
                    )
                  }
                  className="font-mono-ui"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '7px 11px',
                    backgroundColor: '#ffffff',
                    border: '1.5px solid #18181b',
                    fontSize: '10px',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <span>NEXT</span>
                  <ChevronRight size={13} />
                </button>
                <span className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', marginLeft: '6px' }}>
                  {activeItem.filename} ({activeItem.width}×{activeItem.height})
                </span>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveIndex(null);
                  onRequestDesign();
                }}
                className="font-mono-ui"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  backgroundColor: '#f5c52b',
                  color: '#18181b',
                  border: '1.5px solid #18181b',
                  fontSize: '10px',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <span>REQUEST SIMILAR DESIGN</span>
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
