function AboutSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-white via-accent-light/5 to-white relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block">
            <span className="text-primary font-bold text-sm mb-3 uppercase tracking-widest inline-block px-4 py-2 bg-primary/5 rounded-full">
              Hakkımızda
            </span>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold text-navy-dark mb-8 leading-tight">
            Akademi ile <span className="bg-gradient-to-r from-primary via-accent-purple to-primary bg-clip-text text-transparent">Web3 Dünyası</span> Arasındaki Köprü
          </h3>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            GTU Blockchain, Gebze Teknik Üniversitesi'nde <strong className="text-navy-dark">öğrenci liderliğinde</strong> kurulan bir blockchain topluluğudur. 2018 yılından bu yana, blockchain teknolojisinde inovasyon ve teknik uzmanlık geliştirmeyi hedefliyoruz.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            <strong className="text-navy-dark">Misyonumuz</strong>, üyelerimize uygulamalı geliştirme fırsatları, sektör lideri eğitimler ve yıl boyunca düzenlenen konferanslar aracılığıyla güç vermektir. Akademi ile gerçek dünya blockchain uygulamaları arasındaki boşluğu kapatarak, öğrencileri Web3 alanının gelecek liderleri olacak bilgi ve becerilerle donatıyoruz.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-5xl font-extrabold bg-gradient-to-br from-primary to-accent-purple bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Aktif Üye</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-accent-purple/10 hover:border-accent-purple/30 transition-all hover:scale-105">
            <div className="text-5xl font-extrabold bg-gradient-to-br from-accent-purple to-primary bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Etkinlik</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all hover:scale-105">
            <div className="text-5xl font-extrabold bg-gradient-to-br from-primary to-navy-light bg-clip-text text-transparent mb-2">6</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Yıllık Tecrübe</div>
          </div>
          <div className="text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-accent-purple/10 hover:border-accent-purple/30 transition-all hover:scale-105">
            <div className="text-5xl font-extrabold bg-gradient-to-br from-accent-purple to-navy-dark bg-clip-text text-transparent mb-2">∞</div>
            <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Potansiyel</div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h4 className="text-xl font-bold text-navy-dark mb-3">Eğitim & Bootcamp</h4>
            <p className="text-gray-600 leading-relaxed">Solidity, Rust ve Web3 temelleri üzerine sektör lideri eğitim programları.</p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-accent-purple/40 hover:shadow-xl hover:shadow-accent-purple/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 rounded-xl flex items-center justify-center text-accent-purple mb-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">code_blocks</span>
            </div>
            <h4 className="text-xl font-bold text-navy-dark mb-3">Geliştirme</h4>
            <p className="text-gray-600 leading-relaxed">Gerçek dünya problemlerine çözüm üreten dApp ve protokol geliştirme.</p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">hub</span>
            </div>
            <h4 className="text-xl font-bold text-navy-dark mb-3">Global Network</h4>
            <p className="text-gray-600 leading-relaxed">Sektör liderleri ve global Web3 topluluklarıyla güçlü bağlantılar.</p>
          </div>

          <div className="group p-8 rounded-2xl bg-white/70 backdrop-blur-sm border border-gray-100 hover:border-accent-purple/40 hover:shadow-xl hover:shadow-accent-purple/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-14 h-14 bg-gradient-to-br from-accent-purple/10 to-accent-purple/5 rounded-xl flex items-center justify-center text-accent-purple mb-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">rocket_launch</span>
            </div>
            <h4 className="text-xl font-bold text-navy-dark mb-3">İnovasyon</h4>
            <p className="text-gray-600 leading-relaxed">Üyelerin start-up fikirlerini hayata geçirmesi için mentorluk desteği.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
