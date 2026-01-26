import { useState, useEffect } from 'react'
import JoinSection from './components/JoinSection'
import AboutSection from './components/AboutSection'
import VisionSection from './components/VisionSection'
import committeesData from './data/committees.json';
import managementData from './data/management.json';
import socialLinksData from './data/socialLinks.json';

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
function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeCommittee, setActiveCommittee] = useState<string | null>("software");

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

  return (
    <div className="bg-background-light dark:bg-background-dark text-navy-dark font-display antialiased overflow-x-hidden">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-navy-dark to-primary rounded-lg flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-2xl">deployed_code</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-navy-dark">GTU Blockchain</span>
            </div>
            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a className="text-navy-medium hover:text-primary font-medium transition-colors" href="#about">Hakkımızda</a>
              <a className="text-navy-medium hover:text-primary font-medium transition-colors" href="#vision">Vizyon</a>
              <a className="text-navy-medium hover:text-primary font-medium transition-colors" href="#achievements">Başarılar</a>
              <a className="text-navy-medium hover:text-primary font-medium transition-colors" href="#team">Ekip</a>
              <a className="text-navy-medium hover:text-primary font-medium transition-colors" href="#contact">İletişim</a>
            </nav>
            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button className="px-3 py-1 rounded-full bg-white shadow-sm text-xs font-bold text-navy-dark">TR</button>
                <button className="px-3 py-1 rounded-full text-xs font-medium text-gray-500 hover:text-navy-dark">ENG</button>
              </div>
              <a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-md hover:shadow-lg" href="#join">
                Katıl
              </a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none" type="button">
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
            </div>
          </div>
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
            Gebze Teknik Üniversitesi'nin Teknoloji Üssü
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-navy-dark mb-6 leading-tight">
            Geleceği <span className="gradient-text">Blokzincir</span> ile <br /> İnşa Ediyoruz
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
            GTU Blockchain Topluluğu olarak, merkeziyetsiz teknolojilerin kalbinde yenilikçi çözümler üretiyor, global projeler geliştiriyor ve öğrenci odaklı bir ekosistem inşa ediyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-navy-dark hover:bg-navy-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" href="#join">
              Topluluğa Katıl
              <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </a>
            <a className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 text-base font-bold rounded-xl text-navy-dark bg-white hover:bg-gray-50 transition-all shadow-sm hover:shadow-md" href="#achievements">
              Projelerimizi İncele
            </a>
          </div>
          {/* Hero Image / Visual representation */}
          <div className="mt-16 relative mx-auto max-w-5xl">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
              <div className="absolute top-0 w-full h-8 bg-gray-100 border-b border-gray-200 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="bg-navy-dark/5 p-1 pt-9">
                <div
                  className="w-full h-[400px] bg-cover bg-center"
                  data-alt="Abstract network connections visualization with nodes and glowing lines in teal and dark blue"
                  style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBBSgocFvzSshy_00ewjgwRwXiJhEEii71i96k9eYM9bSYtc-GrFMNxVCzKNJudnnhHm0BDcBioz9jolrZGAB_yLwE1jmDJH_dB_aiB-E9Zv_5een0c-iDWCKKs4f5IEPZ4otA4PIvoAUGrQhufQwXWtxKRhvs9Ti9J_zsQf6rP57uVtsJhhk-7YpsM7YSKGUFx8zW2CLSRk0pQwyfsKPT9twfounWsUcflitWWLkZOFL1WKfsTWQS6yocny-WBRkKwZArRELAlRW4')" }}
                >
                  <div className="w-full h-full bg-gradient-to-t from-white via-transparent to-transparent opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Team Section */}
      <section className="py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-2xl mb-2 uppercase tracking-wider">EKİBİMİZ</h2>
            <h3 className="text-5xl font-bold text-navy-dark">Yönetim ve Komiteler</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Birlikte öğrenen, üreten ve gelişen ekibimiz.</p>
          </div>
          {/* Board */}
          <div className="mb-16">
            <h4 className="text-3xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">Yönetim Kurulu</h4>
            <div className="flex flex-wrap justify-evenly items-start gap-6 gap-y-12">
              {managementData.map((member) => (
                <div key={member.id}>
                  <TeamMemberCard
                    name={member.name}
                    position={member.position}
                    image={member.image}
                    social={member.social}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Committees Summary */}
          <div>
            <h4 className="text-3xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">Çalışma Komiteleri</h4>
            <div className="flex flex-col gap-4 h-auto lg:h-[750px] transition-all duration-500">
              {committeesData.map((committee) => (
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
                Gebze Teknik Üniversitesi'nin blokzincir odaklı teknoloji ve inovasyon topluluğu.
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
              <h4 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a className="hover:text-primary transition-colors" href="#">Ana Sayfa</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Hakkımızda</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Etkinlik Takvimi</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Blog (Medium)</a></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div className="col-span-1 lg:col-span-2">
              <h4 className="text-lg font-bold mb-4">İletişim</h4>
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
            <p>© 2026 GTU Blockchain Topluluğu. Tüm hakları saklıdır.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a className="hover:text-gray-300" href="#">Gizlilik Politikası</a>
              <a className="hover:text-gray-300" href="#">Kullanım Koşulları</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-primary hover:bg-primary-dark text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce"
          aria-label="Yukarı Çık"
        >
          <span className="material-symbols-outlined text-xl">arrow_upward</span>
        </button>
      )}
    </div>
  )
}

export default App
