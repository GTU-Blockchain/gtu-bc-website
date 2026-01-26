import Counter from './Counter';

function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0f1c3f] via-[#0b1221] to-[#020617] relative overflow-hidden" id="about">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block">
            <span className="text-blue-300 font-semibold text-xs mb-3 uppercase tracking-wider inline-block px-3 py-1.5 bg-blue-500/10 rounded-full">
              Hakkımızda
            </span>
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Akademi ile <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">Web3 Dünyası</span> Arasındaki Köprü
          </h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-4">
            GTU Blockchain, Gebze Teknik Üniversitesi'nde öğrenci liderliğinde kurulan bir blockchain topluluğu. 2023'den beri blockchain teknolojisinde inovasyon ve teknik uzmanlık geliştirmeyi hedefliyoruz.
          </p>
          <p className="text-base text-gray-400 leading-relaxed">
            Üyelerimize uygulamalı geliştirme fırsatları, sektör lideri eğitimler ve konferanslar sunuyoruz. Akademi ile gerçek dünya blockchain uygulamaları arasındaki boşluğu kapatarak, öğrencileri Web3'ün gelecek liderleri olacak şekilde yetiştiriyoruz.
          </p>
        </div>

        {/* Unified 3-column Grid Layout - All cards equal width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - Aktif Üye Stat */}
          <div className="flex flex-col justify-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] hover:bg-white/10 transition-colors">
            <Counter
              end={250}
              suffix="+"
              className="text-4xl font-extrabold bg-gradient-to-br from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-1"
            />
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Aktif Üye</div>
          </div>

          {/* Card 2 - Geliştirme */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">code_blocks</span>
              </div>
              <h4 className="text-lg font-bold text-white">Geliştirme</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Gerçek dünya problemlerine çözüm üreten dApp'ler.</p>
          </div>

          {/* Card 3 - Eğitim & Bootcamp */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">school</span>
              </div>
              <h4 className="text-lg font-bold text-white">Eğitim & Bootcamp</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Solidity, Rust ve Web3 üzerine sektör lideri eğitimler.</p>
          </div>

          {/* Card 4 - Etkinlik Stat */}
          <div className="flex flex-col justify-center text-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] hover:bg-white/10 transition-colors">
            <Counter
              end={30}
              suffix="+"
              className="text-4xl font-extrabold bg-gradient-to-br from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-1"
            />
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Etkinlik</div>
          </div>

          {/* Card 5 - Global Network */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-lg flex items-center justify-center text-blue-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">hub</span>
              </div>
              <h4 className="text-lg font-bold text-white">Global Network</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Sektör liderleri ve global Web3 toplulukları ile güçlü bağlar.</p>
          </div>

          {/* Card 6 - İnovasyon */}
          <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-h-[160px] flex flex-col hover:bg-white/10 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-11 h-11 bg-gradient-to-br from-indigo-500/20 to-indigo-500/10 rounded-lg flex items-center justify-center text-indigo-300 flex-shrink-0">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </div>
              <h4 className="text-lg font-bold text-white">İnovasyon</h4>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">Start-up fikirlerini hayata geçirmek için mentorluk.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
