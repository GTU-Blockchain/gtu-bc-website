import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import statsData from '../data/stats.json';

interface TeamMember {
  name: string;
  role: string;
  telegram?: string;
}

type AwardType = 'first' | 'second' | 'third' | 'pool';

interface Achievement {
  id: number;
  titleKey: string;
  locationKey: string;
  date: string;
  project: string;
  awardKey: string;
  awardType?: AwardType;
  descriptionKey: string;
  image?: string;
  flag: string;
  gallery?: string[];
  github?: string;
  taikai?: string;
  telegram?: string;
  team?: TeamMember[];
  nonTechnicalTeam?: TeamMember[];
  technologies?: string[];
  contractAddress?: string;
  chain?: string;
}

interface Stats {
  countriesVisited: number;
  hackathonParticipation: number;
  awardsWon: number;
  projectsDeveloped: number;
}

const stats = statsData as Stats;

const getAwardEmoji = (awardType: AwardType): string => {
  switch (awardType) {
    case 'first': return '🥇';
    case 'second': return '🥈';
    case 'third': return '🥉';
    case 'pool': return '🏅';
    default: return '';
  }
};

const achievements: Achievement[] = [
  {
    id: 1,
    titleKey: "achievement.ethrome.title",
    locationKey: "achievement.ethrome.location",
    date: "2025",
    project: "BitBrawlers",
    awardKey: "achievement.ethrome.award",
    awardType: "pool",
    descriptionKey: "achievement.ethrome.description",
    image: "/achievements/roma.jpeg",
    flag: "🇮🇹",
    gallery: ["/achievements/roma.jpeg"],
    github: "https://github.com/GTU-Blockchain/bitbrawlers-ethrome-2025",
    taikai: "https://taikai.network/ethrome/hackathons/2025/projects/cmgx8dls101x68697ibhzz9g7/idea",
    team: [
      { name: "Umut Satır", role: "Developer", telegram: "@umutsatir" },
      { name: "Melik Çaymaz", role: "Developer", telegram: "@melik_cymz" },
      { name: "Selin Bardakçı", role: "Developer", telegram: "@SelinBardakci" },
      { name: "Yusuf Alperen Çelik", role: "Developer", telegram: "@AlteasV" }
    ],
    technologies: ["Polkadot", "ENS", "Scaffold-ETH 2", "Moonbase Alpha"],
    contractAddress: "0x082abd8f4b04ecfe6ed7ffe1515659a0bd9f8750",
    chain: "Moonbase Alpha (Chain ID: 1287)"
  },
  {
    id: 2,
    titleKey: "achievement.ethistanbul.title",
    locationKey: "achievement.ethistanbul.location",
    date: "2025",
    project: "Cryptle",
    awardKey: "achievement.ethistanbul.award",
    awardType: "first",
    descriptionKey: "achievement.ethistanbul.description",
    image: "/achievements/istanbul.jpeg",
    flag: "🇹🇷",
    gallery: [
      "/achievements/cryptle/cryptle-web1.png",
      "/achievements/cryptle/cryptle-web2.png"
    ],
    github: "https://github.com/GTU-Blockchain/cryptle-ethistanbul-2025",
    taikai: "https://taikai.network/ethistanbul/hackathons/ethistanbul-2025/projects/cmf8wq4jo01qbsiblp23cz5ne/idea",
    team: [
      { name: "Bengisu Duru", role: "Developer", telegram: "@bengisuduru" },
      { name: "Yusuf Alperen Çelik", role: "Developer", telegram: "@AlteasV" },
      { name: "Umut Satır", role: "Developer", telegram: "@umutsatir" },
      { name: "Selin Bardakçı", role: "Developer", telegram: "@selinbardakci" }
    ],
    nonTechnicalTeam: [
      { name: "Eren Yılmaz", role: "Operations", telegram: "@erenylmz" },
      { name: "Yağmur Meral", role: "Operations", telegram: "" }
    ],
    technologies: ["RISE EVM", "Solidity", "Onchain Gaming", "Commit-Reveal"],
    chain: "RISE EVM"
  },
  {
    id: 3,
    titleKey: "achievement.ethprague1.title",
    locationKey: "achievement.ethprague1.location",
    date: "2024",
    project: "Vaultify",
    awardKey: "achievement.ethprague1.award",
    awardType: "pool",
    descriptionKey: "achievement.ethprague1.description",
    image: "/achievements/prag.jpeg",
    flag: "🇨🇿",
    gallery: ["/achievements/prag.jpeg"],
    github: "https://ethglobal.com/showcase/vaultify-cw3ow",
    taikai: "https://drive.google.com/file/d/1RP0pTwoLdm5YjLSB2nLALqWEJtSFB3e3/view?usp=sharing",
    team: [
      { name: "Selin Bardakçı", role: "Developer", telegram: "@selinbardakci" },
      { name: "Arda Ceylan", role: "Developer", telegram: "" },
      { name: "Salih Cengiz", role: "Developer", telegram: "" },
      { name: "Bengisu Duru", role: "Developer", telegram: "@bengisuduru" }
    ],
    technologies: ["Filecoin", "IPFS", "Lighthouse", "React Native", "Flow", "Blockscout"],
    chain: "EVM + Flow"
  },
  {
    id: 4,
    titleKey: "achievement.ethprague2.title",
    locationKey: "achievement.ethprague2.location",
    date: "2024",
    project: "ChronoTrade",
    awardKey: "achievement.ethprague2.award",
    awardType: "pool",
    descriptionKey: "achievement.ethprague2.description",
    image: "/achievements/prag.jpeg",
    flag: "🇨🇿",
    gallery: ["/achievements/prag.jpeg"],
    github: "https://ethglobal.com/showcase/chronotrade-yoxnf",
    team: [
      { name: "Yusuf Alperen Çelik", role: "Developer", telegram: "@AlteasV" },
      { name: "Umut Satır", role: "Developer", telegram: "@umutsatir" },
      { name: "Melik Ahmet Caymazoğlu", role: "Developer", telegram: "@melik_cymz" },
      { name: "Mehmet Nuri Başa", role: "Developer", telegram: "" }
    ],
    technologies: ["Flow", "Solidity", "React", "WAGMI", "Blockscout", "ERC-20"],
    chain: "Flow EVM"
  }
];

// Technology badge colors
const techColors: Record<string, string> = {
  "Polkadot": "bg-pink-500",
  "ENS": "bg-blue-500",
  "Scaffold-ETH 2": "bg-purple-500",
  "Moonbase Alpha": "bg-cyan-500",
  "RISE EVM": "bg-orange-500",
  "Solidity": "bg-indigo-500",
  "Onchain Gaming": "bg-green-500",
  "Commit-Reveal": "bg-teal-500",
  "Filecoin": "bg-emerald-500",
  "IPFS": "bg-sky-500",
  "Lighthouse": "bg-amber-500",
  "React Native": "bg-cyan-600",
  "Web3": "bg-violet-500",
  "Flow": "bg-lime-500",
  "Blockscout": "bg-slate-600",
  "WalletConnect": "bg-blue-600",
  "WAGMI": "bg-rose-500",
  "ERC-20": "bg-yellow-500",
  "React": "bg-sky-400"
};

const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const { t } = useLanguage();

  const nextImage = () => {
    if (selectedAchievement?.gallery) {
      setActiveGalleryIndex((prev) => 
        prev === selectedAchievement.gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedAchievement?.gallery) {
      setActiveGalleryIndex((prev) => 
        prev === 0 ? selectedAchievement.gallery!.length - 1 : prev - 1
      );
    }
  };

  const openModal = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
    setActiveGalleryIndex(0);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedAchievement(null);
    };
    if (selectedAchievement) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [selectedAchievement]);

  return (
    <section className="py-24 bg-gradient-to-b from-background-light to-white" id="achievements">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">{t('achievements.badge')}</h2>
          <h3 className="text-4xl font-bold text-navy-dark leading-tight">{t('achievements.title')}</h3>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            {t('achievements.description')}
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              onClick={() => openModal(achievement)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-primary/30 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-navy-dark to-primary overflow-hidden">
                {achievement.image ? (
                  <img
                    src={achievement.image}
                    alt={t(achievement.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-white/80">
                    <span className="text-6xl mb-2">{achievement.flag}</span>
                    <span className="material-symbols-outlined text-5xl opacity-50">emoji_events</span>
                  </div>
                )}
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-transparent to-transparent" />
                
                {/* Award Badge */}
                {achievement.awardKey && achievement.awardType && (
                  <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg">
                    {getAwardEmoji(achievement.awardType)}
                  </div>
                )}

                {/* Title Overlay */}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xl">{achievement.flag}</span>
                    <h4 className="text-lg font-bold text-white">{t(achievement.titleKey)}</h4>
                  </div>
                  <p className="text-white/80 text-xs">{t(achievement.locationKey)} • {achievement.date}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-base">code</span>
                  <span className="font-bold text-navy-dark text-sm">{achievement.project}</span>
                </div>
                <p className="text-gray-600 text-xs line-clamp-2">
                  {t(achievement.descriptionKey)}
                </p>
                
                {/* Technologies Preview */}
                {achievement.technologies && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {achievement.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                    {achievement.technologies.length > 2 && (
                      <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded">
                        +{achievement.technologies.length - 2}
                      </span>
                    )}
                  </div>
                )}
                
                {/* Read More */}
                <div className="mt-3 flex items-center text-primary font-medium text-xs group-hover:gap-1 transition-all">
                  <span>{t('achievements.seeDetails')}</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="bg-navy-dark rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-4xl font-extrabold text-primary mb-1">{stats.countriesVisited}+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">{t('achievements.countriesVisited')}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary mb-1">{stats.hackathonParticipation}+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">{t('achievements.hackathonParticipation')}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary mb-1">{stats.awardsWon}+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">{t('achievements.awardsWon')}</div>
          </div>
          <div>
            <div className="text-4xl font-extrabold text-primary mb-1">{stats.projectsDeveloped}+</div>
            <div className="text-white/70 text-sm uppercase tracking-wider">{t('achievements.projectsDeveloped')}</div>
          </div>
        </div>

        {/* Enhanced Modal for Achievement Details */}
        {selectedAchievement && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedAchievement(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Main Image */}
              <div className="relative h-72 md:h-80 bg-gradient-to-br from-navy-dark to-primary">
                {selectedAchievement.image ? (
                  <img
                    src={selectedAchievement.image}
                    alt={t(selectedAchievement.titleKey)}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/80">
                    <span className="text-8xl">{selectedAchievement.flag}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedAchievement(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>

                {/* Title */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-4xl">{selectedAchievement.flag}</span>
                    <div>
                      <h3 className="text-3xl font-bold text-white">{t(selectedAchievement.titleKey)}</h3>
                      <p className="text-white/80">{t(selectedAchievement.locationKey)} • {selectedAchievement.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8">
                {/* Award Badge */}
                {selectedAchievement.awardKey && (
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
                    <span className="material-symbols-outlined">emoji_events</span>
                    {selectedAchievement.awardType && getAwardEmoji(selectedAchievement.awardType)}{' '}
                    {t(selectedAchievement.awardKey)}
                  </div>
                )}

                {/* Two Column Layout for Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Project Info */}
                  <div>
                    {/* Project Name */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{t('achievements.project')}</h4>
                      <p className="text-2xl font-bold text-navy-dark">{selectedAchievement.project}</p>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{t('achievements.about')}</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {t(selectedAchievement.descriptionKey)}
                      </p>
                    </div>

                    {/* Technologies */}
                    {selectedAchievement.technologies && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t('achievements.technologies')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedAchievement.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`${techColors[tech] || 'bg-gray-500'} text-white text-sm font-medium px-3 py-1 rounded-full`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Contract Info */}
                    {selectedAchievement.contractAddress && (
                      <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{t('achievements.smartContract')}</h4>
                        <p className="text-xs text-gray-500 mb-1">{selectedAchievement.chain}</p>
                        <code className="text-xs bg-gray-200 px-2 py-1 rounded text-navy-dark break-all">
                          {selectedAchievement.contractAddress}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Right Column - Gallery & Team */}
                  <div>
                    {/* Project Gallery */}
                    {selectedAchievement.gallery && selectedAchievement.gallery.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t('achievements.projectImages')}</h4>
                        <div className="relative rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={selectedAchievement.gallery[activeGalleryIndex]}
                            alt={`${selectedAchievement.project} screenshot ${activeGalleryIndex + 1}`}
                            className="w-full h-48 object-cover"
                            onError={(e) => {
                              e.currentTarget.src = selectedAchievement.image || '';
                              e.currentTarget.onerror = null;
                            }}
                          />
                          {/* Gallery Navigation */}
                          {selectedAchievement.gallery.length > 1 && (
                            <>
                              <button
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">chevron_left</span>
                              </button>
                              <button
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                              >
                                <span className="material-symbols-outlined text-sm">chevron_right</span>
                              </button>
                              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                                {selectedAchievement.gallery.map((_, idx) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveGalleryIndex(idx)}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                      idx === activeGalleryIndex ? 'bg-white' : 'bg-white/50'
                                    }`}
                                  />
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Team Members - Proje Ekibi */}
                    {selectedAchievement.team && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t('achievements.projectTeam')}</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedAchievement.team.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-primary to-navy-dark rounded-full flex items-center justify-center text-white font-bold">
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-navy-dark text-sm">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Non-Technical Team */}
                    {selectedAchievement.nonTechnicalTeam && (
                      <div className="mb-6">
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{t('achievements.operationsTeam')}</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {selectedAchievement.nonTechnicalTeam.map((member, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                              <div className="w-10 h-10 min-w-10 min-h-10 flex-shrink-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-bold">
                                {member.name.charAt(0)}
                              </div>
                              <div>
                                <p className="font-medium text-navy-dark text-sm">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.role}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-gray-100">
                  {selectedAchievement.github && (
                    <a
                      href={selectedAchievement.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-xl transition-colors"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {selectedAchievement.taikai && (
                    <a
                      href={selectedAchievement.taikai}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-colors"
                    >
                      <span className="material-symbols-outlined">rocket_launch</span>
                      {t('achievements.details')}
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedAchievement(null)}
                    className="flex-1 sm:flex-none px-5 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-colors"
                  >
                    {t('achievements.close')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AchievementsSection;
