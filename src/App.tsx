import { useState, useEffect } from 'react'
import JoinSection from './components/JoinSection'
import committeesData from './data/committees.json';
import managementData from './data/management.json';
import socialLinksData from './data/socialLinks.json';
import CommitteeCard from './components/CommitteeCard';
import TeamMemberCard from './components/TeamMemberCard';
import { RiTwitterXFill } from "react-icons/ri";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

const iconMap: { [key: string]: React.ElementType } = {
  twitter: RiTwitterXFill,
  linkedin: FaLinkedin,
  github: SiGithub
};

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
      <section className="py-24 bg-white relative" id="about">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Hakkımızda</h2>
              <h3 className="text-4xl font-bold text-navy-dark mb-6 leading-tight">Teknolojiyi Sadece Tüketen Değil, Üreten Bir Nesil</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                2018 yılında kurulan GTU Blockchain, Gebze Teknik Üniversitesi bünyesinde blokzincir teknolojisine ilgi duyan öğrencileri bir araya getiren, Türkiye'nin en aktif öğrenci topluluklarından biridir.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Misyonumuz, üyelerimize teknik ve teorik yetkinlik kazandırarak onları sektöre hazırlamak ve küresel ölçekte rekabet edebilir projeler geliştirmektir.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-extrabold text-primary">500+</span>
                  <span className="text-sm font-medium text-gray-500 uppercase">Aktif Üye</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-4xl font-extrabold text-primary">50+</span>
                  <span className="text-sm font-medium text-gray-500 uppercase">Etkinlik &amp; Workshop</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h4 className="text-xl font-bold text-navy-dark mb-2">Eğitim</h4>
                <p className="text-sm text-gray-600">Solidity, Rust ve Web3 temelleri üzerine kapsamlı bootcamp programları.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group mt-0 sm:mt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">code_blocks</span>
                </div>
                <h4 className="text-xl font-bold text-navy-dark mb-2">Geliştirme</h4>
                <p className="text-sm text-gray-600">Gerçek dünya problemlerine çözüm üreten dApp ve protokol geliştirme.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">hub</span>
                </div>
                <h4 className="text-xl font-bold text-navy-dark mb-2">Networking</h4>
                <p className="text-sm text-gray-600">Sektör liderleri ve global topluluklarla güçlü bağlantılar.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 hover:border-primary/30 transition-colors group mt-0 sm:mt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">rocket_launch</span>
                </div>
                <h4 className="text-xl font-bold text-navy-dark mb-2">Kuluçka</h4>
                <p className="text-sm text-gray-600">Üyelerimizin start-up fikirlerini hayata geçirmeleri için mentorluk desteği.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-navy-dark text-white relative overflow-hidden" id="vision">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-navy-medium skew-x-12 opacity-50 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Vizyonumuz</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Blokzincir Ekosisteminde <br />Küresel Bir Oyuncu Olmak</h3>
            <p className="text-gray-300 text-lg">
              GTU Blockchain olarak vizyonumuz, Türkiye'deki blokzincir farkındalığını artırmak ve geliştirdiğimiz projelerle uluslararası arenada ülkemizi temsil eden lider bir inovasyon merkezi haline gelmektir.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">public</span>
              <h4 className="text-xl font-bold mb-3">Global Entegrasyon</h4>
              <p className="text-gray-400">Dünyanın önde gelen blokzincir vakıfları ve DAO'ları ile partnerlikler kurarak öğrencilerimize global fırsatlar sunmak.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">lightbulb</span>
              <h4 className="text-xl font-bold mb-3">Sürdürülebilir İnovasyon</h4>
              <p className="text-gray-400">Sadece trendleri takip eden değil, trendleri belirleyen Ar-Ge projeleri üretmek.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-4xl text-primary mb-4">diversity_3</span>
              <h4 className="text-xl font-bold mb-3">Kapsayıcı Topluluk</h4>
              <p className="text-gray-400">Teknik olmayan disiplinlerden öğrencileri de ekosisteme dahil ederek multidisipliner çalışma kültürü oluşturmak.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Map Section */}
      <section className="py-24 bg-background-light" id="achievements">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Başarılarımız</h2>
              <h3 className="text-4xl font-bold text-navy-dark leading-tight">Sınırları Aşan Projeler</h3>
              <p className="mt-4 text-gray-600 text-lg">
                Hackathon zaferlerimiz, uluslararası konferans katılımlarımız ve global iş birliklerimizle iz bırakıyoruz.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="flex items-center gap-2 text-navy-dark font-bold">
                <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                Canlı Etki Haritası
              </div>
            </div>
          </div>
          {/* Map Visualization */}
          <div className="relative w-full h-[500px] bg-[#e1eef4] rounded-2xl border border-[#d1e3e5] overflow-hidden mb-12 shadow-inner group">
            {/* Background Map Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-60"
              data-alt="Stylized world map showing continents in light blue tones"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhGXWZT0_dkgfHm9Q9I2bZEjf2cjORU-KJRQpcwtbwihcODYVblO47CahAExmaPDZmVOQR1ykoXzgKyh3VkWAwxhNHsDM8EaGj2SL8k51B9HgOtPyUbdsLEgO2hQlxBwXKI1UpU8WKfXq70eEE9nvu6UJMyN_s5-63YfvjGy_jv0IHVIRk4jGI7HOZIDi6GMnjy2QFZHTHFbVbXNsbwbxKMEv0jETbN12hMD3sf__ra0gLz80U33srhkECEzanjuyZeBpuZRPQR6U')", backgroundSize: "cover", filter: "hue-rotate(190deg) saturate(0.5)" }}
            ></div>
            {/* Markers (Simulated) */}
            {/* Turkey */}
            <div className="absolute top-[38%] left-[54%] group/marker cursor-pointer">
              <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-2 border-white shadow-lg"></div>
              <div className="w-4 h-4 bg-primary rounded-full absolute top-0 left-0 animate-ping opacity-75"></div>
              {/* Tooltip */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white p-3 rounded-lg shadow-xl w-48 hidden group-hover/marker:block z-20 transition-all">
                <h5 className="font-bold text-navy-dark text-sm border-b pb-1 mb-1">İstanbul, TR</h5>
                <p className="text-xs text-gray-600">ETHGünü &amp; Blockchain Economy Summit Partnerliği</p>
              </div>
            </div>
            {/* France */}
            <div className="absolute top-[32%] left-[49%] group/marker cursor-pointer">
              <div className="w-3 h-3 bg-navy-dark rounded-full relative z-10 border border-white"></div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-xl w-40 hidden group-hover/marker:block z-20">
                <h5 className="font-bold text-navy-dark text-xs">Paris, FR</h5>
                <p className="text-[10px] text-gray-600">EthCC Katılımı</p>
              </div>
            </div>
            {/* USA */}
            <div className="absolute top-[35%] left-[25%] group/marker cursor-pointer">
              <div className="w-3 h-3 bg-navy-dark rounded-full relative z-10 border border-white"></div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-xl w-40 hidden group-hover/marker:block z-20">
                <h5 className="font-bold text-navy-dark text-xs">Denver, USA</h5>
                <p className="text-[10px] text-gray-600">ETHDenver Hackathon Finalisti</p>
              </div>
            </div>
            {/* Singapore */}
            <div className="absolute top-[55%] left-[78%] group/marker cursor-pointer">
              <div className="w-3 h-3 bg-navy-dark rounded-full relative z-10 border border-white"></div>
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-white p-2 rounded-lg shadow-xl w-40 hidden group-hover/marker:block z-20">
                <h5 className="font-bold text-navy-dark text-xs">Singapur</h5>
                <p className="text-[10px] text-gray-600">Token2049 Bursu</p>
              </div>
            </div>
            {/* Map Overlay Stats */}
            <div className="absolute bottom-6 left-6 flex gap-4">
              <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 uppercase font-semibold">Ziyaret Edilen</div>
                <div className="text-xl font-bold text-navy-dark">8+ Ülke</div>
              </div>
              <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow-sm">
                <div className="text-xs text-gray-500 uppercase font-semibold">Kazanılan</div>
                <div className="text-xl font-bold text-navy-dark">15+ Ödül</div>
              </div>
            </div>
          </div>
          {/* Awards List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-primary pl-4 py-1">
              <h4 className="font-bold text-lg text-navy-dark">ETHGlobal İstanbul '23</h4>
              <p className="text-gray-600 text-sm mt-1">"En İyi DeFi Projesi" Finalisti</p>
            </div>
            <div className="border-l-4 border-navy-light pl-4 py-1">
              <h4 className="font-bold text-lg text-navy-dark">Avalanche Hacks</h4>
              <p className="text-gray-600 text-sm mt-1">1.lik Ödülü - Gaming Kategorisi</p>
            </div>
            <div className="border-l-4 border-navy-medium pl-4 py-1">
              <h4 className="font-bold text-lg text-navy-dark">Akbank Web3 Hackathon</h4>
              <p className="text-gray-600 text-sm mt-1">Jüri Özel Ödülü</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-2xl mb-2 uppercase tracking-wider">EKİBİMİZ</h2>
            <h3 className="text-5xl font-bold text-navy-dark">Yönetim ve Komiteler</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Topluluğumuzu ileriye taşıyan tutkulu liderler ve çalışkan ekiplerimiz.</p>
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
              {committeesData.map((committee) => {
                const isActive = activeCommittee === committee.id;

                return (
                  <div
                    key={committee.id}
                    onMouseEnter={() => setActiveCommittee(committee.id)}
                    onClick={() => setActiveCommittee(committee.id)}
                    className={`
                      relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group
                      ${isActive ? 'lg:flex-[3] bg-navy-dark shadow-2xl shadow-primary/20' : 'lg:flex-[1] bg-white border border-gray-200 hover:border-primary/50'}
                    `}
                  >
                    {/* Background Gradient Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-primary opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : ''}`}></div>

                    {/* Abstract Shapes */}
                    <div className={`absolute -right-20 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-50'}`}></div>

                    {/* Content Container */}
                    <div className="relative z-10 h-full p-8 flex flex-col justify-between">

                      {/* Header Part */}
                      <div className="flex items-start justify-between">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white/10 text-primary backdrop-blur-md' : 'bg-blue-50 text-navy-dark'}`}>
                          <span className="material-symbols-outlined text-3xl">{committee.icon}</span>
                        </div>

                        {/* Arrow Icon showing expansion state */}
                        <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 lg:hidden
                          ${isActive ? 'border-white/20 text-white rotate-90' : 'border-gray-200 text-gray-400'}
                        `}>
                          <span className="material-symbols-outlined">arrow_forward_ios</span>
                        </div>
                      </div>

                      {/* Title & Short Description */}
                      <div className="mt-auto">
                        <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-navy-dark'}`}>
                          {committee.name}
                        </h3>

                        {/* Expanded Content Wrapper */}
                        <div className={`grid transition-all duration-700 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 lg:opacity-100 lg:h-auto lg:block'}`}>
                          <div className="overflow-hidden">

                            {/* Description */}
                            <p className={`text-sm leading-relaxed mb-6 transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-500 line-clamp-2 lg:line-clamp-none lg:hidden'}`}>
                              {committee.description}
                            </p>

                            {/* Bullet Points */}
                            <div className={`space-y-3 ${isActive ? 'block' : 'hidden'}`}>
                              {committee.features && committee.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 translate-x-0 transition-transform duration-500 delay-[100ms]" style={{ transitionDelay: `${idx * 100}ms` }}>
                                  <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(29,151,170,0.8)]"></span>
                                  <span className="text-sm font-medium text-gray-200">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-lg">deployed_code</span>
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
                  <p>Gebze Teknik Üniversitesi, <br />Bilgisayar Mühendisliği Binası, Zemin Kat<br />41400 Gebze/Kocaeli</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <a className="hover:text-white transition-colors" href="mailto:info@gtublockchain.com">info@gtublockchain.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© 2024 GTU Blockchain Topluluğu. Tüm hakları saklıdır.</p>
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
