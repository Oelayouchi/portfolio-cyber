import './globals.css';
import './details.css';
import './refinements.css';
import './alternance.css';
import './theme.css';
import './education-interests.css';
import './projects-media.css';
import './projects-layout-final.css';
import './projects-showcase.css';
import './contact.css';
import './companies-strip.css';
import './navigation-cleanup.css';
import './hero-tweaks.css';
import './mobile-navigation.css';
import './home-hero.css';
import './awards.css';
import './about-card.css';
import './data-flow.css';
import './hero-layout-final.css';
import './typography.css';
import './availability-dashboard.css';
import './availability-v2.css';
import './home-layout-fix.css';
import './availability-v2-refine.css';
import './ui-alignment-fixes.css';
import './cyber-recent-fixes.css';
import './cyber-motion.css';
import './final-three-sections.css';
import './final-alignment-round2.css';
import './global-font-modal-fixes.css';

export const metadata = {
  title: 'Oussama EL AYOUCHI — Portfolio Cybersécurité',
  description: 'Ingénieur systèmes embarqués & Safety en reconversion vers la cybersécurité, à la recherche d’une alternance dès septembre 2026.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: '/profile/favicon.png', shortcut: '/profile/favicon.png', apple: '/profile/favicon.png' },
};

export default function RootLayout({ children }) {
  return <html lang="en"><head><meta name="format-detection" content="telephone=no,date=no,address=no,email=no,url=no" /></head><body>{children}</body></html>;
}
