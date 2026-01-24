import { useState, useEffect } from 'react'
import JoinSection from './components/JoinSection'
import AchievementsSection from './components/AchievementsSection'
function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

      {/* Achievements Section */}
      <AchievementsSection />

      {/* Team Section */}
      <section className="py-24 bg-white" id="team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">Ekibimiz</h2>
            <h3 className="text-4xl font-bold text-navy-dark">Yönetim ve Komiteler</h3>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">Topluluğumuzu ileriye taşıyan tutkulu liderler ve çalışkan ekiplerimiz.</p>
          </div>
          {/* Board */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">Yönetim Kurulu</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Member 1 */}
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of Chairman" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbfCJT5MxjEqTyXVk2CUZiPmsuZFgdHT5qS4h929UqxmoNmxKBepavgtOi1MwOaXuRvw7Y3lDKxoywF2rNQhpYx0s3WUNV5tUuEBj2tAMEIHmdVN2_5XJMZ6x_84yHpt03MOsGzSHSJiksdC0S1-al7jS-AwRosUIevjKKa_kAwtOWqWaS7_K6qMoL0fXm1sw-dfiiT9yM-zx0XmlxrUtlYQX4nNBPTwZ_MbAloPhRHQfmy0OGAKc_80fTY-zNrvz_f_n7qmp17BQ')" }}></div>
                </div>
                <h5 className="text-lg font-bold text-navy-dark">Ahmet Yılmaz</h5>
                <p className="text-primary font-medium text-sm mb-2">Başkan</p>
                <div className="flex gap-2">
                  <a className="text-gray-400 hover:text-[#0077b5]" href="#"><span className="material-symbols-outlined text-lg">work</span></a> {/* LinkedIn */}
                  <a className="text-gray-400 hover:text-[#1DA1F2]" href="#"><span className="material-symbols-outlined text-lg">flutter_dash</span></a> {/* Twitter */}
                </div>
              </div>
              {/* Member 2 */}
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of Vice Chairman" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDl3LRWRm9a_bcidolzOtI717Dz_duNQlu6xY53UqqX9eRd20Tj1giQlKPT_zQM6TxKhm0hJrp2cZFH9AsPEVoOL8cyy_IkjXteA-6G4kGMVDRpg2PvXYH2PSgEgrCxHQeJUn5SWbzmwJPrvvlmCMkmM0s7cE1-D6eIUwLx5ayi2C_8qaulvA7JlF2fF098RBTm_GGP5DQ2GlVDCUF4hHidh1DI_R3IXap3pNcxYqnZm_KG557OgwQJM7LChNYHlzDHhXm4SCH0kLY')" }}></div>
                </div>
                <h5 className="text-lg font-bold text-navy-dark">Zeynep Kaya</h5>
                <p className="text-primary font-medium text-sm mb-2">Başkan Yardımcısı</p>
                <div className="flex gap-2">
                  <a className="text-gray-400 hover:text-[#0077b5]" href="#"><span className="material-symbols-outlined text-lg">work</span></a>
                  <a className="text-gray-400 hover:text-[#1DA1F2]" href="#"><span className="material-symbols-outlined text-lg">flutter_dash</span></a>
                </div>
              </div>
              {/* Member 3 */}
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of Dev Lead" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDUvMVU6Sre4OsP6eTJfYXy4Jq3NWufFvZFGjab_0QXsHjb1cmL371df01-LH-Z-P3POCzg-mFMjYJjA2243redTwR7ecko5Q4l3twAEuWpM9eIb5K-ANbcaZrZJlz3IzJEkmcbBfWUWZ4aD51lww9uQjbqYXaM6xiKI1U5df94wwqLgUzEta9U8Bkaq8ZnGm7EmVZYLHr2GjLZ-p6-GQs1O-RExTMfZ7395N4UcZ09tTUBXWrRMxCBr95p2LvnEBlYAxIrHk4rAZU')" }}></div>
                </div>
                <h5 className="text-lg font-bold text-navy-dark">Mehmet Demir</h5>
                <p className="text-primary font-medium text-sm mb-2">Teknik Lider</p>
                <div className="flex gap-2">
                  <a className="text-gray-400 hover:text-[#0077b5]" href="#"><span className="material-symbols-outlined text-lg">work</span></a>
                  <a className="text-gray-400 hover:text-[#1DA1F2]" href="#"><span className="material-symbols-outlined text-lg">flutter_dash</span></a>
                </div>
              </div>
              {/* Member 4 */}
              <div className="group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4 bg-gray-100 relative">
                  <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300" data-alt="Portrait of Community Manager" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA57r4k2wlxy4o96r0lgeM8JzdAsvvWbdmq4ZQOKVa4Fr9DFQAdEvAxjT5L-OtlgdSxALQRJ17lfSUiom5fbDAbeD1-c0MCVYxupEOGuARRgO9s8R3S8MA1gXKUbftO66Ew_YEL3qYMHIfPUmpmrYI2qAreXeAqwxtCZDYSrs7qOBmaLaAtkfDgq664wD5K4I1ycj_XsKAKpokCDdmMi-xfnjTvCkTtF-DaizQWPDFcpBH2jGbF-vlgb2_5VZ-LHoQ5ZYL24i-cfp8')" }}></div>
                </div>
                <h5 className="text-lg font-bold text-navy-dark">Ayşe Çelik</h5>
                <p className="text-primary font-medium text-sm mb-2">Topluluk Yöneticisi</p>
                <div className="flex gap-2">
                  <a className="text-gray-400 hover:text-[#0077b5]" href="#"><span className="material-symbols-outlined text-lg">work</span></a>
                  <a className="text-gray-400 hover:text-[#1DA1F2]" href="#"><span className="material-symbols-outlined text-lg">flutter_dash</span></a>
                </div>
              </div>
            </div>
          </div>
          {/* Committees Summary */}
          <div>
            <h4 className="text-2xl font-bold text-navy-dark mb-8 border-b border-gray-100 pb-2">Çalışma Komiteleri</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <h5 className="text-lg font-bold text-navy-dark mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">terminal</span>
                  Yazılım &amp; Ar-Ge
                </h5>
                <p className="text-sm text-gray-600">Akıllı kontratlar, dApp geliştirme ve teknik eğitimlerin organizasyonu.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <h5 className="text-lg font-bold text-navy-dark mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">campaign</span>
                  Medya &amp; İletişim
                </h5>
                <p className="text-sm text-gray-600">Sosyal medya yönetimi, içerik üretimi ve PR çalışmaları.</p>
              </div>
              <div className="p-6 rounded-xl bg-gray-50 border border-gray-100">
                <h5 className="text-lg font-bold text-navy-dark mb-2 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">event</span>
                  Etkinlik &amp; Organizasyon
                </h5>
                <p className="text-sm text-gray-600">Zirveler, hackathonlar ve tanışma toplantılarının planlanması.</p>
              </div>
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
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all" href="#">
                  {/* Twitter Icon simulation */}
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all" href="#">
                  {/* LinkedIn Icon simulation */}
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fillRule="evenodd"></path></svg>
                </a>
                <a className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all" href="#">
                  {/* GitHub Icon simulation */}
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fillRule="evenodd"></path></svg>
                </a>
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
