import React, { useState } from 'react';
import { Sparkles, RotateCw } from 'lucide-react';

const studioNotes = [
  'Cut on the beat, not just the frame.',
  'Good posters work from across the street and up close.',
  'Motion graphics should guide the eye, never distract it.',
  'Typography is half the edit.',
];

export const PlaygroundSection: React.FC = () => {
  const [noteIdx, setNoteIdx] = useState(0);
  const [stampCount, setStampCount] = useState(24);
  const [switchA, setSwitchA] = useState(true);
  const [switchB, setSwitchB] = useState(true);

  return (
    <section
      id="playground"
      style={{
        padding: '28px 24px 68px',
      }}
    >
      <div style={{ maxWidth: '880px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <span className="font-hand" style={{ fontSize: '16px', color: '#52525b', display: 'block', marginBottom: '4px' }}>
              tinkering &amp; creative notes!
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
              playground
            </div>
          </div>

          <span className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', letterSpacing: '0.1em' }}>
            ◆ STUDIO SKETCHBOOK
          </span>
        </div>

        <div className="playground-grid">
          {/* Card 1: Sticky Note Idea Cycler */}
          <div
            style={{
              position: 'relative',
              backgroundColor: '#fef08a',
              border: '1.5px solid #18181b',
              padding: '22px 20px',
              boxShadow: '4px 4px 0 #18181b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '175px',
            }}
          >
            <span className="masking-tape" style={{ top: '-9px', left: '50%', transform: 'translateX(-50%) rotate(-2deg)' }} />
            <div>
              <div className="font-mono-ui" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', color: '#713f12', marginBottom: '10px' }}>
                01 / EDIT BAY RULE
              </div>
              <p className="font-hand" style={{ margin: 0, fontSize: '21px', lineHeight: 1.35, color: '#18181b' }}>
                &ldquo;{studioNotes[noteIdx]}&rdquo;
              </p>
            </div>
            <button
              type="button"
              onClick={() => setNoteIdx((prev) => (prev + 1) % studioNotes.length)}
              className="font-mono-ui"
              style={{
                marginTop: '16px',
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#18181b',
                color: '#ffffff',
                border: 'none',
                padding: '6px 10px',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              <RotateCw size={11} />
              <span>NEXT NOTE</span>
            </button>
          </div>

          {/* Card 2: Tactile Switchboard */}
          <div
            style={{
              backgroundColor: '#ffffff',
              border: '1.5px solid #18181b',
              padding: '22px 20px',
              boxShadow: '4px 4px 0 #18181b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '175px',
            }}
          >
            <div>
              <div className="font-mono-ui" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', color: '#52525b', marginBottom: '12px' }}>
                02 / RENDER PRESETS
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                  <span>60fps Motion</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={switchA}
                    onClick={() => setSwitchA((v) => !v)}
                    style={{
                      width: '44px',
                      height: '24px',
                      borderRadius: '999px',
                      border: '1.5px solid #18181b',
                      backgroundColor: switchA ? '#10b981' : '#e4e4e7',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background-color 160ms ease',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '2px',
                        left: switchA ? '22px' : '2px',
                        width: '17px',
                        height: '17px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid #18181b',
                        transition: 'left 160ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </button>
                </label>

                <label style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>
                  <span>Grain &amp; Halation</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={switchB}
                    onClick={() => setSwitchB((v) => !v)}
                    style={{
                      width: '44px',
                      height: '24px',
                      borderRadius: '999px',
                      border: '1.5px solid #18181b',
                      backgroundColor: switchB ? '#ec4899' : '#e4e4e7',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'background-color 160ms ease',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: '2px',
                        left: switchB ? '22px' : '2px',
                        width: '17px',
                        height: '17px',
                        borderRadius: '50%',
                        backgroundColor: '#ffffff',
                        border: '1.5px solid #18181b',
                        transition: 'left 160ms cubic-bezier(0.22, 1, 0.36, 1)',
                      }}
                    />
                  </button>
                </label>
              </div>
            </div>
            <div className="font-mono-ui" style={{ fontSize: '10px', color: '#71717a', marginTop: '14px' }}>
              EXPORT: {switchA ? '60FPS' : '24FPS'} / {switchB ? 'FILM LOOK' : 'CLEAN'}
            </div>
          </div>

          {/* Card 3: Stamp Press Counter */}
          <div
            style={{
              backgroundColor: '#a7f3d0',
              border: '1.5px solid #18181b',
              padding: '22px 20px',
              boxShadow: '4px 4px 0 #18181b',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '175px',
            }}
          >
            <div>
              <div className="font-mono-ui" style={{ fontSize: '9.5px', fontWeight: 700, letterSpacing: '0.1em', color: '#14532d', marginBottom: '10px' }}>
                03 / FRAME COUNTER
              </div>
              <div className="font-pixel" style={{ fontSize: '42px', lineHeight: 1, color: '#18181b' }}>
                #{String(stampCount).padStart(3, '0')}
              </div>
              <div className="font-hand" style={{ fontSize: '15px', color: '#14532d', marginTop: '4px' }}>
                renders &amp; posters shipped
              </div>
            </div>

            <button
              type="button"
              onClick={() => setStampCount((c) => c + 1)}
              className="font-mono-ui"
              style={{
                marginTop: '14px',
                alignSelf: 'flex-start',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                border: '1.5px solid #18181b',
                padding: '6px 12px',
                fontSize: '9.5px',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
              }}
            >
              <Sparkles size={11} />
              <span>STAMP +1</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
