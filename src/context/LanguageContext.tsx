import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// All translations
const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navigation
    'nav.about': 'Hakkımızda',
    'nav.vision': 'Vizyon',
    'nav.achievements': 'Başarılar',
    'nav.map': 'Harita',
    'nav.team': 'Ekip',
    'nav.contact': 'İletişim',
    'nav.join': 'Katıl',
    
    // Hero Section
    'hero.badge': "Gebze Teknik Üniversitesi'nin Teknoloji Üssü",
    'hero.title1': 'Geleceği',
    'hero.title2': 'Blokzincir',
    'hero.title3': 'ile',
    'hero.title4': 'İnşa Ediyoruz',
    'hero.description': 'GTU Blockchain Topluluğu olarak, merkeziyetsiz teknolojilerin kalbinde yenilikçi çözümler üretiyor, global projeler geliştiriyor ve öğrenci odaklı bir ekosistem inşa ediyoruz.',
    'hero.joinButton': 'Topluluğa Katıl',
    'hero.projectsButton': 'Projelerimizi İncele',
    
    // About Section
    'about.badge': 'Hakkımızda',
    'about.title1': 'Akademi ile',
    'about.title2': 'Web3 Dünyası',
    'about.title3': 'Arasındaki Köprü',
    'about.description1': "GTU Blockchain, Gebze Teknik Üniversitesi'nde öğrenci liderliğinde kurulan bir blockchain topluluğu. 2023'den beri blockchain teknolojisinde inovasyon ve teknik uzmanlık geliştirmeyi hedefliyoruz.",
    'about.description2': "Üyelerimize uygulamalı geliştirme fırsatları, sektör lideri eğitimler ve konferanslar sunuyoruz. Akademi ile gerçek dünya blockchain uygulamaları arasındaki boşluğu kapatarak, öğrencileri Web3'ün gelecek liderleri olacak şekilde yetiştiriyoruz.",
    'about.activeMembers': 'Aktif Üye',
    'about.events': 'Etkinlik',
    'about.development': 'Geliştirme',
    'about.developmentDesc': 'Gerçek dünya problemlerine çözüm üreten dApp\'ler.',
    'about.education': 'Eğitim & Bootcamp',
    'about.educationDesc': 'Solidity, Rust ve Web3 üzerine sektör lideri eğitimler.',
    'about.globalNetwork': 'Global Network',
    'about.globalNetworkDesc': 'Sektör liderleri ve global Web3 toplulukları ile güçlü bağlar.',
    'about.innovation': 'İnovasyon',
    'about.innovationDesc': 'Start-up fikirlerini hayata geçirmek için mentorluk.',
    
    // Vision Section
    'vision.badge': 'Vizyonumuz',
    'vision.title1': 'Blokzincir Ekosisteminde',
    'vision.title2': 'Küresel Bir Oyuncu Olmak',
    'vision.description': "GTU Blockchain olarak vizyonumuz, Türkiye'deki blokzincir farkındalığını artırmak ve geliştirdiğimiz projelerle uluslararası arenada ülkemizi temsil eden lider bir inovasyon merkezi haline gelmektir.",
    'vision.globalIntegration': 'Global Entegrasyon',
    'vision.globalIntegrationDesc': "Dünyanın önde gelen blokzincir vakıfları ve DAO'lar ile partnerlikler kurarak öğrencilerimize global fırsatlar sunmak.",
    'vision.sustainableInnovation': 'Sürdürülebilir İnovasyon',
    'vision.sustainableInnovationDesc': 'Sadece trendleri takip eden değil, trendleri belirleyen Ar-Ge projeleri üretmek ve teknolojiye yön vermek.',
    'vision.inclusiveCommunity': 'Kapsayıcı Topluluk',
    'vision.inclusiveCommunityDesc': 'Teknik olmayan disiplinlerden öğrencileri de ekosisteme dahil ederek multidisipliner çalışma kültürü oluşturmak.',
    
    // Achievements Section
    'achievements.badge': 'Başarılarımız',
    'achievements.title': 'Global Hackathon Zaferleri',
    'achievements.description': 'Dünya çapındaki hackathonlarda geliştirdiğimiz projeler ve kazandığımız ödüllerle Web3 ekosisteminde iz bırakıyoruz.',
    'achievements.seeDetails': 'Detayları Gör',
    'achievements.countriesVisited': 'Ülke Ziyareti',
    'achievements.hackathonParticipation': 'Hackathon Katılımı',
    'achievements.awardsWon': 'Ödül Kazanımı',
    'achievements.projectsDeveloped': 'Proje Geliştirme',
    'achievements.project': 'Proje',
    'achievements.about': 'Hakkında',
    'achievements.technologies': 'Teknolojiler',
    'achievements.smartContract': 'Akıllı Kontrat',
    'achievements.projectImages': 'Proje Görselleri',
    'achievements.projectTeam': 'Proje Ekibi',
    'achievements.operationsTeam': 'Operasyon Ekibi',
    'achievements.details': 'Detaylar',
    'achievements.close': 'Kapat',
    
    // Team Section
    'team.badge': 'EKİBİMİZ',
    'team.title': 'Yönetim ve Komiteler',
    'team.description': 'Birlikte öğrenen, üreten ve gelişen ekibimiz.',
    'team.board': 'Yönetim Kurulu',
    'team.committees': 'Çalışma Komiteleri',
    
    // Join Section
    'join.title': 'Geleceği Birlikte Kodlayalım',
    'join.description': 'GTU Blockchain ailesinin bir parçası olmak, projelerde yer almak ve kendini geliştirmek için hemen başvurunu yap.',
    'join.membershipForm': 'Üyelik Formu',
    'join.committeeForm': 'Komite Başvuru Formu',
    'join.contactUs': 'Bize Ulaşın',
    
    // Map Section
    'map.badge': 'Harita',
    'map.title': 'Katıldığımız Yarışmalar',
    'map.description': 'Dünya genelinde katıldığımız hackathon ve yarışmalar. Ülkelerin üzerine gelerek detayları görüntüleyin.',
    'map.tooltipTitle': 'Yarışma Detayları',
    
    // Footer
    'footer.description': "Gebze Teknik Üniversitesi'nin blokzincir odaklı teknoloji ve inovasyon topluluğu.",
    'footer.quickLinks': 'Hızlı Bağlantılar',
    'footer.home': 'Ana Sayfa',
    'footer.about': 'Hakkımızda',
    'footer.eventCalendar': 'Etkinlik Takvimi',
    'footer.blog': 'Blog (Medium)',
    'footer.notionRoadmap': 'Notion Yazılım Eğitimi Yol Haritası',
    'footer.contact': 'İletişim',
    'footer.copyright': '© 2026 GTU Blockchain Topluluğu. Tüm hakları saklıdır.',
    'footer.privacyPolicy': 'Gizlilik Politikası',
    'footer.termsOfUse': 'Kullanım Koşulları',
    'footer.scrollTop': 'Yukarı Çık',
    
    // Committees
    'committee.software.name': 'Yazılım & Ar-Ge',
    'committee.software.description': 'Blokzincir teknolojisinin temellerinden ileri seviye akıllı kontrat geliştirmelerine kadar geniş bir yelpazede projeler üretiyoruz. Hem teorik bilgi birikimini artırıyor hem de dApp geliştirme, güvenlik denetimi ve ölçeklenebilirlik çözümleri üzerine pratik çalışmalar yapıyoruz.',
    'committee.software.feature1': 'Solidity & Rust ile Akıllı Kontrat Geliştirme',
    'committee.software.feature2': 'Merkeziyetsiz Uygulama (dApp) Mimarisi',
    'committee.software.feature3': 'Web3 Entegrasyonu ve Frontend Geliştirme',
    'committee.software.feature4': 'Sıfır Bilgi Kanıtları (Zero-Knowledge Proofs)',
    'committee.software.feature5': 'Teknik Atölyeler ve Hackathon Hazırlıkları',
    
    'committee.media.name': 'Medya & İletişim',
    'committee.media.description': 'Topluluğumuzun sesini duyurmak ve blokzincir farkındalığını artırmak için stratejik içerikler üretiyoruz. Sosyal medya yönetimi, görsel tasarım, video prodüksiyon ve blog yazarlığı gibi alanlarda yetkinlik kazanarak ekosistemdeki gelişmeleri en doğru şekilde aktarıyoruz.',
    'committee.media.feature1': 'Sosyal Medya Stratejisi ve Yönetimi',
    'committee.media.feature2': 'İçerik Pazarlama ve Blog Yazarlığı',
    'committee.media.feature3': 'Grafik Tasarım ve Görsel İletişim',
    'committee.media.feature4': 'Video Prodüksiyon ve Kurgu',
    'committee.media.feature5': 'Topluluk Yönetimi ve Etkileşim',
    
    'committee.events.name': 'Etkinlik & Organizasyon',
    'committee.events.description': 'Ekosistemin önde gelen isimlerini öğrencilerle buluşturan zirveler, teknik eğitim kampları ve networking etkinlikleri düzenliyoruz. Organizasyon yeteneğimizi geliştirirken, sektör profesyonelleriyle birebir iletişim kurma fırsatı yakalıyor ve topluluk bağlarını güçlendiriyoruz.',
    'committee.events.feature1': 'Büyük Ölçekli Zirve ve Konferanslar',
    'committee.events.feature2': 'Teknik Bootcamp ve Eğitim Kampları',
    'committee.events.feature3': 'Hackathon ve Ideathon Organizasyonları',
    'committee.events.feature4': 'Networking ve Tanışma Toplantıları',
    'committee.events.feature5': 'Sponsorluk ve Paydaş İlişkileri',
    
    // Management Positions
    'position.boardChairman': 'Yönetim Kurulu Başkanı',
    'position.boardViceChairman': 'Yönetim Kurulu Başkan Yardımcısı',
    'position.socialMediaHead': 'Sosyal Medya Ekibi Başkanı',
    'position.softwareHead': 'Yazılım Ekibi Başkanı',
    'position.financeCoordinator': 'Finans Koordinatörü',
    
    // Achievements Data
    'achievement.ethrome.title': 'ETHRome 2025',
    'achievement.ethrome.location': 'Roma, İtalya',
    'achievement.ethrome.award': 'ENS Ödül Havuzu Kazananı',
    'achievement.ethrome.description': 'ENS altyapısını oyunlaştırılmış kimlik sistemiyle birleştiren BitBrawlers projesiyle, zincir üstü rekabet ve ödül deneyimi sunan yenilikçi bir Web3 uygulaması geliştirdik. Polkadot ekosisteminde Moonbase Alpha testnet üzerinde deploy edildi.',
    
    'achievement.ethistanbul.title': 'ETHİstanbul',
    'achievement.ethistanbul.location': 'İstanbul, Türkiye',
    'achievement.ethistanbul.award': 'RISE Track Birincisi',
    'achievement.ethistanbul.description': "Cryptle, Wordle'dan ilham alan, skill-first bir onchain kelime oyunudur. Yüksek performanslı RISE EVM üzerine inşa edilmiştir. Oyuncular ETH stake ederek bir raundu girerler ve dinamik zamanlayıcıyla yarışarak bulmacayı çözmeye çalışırlar.",
    
    'achievement.ethprague1.title': 'ETHPrague',
    'achievement.ethprague1.location': 'Prag, Çekya',
    'achievement.ethprague1.award': 'Blockscout Ödül Havuzu',
    'achievement.ethprague1.description': 'Vaultify, kullanıcıların herhangi bir cüzdan adresine zaman kilitli veya anlık dijital mesajlar, medya içerikleri ve token göndermelerine olanak tanıyan merkeziyetsiz bir Web3 mobil uygulamasıdır.',
    
    'achievement.ethprague2.title': 'ETHPrague',
    'achievement.ethprague2.location': 'Prag, Çekya',
    'achievement.ethprague2.award': 'Blockscout Ödül Havuzu',
    'achievement.ethprague2.description': 'ChronoTrade, bireylerin TIME token\'ları kullanarak beceri ve hizmet ticareti yapmasını sağlayan merkeziyetsiz bir zaman tabanlı hizmet alışverişi platformudur. 1 TIME = 1 saat.',
  },
  en: {
    // Navigation
    'nav.about': 'About Us',
    'nav.vision': 'Vision',
    'nav.achievements': 'Achievements',
    'nav.map': 'Map',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.join': 'Join',
    
    // Hero Section
    'hero.badge': "Gebze Technical University's Technology Hub",
    'hero.title1': 'Building',
    'hero.title2': 'the Future',
    'hero.title3': 'with',
    'hero.title4': 'Blockchain',
    'hero.description': 'As GTU Blockchain Community, we create innovative solutions at the heart of decentralized technologies, develop global projects, and build a student-focused ecosystem.',
    'hero.joinButton': 'Join the Community',
    'hero.projectsButton': 'Explore Our Projects',
    
    // About Section
    'about.badge': 'About Us',
    'about.title1': 'The Bridge Between',
    'about.title2': 'Academia and',
    'about.title3': 'the Web3 World',
    'about.description1': 'GTU Blockchain is a student-led blockchain community at Gebze Technical University. Since 2023, we have been aiming to develop innovation and technical expertise in blockchain technology.',
    'about.description2': "We offer our members hands-on development opportunities, industry-leading training, and conferences. By bridging the gap between academia and real-world blockchain applications, we are training students to become future leaders of Web3.",
    'about.activeMembers': 'Active Members',
    'about.events': 'Events',
    'about.development': 'Development',
    'about.developmentDesc': 'dApps that solve real-world problems.',
    'about.education': 'Education & Bootcamp',
    'about.educationDesc': 'Industry-leading training on Solidity, Rust, and Web3.',
    'about.globalNetwork': 'Global Network',
    'about.globalNetworkDesc': 'Strong connections with industry leaders and global Web3 communities.',
    'about.innovation': 'Innovation',
    'about.innovationDesc': 'Mentorship to bring startup ideas to life.',
    
    // Vision Section
    'vision.badge': 'Our Vision',
    'vision.title1': 'Becoming a Global Player',
    'vision.title2': 'in the Blockchain Ecosystem',
    'vision.description': 'Our vision as GTU Blockchain is to increase blockchain awareness in Turkey and become a leading innovation center representing our country in the international arena with the projects we develop.',
    'vision.globalIntegration': 'Global Integration',
    'vision.globalIntegrationDesc': "Offering global opportunities to our students by establishing partnerships with the world's leading blockchain foundations and DAOs.",
    'vision.sustainableInnovation': 'Sustainable Innovation',
    'vision.sustainableInnovationDesc': 'Producing R&D projects that set trends rather than just following them, and shaping technology.',
    'vision.inclusiveCommunity': 'Inclusive Community',
    'vision.inclusiveCommunityDesc': 'Creating a multidisciplinary working culture by including students from non-technical disciplines in the ecosystem.',
    
    // Achievements Section
    'achievements.badge': 'Our Achievements',
    'achievements.title': 'Global Hackathon Victories',
    'achievements.description': 'We are making our mark in the Web3 ecosystem with the projects we develop and the awards we win at hackathons around the world.',
    'achievements.seeDetails': 'See Details',
    'achievements.countriesVisited': 'Countries Visited',
    'achievements.hackathonParticipation': 'Hackathon Participation',
    'achievements.awardsWon': 'Awards Won',
    'achievements.projectsDeveloped': 'Projects Developed',
    'achievements.project': 'Project',
    'achievements.about': 'About',
    'achievements.technologies': 'Technologies',
    'achievements.smartContract': 'Smart Contract',
    'achievements.projectImages': 'Project Images',
    'achievements.projectTeam': 'Project Team',
    'achievements.operationsTeam': 'Operations Team',
    'achievements.details': 'Details',
    'achievements.close': 'Close',
    
    // Team Section
    'team.badge': 'OUR TEAM',
    'team.title': 'Management and Committees',
    'team.description': 'Our team that learns, produces, and grows together.',
    'team.board': 'Board of Directors',
    'team.committees': 'Working Committees',
    
    // Join Section
    'join.title': "Let's Code the Future Together",
    'join.description': 'Apply now to be part of the GTU Blockchain family, participate in projects, and develop yourself.',
    'join.membershipForm': 'Membership Form',
    'join.committeeForm': 'Committee Application Form',
    'join.contactUs': 'Contact Us',
    
    // Map Section
    'map.badge': 'Map',
    'map.title': 'Our Hackathon Participation',
    'map.description': 'Hackathons and competitions we participated in around the world. Hover over countries to view details.',
    'map.tooltipTitle': 'Competition Details',
    
    // Footer
    'footer.description': "Gebze Technical University's blockchain-focused technology and innovation community.",
    'footer.quickLinks': 'Quick Links',
    'footer.home': 'Home',
    'footer.about': 'About Us',
    'footer.eventCalendar': 'Event Calendar',
    'footer.blog': 'Blog (Medium)',
    'footer.notionRoadmap': 'Notion Software Education Roadmap',
    'footer.contact': 'Contact',
    'footer.copyright': '© 2026 GTU Blockchain Community. All rights reserved.',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.termsOfUse': 'Terms of Use',
    'footer.scrollTop': 'Scroll to Top',
    
    // Committees
    'committee.software.name': 'Software & R&D',
    'committee.software.description': 'We produce projects covering a wide range from the fundamentals of blockchain technology to advanced smart contract development. We both increase our theoretical knowledge and conduct practical work on dApp development, security auditing, and scalability solutions.',
    'committee.software.feature1': 'Smart Contract Development with Solidity & Rust',
    'committee.software.feature2': 'Decentralized Application (dApp) Architecture',
    'committee.software.feature3': 'Web3 Integration and Frontend Development',
    'committee.software.feature4': 'Zero-Knowledge Proofs',
    'committee.software.feature5': 'Technical Workshops and Hackathon Preparations',
    
    'committee.media.name': 'Media & Communications',
    'committee.media.description': 'We produce strategic content to amplify our community\'s voice and increase blockchain awareness. By gaining competence in areas such as social media management, visual design, video production, and blog writing, we convey developments in the ecosystem in the most accurate way.',
    'committee.media.feature1': 'Social Media Strategy and Management',
    'committee.media.feature2': 'Content Marketing and Blog Writing',
    'committee.media.feature3': 'Graphic Design and Visual Communication',
    'committee.media.feature4': 'Video Production and Editing',
    'committee.media.feature5': 'Community Management and Engagement',
    
    'committee.events.name': 'Events & Organization',
    'committee.events.description': 'We organize summits, technical training camps, and networking events that bring together leading figures in the ecosystem with students. While developing our organizational skills, we seize the opportunity to communicate directly with industry professionals and strengthen community ties.',
    'committee.events.feature1': 'Large-Scale Summits and Conferences',
    'committee.events.feature2': 'Technical Bootcamps and Training Camps',
    'committee.events.feature3': 'Hackathon and Ideathon Organizations',
    'committee.events.feature4': 'Networking and Meet-up Events',
    'committee.events.feature5': 'Sponsorship and Stakeholder Relations',
    
    // Management Positions
    'position.boardChairman': 'Chairman of the Board',
    'position.boardViceChairman': 'Vice Chairman of the Board',
    'position.socialMediaHead': 'Social Media Team Lead',
    'position.softwareHead': 'Software Team Lead',
    'position.financeCoordinator': 'Finance Coordinator',
    
    // Achievements Data
    'achievement.ethrome.title': 'ETHRome 2025',
    'achievement.ethrome.location': 'Rome, Italy',
    'achievement.ethrome.award': 'ENS Prize Pool Winner',
    'achievement.ethrome.description': 'We developed an innovative Web3 application offering on-chain competition and reward experience with the BitBrawlers project, which combines ENS infrastructure with a gamified identity system. Deployed on the Moonbase Alpha testnet in the Polkadot ecosystem.',
    
    'achievement.ethistanbul.title': 'ETHIstanbul',
    'achievement.ethistanbul.location': 'Istanbul, Turkey',
    'achievement.ethistanbul.award': 'RISE Track Winner',
    'achievement.ethistanbul.description': 'Cryptle is a skill-first onchain word game inspired by Wordle. Built on high-performance RISE EVM. Players enter a round by staking ETH and compete with a dynamic timer to solve the puzzle.',
    
    'achievement.ethprague1.title': 'ETHPrague',
    'achievement.ethprague1.location': 'Prague, Czech Republic',
    'achievement.ethprague1.award': 'Blockscout Prize Pool',
    'achievement.ethprague1.description': 'Vaultify is a decentralized Web3 mobile application that allows users to send time-locked or instant digital messages, media content, and tokens to any wallet address.',
    
    'achievement.ethprague2.title': 'ETHPrague',
    'achievement.ethprague2.location': 'Prague, Czech Republic',
    'achievement.ethprague2.award': 'Blockscout Prize Pool',
    'achievement.ethprague2.description': 'ChronoTrade is a decentralized time-based service exchange platform that enables individuals to trade skills and services using TIME tokens. 1 TIME = 1 hour.',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
