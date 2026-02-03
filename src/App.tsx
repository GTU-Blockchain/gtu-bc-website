import { useState, useEffect } from 'react'
import JoinSection from './components/JoinSection'
import AboutSection from './components/AboutSection'
import VisionSection from './components/VisionSection'
import committeesData from './data/committees.json';
import managementData from './data/management.json';
import socialLinksData from './data/socialLinks.json';
import { useLanguage } from './context/LanguageContext';

import TeamMemberCard from './components/TeamMemberCard';
import CommitteeCard from './components/CommitteeCard';
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const iconMap: { [key: string]: React.ElementType } = {
  twitter: RiTwitterXFill,
  instagram: FaInstagram,
  tiktok: FaTiktok,
  linkedin: FaLinkedin,
  github: SiGithub
};

import AchievementsSection from './components/AchievementsSection'
import MapSection from './components/MapSection'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCommittee, setActiveCommittee] = useState<string | null>("software");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  // Get committee translations
  const getCommitteeData = () => {
    return committeesData.map(committee => ({
      ...committee,
      name: t(`committee.${committee.id}.name`),
      description: t(`committee.${committee.id}.description`),
      features: [
        t(`committee.${committee.id}.feature1`),
        t(`committee.${committee.id}.feature2`),
        t(`committee.${committee.id}.feature3`),
        t(`committee.${committee.id}.feature4`),
        t(`committee.${committee.id}.feature5`),
      ]
    }));
  };

  // Get management position translations
  const getPositionTranslation = (positionId: string): string => {
    const positionMap: { [key: string]: string } = {
      'yonetim-kurulu-baskani': 'position.boardChairman',
      'yonetim-kurulu-baskan-yardimcisi': 'position.boardViceChairman',
      'sosyal-medya-ekibi-baskani': 'position.socialMediaHead',
      'yazilim-ekibi-baskani': 'position.softwareHead',
      'finans-koordinatoru': 'position.financeCoordinator',
    };
    return t(positionMap[positionId] || positionId);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-navy-dark font-display antialiased overflow-x-clip">
      {/* Navigation */}
      <header className="sticky top-0 left-0 right-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-navy-dark to-primary rounded-lg flex items-center justify-center">
                <img
                  src="/images/gtub-symbol-white.png"
                  alt="GTU Blockchain Logo"
                  className="w-13 h-13 object-contain"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-navy-dark">GTU Blockchain</span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <button type="button" onClick={() => scrollToSection('about')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.about')}</button>
              <button type="button" onClick={() => scrollToSection('vision')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.vision')}</button>
              <button type="button" onClick={() => scrollToSection('achievements')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.achievements')}</button>
              <button type="button" onClick={() => scrollToSection('map')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.map')}</button>
              <button type="button" onClick={() => scrollToSection('team')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.team')}</button>
              <button type="button" onClick={() => scrollToSection('contact')} className="text-navy-medium hover:text-primary font-medium transition-colors bg-transparent border-none cursor-pointer">{t('nav.contact')}</button>
            </nav>
            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button 
                  onClick={() => setLanguage('tr')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'tr' 
                      ? 'bg-white shadow-sm text-navy-dark' 
                      : 'text-gray-500 hover:text-navy-dark'
                  }`}
                >
                  TR
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                    language === 'en' 
                      ? 'bg-white shadow-sm text-navy-dark' 
                      : 'text-gray-500 hover:text-navy-dark'
                  }`}
                >
                  ENG
                </button>
              </div>
              <button type="button" onClick={() => scrollToSection('join')} className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-md hover:shadow-lg">
                {t('nav.join')}
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-3">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button onClick={() => setLanguage('tr')} className={`px-2 py-1 rounded-full text-xs font-bold ${language === 'tr' ? 'bg-white shadow-sm text-navy-dark' : 'text-gray-500'}`}>TR</button>
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 rounded-full text-xs font-bold ${language === 'en' ? 'bg-white shadow-sm text-navy-dark' : 'text-gray-500'}`}>ENG</button>
              </div>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-500 hover:text-gray-900 focus:outline-none p-2" type="button" aria-label="Menü">
                <span className="material-symbols-outlined text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>
          </div>
          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 bg-white">
              <nav className="py-4 space-y-1">
                <button type="button" onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.about')}</button>
                <button type="button" onClick={() => scrollToSection('vision')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.vision')}</button>
                <button type="button" onClick={() => scrollToSection('achievements')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.achievements')}</button>
                <button type="button" onClick={() => scrollToSection('map')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.map')}</button>
                <button type="button" onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.team')}</button>
                <button type="button" onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-navy-medium hover:bg-gray-50 hover:text-primary font-medium bg-transparent border-none cursor-pointer">{t('nav.contact')}</button>
                <button type="button" onClick={() => scrollToSection('join')} className="mx-4 mt-4 flex justify-center items-center w-[calc(100%-2rem)] py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark cursor-pointer">{t('nav.join')}</button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-light/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-primary text-sm font-semibold mb-8 animate-fade-in-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('hero.badge')}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-navy-dark mb-6 leading-tight">
            {language === 'tr' ? (
              <>
                {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span> {t('hero.title3')} <br /> {t('hero.title4')}
              </>
            ) : (
              <>
                {t('hero.title1')} <span className="gradient-text">{t('hero.title2')}</span> <br /> {t('hero.title3')} <span className="gradient-text">{t('hero.title4')}</span>
              </>
            )}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button type="button" onClick={() => scrollToSection('join')} className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-navy-dark hover:bg-navy-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              {t('hero.joinButton')}
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
            <button type="button" onClick={() => scrollToSection('achievements')} className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-xl text-navy-dark bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow-md">
              {t('hero.projectsButton')}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Map Section */}
      <MapSection />

      {/* Team Section */}
      <section className="py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-2xl mb-2 uppercase tracking-wider">{t('team.badge')}</h2>
            <h3 className="text-5xl font-bold text-navy-dark">{t('team.title')}</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">{t('team.description')}</p>
          </div>
          {/* Board */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">{t('team.board')}</h4>
            <div className="flex flex-wrap justify-evenly items-start gap-6 gap-y-12">
              {managementData.map((member) => (
                <div key={member.id}>
                  <TeamMemberCard
                    name={member.name}
                    position={getPositionTranslation(member.id)}
                    image={member.image}
                    social={member.social}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Committees Summary */}
          <div>
            <h4 className="text-3xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">{t('team.committees')}</h4>
            <div className="flex flex-col gap-4 h-auto lg:h-[750px] transition-all duration-500">
              {getCommitteeData().map((committee) => (
                <CommitteeCard
                  key={committee.id}
                  id={committee.id}
                  name={committee.name}
                  icon={committee.icon}
                  description={committee.description}
                  features={committee.features}
                  isActive={activeCommittee === committee.id}
                  onToggle={setActiveCommittee}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <JoinSection />

      {/* Contact & Footer */}
      <footer className="bg-background-dark text-white pt-20 pb-10 border-t border-gray-800" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg backdrop-blur-sm border border-white/10">
                  <img
                    src="/images/gtub-symbol-white.png"
                    alt="GTU Blockchain Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-xl">GTU Blockchain</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                {socialLinksData.map((link) => {
                  const IconComponent = iconMap[link.platform];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all"
                      aria-label={link.platform}
                    >
                      {IconComponent && <IconComponent className="text-xl" />}
                    </a>
                  );
                })}
              </div>
            </div>
            {/* Links */}
            <div className="col-span-1">
              <h4 className="text-lg font-bold mb-4">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button type="button" onClick={() => { scrollToTop(); }} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-inherit font-inherit">{t('footer.home')}</button></li>
                <li><button type="button" onClick={() => scrollToSection('about')} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-inherit font-inherit">{t('footer.about')}</button></li>
                <li><button type="button" onClick={() => scrollToTop()} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-inherit font-inherit">{t('footer.eventCalendar')}</button></li>
                <li><button type="button" onClick={() => scrollToTop()} className="hover:text-primary transition-colors bg-transparent border-none cursor-pointer text-left p-0 text-inherit font-inherit">{t('footer.blog')}</button></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">{t('footer.contact')}</h4>
              <div className="space-y-4 text-gray-400 text-sm">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">location_on</span>
                  <a
                    href="https://maps.app.goo.gl/1hTXicTBq3NSdoJ78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Gebze Teknik Üniversitesi, <br />Bilgisayar Mühendisliği Binası, Zemin Kat<br />41400 Gebze/Kocaeli
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a className="hover:text-white transition-colors" href="mailto:blockchain@gtu.edu.tr">blockchain@gtu.edu.tr</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>{t('footer.copyright')}</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button type="button" onClick={() => scrollToTop()} className="hover:text-gray-300 bg-transparent border-none cursor-pointer text-inherit font-inherit p-0">{t('footer.privacyPolicy')}</button>
              <button type="button" onClick={() => scrollToTop()} className="hover:text-gray-300 bg-transparent border-none cursor-pointer text-inherit font-inherit p-0">{t('footer.termsOfUse')}</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce"
          aria-label={t('footer.scrollTop')}
        >
          <span className="material-symbols-outlined text-xl">arrow_upward</span>
        </button>
      )}
    </div>
  )
}

export default App
