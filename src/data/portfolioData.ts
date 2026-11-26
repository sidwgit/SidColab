export interface SocialLink {
  id: 'youtube' | 'instagram' | 'twitter' | 'twitch' | 'email';
  label: string;
  url: string;
  bgColor: string;
}

export interface ContactSocial {
  id: 'instagram' | 'discord' | 'email' | 'twitter' | 'twitch';
  label: string;
  handle: string;
  url?: string;
  bgColor: string;
}

export interface SkillStamp {
  id: string;
  label: string;
  color: string;
  textColor: string;
  icon: 'pen' | 'film' | 'sparkles' | 'compass';
}

export interface PolaroidItem {
  id: string;
  caption: string;
  tilt: string;
  variant: 'portrait' | 'workspace';
  imageUrl?: string;
}

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  accentColor: string;
  tags: string[];
}

export interface PosterPiece {
  id: string;
  title: string;
  category: string;
  year: string;
  accent: string;
  bg: string;
  textColor: string;
  imageUrl?: string;
}

export interface ProjectItem {
  id: string;
  tabLabel: string;
  date: string;
  title: string;
  tagline: string;
  tabColor: string;
  tabTextColor: string;
  cardBg: string;
  cardTextColor: string;
  mutedTextColor: string;
  mockupType: 'youtube' | 'posters' | 'twitch';
  role: string;
  timeline: string;
  client: string;
  deliverables: string[];
  overview: string;
  highlights: string[];
  posters?: PosterPiece[];
  liveUrl?: string;
  liveCtaLabel?: string;
}

export interface PortfolioData {
  meta: {
    siteTitle: string;
    email: string;
    availabilityLabel: string;
    instagramHandle: string;
  };
  hero: {
    leftPill: string;
    rightPill: string;
    eyebrowHandwritten: string;
    name: string;
    roleTag: string;
    locationTag: string;
    statusText: string;
    headlineLine1: string;
    headlineLine2: string;
    ctaLabel: string;
  };
  about: {
    handwrittenLabel: string;
    boxTitle: string;
    bioParagraph: string;
    polaroids: PolaroidItem[];
    skillsRow1: SkillStamp[];
    skillsRow2: SkillStamp[];
  };
  services: ServiceCard[];
  projects: ProjectItem[];
  socials: SocialLink[];
  contactSocials: ContactSocial[];
}

/**
 * Sid's Portfolio Data — edit any fields here to add your images, video links, or posters.
 */
export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: 'SidColab — Sid | Graphic Designer & Editor',
    email: 'sidwcolab@gmail.com',
    availabilityLabel: 'Open for freelance design, editing & creative direction',
    instagramHandle: '@sidisfire',
  },
  hero: {
    leftPill: 'CUTS & FRAMES',
    rightPill: 'SWEAT THE DETAILS',
    eyebrowHandwritten: 'my name is',
    name: 'SID',
    roleTag: 'Graphic Designer & Editor',
    locationTag: 'Remote / Worldwide',
    statusText: 'OPEN FOR COLLABS AND GOOD PROJECTS',
    headlineLine1: 'I craft visuals & edits',
    headlineLine2: 'that stop the scroll.',
    ctaLabel: 'CONTACT ME',
  },
  about: {
    handwrittenLabel: 'about me!',
    boxTitle: "what's up",
    bioParagraph:
      "I'm a Graphic Designer & Editor who gets way too excited about sharp pacing, bold typography, and visuals that hit right. ✨ From YouTube storytelling and motion graphics to posters and creative direction, I bring ideas to life frame by frame. 🎨",
    polaroids: [
      {
        id: 'me',
        caption: 'sid · 2026',
        tilt: '-2.5deg',
        variant: 'portrait',
      },
      {
        id: 'workspace',
        caption: 'edit bay',
        tilt: '2deg',
        variant: 'workspace',
      },
    ],
    skillsRow1: [
      {
        id: 'graphic-design',
        label: 'Graphic Design',
        color: '#facc15',
        textColor: '#18181b',
        icon: 'pen',
      },
      {
        id: 'motion-graphics',
        label: 'Motion Graphics',
        color: '#10b981',
        textColor: '#ffffff',
        icon: 'film',
      },
    ],
    skillsRow2: [
      {
        id: 'content-creation',
        label: 'Content Creation',
        color: '#ec4899',
        textColor: '#ffffff',
        icon: 'sparkles',
      },
      {
        id: 'creative-director',
        label: 'Creative Director',
        color: '#2563eb',
        textColor: '#ffffff',
        icon: 'compass',
      },
    ],
  },
  services: [
    {
      id: 'svc-editing',
      number: '01',
      title: 'YouTube & Video Editing',
      description:
        'Tight pacing, sound design, and story structure built to hold attention from hook to outro.',
      accentColor: '#2563eb',
      tags: ['Long-Form YT', 'Reels & Shorts', 'Sound Design'],
    },
    {
      id: 'svc-motion',
      number: '02',
      title: 'Motion Graphics',
      description:
        'Kinetic typography, animated callouts, lower thirds, and seamless visual transitions.',
      accentColor: '#10b981',
      tags: ['Kinetic Type', 'Titles & Intros', 'Explainers'],
    },
    {
      id: 'svc-graphic',
      number: '03',
      title: 'Posters & Graphic Design',
      description:
        'Bold key visuals, event posters, cover art, and thumbnails designed with print-grade polish.',
      accentColor: '#f5c52b',
      tags: ['Posters', 'Thumbnails', 'Cover Art'],
    },
    {
      id: 'svc-direction',
      number: '04',
      title: 'Creative Direction',
      description:
        'Cohesive visual identity, content concepts, and art direction for creators and launches.',
      accentColor: '#ec4899',
      tags: ['Content Strategy', 'Art Direction', 'Lookbooks'],
    },
  ],
  projects: [
    {
      id: 'youtube-edits',
      tabLabel: 'PROJECT 01 · YOUTUBE',
      date: '@SIDISWIRED',
      title: 'YouTube & Video Edits',
      tagline:
        'Story-driven edits, kinetic motion graphics, and retention-focused visual pacing on my channel.',
      tabColor: '#2563eb',
      tabTextColor: '#ffffff',
      cardBg: '#161618',
      cardTextColor: '#ffffff',
      mutedTextColor: '#a1a1aa',
      mockupType: 'youtube',
      role: 'Creator, Editor & Motion Designer',
      timeline: 'Ongoing Channel',
      client: 'youtube.com/@sidiswired',
      deliverables: [
        'Video Editing',
        'Motion Graphics',
        'Thumbnail Design',
        'Sound & Pacing',
        'Creative Direction',
      ],
      overview:
        'My YouTube channel (@sidiswired) is where I combine editing, motion graphics, and visual storytelling—experimenting with rhythm, custom titles, B-roll compositing, and thumbnail composition.',
      highlights: [
        'Custom motion-graphic callouts, kinetic typography, and crisp timeline transitions.',
        'Cohesive thumbnail art direction designed for clarity and high click-through.',
        'End-to-end production: scripting, editing, color, sound design, and packaging.',
      ],
      liveUrl: 'https://www.youtube.com/@sidiswired',
      liveCtaLabel: 'WATCH ON YOUTUBE',
    },
    {
      id: 'freelance-posters',
      tabLabel: 'PROJECT 02 · FREELANCE',
      date: 'FREELANCE FOLDER',
      title: 'Graphic Design & Posters',
      tagline:
        'A curated freelance folder of posters, YouTube thumbnails, key visuals, and visiting cards.',
      tabColor: '#f5c52b',
      tabTextColor: '#18181b',
      cardBg: '#f5c52b',
      cardTextColor: '#18181b',
      mutedTextColor: '#42360c',
      mockupType: 'posters',
      role: 'Graphic Designer & Creative Director',
      timeline: 'Freelance Archive',
      client: 'Independent & Brand Clients',
      deliverables: [
        'Poster Design',
        'Typography Systems',
        'Cover Art & Key Visuals',
        'Social Campaign Assets',
        'Print-Ready Layouts',
      ],
      overview:
        'Selected freelance graphic design work focused on high-impact posters, event flyers, editorial layouts, and campaign visuals tailored for creators and brands.',
      highlights: [
        'Expressive typographic hierarchy paired with tactile textures and bold color contrast.',
        'Flexible visual systems that translate cleanly from A2 print posters to vertical social reels.',
        'Drop your real poster image files into portfolioData.ts whenever you are ready to swap placeholders.',
      ],
      posters: [
        {
          id: 'poster-1',
          title: 'Dalapathi (LCD)',
          category: 'Poster Design',
          year: '2026',
          accent: '#ec4899',
          bg: '#18181b',
          textColor: '#ffffff',
          imageUrl: '/freelance-gallery/thumbs/dalapathi-lcd.webp',
        },
        {
          id: 'poster-2',
          title: 'Sony Walkman',
          category: 'Product Visual',
          year: '2026',
          accent: '#facc15',
          bg: '#2563eb',
          textColor: '#ffffff',
          imageUrl: '/freelance-gallery/thumbs/sony-walkman.webp',
        },
        {
          id: 'poster-3',
          title: 'The Starboy Limit',
          category: 'Cover Visual',
          year: '2026',
          accent: '#10b981',
          bg: '#fdfdfb',
          textColor: '#18181b',
          imageUrl: '/freelance-gallery/thumbs/the-starboy-limit.webp',
        },
      ],
    },
    {
      id: 'twitch-streams',
      tabLabel: 'PROJECT 03 · TWITCH',
      date: 'TWITCH.TV/SIDISFIRE',
      title: 'Twitch & Live Streams',
      tagline:
        'Live design sessions, edit breakdowns, gaming, custom stream graphics, and chill hangouts with chat.',
      tabColor: '#772CE8',
      tabTextColor: '#ffffff',
      cardBg: '#772CE8',
      cardTextColor: '#ffffff',
      mutedTextColor: '#ede9fe',
      mockupType: 'twitch',
      role: 'Streamer, Designer & Creator',
      timeline: 'Live Channel',
      client: 'twitch.tv/sidisfire',
      deliverables: [
        'Gaming Streams',
        'Live Design Sessions',
        'Overlays & Alerts',
        'Edit Breakdowns',
        'Community Hangouts',
      ],
      overview:
        'My Twitch channel (sidisfire) is where I mix gaming streams with live poster design sessions, After Effects and Premiere breakdowns, and hanging out with chat.',
      highlights: [
        'Custom stream overlays, alert animations, and stinger transitions designed from scratch.',
        'Live step-by-step walk-throughs of poster layouts, typography, and video pacing.',
        'Interactive creative Q&As, portfolio feedback, and chill gaming streams.',
      ],
      liveUrl: 'https://www.twitch.tv/sidisfire',
      liveCtaLabel: 'WATCH ON TWITCH',
    },
  ],
  socials: [
    {
      id: 'youtube',
      label: 'YouTube (@sidiswired)',
      url: 'https://www.youtube.com/@sidiswired',
      bgColor: '#facc15',
    },
    {
      id: 'instagram',
      label: 'Instagram (@sidisfire)',
      url: 'https://www.instagram.com/sidisfire/',
      bgColor: '#ec4899',
    },
    {
      id: 'twitter',
      label: 'Twitter (@sidbytess)',
      url: 'https://x.com/sidbytess',
      bgColor: '#38bdf8',
    },
    {
      id: 'twitch',
      label: 'Twitch (sidisfire)',
      url: 'https://www.twitch.tv/sidisfire',
      bgColor: '#a78bfa',
    },
    {
      id: 'email',
      label: 'Email (sidwcolab@gmail.com)',
      url: 'mailto:sidwcolab@gmail.com',
      bgColor: '#10b981',
    },
  ],
  contactSocials: [
    {
      id: 'instagram',
      label: 'IG',
      handle: '@sidisfire',
      url: 'https://www.instagram.com/sidisfire/',
      bgColor: '#fbcfe8',
    },
    {
      id: 'discord',
      label: 'DISCORD',
      handle: '@realsidgod',
      bgColor: '#e0e7ff',
    },
    {
      id: 'email',
      label: 'EMAIL',
      handle: 'sidwcolab@gmail.com',
      url: 'mailto:sidwcolab@gmail.com',
      bgColor: '#fef08a',
    },
    {
      id: 'twitter',
      label: 'X / TWITTER',
      handle: '@sidbytess',
      url: 'https://x.com/sidbytess',
      bgColor: '#e0f2fe',
    },
    {
      id: 'twitch',
      label: 'TWITCH',
      handle: 'sidisfire',
      url: 'https://www.twitch.tv/sidisfire',
      bgColor: '#ede9fe',
    },
  ],
};
