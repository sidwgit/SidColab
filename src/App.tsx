import { useState, useEffect, useRef } from 'react';
import { portfolioData, ProjectItem } from './data/portfolioData';
import { freelanceGalleryItems } from './data/freelanceGallery';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PlaygroundSection } from './components/PlaygroundSection';
import { ContactSection } from './components/ContactSection';
import { FreelancePage, CategoryFilter } from './components/FreelancePage';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';

type PageRoute = 'home' | 'freelance';

function getInitialRoute(): PageRoute {
  const params = new URLSearchParams(window.location.search);
  return params.get('page') === 'freelance' ? 'freelance' : 'home';
}

function getInitialFilter(): CategoryFilter {
  const params = new URLSearchParams(window.location.search);
  const tag = params.get('tag')?.toLowerCase();
  if (tag === 'thumbnails') return 'Thumbnails';
  if (tag === 'posters') return 'Posters';
  if (tag === 'cards') return 'Visiting Cards';
  return 'All';
}

export function App() {
  const [route, setRoute] = useState<PageRoute>(getInitialRoute);
  const [freelanceFilter, setFreelanceFilter] = useState<CategoryFilter>(getInitialFilter);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const pendingSectionRef = useRef<string | null>(null);

  const thumbnailCount = freelanceGalleryItems.filter(
    (item) => item.category === 'Thumbnails'
  ).length;

  useEffect(() => {
    document.title =
      route === 'freelance'
        ? 'Freelance Posters & Thumbnails — SidColab'
        : portfolioData.meta.siteTitle;
  }, [route]);

  useEffect(() => {
    const handlePopState = () => {
      setRoute(getInitialRoute());
      setFreelanceFilter(getInitialFilter());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (route === 'home' && pendingSectionRef.current) {
      const targetId = pendingSectionRef.current;
      pendingSectionRef.current = null;
      requestAnimationFrame(() => {
        if (targetId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }
  }, [route]);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'case-study', 'playground', 'contact'];
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      if (route !== 'home') {
        setActiveSection('case-study');
        return;
      }

      const scrollY = window.scrollY + 140;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [route]);

  const openFreelancePage = (initialFilter: CategoryFilter = 'All') => {
    setSelectedProject(null);
    setFreelanceFilter(initialFilter);
    setRoute('freelance');
    setActiveSection('case-study');
    const url = new URL(window.location.href);
    url.searchParams.set('page', 'freelance');
    if (initialFilter === 'Thumbnails') {
      url.searchParams.set('tag', 'thumbnails');
    } else if (initialFilter === 'Posters') {
      url.searchParams.set('tag', 'posters');
    } else if (initialFilter === 'Visiting Cards') {
      url.searchParams.set('tag', 'cards');
    } else {
      url.searchParams.delete('tag');
    }
    window.history.pushState({}, '', url.toString());
    window.scrollTo(0, 0);
  };

  const navigateHomeSection = (sectionId: string) => {
    setActiveSection(sectionId);
    if (route !== 'home') {
      pendingSectionRef.current = sectionId;
      setRoute('home');
      const url = new URL(window.location.href);
      url.searchParams.delete('page');
      url.searchParams.delete('tag');
      window.history.pushState({}, '', url.toString());
      return;
    }

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleBookService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCommissionPoster = () => {
    setSelectedService('Posters & Graphic Design');
    setContactOpen(true);
  };

  return (
    <div className="page-canvas">
      <main className="paper-sheet notebook-paper">
        <Navbar
          activeSection={route === 'freelance' ? 'case-study' : activeSection}
          scrollProgress={scrollProgress}
          onNavigate={navigateHomeSection}
          onOpenContact={() => setContactOpen(true)}
          socials={portfolioData.socials}
        />

        {route === 'freelance' ? (
          <FreelancePage
            items={freelanceGalleryItems}
            initialFilter={freelanceFilter}
            onBack={() => navigateHomeSection('case-study')}
            onRequestDesign={handleCommissionPoster}
          />
        ) : (
          <>
            <HeroSection
              data={portfolioData.hero}
              onOpenContact={() => setContactOpen(true)}
            />

            <AboutSection data={portfolioData.about} />

            <ServicesSection
              services={portfolioData.services}
              onBookService={handleBookService}
            />

            <ProjectsSection
              projects={portfolioData.projects}
              freelanceCount={freelanceGalleryItems.length}
              thumbnailCount={thumbnailCount}
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenFreelanceFolder={openFreelancePage}
            />

            <PlaygroundSection />

            <ContactSection
              email={portfolioData.meta.email}
              availabilityLabel={portfolioData.meta.availabilityLabel}
              socials={portfolioData.contactSocials}
              selectedService={selectedService}
            />
          </>
        )}

        <Footer
          name={portfolioData.hero.name}
          email={portfolioData.meta.email}
          socials={portfolioData.socials}
          onOpenContact={() => setContactOpen(true)}
        />
      </main>

      <CaseStudyModal
        project={selectedProject}
        projects={portfolioData.projects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => {
          if (p.id === 'freelance-posters') {
            openFreelancePage('All');
          } else {
            setSelectedProject(p);
          }
        }}
        onOpenContact={() => setContactOpen(true)}
      />

      <ContactModal
        isOpen={contactOpen}
        email={portfolioData.meta.email}
        availabilityLabel={portfolioData.meta.availabilityLabel}
        socials={portfolioData.contactSocials}
        initialService={selectedService}
        onClose={() => setContactOpen(false)}
      />
    </div>
  );
}

export default App;
