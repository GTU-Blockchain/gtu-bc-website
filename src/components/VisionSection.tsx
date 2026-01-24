function VisionSection() {
  return (
    <section className="py-32 bg-gradient-to-br from-navy-dark via-navy-medium to-navy-dark text-white relative overflow-hidden" id="vision">
      {/* Modern abstract background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-purple/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-light/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-block mb-6">
            <span className="text-accent-light font-bold text-sm uppercase tracking-widest inline-block px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              Vizyonumuz
            </span>
          </div>
          <h3 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-accent-light via-primary to-accent-purple bg-clip-text text-transparent">
              Web3 Ekosisteminde
            </span>
            <br />
            <span className="text-white">Küresel Bir Lider Olmak</span>
          </h3>
          <p className="text-xl text-gray-300 leading-relaxed">
            GTU Blockchain olarak vizyonumuz, Türkiye'deki blockchain farkındalığını artırmak ve geliştirdiğimiz yenilikçi projelerle uluslararası arenada ülkemizi temsil eden <strong className="text-accent-light">öncü bir inovasyon merkezi</strong> haline gelmektir.
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 - Global Entegrasyon */}
          <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-light rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-navy-dark">public</span>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-light transition-colors">Global Entegrasyon</h4>
            <p className="text-gray-300 leading-relaxed">
              Dünyanın önde gelen blockchain vakıfları, DAO'lar ve Web3 şirketleri ile partnerlikler kurarak öğrencilerimize <strong className="text-white">global kariyer fırsatları</strong> sunmak.
            </p>
          </div>

          {/* Card 2 - Sürdürülebilir İnovasyon */}
          <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-purple/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-purple/20">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-purple to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-white">lightbulb</span>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-purple transition-colors">Sürdürülebilir İnovasyon</h4>
            <p className="text-gray-300 leading-relaxed">
              Sadece trendleri takip eden değil, <strong className="text-white">trendleri belirleyen</strong> araştırma ve geliştirme projeleri üretmek ve ekosisteme değer katmak.
            </p>
          </div>

          {/* Card 3 - Kapsayıcı Topluluk */}
          <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent-light/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-accent-light/20">
            <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-navy-dark">diversity_3</span>
            </div>
            <h4 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-light transition-colors">Kapsayıcı Topluluk</h4>
            <p className="text-gray-300 leading-relaxed">
              Teknik ve teknik olmayan tüm disiplinlerden öğrencileri ekosisteme dahil ederek <strong className="text-white">multidisipliner çalışma kültürü</strong> oluşturmak.
            </p>
          </div>
        </div>

        {/* Bottom Quote/CTA */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-2xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-accent-light via-primary to-accent-purple bg-clip-text">
              "Türkiye'den Dünyaya Blockchain İnovasyonu"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection;
