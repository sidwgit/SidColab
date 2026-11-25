export interface SocialLink {
  id: 'youtube' | 'instagram' | 'email';
  label: string;
  url: string;
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
  mockupType: 'youtube' | 'posters';
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
}

/**
 * Sid's Portfolio Data — edit any fields here to add your images, video links, or posters.
 */
export const portfolioData: PortfolioData = {
  meta: {
    siteTitle: 'Sid — Graphic Designer & Editor',
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
        'A curated freelance folder of posters, key visuals, cover art, and bold print-ready layouts.',
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
      id: 'email',
      label: 'Email (sidwcolab@gmail.com)',
      url: 'mailto:sidwcolab@gmail.com',
      bgColor: '#10b981',
    },
  ],
};
