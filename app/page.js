import CertificationsSection from '../components/certifications-section';
import AlternanceBanner from '../components/alternance-banner';
import ThemeController from '../components/theme-controller';
import EducationInterestsSection from '../components/education-interests';
import Navigation from '../components/navigation';
import ProjectsSection from '../components/projects-section';
import AwardsSection from '../components/awards-section';
import ExperienceSection from '../components/experience-section';
import ContactSection from '../components/contact-section';
import HomeHero from '../components/home-hero';
import DataSection from '../components/data-section';
import AboutCyberSection from '../components/about-cyber-section';
import { Footer } from '../components/portfolio-sections';
import { LanguageProvider } from '../components/language-context';

export default function Page() {
  return (
    <LanguageProvider>
      <main>
        <ThemeController />
        <Navigation />
        <HomeHero />
        <AboutCyberSection />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <DataSection />
        <CertificationsSection />
        <EducationInterestsSection />
        <ContactSection />
        <Footer />
        <AlternanceBanner />
      </main>
    </LanguageProvider>
  );
}
